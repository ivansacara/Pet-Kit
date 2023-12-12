<template>
	<div class="category">
		<div class="img-ratio">
			<div class="img-ratio__inner">
				<picture>
					<source :srcset="category.fields.image.fields.file.url" type="image/webp">
					<img class="category-img" :src="category.fields.image.fields.file.url" alt="">
				</picture>
			</div>
		</div>
		<div class="category-name">
			<span>
				{{ category.fields.name }}
			</span>
		</div>
	</div>
</template>

<script setup>

// <div className="category">
//     <h1>{{props.category.name}}</h1>
//     <img :src="props.category.image" alt="">
// </div>
const props = defineProps({
    category: Object,
});
</script>

<style lang="scss">
	.category {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		.category-img{
			height: 100%;
			width: 100%;
			border-radius: 50px;
			max-width: none;
			max-height: none;
			object-position: 50% 50%;
			object-fit: contain;
		}

		.category-name{
			padding: 0 14px 7px 14px;
			width: 100%;

			span{
				display: block;
				font-size: 16px;
				line-height: 20px;
				height: 40px;

				@media screen and (min-width: $md){
					overflow: hidden;
					height: 50px;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					font-size: 20px;
					line-height: 25px;
					font-weight: normal;
				}
			}
		}

		.img-ratio{
			height: 0;
			width: 100%;
			position: relative;
			padding-top: calc(100% / 2);

			.img-ratio__inner {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	}
</style>
