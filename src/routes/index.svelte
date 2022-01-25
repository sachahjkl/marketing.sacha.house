<script lang="ts">
	import ParticipateButton from '$lib/ParticipateButton.svelte';
	import ShoppingCart from '$lib/ShoppingCart.svelte';
	import SocialBox from '$lib/SocialBox.svelte';
	import SocialButton from '$lib/SocialButton.svelte';
	import { typewriter } from '$lib/transitions';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	import Twitter from '$lib/icons/socials/twitter.svg';
	import TikTok from '$lib/icons/socials/tiktok.svg';
	import Instagram from '$lib/icons/socials/instagram.svg';
	import {
		instagramAccountURL,
		tiktokAccountURL,
		tiktokURL,
		twitterAccountURL
	} from '$lib/constants';
	import About from './about.svelte';
	import InstagramPreview from '$lib/InstagramPreview.svelte';
	import TikTokPreview from '$lib/TikTokPreview.svelte';
	import TwitterPreview from '$lib/TwitterPreview.svelte';

	const participants = getParticipants();

	let title: string;
	$: title = $t('index.title');

	function getParticipants() {
		return 10;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="hero">
	<hgroup>
		<h1>
			👗 {$t('index.hero')}
		</h1>

		<h2>{$t('index.sub')}</h2>
		<div class="flex flex-wrap justify-start my-2 mt-4">
			<SocialButton text={'Twitter'} site={'twitter'} href={twitterAccountURL}>
				<Twitter slot="logo" />
			</SocialButton>
			<SocialButton text={'TikTok'} site={'tiktok'} href={tiktokAccountURL}>
				<TikTok slot="logo" />
			</SocialButton>
			<SocialButton text={'Instagram'} site={'instagram'} href={instagramAccountURL}>
				<Instagram slot="logo" />
			</SocialButton>
		</div>
	</hgroup>
	<div class="shopping">
		<ShoppingCart />
	</div>
</section>

<hr class="my-4" />

<div class="cta">
	<ParticipateButton />
</div>

<hr class="my-4" />

<div>
	<SocialBox first={'right'}>
		<div slot="left">
			<TwitterPreview user="dojaCat" />
		</div>

		<div class="flex fill-blue-500 text-blue-500 items-center" slot="right">
			<span class=" mr-4 h-auto" style="width: 120px">
				<Twitter />
			</span>

			<hgroup>
				<h1 class="text-4xl font-bold decoration-slice">{$t('index.twitter-hero')}</h1>
				<h2 class="text-xl">
					{$t('index.twitter-sub')}
				</h2>
			</hgroup>
		</div>
	</SocialBox>
</div>

<div>
	<SocialBox first={'left'}>
		<div class="flex fill-pink-500 text-pink-500 items-center" slot="left">
			<span class=" mr-4 h-auto" style="width: 120px">
				<TikTok />
			</span>

			<hgroup>
				<h1 class="text-4xl font-bold decoration-slice">{$t('index.tiktok-hero')}</h1>
				<h2 class="text-xl">{$t('index.tiktok-sub')}</h2>
			</hgroup>
		</div>
		<div slot="right">
			<TikTokPreview src={tiktokURL} />
		</div>
	</SocialBox>
</div>

<div>
	<SocialBox first={'right'}>
		<span class="border shadow-sm rounded-lg overflow-hidden" slot="left">
			<InstagramPreview />
		</span>
		<div class="flex fill-fuchsia-500 text-fuchsia-500 items-center" slot="right">
			<span class=" mr-4 h-auto" style="width: 120px">
				<Instagram />
			</span>

			<hgroup>
				<h1 class="text-4xl font-bold decoration-slice">{$t('index.instagram-hero')}</h1>
				<h2 class="text-xl">{$t('index.instagram-sub')}</h2>
			</hgroup>
		</div>
	</SocialBox>
</div>

<!-- <section id="newsletter">
	<p>📫 Rejoindre la newsletter ! déjà {participants} participant{participants > 1 ? 's' : ''} !</p>
</section> -->
<style lang="postcss">
	.hero {
		@apply mb-3 mt-3 mx-2 flex flex-row flex-wrap justify-between items-center;
	}

	.hero hgroup {
		flex: 1 1 50%;
		@apply m-4;
	}

	.shopping {
		flex: 1 1 650px;
		@apply m-4;
	}

	.hero h1 {
		@apply font-bold text-4xl mb-3 drop-shadow-sm text-pink-400;
	}

	.hero h2 {
		@apply text-base;
	}

	.cta {
		@apply flex flex-wrap justify-center mb-4;
	}
</style>
