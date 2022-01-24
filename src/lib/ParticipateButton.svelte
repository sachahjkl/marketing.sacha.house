<script lang="ts">
	export let participants = 15;
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { t } from './translations';
	import { onMount } from 'svelte';
	import ConfettiSprayer from './ConfettiSprayer.svelte';

	const values = tweened(0, {
		duration: 1800,
		easing: cubicOut
	});

	onMount(() => {
		setTimeout(() => values.set(participants), 200);
	});

	const duration = 1500;
	let confettiTime = false;
	let button: HTMLButtonElement;

	let clickAudio: HTMLAudioElement;

	let timeout: number | null;

	function click() {
		clickAudio.play();
		values.set(++participants);
		if (timeout) return;
		confettiTime = true;
		console.log('confetti !');
		timeout = window.setTimeout(() => {
			confettiTime = false;
			timeout = null;
		}, duration + 100);
	}
</script>

<div class="wrapper" style="height: {button?.clientHeight + 15 || 0}px">
	<button on:click={click} type="button" bind:this={button}>
		<audio src={'/fart2.mp3'} bind:this={clickAudio} />

		<section class="flex justify-center">
			{#if confettiTime}
				<ConfettiSprayer
					{duration}
					stageWidth={button.clientWidth + 200}
					stageHeight={button.clientHeight + 200}
				/>
			{/if}
		</section>
		📊 {$t('index.participants-btn', { participants: Math.ceil($values) })}
	</button>
</div>

<style lang="postcss">
	button {
		@apply w-full max-w-2xl inline-block  bg-red-600 hover:bg-red-700
          focus:bg-red-800 transition-all
         text-white px-4 py-4 rounded-3xl
         border-b-red-900  border-b-8
        text-2xl font-bold border-opacity-50 shadow-lg
         outline-none backdrop-blur-lg backdrop-filter  absolute bottom-0
		 -translate-x-1/2 left-1/2 z-10;
	}

	button:hover {
		border-bottom-width: 8px;
	}
	button {
		border-bottom-width: 12px;
	}
	button:active {
		border-bottom-width: 0px;
	}
	.wrapper {
		@apply flex-auto relative m-2;
	}

	/*
	button:hover {
		padding-bottom: calc(1rem + 4px);
	}

	button:active {
		padding-bottom: calc(1rem + 8px);
	} */
</style>
