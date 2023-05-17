import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';

export default defineConfig({
	plugins: [sveltekit(), svg(), { ...threeMinifier(), enforce: 'pre' }],
	ssr: {
		noExternal: ['three']
	}
});
