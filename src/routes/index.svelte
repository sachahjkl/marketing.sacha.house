<script lang="ts">
	import ParticipateButton from '$lib/ParticipateButton.svelte';
	import ShoppingCart from '$lib/ShoppingCart.svelte';
	import SocialButton from '$lib/SocialButton.svelte';
	import { typewriter } from '$lib/transitions';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	const participants = getParticipants();

	let title = $t('index.title');

	let showHero = false;

	function getParticipants() {
		return 10;
	}

	onMount(() => {
		setTimeout(() => (showHero = true), 50);
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="hero">
	<hgroup>
		<h1>
			{#if showHero}
				<span in:typewriter={{ speed: 30, delay: 0 }}>
					{`👗 ${$t('index.hero')}`}
				</span>
			{/if}
		</h1>

		<h2>{$t('index.sub')}</h2>
		<div class="flex flex-wrap justify-start my-2 mt-4">
			<SocialButton text={'Twitter'} site={'twitter'} svg={'/socials/twitter.svg'} />
			<SocialButton text={'TikTok'} site={'tiktok'} svg={'/socials/tiktok.svg'} />
			<SocialButton text={'Instagram'} site={'instagram'} svg={'/socials/instagram.svg'} />
		</div>
	</hgroup>
	<div class="shopping">
		<ShoppingCart />
	</div>
</section>

<hr class="my-4" />

<div class="button">
	<ParticipateButton />
</div>

<section id="cta">
	<button>📊 Participez au sondage !</button>
</section>

<section id="shopping-cart">
	<!-- ThreeJS shoppingCart -->
</section>

<section id="description">
	<p>ceci est un description</p>
</section>
<section id="newsletter">
	<p>📫 Rejoindre la newsletter ! déjà {participants} participant{participants > 1 ? 's' : ''} !</p>
</section>

<section id="decompte">
	<!-- Compteur -->
</section>

<section id="twitter">
	<button>Que dit twitter...</button>
</section>

<section id="instagram">
	<button>Nos publications instagram !</button>
</section>

<section id="tiktok">
	<button>Notre dernier tiktok !</button>
</section>

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

	.button {
		@apply flex flex-wrap justify-center mb-4;
	}
</style>
