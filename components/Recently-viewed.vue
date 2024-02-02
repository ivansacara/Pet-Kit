<template>
  <section v-if="viewedProducts.length" class="recently-viewed">
    <div class="container">
      <div class="recent-wrapper">
        <div class="viewed-products">
          <div class="viewed-head">
            <h2 class="section-title">{{ t('recently.title') }}</h2>
          </div>
          <Swiper
                  :breakpoints="{
							640: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							}
						}"
                  :modules="[SwiperEffectCreative, SwiperNavigation]"
                  :navigation="true"
                  :slides-per-view="1.2"
                  :space-between="30"
                  class="recent-slider">

            <SwiperSlide v-for="viewedProduct in viewedProducts" :key="viewedProduct.id">
              <nuxt-link :to="viewedProduct.locale.includes('ru') ?
													`/${viewedProduct.locale}/product/${viewedProduct.slug}` :
													`product/${viewedProduct.slug}`"
                         class="viewed-product">
                <div class="viewed-photo">
                  <div class="img-ratio">
                    <div class="img-ratio__inner">
                      <img :alt="viewedProduct.alt" :src="viewedProduct.image">
                    </div>
                  </div>
                </div>
                <div class="viewed-title">
                  {{ viewedProduct.description }}
                </div>
                <div class="viewed-price">
                  {{ viewedProduct.price }} {{ t('product.currency') }}
                </div>
              </nuxt-link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>

</template>
<script setup>
const {t} = useI18n();
import {onMounted} from 'vue';

const viewedProducts = ref([]);

onMounted(() => {
	const storedData = localStorage.getItem('viewedProducts');
	if (storedData) {
		viewedProducts.value = JSON.parse(storedData);
	}
});
</script>
<style lang="scss">
.recent-wrapper {
  padding: 40px 0;
}

.viewed-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: $text-lg;
    font-weight: 400;
    position: relative;
    z-index: 5;

    @media screen and (min-width: $md) {
      font-size: $text-2xl;
    }
  }
}

.viewed-products {
  position: relative;
}

.viewed-product {
  display: grid;
  grid-template-areas:
		'photo .'
		'photo title'
		'photo price'
		'photo .';
  grid-template-columns: 80px 1fr;
  grid-column-gap: 16px;

  font-size: 16px;

  @media screen and (min-width: $sm) {
    grid-template-columns: 30% 1fr;
  }
}

.viewed-photo {
  grid-area: photo;
  min-width: 0;

  .img-ratio {
    height: 0;
    position: relative;
    padding-top: calc(100% / 1);
    overflow: hidden;

    .img-ratio__inner {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      img {
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

.viewed-title {
  grid-area: title;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
}

.viewed-price {
  grid-area: price;
  font-weight: 600;
}

.recent-slider {
  @media screen and (min-width: $sm) {
    padding-top: 60px;
    margin-top: -60px;
  }

  @media screen and (min-width: $md) {
    .swiper-slide {
      max-width: 310px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    position: absolute;

    &:hover {
      background-color: $btn-hover;
    }

    @media screen and (min-width: $sm) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      bottom: auto;
      min-width: 60px;
      min-height: 32px;
      height: auto;
      padding: 0.3rem 1rem;
      color: $default;
      background-color: $btn-bg;
      border-radius: 10px;
      font-size: 1rem;
      outline: none;
      border: none;
      margin: 0 0 1rem;
      cursor: pointer;
      user-select: none;
      transition: background-color .3s ease;
    }
  }

  .swiper-button-prev {
    right: 70px;
    top: 10px;
    left: auto;

    &:after {
      content: "➜";
      transform: rotate(180deg);
      font-size: $text-2xl;
      font-weight: 100;
    }
  }

  .swiper-button-next {
    right: 0;
    top: 10px;
    left: auto;

    &:after {
      content: "➜";
      font-size: $text-2xl;
      font-weight: 100;
    }
  }
}
</style>
