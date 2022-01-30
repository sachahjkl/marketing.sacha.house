<script context="module" lang="ts">
	export const DURATION = 1500;
</script>

<script lang="ts">
	import ConfettiSprayer from './ConfettiSprayer.svelte';

	import Pointer from "./icons/cursors/pointer.svg";

	export let soundFile = '/click.mp3';
	export let clickCallback = () => {};

	let confettiTime = false;
	let clickAudio: HTMLAudioElement;
	let timeout: number | null;

	function click() {
		clickAudio.play();
		clickCallback();
		if (timeout) return;
		confettiTime = true;
		console.log('confetti !');
		timeout = window.setTimeout(() => {
			confettiTime = false;
			timeout = null;
		}, DURATION + 100);
	}
</script>

<button class="partyButton" type="button" on:click={click}>
	{#if soundFile}
		<audio src={soundFile} bind:this={clickAudio} />
	{/if}

	<section class="flex justify-center">
		{#if confettiTime}
			<ConfettiSprayer duration={DURATION} />
		{/if}
	</section>

	<slot>Party Button !</slot>

<span class="pointer">
	<Pointer/>
</span>


</button>

<style lang="postcss">
	.partyButton {
		@apply w-full max-w-2xl inline-block bg-red-600 hover:bg-red-700
          focus:bg-red-800 transition-all
         text-white px-4 py-4 rounded-3xl
         border-b-red-900  border-b-8
        text-2xl font-bold border-opacity-50 shadow-lg
         outline-none backdrop-blur-lg backdrop-filter relative;
	}

	.pointer {
		@apply absolute transition-all;

		top: 95%;
		right: 2%;
		transform: rotate(-30deg);
		animation: slide 1s infinite alternate;

	}

	:global(.pointer svg) {
		@apply w-12 h-fit;
	}

	.partyButton:hover {
		border-bottom-width: 8px;
		margin-top: 4px;
	}
	.partyButton {
		border-bottom-width: 12px;
	}
	.partyButton:active {
		border-bottom-width: 0px;
		margin-top: 12px;
	}

	@keyframes slide {
		from {
			transform: rotate(-30deg) translateY(20%) ;
		}

		to {
			transform: rotate(-30deg) translateY(-20%) ;
		}

	}
</style>
