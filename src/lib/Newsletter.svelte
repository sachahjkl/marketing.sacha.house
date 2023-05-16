<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let action = 'https://tinyletter.com/marketinghjkl';
</script>

<div class="letter">
	<form
		{action}
		method="post"
		target="popupwindow"
		on:submit={() => {
			window.open(action, 'popupwindow', 'scrollbars=yes,width=800,height=600');
			return true;
		}}
	>
		<input type="email" name="email" id="tlemail" placeholder="Email..." />
		<button class="button" type="submit"> {$_('index.subscribe')} 📬</button>
	</form>
</div>

<style lang="postcss">
	.letter {
		background-image: repeating-linear-gradient(
			135deg,
			#ff5542 0px,
			#ff5542 30px,
			transparent 30px,
			transparent 50px,
			#4eafff 50px,
			#4eafff 80px,
			transparent 80px,
			transparent 100px
		);
		/* animation: slide 60s infinite running linear; */
		/* transition: background-position 200ms ease-in; */
		@apply p-3 rounded-lg shadow-sm border;
	}

	@keyframes slide {
		from {
			background-position: 0px 0;
		}

		to {
			background-position: 280px 0;
		}
	}

	.letter:hover {
		/* background-image: repeating-linear-gradient(
			135deg,
			#83b3db 0px,
			#84adcb 30px,
			transparent 30px,
			transparent 50px,
			#f29b91 50px,
			#f09290 80px,
			transparent 80px,
			transparent 100px
		); */
	}

	form {
		@apply p-4 flex justify-center
        bg-white rounded-md shadow;
	}

	input {
		@apply flex-auto border px-3 py-2 rounded-l;
		/* max-width: 30ch; */
		min-width: 10ch;
	}

	button {
		@apply rounded-r-md rounded-l-none py-2 my-0
        font-bold ml-0
        from-blue-500 to-blue-600
		  hover:from-blue-600 hover:to-blue-700
		 active:from-blue-700 active:to-blue-800;
		min-width: 12ch;
	}
</style>
