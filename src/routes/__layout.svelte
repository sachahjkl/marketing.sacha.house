<script context="module" lang="ts">
	import { defaultLocale, loadTranslations, locale } from '$lib/translations';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url, session }) => {
		const { pathname } = url;
		const l = session.locale || defaultLocale; // get from cookie / user session etc...
		await loadTranslations(l, pathname);
		return {};
	};
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte';
	import { menuItems } from '$lib/constants';
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		document.documentElement.setAttribute('lang', $locale);

		locale.subscribe((locale) => {
			document.documentElement.setAttribute('lang', locale);
		});
	});
</script>

<Header {menuItems} />

<main>
	<slot />
</main>

<footer>
	<small>&copy; Copyright {new Date().getFullYear()}, marketing.hjkl.it</small>
</footer>

<style lang="postcss">
	main {
		@apply container mx-auto mb-3 rounded-xl shadow-sm border p-4 bg-white;
	}

	footer {
		@apply container text-center mx-auto bg-white shadow-sm rounded-t-xl p-1 border py-3;
	}
</style>
