<script lang="ts">
	import Logo from '$lib/Logo.svelte';

	import ShoppingCart from '$lib/ShoppingCart.svelte';
	import { t } from '$lib/translations';

	let title: string;
	$: title = $t('about.title');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="content">
	<h1 class="font-bold text-3xl">{$t('about.heading')}</h1>

	<div class="avatars">
		<div class="avatar">
			<img src="/img/avatars/sacha.png" alt="Sacha" />
			<div class="desc">
				<h1>Sacha</h1>
				<p>{$t('about.sacha-desc')}</p>
			</div>
		</div>
		<div class="avatar">
			<img src="/img/avatars/siva.png" alt="Sacha" />
			<div class="desc">
				<h1>Sivaajithan</h1>
				<p>{$t('about.siva-desc')}</p>
			</div>
		</div>
		<div class="avatar">
			<img src="/img/avatars/romain.png" alt="Sacha" />
			<div class="desc">
				<h1>Romain</h1>
				<p>{$t('about.romain-desc')}</p>
			</div>
		</div>
	</div>

	<hr class="my-8" />

	<!-- <div class="relative">
		<div class="absolute top-0 opacity-30">
			<Logo />
		</div>
	</div> -->
	<div class="prose">
		<h2>{$t('about.heading2')}</h2>

		<p>
			{@html $t('about.p1')}
		</p>
		<p>
			{@html $t('about.p2')}
			<a class="text-blue-600 underline hover:text-blue-800" href="/strategy">
				{$t('about.strategy')}
			</a>.
		</p>
	</div>
	<!-- <ShoppingCart /> -->
</section>

<style lang="postcss">
	.prose {
		@apply max-w-prose mx-auto mb-8;
	}

	.prose p {
		@apply mb-2;
	}

	.prose h2 {
		@apply font-bold  text-2xl mb-3;
	}

	.prose a {
		@apply font-bold text-blue-500 underline;
	}

	.content {
		@apply max-w-4xl mx-auto;
	}

	.avatars {
		@apply flex flex-wrap justify-around m-8;
	}

	@media screen and (max-width: 768px) {
		.avatar {
			flex-basis: 100%;
		}
	}

	.avatar {
		@apply p-4;
	}

	.avatar img {
		@apply rounded-full block mx-auto border shadow-sm overflow-hidden p-2 pb-0;
	}

	.desc {
		@apply text-center mt-2;
	}

	.desc h1 {
		@apply font-bold text-xl;
	}
</style>
