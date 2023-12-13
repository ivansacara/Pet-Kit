<template>
		<div class="recent-wrapper">
			<div class="viewed-products">
				<div class="viewed-head"> 
					<h2>Ранее просмотренные</h2>

					<div class="products-controls">
						<div class="arrow-left">
							<span class="special-products__slider-arrow-icon icon-arrow-left"></span>
						</div>
						<div class="arrow-right">
							<span class="special-products__slider-arrow-icon icon-arrow-right"></span>
						</div>
					</div>
				</div>
				<swiper 
					:navigation="true" 
					:modules="modules" 
					class="recent-slider">
					
					<swiper-slide>
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
					</swiper-slide>
					<swiper-slide>
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
					</swiper-slide>
				</swiper>
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
			font-size: 18px;
		}
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
    	font-weight: 500;
	}
</style>