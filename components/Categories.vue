<template>
  <div v-for="category in props.categories.items" :key="category.fields.id">
    <nuxt-link :to="category.fields.slug">
      <Category :category="category.fields"/>
    </nuxt-link>
  </div>
</template>
<script setup>
// <div v-for="category in props.categories.items" :key="category.fields.id">
//     <nuxt-link :to="category.fields.slug">
//     <Category :category="category.fields"/>
//     </nuxt-link>
// </div>
const props = defineProps({
    categories: Object,
});
</script>

<style lang="scss">
.categories {
  display: flex;
}
</style>
