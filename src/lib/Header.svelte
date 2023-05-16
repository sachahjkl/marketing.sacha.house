<header>
	<nav>
		<div class="menu-desktop">
			<slot name="menu-desktop" />
		</div>
		<div class="menu-mobile">
			<slot name="menu-mobile" />
		</div>
	</nav>

	<slot name="addon" />
</header>

<style lang="postcss">
	header {
		@apply z-50 sticky top-0 bg-white shadow-sm
		rounded-b-xl p-1 mb-1 border border-t-0 mx-auto justify-between flex items-center ;
	}

	nav {
		@apply flex flex-row;
	}

	.menu-mobile {
		@apply hidden;
	}

	@media screen and (max-width: 768px) {
		.menu-mobile {
			@apply block;
		}
		.menu-desktop {
			@apply hidden;
		}
	}
</style>
