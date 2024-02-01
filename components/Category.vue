<template>
  <div class="category">
    <div class="img-ratio">
      <div class="img-ratio__inner">
        <picture>
          <source :srcset="props.category.image" type="image/webp">
          <img :alt="props.category.alt" :src="props.category.image" class="category-img">
        </picture>
      </div>
    </div>
    <h5 class="category-name">
      {{ props.category.name }}
    </h5>
  </div>
</template>

<script setup>
const props = defineProps({
	category: Object,
});
console.log(props.category)
</script>

<style lang="scss">
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .category-img {
    height: 100%;
    width: 100%;
    border-radius: 50px;
    max-width: none;
    max-height: none;
    object-position: 50% 50%;
    object-fit: contain;
  }

  .category-name {
    font-weight: 400;
    padding: 0 14px 7px 14px;
    width: 100%;
    display: block;
    font-size: 16px;
    line-height: 20px;
    height: 40px;

    @media screen and (min-width: $md) {
      overflow: hidden;
      height: 50px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: $text-xl;
      line-height: 25px;
      font-weight: normal;
    }
  }

  .img-ratio {
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
