<script lang="ts">
	import { fly } from 'svelte/transition';

	export let open = false;

</script>

<div class="dropdown">
	<slot name="toggler"><button>> Dropdown</button></slot>

	{#if open}
		<div class="content"  transition:fly={{ y: -15 }}>
			<slot name="content">
				<p>dropdown</p>
			</slot>
		</div>
	{/if}
</div>

<style lang="postcss">
	.dropdown {
		@apply relative h-fit;
	}

	.content {
		@apply absolute left-0 top-full;
	}
</style>
