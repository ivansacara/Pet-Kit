<template>
  <div class="product-banner">
    <img v-for="image in images" :class="image.fields.title" :src="image?.fields?.file?.url" alt="">
  </div>
</template>

<script setup>

const props = defineProps({
	images: Object,
});
</script>
