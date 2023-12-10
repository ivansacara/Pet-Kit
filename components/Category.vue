<template>
  <div class="category">
      {{ category.fields.name }}
      <img :src="category.fields.image.fields.file.url" alt="">
  </div>
</template>
<script setup>
const props = defineProps({
    category: [Object],
});
</script>

<style lang="scss">
.category {
  display: flex;
  flex-direction: column;

  img {
    width: 50px;
    height: 50px;
  }
}


</style>
