<script lang="ts">
	export let first: 'left' | 'right' = 'left';
</script>

<section class="social-box">
	<div class:first={first === 'left'} class="box left">
		<slot name="left" >left</slot>
	</div>
    <span class="vl"></span>
	<div class:first={first === 'right'} class="box right">
		<slot name="right" >right</slot>
	</div>
</section>

<style lang="postcss">
	.social-box {
        @apply flex justify-around items-center p-4 relative mx-auto;
        max-width: 1200px
	}

    .vl {
        @apply absolute h-full bg-neutral-300 top-0;
        width: 1px;
    }

    .box {
        flex : 1 1 300px;
        @apply flex items-center justify-center m-2 py-6;
    }

    .left {
        @apply mr-8;
    }
    .right {
        @apply ml-8;
    }


	@media screen and (max-width: 768px) {

        .social-box{
            @apply flex-wrap;
        }
        .box.first {
            order: 0;
		}
        .box:not(.first) {
            order: 1;
        }

        .box {
            @apply mx-0
        }

        .vl {
            display: none;
        }
	}
</style>
