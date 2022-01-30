<script lang="ts">
	import countapi from 'countapi-js';
	import ParticipateButton, { DURATION } from '$lib/ParticipateButton.svelte';
	import SocialBox from '$lib/SocialBox.svelte';
	import SocialButton from '$lib/SocialButton.svelte';
	import { t } from '$lib/translations';

	import Twitter from '$lib/icons/socials/twitter.svg';
	import TikTok from '$lib/icons/socials/tiktok.svg';
	import Instagram from '$lib/icons/socials/instagram.svg';
	import {
countdownDate,
		instagramAccountURL,
		sondageURL,
		tiktokAccountURL,
		tiktokURL,
		twitterAccountURL
	} from '$lib/constants';
	import InstagramPreview from '$lib/InstagramPreview.svelte';
	import TikTokPreview from '$lib/TikTokPreview.svelte';
	import TwitterPreview from '$lib/TwitterPreview.svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import DateCountdown from '$lib/DateCountdown.svelte';

	let sondageAnchor: HTMLAnchorElement;

	let participantsPromise = countapi.get('marketing.hjkl.it', 'participants');

	const values = tweened(0, {
		duration: 1800,
		easing: cubicOut
	});
	participantsPromise.then(({ value }) => setTimeout(() => ($values = value), 100));

	let title: string;
	$: title = $t('index.title');

	async function clickCallback() {
		try {
			const { value } = await countapi.hit('marketing.hjkl.it', 'participants');
			$values = value;
			setTimeout(() => sondageAnchor.click(), DURATION - 300);
		} catch (error) {
			console.error(error);
		}
		// });
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
		<div class="flex flex-wrap justify-center my-2 mt-4">
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
	<!-- <div class="shopping">
		<ShoppingCart />
	</div> -->
</section>

<hr class="my-8" />

<section class="prose">
	<h2>🕰️ {$t("index.time-limited-offer-title")}</h2>

	<div class="my-4 mx-auto w-fit">
		<DateCountdown to={countdownDate} />
	</div>

	<p>
		{@html $t("index.time-limited-offer-p1")}
	</p>
</section>

<hr class="my-8" />

<div class="cta my-12">
	<ParticipateButton {clickCallback}>
		{#await participantsPromise}
			<span class="animate-pulse">⌛</span> {$t('index.participants-loading')}
		{:then { }}
			📊 {$t('index.participants-btn', { participants: Math.ceil($values) })}
		{:catch _error}
			💣 {$t('index.participants-error')}
		{/await}
	</ParticipateButton>
	<a target="_blank" class="hidden" rel="external" href={sondageURL} bind:this={sondageAnchor}>
		out
	</a>
</div>

<hr class="my-8" />

<section class="prose">
	<h2>Ceci est un titre</h2>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at minima quia rem placeat non
		velit fuga quo neque quaerat rerum cupiditate incidunt nostrum quibusdam quis, alias libero!
		Tenetur, adipisci.
	</p>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at minima quia rem placeat non
		velit fuga quo neque quaerat rerum cupiditate incidunt nostrum quibusdam quis, alias libero!
		Tenetur, adipisci.
	</p>
</section>

<hr class="my-8" />

<div class="socials">
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
		@apply mb-3 mt-3 mx-2 flex flex-row flex-wrap justify-center items-center;
	}

	.hero hgroup {
		@apply max-w-prose pt-8 my-8 text-center;
	}

	/* .shopping {
		flex: 1 1 650px;
		@apply m-4;
	} */

	.hero h1 {
		@apply font-bold text-4xl mb-3 drop-shadow-sm text-pink-400;
	}

	.hero h2 {
		@apply text-base mt-4;
	}

	.cta {
		@apply flex flex-wrap justify-center;
	}

	.prose {
		@apply max-w-prose mx-auto;
	}

	.prose h2 {
		@apply font-bold text-2xl mb-1 drop-shadow-sm text-pink-400;
	}
	.prose p {
		@apply mb-1;
	}
</style>
