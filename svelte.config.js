import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';
// const postcss = require('./postcss.config.cjs');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		scss: true
	}),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				{ ...threeMinifier(), enforce: 'pre' } // <=== Add plugin here
			]
		}
	}
};

export default config;
