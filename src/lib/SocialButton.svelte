<script lang="ts">
	type Site = 'twitter' | 'tiktok' | 'instagram' | 'facebook';

	export let text: string;
	export let site: Site;
	export let href: string = '';
</script>

<a {href} class="{site} button" rel="external">
	<span class="inline-block items-center mr-2 w-6">
	<slot  name="logo">empty</slot>
	</span>
	{text}
</a>

<style lang="postcss">
	.button {
		@apply fill-white text-white font-bold flex items-center;
	}


	/* .button img {
		@apply inline-block w-6 mr-1;
		filter: invert();
	} */

	.twitter {
		@apply from-blue-400 to-blue-500
		  hover:from-blue-500 hover:to-blue-600
		 active:from-blue-600 active:to-blue-700;
	}

	.tiktok {
		@apply from-cyan-400 to-pink-500
		  hover:from-cyan-500 hover:to-pink-600
		 active:from-cyan-600 active:to-pink-700;
	}

	.instagram {
		@apply from-orange-400 to-fuchsia-500
		  hover:from-orange-500 hover:to-fuchsia-600
		 active:from-orange-600 active:to-fuchsia-700;
	}
</style>
