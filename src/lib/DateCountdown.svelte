<script lang="ts">
	import Duration from 'duration';
	import { onMount } from 'svelte';
	import { t } from './translations';

	export let from = new Date();
	export let to = (() => {
		const date = new Date(from);
		date.setFullYear(from.getFullYear() + 1);
		return date;
	})();

	let text: HTMLSpanElement;
	let characters: number = 20;
	$: characters = text?.textContent.length || 1;

	const INTERVAL = 1000;

	let duration: Duration;
	$: duration = new Duration(from, to);

	onMount(() => {
		setInterval(() => {
			from = new Date();
		}, INTERVAL);
	});
</script>

<time>
	<span class="text" bind:this={text}>
		<span class="char-grid">
			{Array.from(Array(characters - 1))
				.map(() => '8')
				.join('')}
		</span>
		{duration.days.toLocaleString('fr-FR', {
			minimumIntegerDigits: 3
		})}
		{$t('index.days')}
		{$t('index.and')}
		{duration.hour.toLocaleString('fr-FR', {
			minimumIntegerDigits: 2
		})}:{duration.minute.toLocaleString('fr-FR', {
			minimumIntegerDigits: 2
		})}:{new String(
			duration.second.toLocaleString('fr-FR', {
				minimumIntegerDigits: 2
			})
		)}
		<!-- {$t('index.remaining')} -->
	</span>
</time>

<style lang="postcss">
	time {
		@apply border-4 rounded-lg border-gray-400 px-2 py-1
         text-2xl shadow text-center inline-block drop-shadow-md
		 transition-all cursor-pointer text-red-600 italic;
		background-color: rgb(31, 0, 0);
	}

	.text {
		--color: rgb(230, 67, 67);
		text-shadow: 0 0 5px var(--color);
		@apply inline-block w-auto mx-auto relative rounded transition-all;
		font-family: 'Digital-7', 'monospace';

	}


	.char-grid {
		@apply opacity-25 absolute left-0;
	}

	time:hover .text {
		@apply text-red-500;
		text-shadow: 0 0 10px var(--color);
	}
</style>
