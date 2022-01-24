<script lang="ts">
	import { t } from '$lib/translations';

	let title : string;
	$: title = $t('strategy.title');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>stratégie</h1>
