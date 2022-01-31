<script lang="ts">
	type Site = 'twitter' | 'tiktok' | 'instagram' | 'facebook';

	export let text: string;
	export let site: Site;
	export let href: string = '';
</script>

<a {href} class="{site} button" rel="noreferrer" target="_blank">
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
		@apply from-blue-300 to-blue-400
		  hover:from-blue-400 hover:to-blue-500
		 active:from-blue-500 active:to-blue-600;
	}

	.tiktok {
		@apply from-cyan-300 to-pink-400
		  hover:from-cyan-400 hover:to-pink-500
		 active:from-cyan-500 active:to-pink-600;
	}

	.instagram {
		@apply from-orange-300 to-fuchsia-400
		  hover:from-orange-400 hover:to-fuchsia-500
		 active:from-orange-500 active:to-fuchsia-600;
	}
</style>
