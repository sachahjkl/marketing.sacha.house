[English](README.md) | [Français](README.fr.md)

# create-svelte

Tout ce dont vous avez besoin pour créer un projet Svelte, avec [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Création d'un projet

Si vous lisez ceci, vous avez probablement déjà effectué cette étape. Félicitations !

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Développement

Après avoir créé un projet et installé les dépendances avec `npm install` (ou `pnpm install` ou `yarn`), démarrez un serveur de développement :

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Compilation

Pour créer une version de production de votre application :

```bash
npm run build
```

Vous pouvez prévisualiser la compilation de production avec `npm run preview`.

> Pour déployer votre application, vous devez parfois installer un [adaptateur](https://kit.svelte.dev/docs/adapters) pour l'environnement cible.
