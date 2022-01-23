<script context="module" lang="ts">
	import { locale, loadTranslations } from '$lib/translations';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url }) => {
		const { pathname } = url;
		const defaultLocale = 'fr'; // get from cookie / user session etc...
		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		return {};
	};
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';

	import '../app.css';

	import { menuItems } from '$lib/constants';
</script>

<Header {menuItems} />

<main>
	<slot />
</main>

<footer>
	<p>Nos réseaux sociaux !</p>
</footer>

<style lang="postcss">
	main {
		@apply container mx-auto mb-3 rounded-xl shadow-sm border p-4 bg-white;
	}

	footer {
		@apply container text-center mx-auto bg-white shadow-sm rounded-t-xl p-1 border;
	}
</style>
