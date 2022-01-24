<script lang="ts">
	export let user = 'dojaCat';
</script>

<div class="wrapper" style="height: 500px">
	<a
		class="twitter-timeline"
		data-width="350"
		data-height="500"
		data-dnt="true"
		href={`https://twitter.com/${user}?ref_src=twsrc%5Etfw`}
	>
		<b> Twitter :</b> {user}</a
	>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<style lang="postcss">
	.wrapper {
		@apply border shadow-sm rounded-lg overflow-hidden;
	}
</style>
