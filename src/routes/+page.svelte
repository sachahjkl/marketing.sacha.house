<script lang="ts">
	import countapi from 'countapi-js';
	import ParticipateButton, { DURATION } from '$lib/ParticipateButton.svelte';
	import SocialBox from '$lib/SocialBox.svelte';
	import SocialButton from '$lib/SocialButton.svelte';
	import { t } from 'svelte-i18n';

	import Twitter from '$lib/icons/socials/twitter.svg?component';
	import TikTok from '$lib/icons/socials/tiktok.svg?component';
	import Instagram from '$lib/icons/socials/instagram.svg?component';
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
	import Newsletter from '$lib/Newsletter.svelte';

	let sondageAnchor: HTMLAnchorElement;

	export let data;

	// let participantsPromise = countapi.get('marketing.hjkl.it', 'participants_v2');
	let participantsPromise = data.streaming.participants;

	const values = tweened(0, {
		duration: 1800,
		easing: cubicOut
	});
	participantsPromise.then(({ value }) => setTimeout(() => ($values = value), 100));

	let title: string;
	$: title = $t('index.title');

	async function clickCallback() {
		try {
			const { value } = await countapi.hit('marketing.hjkl.it', 'participants_v2');
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

<section id="hero" class="hero">
	<hgroup>
		<h1>
			👗 {$t('index.hero-p1')} <br /><em>{$t('index.hero-p2')}</em>
		</h1>

		<h2>{$t('index.sub')}</h2>
	</hgroup>
	<div class="cta mt-8 w-full">
		<ParticipateButton {clickCallback}>
			{#await participantsPromise}
				<span class="animate-pulse">⌛</span> {$t('index.participants-loading')}
			{:then _}
				📊 {$t('index.participants-btn', {
					values: { participants: Math.ceil($values) || 0 }
				})}
			{:catch _error}
				💣 {$t('index.participants-error')}
			{/await}
		</ParticipateButton>
		<a target="_blank" class="hidden" href={sondageURL} bind:this={sondageAnchor}> out </a>
	</div>
	<img
		src="/img/design.png"
		on:click={sondageAnchor.click}
		on:keypress={sondageAnchor.click}
		class="block cursor-pointer m-4 mx-auto max-w-sm"
		alt="Design"
	/>
	<!-- <Logo/> -->
	<!-- <div class="shopping">
		<ShoppingCart />
	</div> -->
</section>

<hr class="my-12" />

<section class="prose">
	<h2>🤑 {$t('index.giftcard-title')}</h2>

	<div class="flex flex-row flex-wrap items-center mt-3">
		<img
			class="max-h-20 mx-4 rounded cursor-pointer border shadow-sm mt-4 animate-bounce"
			on:click={sondageAnchor.click}
			on:keypress={sondageAnchor.click}
			src="/img/amazon-card.png"
			alt="Vêtements vracs"
		/>
		<p class="flex-1">
			{$t('index.giftcard-p1')}
		</p>
	</div>
</section>

<hr class="my-12" />

<section class="prose">
	<h2>🕰️ {$t('index.time-limited-offer-title')}</h2>

	<div class="my-4 mx-auto w-fit">
		<DateCountdown clickCallback={() => sondageAnchor.click()} to={countdownDate} />
	</div>

	<p>
		{@html $t('index.time-limited-offer-p1')}
	</p>
</section>

<hr class="my-12" />

<section class="prose">
	<h2>📢 {$t('index.join-socials')} ...</h2>
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

	<img src="/img/petal.png" class=" w-10 rotate-12 mx-auto mt-4 translate-x-4" alt="petal" />
	<img src="/img/petal.png" class=" w-10 -rotate-45 mx-auto mt-3 -translate-x-6" alt="petal" />
	<img src="/img/petal.png" class=" w-10 rotate-45 mx-auto mt-6 translate-x-1" alt="petal" />

	<div class="mt-6">
		<Newsletter />
	</div>
	<p class="text-center mt-4 font-bold">{$t('index.join-newsletter')} 💌</p>
</section>

<hr class="my-12" />

<div class="socials">
	<SocialBox first={'right'}>
		<div slot="left">
			<TwitterPreview user="marketinghjkl" />
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
	<SocialBox first={'left'}>
		<span class="border shadow-sm rounded-lg overflow-hidden" slot="right">
			<InstagramPreview />
		</span>
		<div class="flex fill-fuchsia-500 text-fuchsia-500 items-center" slot="left">
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
		@apply my-3 mx-2 flex flex-row flex-wrap justify-center items-center;
	}

	.hero hgroup {
		@apply max-w-prose mt-16 text-center;
	}

	.hero em {
		@apply text-pink-500 not-italic;
	}

	/* .shopping {
		flex: 1 1 650px;
		@apply m-4;
	} */

	.hero h1 {
		@apply font-bold text-4xl mb-3 drop-shadow-sm;
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
		@apply font-bold text-2xl mb-1 drop-shadow-sm text-pink-500;
	}

	.prose p {
		@apply mb-1;
	}
</style>
