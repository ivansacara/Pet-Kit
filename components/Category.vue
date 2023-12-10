<template>
  <div class="category">
    <h1>{{ props.category.name }}</h1>
    <img :src="props.category.image" alt="">
  </div>
</template>
<script setup>

// <div className="category">
//     <h1>{{props.category.name}}</h1>
//     <img :src="props.category.image" alt="">
// </div>
const props = defineProps({
    category: Object,
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
