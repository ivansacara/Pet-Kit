<template>
  <div class="product-banner">
    <img v-for="image in images" :alt="image.fields.description" :class="image.fields.title"
         :src="image?.fields?.file?.url">
  </div>
</template>

<script setup>

const props = defineProps({
	images: Object,
});
</script>

<style lang="scss">
.product-banner {
  img {
    width: 100%;
    height: auto;
  }

  .mob {
    display: block;
    @media screen and (min-width: $md) {
      display: none;
    }
  }

  .desc {
    display: none;
    @media screen and (min-width: $md) {
      display: block;
    }
  }
}

</style>
