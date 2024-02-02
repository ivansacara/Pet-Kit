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
