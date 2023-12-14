<template>
		<div class="container">
			<div class="recent-wrapper">
				<div class="viewed-products">
					<div class="viewed-head"> 
						<h2>Ранее просмотренные</h2>
					</div>
					<Swiper 
						:navigation="true" 
						:modules="[SwiperEffectCreative, SwiperNavigation]"
						:space-between="30"
						:breakpoints="{
							640: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							}
						}"
						class="recent-slider">
						
						<SwiperSlide>
							<nuxt-link to="" class="viewed-product">
								<div class="viewed-photo">
									<div class="img-ratio">
										<div class="img-ratio__inner">
											<img src="../public/img/components/slider/slide_1.jpg" alt="">
										</div>
									</div>
								</div>
								<div class="viewed-title">
									Груминг набор для стрижки кошек и собак 5 в 1 Airclipper
								</div>
								<div class="viewed-price">
									15 988 руб
								</div>
							</nuxt-link>
						</SwiperSlide>
						<SwiperSlide>
							<nuxt-link to="" class="viewed-product">
								<div class="viewed-photo">
									<div class="img-ratio">
										<div class="img-ratio__inner">
											<img src="../public/img/components/slider/slide_1.jpg" alt="">
										</div>
									</div>
								</div>
								<div class="viewed-title">
									Груминг набор для стрижки кошек и собак 5 в 1 Airclipper
								</div>
								<div class="viewed-price">
									15 988 руб
								</div>
							</nuxt-link>
						</SwiperSlide>
						<SwiperSlide>
							<nuxt-link to="" class="viewed-product">
								<div class="viewed-photo">
									<div class="img-ratio">
										<div class="img-ratio__inner">
											<img src="../public/img/components/slider/slide_1.jpg" alt="">
										</div>
									</div>
								</div>
								<div class="viewed-title">
									Груминг набор для стрижки кошек и собак 5 в 1 Airclipper
								</div>
								<div class="viewed-price">
									15 988 руб
								</div>
							</nuxt-link>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
</template>
<script setup>
	const { t } = useI18n(); 
</script>
<style lang="scss">
	.recent-wrapper{
		padding: 40px 0;
	}

	.viewed-head{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;

		h2{
			font-size: $lg;
			font-weight: 400;
			position: relative;
			z-index: 5;

			@media screen and (min-width: $md){
				font-size: $text-2xl;
			}
		}
	}

	.viewed-products{
		position: relative;
	}

	.viewed-product{
		display: grid;
		grid-template-areas:
		'photo .'
		'photo title'
		'photo price'
		'photo .';
		grid-template-columns: 80px 1fr;
		grid-column-gap: 16px;

		font-size: 16px;

		@media screen and (min-width: $sm){
			grid-template-columns: 15% 1fr;
		}

		@media screen and (min-width: $md){
			grid-template-columns: 30% 1fr;
		}
	}

	.viewed-photo{
		grid-area: photo;
		min-width: 0;

		.img-ratio{
			height: 0;
			position: relative;
			padding-top: calc(100% / 1);
			overflow: hidden;

			&__inner{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;

				img{
					height: 100%;
					width: 100%;
					max-width: none;
					max-height: none;
					object-fit: contain;
					object-position: 50% 50%;
				}
			}
		}
	}
	
	.viewed-title{
		grid-area: title;
	}

	.viewed-price{
		grid-area: price;
    	font-weight: 600;
	}

	.recent-slider{
		@media screen and (min-width: $sm){
			padding-top: 60px;
			margin-top: -60px;
		}

		.swiper-slide{
			max-width: max-content;
		}

		.swiper-button-prev,
		.swiper-button-next{
			display: none;
			position: absolute;

			@media screen and (min-width: $sm){
				display: inline-flex;
				align-items: center;
				justify-content: center;
				bottom: auto;
				min-width: 60px;
				min-height: 32px;
				height: auto;
				padding: 0.3rem 1rem;
				color: #fff;
				background-color: $btn-bg;
				border-radius: 10px;
				font-size: 1rem;
				outline: none;
				border: none;
				margin: 0 0 1rem;
				cursor: pointer;
				user-select: none;
			}
		}

		.swiper-button-prev{
			right: 70px;
			top: 10px;
			left: auto;

			&:after{
				content: "➜";
				transform: rotate(180deg);
				font-size: $text-2xl;
				font-weight: 100;
			}
		}

		.swiper-button-next{
			right: 0;
			top: 10px;
			left: auto;

			&:after{
				content: "➜";
				font-size: $text-2xl;
				font-weight: 100;
			}
		}
	}
</style>