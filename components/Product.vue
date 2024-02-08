<template>
  <div class="prod-item">
    <div class="prod-photo">
      <div class="img-ratio">
        <div class="img-ratio__inner">
          <img :alt="props.product.fields.image[0].fields.title" :src="product.fields.image[0].fields.file.url">
        </div>
      </div>
    </div>

    <div class="info-wrap">
      <p class="prod-name">{{ product.fields.name }}</p>
      <div class="prod-price">{{ product.fields.price }} {{ t('product.currency') }}</div>

      <button :disabled="!product.fields.stock" class="prod-btn" type="button">
        {{ product.fields.stock ? t('product.buy') : t('product.outOfStock') }}
      </button>
    </div>
  </div>
</template>
<script setup>
const {t} = useI18n();
const props = defineProps({
	product: {
		type: Object,
		required: true
	}
});

</script>
<style lang="scss">
.prod-item {
	width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 0px 6px 14px 0px rgb(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 6px 14px 0px rgb(0, 0, 0, 0.1);
  box-shadow: 0px 6px 14px 0px rgb(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  @media screen and (min-width: $lg) {
    &:hover {
      -webkit-box-shadow: 0px 6px 14px 0px rgb(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 6px 14px 0px rgb(0, 0, 0, 0.2);
      box-shadow: 0px 6px 14px 0px rgb(0, 0, 0, 0.2);

      .prod-btn {
        background: $btn-hover;
      }
    }
  }
}

.prod-photo {
  min-width: 0;
  position: relative;
}

.prod-name {
  margin-bottom: 1rem;
  word-break: break-word;
}

.prod-price {
  font-size: $text-xl;
  display: block;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 8px;
  margin-top: auto;
  @media screen and (min-width: $md) {
    font-size: 28px;
  }
}

.info-wrap {
  padding: 0.5rem 0.3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (min-width: $md) {
    padding: 10px;
  }
}

.img-ratio {
  height: 0;
  position: relative;
  padding-top: calc(100% / 1);
  background: #efefef;
  border-radius: 6px;
  overflow: hidden;

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

.prod-btn {
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
}
</style>
