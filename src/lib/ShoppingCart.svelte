<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { onMount } from 'svelte';

	SC.onFrame(() => {
		// spin += 0.01;
	});

	let model;

	let pixelRatio = 1;

	const loader = new GLTFLoader();

	let c64: THREE.Group;

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.01;
	});

	onMount(() => {
		loader.load('/gltf/dressing_matrimonial/scene.gltf', (loaded) => {
			c64 = loaded.scene;

			const model = c64.getObjectByName('SketchUp');
			model.castShadow = true;
			model.receiveShadow = true;

			const box = new THREE.Box3().setFromObject(loaded.scene);
			const center = box.getCenter(new THREE.Vector3());

			loaded.scene.position.x += loaded.scene.position.x - center.x;
			loaded.scene.position.y += loaded.scene.position.y - center.y;
			loaded.scene.position.z += loaded.scene.position.z - center.z;
			// console.info(model.position);
		});
		pixelRatio = window.devicePixelRatio;
	});
</script>

<div class="scene">
	<SC.Canvas
		antialias={true}
		background={new THREE.Color('white')}
		{pixelRatio}
		fog={new THREE.Fog('white', 20, 30)}
		shadows
	>
		<SC.PerspectiveCamera target={[0, 0, 0]} position={[0, 0, 20]} />
		{#if c64}
			<SC.Primitive object={c64} scale={0.1} rotation={[0, spin, 0]} position={[0, 0, 0]} />
		{/if}

		<SC.Group position={[0, -1 / 2, 0]}>
			<SC.Mesh
				geometry={new THREE.PlaneGeometry(150, 150)}
				material={new THREE.MeshBasicMaterial({ color: 'white' })}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -5, 0]}
				receiveShadow={true}
			/>

			<SC.Primitive
				object={new THREE.GridHelper(150, 150, 0x000000, 0x555555)}
				position={[0, -5, 0]}
			/>
		</SC.Group>

		<SC.OrbitControls
			target={[0, 0, 0]}
			enableZoom={true}
			enablePan={false}
			maxZoom={5}
			minZoom={5}
			enableDamping
			maxPolarAngle={Math.PI * 0.51}
		/>
		<SC.AmbientLight intensity={0.6} color={'white'} />
		<SC.DirectionalLight
			intensity={0.6}
			position={[15, 8, 17]}
			shadow={{ mapSize: [2048, 2048] }}
			color={'white'}
		/>
	</SC.Canvas>
</div>

<style lang="postcss">
	.scene {
		width: auto;
		/* min-width: 400px; */
		height: 300px;
		@apply mx-auto rounded-xl relative block overflow-hidden;
	}
</style>
