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
		<div class="info-wrap">
			<span class="prod-price">{{product.fields.price}} {{ t('currency') }}</span>

			<button class="prod-btn" type="button">
				<span>Подробнее</span>
			</button>
		</div>
	</div>
</template>
<script setup>
const { t } = useI18n();
const props = defineProps({
	product: {
		type: Object,
		required: true
	}
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
		transition: box-shadow 0.3s ease;

		@media screen and (min-width: $md){
			padding: 10px;
		}

		@media screen and (min-width: $lg){
			&:hover{
				-webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
				-moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
				box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
			}
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
		margin-bottom: 8px;

		@media screen and (min-width: $md){
			font-size: 28px;
		}
	}

	.info-wrap{
		margin-top: auto
	}

	.img-ratio{
		height: 0;
		position: relative;
		padding-top: calc(100% / 1);

		.img-ratio__inner{
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
		line-height: 1;
		color: $default;
		text-align: center;
		border-radius: 10px;
		white-space: nowrap;
		user-select: none;
		background-color: $btn-bg;
		padding: 0 16px;

		&:hover{
			background: $btn-hover;
		}
	}
</style>
