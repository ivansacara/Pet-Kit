<template>
  <div class="container">
    <div class="prod-descr">
      <div class="prod-area">
        <div class="prod-descr-photo">
          <ProductSlider :productSlider="product.fields.image" @update-lightbox="lightboxVisible = !lightboxVisible"/>
        </div>
      </div>
      <div class="prod-descr-title">
        <h1 class="title-head">{{ product.fields.name }}</h1>
      </div>

      <p class="prod-descr-info">
        {{ product.fields.shortDescription }}
      </p>
      <div class="prod-descr-price">
        <span class="price-cur">{{ product.fields.price }} {{ t('product.currency') }}</span>
      </div>
      <div class="prod-descr-buy">
        <button :disabled="!product.fields.stock" class="prod-descr-btn" @click="() => openModal()">
          {{ product.fields.stock ? t('product.buy') : t('product.outOfStock') }}
        </button>
        <ModalsContainer/>
      </div>
    </div>
    <Product-info :characteristics="characteristics" :description="description"/>
  </div>
  <VideoBanner v-if="product.fields.videoLink"
               :video-url="product.fields.videoLink"/>
  <ProductBanner v-if="!product.fields.videoLink"
                 :images="product.fields.banner"/>

  <FsLightbox :exitFullscreenOnClose="true" :sources="imageSources" :toggler="lightboxVisible" onclick=""/>

</template>
<script lang="ts" setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import FsLightbox from "fslightbox-vue/v3";
import { ModalsContainer, useModal } from 'vue-final-modal'
import FeedbackModal from "~/components/FeedbackModal.vue";
import ProductBanner from "~/components/Product-banner.vue";
import ProductInfo from "~/components/Product-info.vue";

const {t} = useI18n();
const {open, close} = useModal({
    component: FeedbackModal,
    attrs: {
        onConfirm() {
            close()
        },
    },
})

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const description = documentToHtmlString(props.product.fields.description);
const characteristics = documentToHtmlString(props.product.fields.characteristics)
const lightboxVisible = ref(false);
const imageSources = Object.values(props.product.fields.image).map(image => image?.fields.file?.url);

const openModal = () => {
    open();
}
</script>

<style lang="scss">
.main-slider {
  display: block;

  @media screen and (min-width: $lg) {
    display: none;
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

.prod-descr {
  padding-top: 30px;
  padding-bottom: 45px;
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
				"photo descr"
				"photo price"
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
    font-weight: bold;
    color: $black;
    border-top: 1px solid $border;

    @media screen and (min-width: $md) {
      padding: 0;
      margin: 0 0 24px 0;
      font-size: 24px;
      line-height: 32px;
      border-top: 0;
    }
  }
}

.prod-descr-price {
  padding: 6px 0 11px 0;
  //grid-area: price;

  @media screen and (min-width: $md) {
    padding: 0 0 11px 0;
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
      font-size: 38px;
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

  @media screen and (min-width: $md) {
    display: grid;
    grid-template-columns: 1fr minmax(220px, max-content);
    grid-column-gap: 1rem;
    align-items: center;
    padding: 0;
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

    &[disabled] {
      background: $disabled;
    }
  }
}

.fslightbox-source {
  background: white;
}

.video-banner-container {
  margin-bottom: -1px;
  position: relative;
}

</style>
