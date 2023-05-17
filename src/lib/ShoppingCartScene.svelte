<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import { ContactShadows, Float, GLTF, Grid, OrbitControls, interactivity } from '@threlte/extras';
	import { Vector3 } from 'three';
	import { Box3 } from 'three';

	export let enablePan = false;
	export let enableZoom = false;

	let spin = 0;
	useFrame((_, delta) => {
		spin += delta;
	});

	interactivity();
</script>

<T.PerspectiveCamera makeDefault position={[-200, 300, -200]} fov={25} zoom={1}>
	<OrbitControls
		bind:enableZoom
		bind:enablePan
		enableDamping
		maxPolarAngle={Math.PI * 0.45}
		minPolarAngle={Math.PI * 0.45}
		target.y={50}
	/>
</T.PerspectiveCamera>

<T.AmbientLight />
<ContactShadows scale={200} blur={2} far={1000} opacity={0.4} />

<Grid
	cellColor="#ffffff"
	sectionColor="#bbbbbb"
	sectionThickness={1}
	gridSize={1500}
	fadeDistance={1000}
	cellSize={50}
/>

<!-- <T.AxesHelper args={[50]} /> -->

<Float floatIntensity={1} floatingRange={[5, 15]}>
	<GLTF
		url="/gltf/dressing_matrimonial/scene.gltf"
		on:create={({ ref }) => {
			const dressing = ref.getObjectByName('SketchUp');
			if (!dressing) return;
			const boundingBox = new Box3().setFromObject(dressing);
			// console.log(boundingBox);
			const center = boundingBox.getCenter(new Vector3());
			dressing.position.x = 0 - center.x;
			dressing.position.y = 0 - center.y;
			// dressing.position.z += dressing.position.z - center.z;

			// console.info(ref.position, center);
		}}
		receiveShaow={true}
		castShadow={true}
		rotation.y={spin}
	/>
</Float>
