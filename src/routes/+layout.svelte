<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Header from '$lib/Header.svelte';
	import { menuItems } from '$lib/constants';
	import '../app.css';
	import { onMount } from 'svelte';
	import Dropdown from '$lib/Dropdown.svelte';
	import LanguageToggle from '$lib/LanguageToggle.svelte';
	import { onClickOutside } from '$lib/utils';

	let dropdownOpen = false;

	let toggler: HTMLButtonElement;
	let content: HTMLElement;

	const listener = (e: Event) => onClickOutside(e, toggler, content, () => (dropdownOpen = false));

	onMount(() => {
		document.addEventListener('click', listener);
	});
</script>

<div id="container">
	<Header>
		<Dropdown open={dropdownOpen} slot="menu-mobile">
			<button
				class="button"
				slot="toggler"
				bind:this={toggler}
				on:click={() => (dropdownOpen = !dropdownOpen)}
			>
				{#if dropdownOpen}
					<span title={$_('menu.close-burger')}>
						<span>❌</span>
						{$_('menu.close-burger')}
					</span>
				{:else}
					<span title={$_('menu.open-burger')}>
						<span>🍔</span>
						{$_('menu.open-burger')}
					</span>
				{/if}
			</button>
			<ul class="rounded-xl p-3 mt-1 bg-white border shadow-sm" slot="content" bind:this={content}>
				{#each menuItems as item}
					<li class="dropdown-li"><a href={item.url}>{$_(`menu.${item.name}`)}</a></li>
				{/each}
			</ul>
		</Dropdown>

		<ul class="flex" slot="menu-desktop">
			{#each menuItems as item}
				<li data-sveltekit-preload-data="hover">
					<a class="button" href={item.url}>{$_(`menu.${item.name}`)}</a>
				</li>
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
</div>

<style lang="postcss">
	#container {
		@apply container mx-auto max-w-5xl px-2 min-h-screen;
	}

	#container > * {
		width: 100%;
	}

	main {
		@apply mx-auto mb-3 rounded-xl shadow-sm border p-4 bg-white flex-grow;
	}

	footer {
		@apply text-center mx-auto bg-white shadow-sm rounded-t-xl p-1 border py-3 mt-auto;
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
