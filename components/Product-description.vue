<!-- <template>
	<div class="prod-descr" v-for="productDesc in product" :key="productDesc.sys.id">
		<div class="prod-area">
			<div class="prod-descr-photo"> 
				<Splide :options="splideOptions" ref="main">
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
							</div>
						</nuxt-link>
					</SplideSlide>
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
							</div>
						</nuxt-link> 
					</SplideSlide>
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
							</div>
						</nuxt-link> 
					</SplideSlide>
				</Splide>
				<Splide :options="splideGallery" ref="thumbs" class="gallery-slider">
				<SplideSlide>
					<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
						<div class="img-ratio__inner">
							<picture>
								<source :srcset="productDesc.fields.image" type="image/webp">
								<img :src="productDesc.fields.image" alt="">
							</picture>
						</div>
					</nuxt-link>
				</SplideSlide>
				<SplideSlide>
					<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
						<div class="img-ratio__inner">
							<picture>
								<source :srcset="productDesc.fields.image" type="image/webp">
								<img :src="productDesc.fields.image" alt="">
							</picture>
						</div>
					</nuxt-link> 
				</SplideSlide>
				<SplideSlide>
					<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
						<div class="img-ratio__inner">
							<picture>
								<source :srcset="productDesc.fields.image" type="image/webp">
								<img :src="productDesc.fields.image" alt="">
							</picture>
						</div>
					</nuxt-link> 
				</SplideSlide>
			</Splide>
			</div>
		</div>
		<div class="prod-descr-title">
			<h1 class="title-head">{{ productDesc.fields.name }}</h1>
		</div>
		<div class="prod-descr-price">
			<span class="price-cur">{{ productDesc.fields.price }}</span>
		</div>
		<div class="prod-descr-info">
			<span>{{ productDesc.fields.description }}</span>
		</div>
		<div class="prod-descr-buy">
			<button class="prod-descr-btn">
				<nuxt-link target="_blank" to="https://t.me/+n3NwTwd8tzhlNDNi">
					Приобрести
				</nuxt-link>
			</button>
		</div>
	</div>
</template>

<script setup>
	import { defineProps, onMounted, ref } from 'vue';
	import { Splide, SplideSlide } from '@splidejs/vue-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	const props = defineProps({
		product: {
			type: Object,
			required: true
		}
	});

	const splideOptions = ref({
		type: 'slide',
		heightRatio: 0.5,
		arrows: false,
		autoplay: false,
		autoHeight: true,
		mediaQuery: 'min',
		
		breakpoints: {
			1024:{
				pagination: false,
				type: 'fade',
				heightRatio: 0.5,
				pagination: false,
				arrows: false,
				cover: true,
			}
		}
	});

	const splideGallery = ref({
		rewind: true,
		fixedWidth: 104,
		fixedHeight: 58,
		isNavigation: true,
		gap: 10,
		focus: 'center',
		pagination: false,
		cover: true,
		dragMinThreshold: {
			mouse: 4,
			touch: 10,
		}
	})
</script>

<style lang="scss">
	.gallery-slider{
		display: none;

		@media screen and (min-width: $lg){
			display: block;
		}
	}

	.splide__slide{
		height: 100% !important;
	}

	.splide__pagination__page{
		margin: 0 6px;
		width: 6px;
		height: 6px;
		background: #d9d9d9;
		opacity: 1;
		
		&.is-active{
			transform: scale(1);
			background: #8dc8ff;
		}
	}

	.prod-descr{
		display: grid;
		grid-template-areas:
			"photo"
			"title"
			"descr"
			"price"
			"buy";
		grid-template-columns: auto;
		grid-template-rows: auto;
		grid-column-gap: 0;

		@media screen and (min-width: $lg){
			grid-template-areas:
				"photo title"
				"photo price"
				"photo descr"
				"photo buy"
				"photo .";
			grid-template-columns: 50% 1fr;
			grid-template-rows: repeat(7, auto) 1fr;
			grid-column-gap: 30px;
		}
	}

	.prod-area{
		position: relative;
		grid-area: photo;
		min-width: 0;

		@media screen and (min-width: $lg){
			padding-left: calc(20% + 2rem);
		}
	}

	.prod-descr-photo{
		max-width: 500px;
		margin: 0 auto 10px;
		position: relative;
		top: auto;

		@media screen and (min-width: $lg){
			max-width: none;
			margin: 0;
		}
	}

	.img-ratio{
		height: 0;
		position: relative;
		padding-top: calc(100% / 1);
	
		&.img-ratio_cover{
			overflow: hidden;
		}

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

	.product-photo{
		display: block;
	}

	.prod-descr-title{
		grid-area: title;
		
		.title-head{
			padding: 23px 0;
			margin: 0;
			font-size: 14px;
			line-height: 16px;
			border-top: 1px solid $border;
			font-weight: bold;
			color: $black;

			@media screen and (min-width: $md){
				border-top: 0;
				padding: 0;
				margin: 0 0 24px 0;
				font-size: 27px;
				line-height: 32px;
			}
		}
	}

	.prod-descr-price{
		padding: 6px 0 11px 0;
		border-top: 1px solid $border;
		grid-area: price;
		
		@media screen and (min-width: $md){
			padding: 0 0 11px 0;
			border-top: 0;
		}

		.price-cur{
			margin: 0 12px 0 0;
			font-size: 25px;
			line-height: 29px;
			display: inline-block;
			font-style: normal;
			font-weight: bold;
			color: $black;

			@media screen and (min-width: $md){
				margin: 0 12px 30px 0;
				font-size: 48px;
				line-height: 56px;
			}
		}
	}

	.prod-descr-info{
		grid-area: descr;
		margin: 10px 0 15px 0;

		span{
			font-size: 13px;

			@media screen and (min-width: $md){
				font-size: 16px;
			}
		}
	}

	.prod-descr-buy{
		grid-area: buy;
		border-radius: 10px;
		display: block;
		margin: 0;
		padding: 23px 0;
		background: none;
		border-top: 1px solid $border;

		@media screen and (min-width: $md){
			display: grid;
			grid-template-columns: 1fr minmax(220px, max-content);
			grid-column-gap: 1rem;
			align-items: center;
			padding: 0;
			border-top: 0;
		}

		.prod-descr-btn{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			font-weight: 400;
			color: $default;
			border-radius: 10px;
			white-space: nowrap;
			width: 100%;
			height: 60px;
			font-size: calc(16px * 1.5);
			background: $btn-bg;
			padding: 0 16px;

			&:hover{
				background: $btn-hover;
			}
		}
	}
</style> -->

<template>
<!--	<div class="prod-descr" v-for="productDesc in product" :key="productDesc.sys.id"> -->
	<div class="prod-descr" v-for="productDesc in product" :key="productDesc.sys.id">
		<div class="prod-area">
			<div class="prod-descr-photo"> 
				<Splide :options="mainOptions" class="main-slider">
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
<!--								<img src="/img/components/slider/3.webp" alt="">-->
							</div>
						</nuxt-link>
					</SplideSlide>
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
<!--								<img src="/img/components/slider/10.webp" alt="">-->
							</div>
						</nuxt-link> 
					</SplideSlide>
				</Splide>

				<Splide :options="sdOptions" ref="main" class="sd-slider">
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
<!--								<img src="/img/components/slider/3.webp" alt="">-->
							</div>
						</nuxt-link>
					</SplideSlide>
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
<!--								<img src="/img/components/slider/10.webp" alt="">-->
							</div>
						</nuxt-link> 
					</SplideSlide>
				</Splide>

				<Splide :options="thumbsOptions" class="gallery-slider product-list" ref="thumbs">
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
<!--								<img src=" /img/components/slider/3.webp" alt="">-->
							</div>
						</nuxt-link>
					</SplideSlide>
					<SplideSlide>
						<nuxt-link to="" class="img-ratio img-ratio_cover product-photo">
							<div class="img-ratio__inner">
								<picture>
									<source :srcset="productDesc.fields.image" type="image/webp">
									<img :src="productDesc.fields.image" alt="">
								</picture>
<!--								<img src=" /img/components/slider/10.webp" alt="">-->
							</div>
						</nuxt-link> 
					</SplideSlide>
				</Splide>
			</div>
		</div>
		<div class="prod-descr-title">
			 <h1 class="title-head">{{ productDesc.fields.name }}</h1>
<!--			<h1>rtrtrrt</h1>-->
		</div>
		<div class="prod-descr-price">
			 <span class="price-cur">{{ productDesc.fields.price }}</span>
<!--			<span>ererr</span>-->
		</div>
		<div class="prod-descr-info">
			 <span>{{ productDesc.fields.description }}</span>
<!--			<span>dscscd</span>-->
		</div>
		<div class="prod-descr-buy">
			<button class="prod-descr-btn">
				<nuxt-link target="_blank" to="https://t.me/+n3NwTwd8tzhlNDNi">
					Приобрести
				</nuxt-link>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineProps, onMounted, ref } from 'vue';
	import { defineComponent } from 'vue';
	import { Splide, SplideSlide, type Options } from '@splidejs/vue-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	export default defineComponent( {
		name: 'ThumbnailsExample',
		props:['product'],

		components: {
			Splide,
			SplideSlide,
		},

		setup() {
			const main   = ref<InstanceType<typeof Splide>>();
			const thumbs = ref<InstanceType<typeof Splide>>();

			// const props = defineProps({
			// 	product: {
			// 		type: Object,
			// 		required: true
			// 	}
			// });

			const mainOptions: Options = {
				type: 'slide',
				heightRatio: 0.5,
				arrows: false,
				autoplay: false,
				autoHeight: true,
				mediaQuery: 'min',
			};

			const sdOptions: Options = {
				type: 'fade',
				heightRatio: 0.5,
				arrows: false,
				autoplay: false,
				pagination: false,
				autoHeight: true,
			};

			const thumbsOptions: Options = {
				rewind: true,
				fixedWidth: 104,
				fixedHeight: 58,
				isNavigation: true,
				gap: 10,
				focus: 'center',
				pagination: false,
				cover: true,
				dragMinThreshold: {
					mouse: 4,
					touch: 10,
				},
				direction: 'ttb',
				height: '10rem',
			};

			onMounted( () => {
				const thumbsSplide = thumbs.value?.splide;

				if ( thumbsSplide ) {
					main.value?.sync( thumbsSplide );
				}
			} );

			return {
				main,
				thumbs,
				mainOptions,
				sdOptions,
				thumbsOptions,
			}
		},
	} );
</script>

<style lang="scss">
	.main-slider{
		display: block;

		@media screen and (min-width: $lg){
			display: none;
		}
	}

	.splide__slide {
		height: auto !important;
	}

	.gallery-slider,
	.sd-slider {
		display: none;

		@media screen and (min-width: $lg) {
			display: block;
		}
	}

	.splide__pagination__page {
		margin: 0 6px;
		width: 6px;
		height: 6px;
		background: #d9d9d9;
		opacity: 1;

		&.is-active {
			transform: scale(1);
			background: #8dc8ff;
		}
	}

	.product-list{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 20%;
	}

	.prod-descr {
		display: grid;
		grid-template-areas:
			"photo"
			"title"
			"descr"
			"price"
			"buy";
		grid-template-columns: auto;
		grid-template-rows: auto;
		grid-column-gap: 0;

		@media screen and (min-width: $lg) {
			grid-template-areas:
				"photo title"
				"photo price"
				"photo descr"
				"photo buy"
				"photo .";
			grid-template-columns: 50% 1fr;
			grid-template-rows: repeat(7, auto) 1fr;
			grid-column-gap: 30px;
		}
	}

	.prod-area {
		position: relative;
		grid-area: photo;
		min-width: 0;

		@media screen and (min-width: $lg) {
			padding-left: calc(20% + 2rem);
		}
	}

	.prod-descr-photo {
		max-width: 500px;
		margin: 0 auto 10px;
		top: auto;

		@media screen and (min-width: $lg) {
			max-width: none;
			margin: 0;
		}
	}

	.img-ratio {
		height: 0;
		position: relative;
		padding-top: calc(100% / 1);

		&.img-ratio_cover {
			overflow: hidden;
		}

		.img-ratio__inner {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;

			img {
				object-fit: contain;
				height: 100%;
				width: 100%;
				max-width: none;
				max-height: none;
				object-position: 50% 50%;
			}
		}
	}

	.product-photo {
		display: block;
	}

	.prod-descr-title {
		grid-area: title;

		.title-head {
			padding: 23px 0;
			margin: 0;
			font-size: 14px;
			line-height: 16px;
			border-top: 1px solid $border;
			font-weight: bold;
			color: $black;

			@media screen and (min-width: $md) {
				border-top: 0;
				padding: 0;
				margin: 0 0 24px 0;
				font-size: 27px;
				line-height: 32px;
			}
		}
	}

	.prod-descr-price {
		padding: 6px 0 11px 0;
		border-top: 1px solid $border;
		grid-area: price;

		@media screen and (min-width: $md) {
			padding: 0 0 11px 0;
			border-top: 0;
		}

		.price-cur {
			margin: 0 12px 0 0;
			font-size: 25px;
			line-height: 29px;
			display: inline-block;
			font-style: normal;
			font-weight: bold;
			color: $black;

			@media screen and (min-width: $md) {
				margin: 0 12px 30px 0;
				font-size: 48px;
				line-height: 56px;
			}
		}
	}

	.prod-descr-info {
		grid-area: descr;
		margin: 10px 0 15px 0;

		span {
			font-size: 13px;

			@media screen and (min-width: $md) {
				font-size: 16px;
			}
		}
	}

	.prod-descr-buy {
		grid-area: buy;
		border-radius: 10px;
		display: block;
		margin: 0;
		padding: 23px 0;
		background: none;
		border-top: 1px solid $border;

		@media screen and (min-width: $md) {
			display: grid;
			grid-template-columns: 1fr minmax(220px, max-content);
			grid-column-gap: 1rem;
			align-items: center;
			padding: 0;
			border-top: 0;
		}

		.prod-descr-btn {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			font-weight: 400;
			color: $default;
			border-radius: 10px;
			white-space: nowrap;
			width: 100%;
			height: 60px;
			font-size: calc(16px * 1.5);
			background: $btn-bg;
			padding: 0 16px;

			&:hover {
				background: $btn-hover;
			}
		}
	}
</style>
