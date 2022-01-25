<script context="module" lang="ts">
	import { defaultLocale, loadTranslations, locale, t } from '$lib/translations';
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
	import Dropdown from '$lib/Dropdown.svelte';
	import LanguageToggle from '$lib/LanguageToggle.svelte';
	import { onClickOutside } from '$lib/utils';

	let dropdownOpen = false;

	onMount(() => {
		document.documentElement.setAttribute('lang', $locale);

		locale.subscribe((locale) => {
			document.documentElement.setAttribute('lang', locale);
		});
	});

	let toggler: HTMLButtonElement;
	let content: HTMLElement;

	const listener = (e: Event) => onClickOutside(e, toggler, content, () => (dropdownOpen = false));

	onMount(() => {
		document.addEventListener('click', listener);
	});
</script>

<Header>
	<Dropdown open={dropdownOpen} slot="menu-mobile">
		<button
			class="button"
			slot="toggler"
			type="menu"
			bind:this={toggler}
			on:click={() => (dropdownOpen = !dropdownOpen)}
		>
			{#if dropdownOpen}
				<span title={$t('menu.close-burger')}>
					<span>❌</span>
					{$t('menu.close-burger')}
				</span>
			{:else}
				<span title={$t('menu.open-burger')}>
					<span>🍔</span>
					{$t('menu.open-burger')}
				</span>
			{/if}
		</button>
		<ul class="rounded-xl p-3 mt-1 bg-white border shadow-sm" slot="content" bind:this={content}>
			{#each menuItems as item}
				<li class="dropdown-li"><a href={item.url}>{$t(`menu.${item.name}`)}</a></li>
			{/each}
		</ul>
	</Dropdown>

	<ul class="flex" slot="menu-desktop" >
		{#each menuItems as item}
			<li><a class="button" href={item.url}>{$t(`menu.${item.name}`)}</a></li>
		{/each}
	</ul>

	<LanguageToggle slot="addon" />
</Header>

<main>
	<slot />
</main>

<footer>
	<span>🎉 &copy; Copyright {new Date().getFullYear()}, marketing.hjkl.it 🎉</span>
</footer>

<style lang="postcss">
	main {
		@apply container mx-auto mb-3 rounded-xl shadow-sm border p-4 bg-white;
	}

	footer {
		@apply container text-center mx-auto bg-white shadow-sm rounded-t-xl p-1 border py-3;
	}

	.dropdown-li {
		@apply px-3 py-1 bg-slate-100 rounded hover:bg-slate-200 active:bg-slate-300 mb-2 w-full;
	}

	.button {
		@apply from-pink-200 to-pink-300 rounded-lg
		 hover:shadow-lg hover:from-pink-300 hover:to-pink-400
		 active:shadow-lg active:from-pink-400 active:to-pink-500
		 text-slate-900 font-bold;
	}
</style>
