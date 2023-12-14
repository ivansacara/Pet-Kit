<template>
	<div class="prod-item">
		<div class="prod-photo">
			<div class="img-ratio">
				<div class="img-ratio__inner">
					<img :src="product.fields.image[0].fields.file.url" alt="">
				</div>
			</div>
		</div>
		
		<p class="prod-name">{{ product.fields.name }}</p>
		<span class="prod-price">20 136 руб</span>

		<button class="prod-btn" type="button">
			<span>Подробнее</span>
		</button>
	</div>
</template>
<script setup>
	const props =  defineProps({
		product: [Object],
	});
</script>
<style lang="scss">
	.prod-item{
		display: flex;
		flex-direction: column;
		padding: 0.5rem 0.3rem;
		border: 1px solid #f7f7f7;
		border-radius: 10px;
		overflow: hidden;

		@media screen and (min-width: $md){
			padding: 10px;
		}
	}

	.prod-photo{
		margin: -0.5rem -0.3rem 1rem -0.3rem;
		min-width: 0;
    	position: relative;
	}

	.prod-name{
		margin-bottom: 1rem;
		word-break: break-word;
	}

	.prod-price{
		font-size: $text-xl;
		display: block;
		font-weight: 600;
		white-space: nowrap;

		@media screen and (min-width: $md){
			font-size: 28px;
		}
	}

	.img-ratio{
		height: 0;
		position: relative;
		padding-top: calc(100% / 1);

		&__inner{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;

			img{
				object-fit: contain;
				height: 100%;
				width: 100%;
				max-width: none;
				max-height: none;
				object-position: 50% 50%;
			}
		}
	}

	.prod-btn{
		display: inline-flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 40px;
		max-width: 100%;
		font-weight: 400;
		font-size: $text-base;
	}
</style>