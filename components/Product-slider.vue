<template>
  <Splide :options="mainOptions" class="main-slider">
    <SplideSlide v-for="image in productSlider" :key="image?.fields.file?.url">
      <nuxt-link class="main-slide-img-ratio main-slide-img-ratio_cover product-photo" to="" @click="updateLightbox">
        <div class="main-slide-img-ratio__inner">
          <picture>
            <source :srcset="image?.fields.file?.url" type="image/webp">
            <img :alt="image?.fields.title" :src="image?.fields.file?.url">
          </picture>
        </div>
      </nuxt-link>
    </SplideSlide>
  </Splide>

  <Splide ref="main" :options="sdOptions" class="sd-slider">
    <SplideSlide v-for="image in productSlider" :key="image?.fields.file?.url">
      <nuxt-link class="main-slide-img-ratio main-slide-img-ratio_cover main-slide-product-photo" to=""
                 @click="updateLightbox">
        <div class="main-slide-img-ratio__inner">
          <picture>
            <source :srcset="image?.fields.file?.url" type="image/webp">
            <img :alt="image?.fields.title" :src="image?.fields.file?.url">
          </picture>
        </div>
      </nuxt-link>
    </SplideSlide>
  </Splide>

  <Splide ref="thumbs" :options="thumbsOptions" class="gallery-slider product-list">
    <SplideSlide v-for="image in productSlider" :key="image?.fields.file?.url">
      <nuxt-link class="main-slide-img-ratio main-slide-img-ratio_cover main-slide-product-photo" to="">
        <div class="main-slide-img-ratio__inner">
          <picture>
            <source :srcset="image?.fields.file?.url" type="image/webp">
            <img :alt="image?.fields.title" :src="image?.fields.file?.url">
          </picture>
        </div>
      </nuxt-link>
    </SplideSlide>
  </Splide>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { defineComponent } from 'vue';
import { Splide, SplideSlide, type Options } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default defineComponent({
    name: 'ThumbnailsExample',
    props: ['productSlider'],
    emits: ['update-lightbox'],

    components: {
        Splide,
        SplideSlide,
    },
    methods: {
        updateLightbox() {
            this.$emit('update-lightbox', true);
        }
    },
    setup() {
        const main = ref<InstanceType<typeof Splide>>();
        const thumbs = ref<InstanceType<typeof Splide>>();

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
            rewind: false,
            fixedWidth: 110,
            fixedHeight: 110,
            isNavigation: true,
            gap: 12,
            pagination: false,
            cover: true,
            dragMinThreshold: {
                mouse: 4,
                touch: 10,
            },
            direction: 'ttb',
            height: 'auto',
        };

        onMounted(() => {
            const thumbsSplide = thumbs.value?.splide;
            if (thumbsSplide) {
                main.value?.sync(thumbsSplide);
            }
        });

        return {
            main,
            thumbs,
            mainOptions,
            sdOptions,
            thumbsOptions,
        }
    },
});
</script>

<style lang="scss">
	.main-slider {
		display: block;

		@media screen and (min-width: $lg) {
			display: none;
		}
	}

	.product-list {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: 100%;
  padding: 40px 0;

  .splide__track {
    height: 100%;
  }

  .splide__slide {
    border: none !important;

    &.is-active {
      .product-photo {
        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 2px solid #8dc8ff;
          pointer-events: none;
          z-index: 1;
        }
      }
    }
  }

  .splide__arrow {
    width: 100%;
    height: 30px;
    outline: none;
    border: 0.5px solid #dedede;
    color: #dedede;
    border-radius: 3px;
    background-color: transparent;

    svg {
      font-size: 16px;
      fill: #dedede;
      transition: 0.2s ease-in-out;
    }

    &.splide__arrow--prev {
      top: 2px;
      bottom: auto;
    }

    &.splide__arrow--next {
      top: auto;
      bottom: 2px;
    }

    &:disabled {
      display: none;
    }

    &:hover {
      border: 0.5px solid #86c5ff;

      svg {
        fill: #86c5ff;
      }
    }
  }
}

	.splide__slide {
		height: auto !important;
		width: auto;
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

	.main-slide-img-ratio {
  height: 0;
  position: relative;
  padding-top: calc(100% / 1);

  &.main-slide-img-ratio_cover {
    overflow: hidden;
  }

  .main-slide-img-ratio__inner {
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
</style>