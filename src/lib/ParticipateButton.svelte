<script lang="ts">
	export let participants = 15;
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { t } from './translations';
	import { onMount } from 'svelte';
	import ConfettiSprayer from './ConfettiSprayer.svelte';
	import { goto } from '$app/navigation';
	import { sondageURL } from './constants';

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

	let sondageAnchor: HTMLAnchorElement;

	function click() {
		sondageAnchor.click();
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
	<a target="_blank" class="hidden" rel="external" href={sondageURL} bind:this={sondageAnchor}>out</a>
	<button class="partyButton" on:click={click} type="button" bind:this={button}>
		<audio src={'/click.mp3'} bind:this={clickAudio} />

		<section class="flex justify-center">
			{#if confettiTime}
				<ConfettiSprayer
					{duration}

				/>
			{/if}
		</section>
		📊 {$t('index.participants-btn', { participants: Math.ceil($values) })}
	</button>
</div>

<style lang="postcss">
	.partyButton {
		@apply w-full max-w-2xl inline-block  bg-red-600 hover:bg-red-700
          focus:bg-red-800 transition-all
         text-white px-4 py-4 rounded-3xl
         border-b-red-900  border-b-8
        text-2xl font-bold border-opacity-50 shadow-lg
         outline-none backdrop-blur-lg backdrop-filter  absolute bottom-0
		 -translate-x-1/2 left-1/2 z-10 text-center;
	}

	.partyButton:hover {
		border-bottom-width: 8px;
	}
	.partyButton {
		border-bottom-width: 12px;
	}
	.partyButton:active {
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
