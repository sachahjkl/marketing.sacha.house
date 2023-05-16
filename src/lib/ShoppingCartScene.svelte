<script lang="ts">
	// import {} as THREE from 'three';
	// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	// import {  } from "threlte";
	import { T, useFrame } from '@threlte/core';
	import { GLTF, OrbitControls, interactivity } from '@threlte/extras';
	import { Vector3 } from 'three';
	import { Box3 } from 'three';

	// const loader = new GLTFLoader();

	// let c64: THREE.Group;

	interactivity();

	// SC.onFrame(() => {
	// 	spin += 0.01;
	// });

	// onMount(() => {
	// 	loader.load('/gltf/dressing_matrimonial/scene.gltf', (loaded) => {
	// 		c64 = loaded.scene;

	// 		const model = c64.getObjectByName('SketchUp');
	// 		if (!model) return;
	// 		model.castShadow = true;
	// 		model.receiveShadow = true;

	// 		const box = new Box3().setFromObject(loaded.scene);
	// 		const center = box.getCenter(new Vector3());

	// 		loaded.scene.position.x += loaded.scene.position.x - center.x;
	// 		loaded.scene.position.y += loaded.scene.position.y - center.y;
	// 		loaded.scene.position.z += loaded.scene.position.z - center.z;
	// 		// console.info(model.position);
	// 	});
	// 	pixelRatio = window.devicePixelRatio;
	// });
	let dress;
</script>

<div class="z-40 absolute">test</div>

<GLTF
	url="/gltf/dressing_matrimonial/scene.gltf"
	let:ref={dressing}
	receiveShaow={true}
	castShadow={true}
	scale{[-1,-1,-1]}
	position={[-100, 0, 0]}
/>
<T.PerspectiveCamera makeDefault position={[5, 2, 5]}>
	<T.Fog color={'white'} near={2} far={3} />
	<T.Group position={[0, -1 / 2, 0]}>
		<T.Mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow={true}>
			<T.PlaneGeometry args={[150, 150]} />
			<T.MeshBasicMaterial color="white" />
		</T.Mesh>
		<!-- <SC.Primitive object={new GridHelper(150, 150, 0x000000, 0x555555)} position={[0, -5, 0]} /> -->
		<T.GridHelper position={[0, -5, 0]} args={[150, 150, 0x000000, 0x555555]} />
	</T.Group>
	<OrbitControls
		enableDamping
		autoRotate
		enablePan={false}
		enableZoom={false}
		maxPolarAngle={Math.PI * 0.51}
		minPolarAngle={Math.PI * 0.51}
	/>
	<T.AmbientLight intensity={0.6} color="white" />
	<T.DirectionalLight intensity={0.6} position={[15, 8, 17]} color="white">
		<!-- <T.DirectionalLightShadow mapSize={[2048, 2048]} /> -->
	</T.DirectionalLight>
</T.PerspectiveCamera>

<!-- <SC.AmbientLight intensity={0.6} color={'white'} />
	<SC.DirectionalLight
		intensity={0.6}
		position={[15, 8, 17]}
		shadow={{ mapSize: [2048, 2048] }}
		color={'white'}
	/> -->

<!-- <Canvas
	antialias={true}
	background={new Color('white')}
	{pixelRatio}
	fog={new Fog('white', 20, 30)}
	shadows
	>
	<SC.PerspectiveCamera target={[0, 0, 0]} position={[0, 0, 20]} />
	{#if c64}
	<SC.Primitive object={c64} scale={0.1} rotation={[0, spin, 0]} position={[0, 0, 0]} />
	{/if}
	
	<SC.Group position={[0, -1 / 2, 0]}>
		<SC.Mesh
				geometry={new PlaneGeometry(150, 150)}
				material={new MeshBasicMaterial({ color: 'white' })}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -5, 0]}
				receiveShadow={true}
				/>
				
				<SC.Primitive object={new GridHelper(150, 150, 0x000000, 0x555555)} position={[0, -5, 0]} />
			</SC.Group>
			
		<SC.OrbitControls
			target={[0, 0, 0]}
			enableZoom={false}
			enablePan={false}
			enableDamping
			maxPolarAngle={Math.PI * 0.51}
			minPolarAngle={Math.PI * 0.51}
		/>
	</Canvas> -->

<style lang="postcss">
	div {
	}
</style>
