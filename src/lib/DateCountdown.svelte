<script lang="ts">
	import Duration from 'duration';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { t } from './translations';

	export let from = new Date();
	export let to = (() => {
		const date = new Date(from);
		date.setFullYear(from.getFullYear() + 1);
		return date;
	})();

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
	<span class="text">
		{duration.days}
		{$t('index.days')} {$t("index.and")}
		{duration.hour}:{duration.minute}:{new String(duration.second)} {$t("index.remaining")}
	</span>
</time>

<style lang="postcss">
	time {
		@apply border-4 rounded border-gray-400 px-2 py-1 bg-black
        font-bold text-xl shadow-sm text-center inline-block drop-shadow-md transition-all cursor-pointer;
		color: greenyellow;
	}

	.text {
		@apply animate-pulse inline-block;
		min-width: 19ch;
        font-family: "Digital-7", "monospace";
	}

    time:hover .text {
        @apply underline decoration-2;

    }
</style>
