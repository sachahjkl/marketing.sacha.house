<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LightBulb from '$lib/icons/lightbulb.svg?component';

	let title: string;
	$: title = $_('strategy.title');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="banner" />

<section class="prose">
	<h1 id="stratégie-marketing">Stratégie marketing</h1>
	<h2 id="notre-objectif">Notre objectif</h2>
	<p>Faire compléter l’enquête par les visiteurs en faisant GAGNEZ UN BON D’AMAZON DE 30€.</p>
	<h2 id="nos-kpi">Nos KPI</h2>
	<p>Créer du trafic vers la page d’enquête et obtenir 100 enquêtes complétées.</p>
	<h2 id="forces-et-faiblesses">Forces et faiblesses</h2>
	<p>👎 Faiblesses :</p>
	<ul>
		<li>Pas de budget de publicité</li>
		<li>Pas de mailing list pertinente</li>
	</ul>
	<p>💪 Force :</p>
	<ul>
		<li>Notre approche</li>
		<li>Notre stratégie</li>
	</ul>

	<h1 id="notre-stratégie-de-design">Notre stratégie de design</h1>

	<p>
		Nous avons choisi de ne pas prendre un template <i>HTML5up</i> car notre stratégie s’oriente sur
		l’expérience utilisateur et le <b>“webflow”</b>.
	</p>

	<p>Cela nous a permis d'implémenter tous nos éléments sur mesure :</p>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>🗛 La police</h2>
			<p>
				Nous avons choisi de prendre la police “DM Sans” car cette police est lisible, plaisante à
				lire et rentre dans le thème de la seconde main avec des angles arrondis.
			</p>
			<blockquote>
				Participez à un sondage sur le thème de la vente de seconde main ! Intéressé(e) ? Alors
				n'hésitez pas et découvrez notre questionnaire grâce au bouton juste en dessous !
			</blockquote>
		</div>
	</section>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>📏 Taille de la police</h2>
			<p>
				Différentes <i>tailles de police</i> sont présentes sur le site. Cela nous permet de mettre en
				avant certaines sections et d’ainsi augmenter le taux de conversion.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/screenshots/fonts.png">
			<img src="/img/screenshots/fonts.png" alt="Décompte du temps restant" />
		</a>
		<figcaption>Démonstration des différentes tailles de polices</figcaption>
	</figure>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>😜 Les Emojis</h2>
			<p>
				Nous avons choisi de mettre en place des <b>émojis</b> car ce sont des éléments standards et
				connus par un large public. Cela nous permet de créer une ambiance familière. De plus, les emoji
				sont simples à implémenter. Dans un contexte d’amélioration de l’expérience utilisateur, cela
				nous permet de rajouter de la couleur et des images aux éléments textuels tout en restant dans
				un univers d’illustration agréable pour l’utilisateur.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/screenshots/emoji1.png">
			<img src="/img/screenshots/emoji1.png" alt="Emoji 1" />
		</a>
	</figure>

	<figure>
		<a href="/img/screenshots/emoji2.png">
			<img src="/img/screenshots/emoji2.png" alt="Emoji 2" />
		</a>
	</figure>

	<figure>
		<a href="/img/screenshots/emoji3.png">
			<img src="/img/screenshots/emoji3.png" alt="Emoji 3" />
		</a>
		<figcaption>
			Utilisation des <b>emojis</b> pour agrémenter le texte.
		</figcaption>
	</figure>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>🖼️ Images</h2>
			<p>
				En ce qui concerne les images présentes sur le site nous avons choisi d'utiliser des
				illustrations récupérées sur <a href="https://icons8.com/">icons8.com</a>, libre
				d'utilisation, qui nous permettent de mettre en avant notre thème de seconde main. Grâce à
				ces images l’utilisateur comprend rapidement le thème du site.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/design.png">
			<img class="w-52" src="/img/design.png" alt="Illustration" />
		</a>
		<figcaption>Illustration du thème de la seconde-main</figcaption>
	</figure>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>🏃 Animations</h2>
			<p>
				Grâce à notre design nous avons pu ajouter des animations qui vont permettre au visiteur de
				voir le message envoyé par l'éditeur du site. En effet l'animation sur les Bouton et sur la
				carte Amazon va attirer l'attention du visiteur et donc augmenter le taux de conversion.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/screenshots/amazon.gif">
			<img class="w-48" src="/img/screenshots/amazon.gif" alt="Illustration" />
		</a>
		<figcaption>Exemple d'animation utilisée</figcaption>
	</figure>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>🌍 Langues</h2>
			<p>
				Nous avons pu aussi implémenter un bouton de changement de langue très pratique permettant
				d’avoir la meilleure expérience utilisateur. En effet, ce bouton permet de changer la langue
				sans aucun temps de chargement. Le but derrière est de faire rester l’utilisateur sur le
				site et d’ainsi d’augmenter le taux de conversion.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/screenshots/lang.png">
			<img class="w-48" src="/img/screenshots/lang.png" alt="Illustration" />
		</a>
		<figcaption>Bouton de changement de langue</figcaption>
	</figure>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>⏰ Ajout d’une offre limitée</h2>
			<p>
				L’objectif de cette offre est d’augmenter le taux de conversion du sondage. Un timer
				volontairement incitant afin de créer un sentiment de FOMO (fear of missing out).
			</p>
		</div>
	</section>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>📬 Ajout d’une Newsletter</h2>
			<p>
				Afin d’inciter le <b>electronic word of mouth</b> et d’optimiser le taux de conversion nous
				avons mis en place une newsletter sur les tendance de mode de la seconde main. En ce qui
				concerne le design on a voulu mettre un thème de courrier
				<i>"Aérogramme"</i> pour que le visiteur reconnaisse directement qu'il s'agit d'une newsletter.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/screenshots/news.png">
			<img class="w-48" src="/img/screenshots/news.png" alt="Inscription newsletter" />
		</a>
		<figcaption>Widget d'inscription</figcaption>
	</figure>

	<figure>
		<a href="/img/screenshots/newsletter.png">
			<img class="w-48" src="/img/screenshots/newsletter.png" alt="Newsletter" />
		</a>
		<figcaption>Newsletter envoyée n°1</figcaption>
	</figure>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>🦜 Ajout de Twitter et Instagram</h2>
			<p>
				En ce qui concerne les réseaux nous avons créé un compte Instagram, Twitter et TikTok. En
				effet, ce sont les réseaux sociaux les plus tendance actuellement. Instagram nous permet de
				diffuser des posts soignés avec des objets de seconde main. Twitter nous permettra d’être
				présent dans l’actualité, l’objectif est de commenter sur les personnes influentes du milieu
				de seconde main. Pour TikTok l’objectif est de réaliser des vidéos marrantes sur la seconde
				main. D’un point de vue macro le but est d’inciter le electronic word of mouth et d’amener
				sur notre landing page.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/screenshots/socials.png">
			<img src="/img/screenshots/socials.png" alt="Réseaux Sociaux" />
		</a>
		<figcaption>Nos réseaux sociaux</figcaption>
	</figure>

	<section class="bulb">
		<span class="icon">
			<LightBulb />
		</span>

		<div>
			<h2>🤖 Chatbot</h2>
			<p>
				Nous avons décidé d'implémenter un chatbot afin d’augmenter le taux de conversion de notre
				landing page et de rassurer, renseigner et guider l’utilisateur.
			</p>
		</div>
	</section>

	<figure>
		<a href="/img/screenshots/chatbot.png">
			<img src="/img/screenshots/chatbot.png" alt="Chatbot" />
		</a>
		<figcaption>Le bouton d'ouverture du chatbot</figcaption>
	</figure>

	<figure>
		<a href="/img/screenshots/chatbot-text.png">
			<img class="w-60" src="/img/screenshots/chatbot-text.png" alt="Fenêtre Chatbot" />
		</a>
		<figcaption>Fenêtre du chatbot</figcaption>
	</figure>

	<p>
		Notre stratégie s'oriente sur l’expérience utilisateur et le “webflow”, pour cela nous avons mis
		l’accent sur la police d’écriture les couleurs de la police et du site web le contenue du bouton
		“call-to-action”, la mise en avant des réseaux sociaux.
	</p>

	<h2>Couleurs et accesibilité</h2>

	<p>
		Nous avons porté une attention particulière au respect des contrastes entre les zones de textes
		et leur couleur d'arrière plan. Par exemple, il est toujours préférable d'avoir un texte <span
			class="bg-black color"
		/>
		sur un fond <span class="bg-white color" />.
	</p>
	<p>
		Pour notre <b>couleur d'accent</b>, nous avons choisi d'utiliser une couleur rose
		<span class="bg-pink-500 color" /> ainsi que des déclinés plus <b>clairs ou foncés</b> de cette
		couleur (par exemple pour les différents états <kbd>hover</kbd>, <kbd>focus</kbd>, etc, des
		boutons ). De cette manière, nous
	</p>

	<p>
		En dehors du contenu textuel, le site est composé d'élements autonomes vers lesquels on souhaite
		attirer l'attention de notre visiteur.
	</p>

	<figure>
		<a href="/img/screenshots/pb.gif">
			<img src="/img/screenshots/pb.gif" alt="Bouton de participation" />
		</a>
		<figcaption>Bouton rouge géant "clicky" pour donner envant de cliquer dessus.</figcaption>
	</figure>

	<figure>
		<a href="/img/screenshots/cpt.png">
			<img src="/img/screenshots/cpt.png" alt="Décompte du temps restant" />
		</a>
		<figcaption>
			Décompte du temps restant, créé une FOMO (<i>Fear Of Missing Out</i> ou
			<i>Peur de passer à côté</i>)
		</figcaption>
	</figure>

	<p>
		Le site est <b>responsive</b>, essentiel pour avoir une large couverture des appareils utilisés
		par les internautes.
	</p>

	<figure>
		<a href="/img/screenshots/desk1.png">
			<img src="/img/screenshots/desk1.png" alt="Site en mode desktop" />
		</a>
		<figcaption>Site en mode <b>desktop</b>.</figcaption>
	</figure>

	<figure>
		<a href="/img/screenshots/resp1.png">
			<img class="max-h-64" src="/img/screenshots/resp1.png" alt="Site en mode mobile" />
		</a>
		<figcaption>Site en mode <b>mobile</b></figcaption>
	</figure>

	<figure>
		<a href="/img/screenshots/resp1.png">
			<img class="max-h-64" src="/img/screenshots/resp2.png" alt="Site en mode mobile" />
		</a>
		<figcaption>Site en mode <b>mobile</b> : menu de navigation ouvert adapté</figcaption>
	</figure>

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
			<h2 id="réalisation">Réseaux</h2>
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
				vers le formulaire et newsletter.
			</p>
		</div>
	</section>
</section>

<style lang="postcss">
	blockquote {
		@apply italic mx-auto px-8 my-6 text-center;
	}

	blockquote::before {
		content: '“';
		@apply mr-3;
	}

	blockquote::after {
		content: '”';
		@apply ml-3;
	}

	figure {
		@apply m-6;
	}

	figure img {
		@apply mx-auto shadow-sm border rounded-lg;
	}
	figure figcaption {
		@apply italic text-center mt-1;
	}

	kbd {
		background-color: #fafbfc;
		border: 1px solid #c6cbd1;
		border-bottom-color: #959da5;
		border-radius: 3px;
		box-shadow: inset 0 -1px 0 #959da5;
		color: #444d56;
		display: inline-block;
		font-size: 11px;
		line-height: 10px;
		padding: 3px 5px;
		vertical-align: middle;
		@apply mx-2;
	}

	.color {
		@apply h-6 w-6 px-3 mx-2 border-2 shadow-sm rounded-sm;
	}
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
		@apply mt-2 mb-4;
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
		bg-gray-300 rounded-full h-fit;
	}

	.banner {
		background-image: url(/img/vêtements_0.jpg);
		@apply h-60 border-2 shadow-sm bg-center rounded;
	}
</style>
