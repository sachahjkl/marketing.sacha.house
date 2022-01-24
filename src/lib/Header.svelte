<script context="module">
	export const prerender = false;
</script>

<script lang="ts">
	import { locale, t } from '$lib/translations';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import LanguageToggle from './LanguageToggle.svelte';
	import { onClickOutside } from './utils';
	fade;
	export let menuItems = [];

	// export let socialItems = [];

	let menuOpen = false;

	let mobileItems: HTMLElement;
	let toggler: HTMLButtonElement;

	const listener = (e: Event) => onClickOutside(e, toggler, mobileItems, () => (menuOpen = false));

	onMount(() => {
		document.addEventListener('click', listener);
	});
</script>

<header>
	<nav>
		<div id="mobile-menu">
			<button class="button font-bold" bind:this={toggler} type="menu" on:click={() => (menuOpen = !menuOpen)} id="toggler">
				{#if menuOpen}
					<span title={$t('menu.close-burger')}>
						<i>❌</i>
						{$t('menu.close-burger')}
					</span>
				{:else}
					<span title={$t('menu.open-burger')}>
						<i>🍔</i>
						{$t('menu.open-burger')}
					</span>
				{/if}
			</button>

			{#if menuOpen}
				<section bind:this={mobileItems} transition:fly={{ y: -15 }} id="mobile-items">
					<ul>
						{#each menuItems as item}
							<li><a href={item.url}>{$t(`menu.${item.name}`)}</a></li>
						{/each}
					</ul>
				</section>
			{/if}
		</div>
		<ul id="menu">
			{#each menuItems as item}
				<li><a class="button font-bold" href={item.url}>{$t(`menu.${item.name}`)}</a></li>
			{/each}
		</ul>

		<!-- <ul id="socials">
			{#each socialItems as item}
				<li>
					<a href={item.url}><img src={item.image} title={item.name} alt={item.name} /></a>
				</li>

			{/each}
		</ul> -->
	</nav>

	<LanguageToggle />
</header>

<style lang="postcss">
	header {
		@apply z-10 fixed top-0 left-1/2 -translate-x-1/2 bg-white shadow-sm
		 rounded-b-xl p-1 border container mx-auto justify-between flex items-center;
		/* transform: translateX(-50%); */
	}

	:global(header + *) {
		@apply mt-16;
	}
	nav {
		@apply flex flex-row;
	}

	#mobile-menu {
		@apply hidden relative;
	}

	#mobile-items {
		@apply absolute top-full left-0 rounded-xl p-3 bg-white border shadow-sm;
	}

	#mobile-items a {
		@apply px-3 py-1 bg-slate-100 rounded hover:bg-slate-200 active:bg-slate-300 mb-2 w-full;
	}

	#menu {
		@apply flex;
	}

	@media screen and (max-width: 768px) {
		#mobile-menu {
			@apply block;
		}
		#menu {
			@apply hidden;
		}
	}

	#toggler i {
		@apply not-italic;
	}

	#toggler {
		@apply from-purple-300 to-purple-400 rounded-lg
		 hover:shadow-lg hover:from-purple-400 hover:to-purple-500
		 active:shadow-lg active:from-purple-500 active:to-purple-600
		 text-slate-900;
	}

	li {
		@apply flex;
	}

	li > a {
		@apply flex place-items-center;
	}

	#menu a {
		@apply from-pink-200 to-pink-300 rounded-lg
		 hover:shadow-lg hover:from-pink-300 hover:to-pink-400
		 active:shadow-lg active:from-pink-400 active:to-pink-500
		 text-slate-900;
	}
</style>
