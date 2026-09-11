{
  description = "marketing.sacha.house SvelteKit website";

  nixConfig = {
    extra-substituters = ["https://nix-community.cachix.org"];
    extra-trusted-public-keys = [
      "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
    ];
  };

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.2605";
    flake-utils.url = "github:numtide/flake-utils";
    git-hooks = {
      url = "https://flakehub.com/f/cachix/git-hooks.nix/0.1";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = {
    nixpkgs,
    flake-utils,
    git-hooks,
    ...
  }:
    flake-utils.lib.eachSystem ["x86_64-linux" "aarch64-linux"] (
      system: let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfreePredicate = package: nixpkgs.lib.getName package == "nomad";
        };
        inherit (pkgs) lib;
        packageJson = builtins.fromJSON (builtins.readFile ./package.json);
        pname = "marketing-sacha-house";
        inherit (packageJson) version;
        nodejs = pkgs.nodejs_22;
        nodeRuntime = pkgs.nodejs-slim_22;
        pnpm = pkgs.pnpm.override {nodejs-slim = nodejs;};
        src = lib.cleanSource ./.;
        pnpmDeps = pkgs.fetchPnpmDeps {
          inherit
            pname
            version
            src
            pnpm
            ;
          fetcherVersion = 4;
          hash = "sha256-+Xg+GYY0nWVAB3AuGI0XrON5H3Z/LZGK5pKZKRA+E/Q=";
        };
        site = pkgs.stdenvNoCC.mkDerivation {
          inherit
            pname
            version
            src
            pnpmDeps
            ;
          nativeBuildInputs = [
            nodejs
            pkgs.pnpmConfigHook
            pnpm
          ];
          pnpmInstallFlags = ["--frozen-lockfile"];
          buildPhase = ''
            runHook preBuild
            pnpm run build
            runHook postBuild
          '';
          installPhase = ''
            runHook preInstall
            cp -r build "$out"
            runHook postInstall
          '';
        };
        server = pkgs.writeShellApplication {
          name = pname;
          runtimeInputs = [nodeRuntime];
          text = ''
            export HOST=0.0.0.0
            export PORT=3000
            exec node ${site}/index.js
          '';
        };
        dockerImage = pkgs.dockerTools.buildLayeredImage {
          name = "marketing.sacha.house";
          tag = version;
          contents = [server];
          config = {
            Cmd = ["${server}/bin/${pname}"];
            ExposedPorts."3000/tcp" = {};
            Env = ["NODE_ENV=production"];
            User = "65532:65532";
          };
        };
        preCommitCheck = git-hooks.lib.${system}.run {
          package = pkgs.prek;
          src = ./.;
          hooks = {
            actionlint.enable = true;
            check-added-large-files.enable = true;
            check-json = {
              enable = true;
              excludes = ["^tsconfig.*\\.json$"];
            };
            check-merge-conflicts.enable = true;
            end-of-file-fixer.enable = true;
            alejandra.enable = true;
            trim-trailing-whitespace.enable = true;
          };
        };
        nomadJobs = pkgs.runCommand "${pname}-nomad-jobs" {nativeBuildInputs = [pkgs.nomad];} ''
          image="ghcr.io/sachahjkl/marketing.sacha.house@sha256:0000000000000000000000000000000000000000000000000000000000000000"
          nomad job validate -var "image=$image" ${./deploy/nomad/staging.nomad.hcl}
          nomad job validate -var "image=$image" ${./deploy/nomad/production.nomad.hcl}
          touch "$out"
        '';
      in {
        packages = {
          default = site;
          inherit dockerImage;
        };
        checks = {
          build = site;
          inherit dockerImage nomadJobs;
          pre-commit = preCommitCheck;
        };
        formatter = pkgs.alejandra;
        devShells.default = pkgs.mkShell {
          packages =
            [
              nodejs
              pnpm
            ]
            ++ preCommitCheck.enabledPackages;
          inherit (preCommitCheck) shellHook;
        };
      }
    );
}
