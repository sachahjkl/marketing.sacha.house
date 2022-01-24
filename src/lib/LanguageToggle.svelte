<script lang="ts">

	import { t, locale } from './translations';
	import lang from './translations/lang.json';

	export let checked: boolean = $locale === 'en';

	export let color = '#2196F3';

	$: $locale = checked ? 'en' : 'fr';
</script>

<section title={$t('menu.select-lang')}>
	<span class="mr-1 drop-shadow-sm">{lang.fr.flag}</span>
	<label style="--switch-color: {color}" class="switch">
		<input type="checkbox" bind:checked />
		<span class="slider" />
	</label>

	<span class="drop-shadow-sm">{lang.en.flag}</span>
</section>

<style lang="postcss">
	section {
		@apply mx-2;
	}

	.switch {
		@apply relative inline-block;
		width: 40px;
		height: 24px;
	}

	.switch input {
		@apply opacity-0 w-0 h-0;
	}

	.slider {
		@apply absolute cursor-pointer top-0 left-0 right-0 bottom-0
        bg-slate-300 transition-all rounded-full shadow-inner;
	}

	.slider:before {
		@apply absolute bg-white rounded-full transition-all border shadow-sm;
		content: '';
		height: 14px;
		width: 14px;
		left: 5px;
		bottom: 5px;
	}

	input:checked + .slider {
		background-color: var(--switch-color, blue);
	}

	input:checked + .slider {
		box-shadow: 0 0 1px var(--switch-color, blue);
	}

	input:checked + .slider:before {
		transform: translateX(14px);
	}
</style>
