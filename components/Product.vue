<template>
	<div class="prod-item">
		<div class="prod-photo">
			<div class="img-ratio">
				<div class="img-ratio__inner">
					<img :src="product.fields.image[0].fields.file.url" alt="">
				</div>
			</div>
		</div>
		<h1>{{ product.fields.name }}</h1>
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
	}

	.prod-photo{
		margin: -0.5rem -0.3rem 1rem -0.3rem;
		min-width: 0;
    	position: relative;
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
</style>