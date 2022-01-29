<script lang="ts">
	import ShoppingCart from '$lib/ShoppingCart.svelte';
	import { t } from '$lib/translations';

	let title: string;
	$: title = $t('about.title');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="content">
	<h1 class="font-bold text-3xl underline">a propos</h1>

	<ShoppingCart />
</section>

<style lang="postcss">
	.content {
		@apply max-w-4xl mx-auto;
	}
</style>
