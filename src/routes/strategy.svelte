<script lang="ts">
	import { t } from '$lib/translations';
	import LightBulb from '$lib/icons/lightbulb.svg';

	let title: string;
	$: title = $t('strategy.title');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="banner">

</div>

<section class="prose">
	<h1 id="stratégie-marketing">Stratégie marketing</h1>
	<h2 id="notre-objectif">Notre objectif</h2>
	<p>Faire compléter l’enquête par les visiteurs en faisant GAGNEZ UN BON D’AMAZON DE 30€.</p>
	<h2 id="nos-kpi">Nos KPI</h2>
	<p>Créer du trafic vers la page d’enquête et obtenir 100 enquêtes complétées.</p>
	<h2 id="notre-stratégie-de-design">Notre stratégie de design</h2>
	<p>
		Notre stratégie va s’orienté sur l’expérience utilisateur et le “webflow”, pour cela nous avons
		mis l’accent sur la police d’écriture les couleurs de la police et du site web le contenue du
		bouton “call-to-action”, la mise en avant des réseaux sociaux.
	</p>
	<h2 id="forces-et-faiblesses">Forces et faiblesses</h2>
	<p>Faiblesses :</p>
	<ul>
		<li>Pas de budget de publicité</li>
		<li>Pas de mailing list pertinente</li>
	</ul>
	<p>Force :</p>
	<ul>
		<li>Notre approche</li>
		<li>Notre stratégie</li>
	</ul>
	<h1 id="réalisation-marketing-pour-amener-sur-la-landing-page">
		Réalisation marketing pour amener sur la landing-page
	</h1>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2 id="public-cible">Public cible</h2>
			<p>
				Grâce à statista nous avons pu identifier que le public le plus intéressépar la seconde main
				sont les femmes âgées de 18 à 75 ans qui habitent en France ou en Tunisie.
			</p>
		</div>
	</section>
	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2 id="réalisation">Réalisation</h2>
			<p>
				En ce qui concerne les réseaux nous comptons avoir un compte Instagram, Twitter, TikTok.
				Instagram nous permettra de diffuser des postes jolies avec des objets de seconde main.
				Twitter nous permettra d’être présent dans l’actualité, l’objectif est de commenter sur les
				personnes influente du milieu de seconde main. Pour TikTok l’objectif est de réaliser des
				vidéos marrantes sur la seconde main. D’un point de vue macro le but est d’inciter le
				electronic word of mouth et d’amener sur notre landingpage.
			</p>
		</div>
	</section>
	<h1 id="contenu-de-la-landing-page">Contenu de la landing page</h1>
	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2 id="réalisation-1">Réalisation</h2>
			<p>Présentation de l’étude et du formulaire. Inciter le client à s’inscrire au formulaire</p>
		</div>
	</section>
	<section class="bulb mb-20">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2 id="mode-opératoire">Mode opératoire</h2>
			<p>
				Pour réaliser notre objectif nous allons mettre en place une phrase d’accroche, un compteur
				de nombre de client déjà inscrit, un compteur avant la fin de l’événement, des
				réactions/avis des clients sur les réseaux (instagram, twitter, etc.), un chatbot, un lien
				vers le formulaire et newsl etter.
			</p>
		</div>
	</section>
</section>

<style lang="postcss">
	h1,
	h2 {
		@apply font-bold;
	}

	h1 {
		@apply text-center text-3xl my-8;
	}

	.prose {
		@apply max-w-prose mx-auto;
	}

	h2 {
		@apply font-bold text-xl mb-1  drop-shadow-sm;
	}

	p {
		@apply mb-4;
	}

	ul {
		@apply ml-8 mb-3;
	}

	li::before {
		content: '-';
		@apply mr-2;
	}

	.bulb {
		@apply flex;
	}

	.bulb div {
		@apply flex-auto content-start items-start;
	}

	.icon {
		@apply p-2 shadow-sm flex-grow-0 aspect-square mx-5
		bg-gray-300 rounded-full h-fit ;
	}

	.banner {
		background-image: url(/img/vêtements_0.jpg);
		@apply h-60 border-2 shadow-sm bg-center rounded;
	}
</style>
