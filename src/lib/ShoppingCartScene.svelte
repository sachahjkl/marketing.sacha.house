<script lang="ts">
	// import {} as THREE from 'three';
	// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	// import {  } from "threlte";
	import { T, useFrame } from '@threlte/core';
	import { ContactShadows, Float, GLTF, Grid, OrbitControls, interactivity } from '@threlte/extras';
	import { Vector3 } from 'three';
	import { Box3 } from 'three';

	let spin = 0;
	useFrame((_, delta) => {
		spin += delta;
	});

	interactivity();
</script>

<!-- lookAt.x={boundingBox?.getCenter(new Vector3()).x}
lookAt.y={boundingBox?.getCenter(new Vector3()).y}
lookAt.z={boundingBox?.getCenter(new Vector3()).z} -->
<T.PerspectiveCamera makeDefault position={[-700, 300, 10]} fov={14}>
	<OrbitControls
		enableZoom={false}
		enablePan={false}
		enableDamping
		maxPolarAngle={Math.PI * 0.45}
		minPolarAngle={Math.PI * 0.45}
		target.y={50}
	/>
</T.PerspectiveCamera>

<T.DirectionalLight intensity={0.8} position.x={50} position.y={100} />
<T.AmbientLight intensity={0.1} />

<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#bbbbbb"
	sectionThickness={1}
	gridSize={1000}
	fadeDistance={1000}
	cellSize={40}
/>

<ContactShadows scale={200} blur={5} far={1000} opacity={0.3} />
<!-- <T.AxesHelper args={[50]} /> -->

<Float floatIntensity={1} floatingRange={[5, 15]}>
	<GLTF
		url="/gltf/dressing_matrimonial/scene.gltf"
		on:create={({ ref }) => {
			const dressing = ref.getObjectByName('SketchUp');
			if (!dressing) return;
			const boundingBox = new Box3().setFromObject(dressing);
			console.log(boundingBox);
			const center = boundingBox.getCenter(new Vector3());
			dressing.position.x += dressing.position.x - center.x;
			dressing.position.y += dressing.position.y - center.y;
			// dressing.position.z += dressing.position.z - center.z;

			console.info(ref.position, center);
		}}
		receiveShaow={true}
		castShadow={true}
		rotation.y={spin}
	/>
</Float>
<!-- <Float floatIntensity={1} floatingRange={[0, 1]}> -->
<!-- </Float> -->
<!-- <T.Fog color={'white'} near={2} far={3} />
<T.PerspectiveCamera makeDefault position={[-10, 10, 10]} fov={15}>
	<OrbitControls
		enableDamping
		autoRotate
		enablePan={false}
		enableZoom={false}
		maxPolarAngle={Math.PI * 0.51}
		minPolarAngle={Math.PI * 0.51}
	/>
</T.PerspectiveCamera>

<T.DirectionalLight intensity={0.8} position.x={5} position.y={10} />
<T.AmbientLight intensity={0.2} />
<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionThickness={0}
	fadeDistance={25}
	cellSize={2}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} /> -->

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
