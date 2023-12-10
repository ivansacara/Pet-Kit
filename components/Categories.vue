<template>
  <div class="categories">
    <nuxt-link :to="category.fields.slug" v-for="category in categories.items" :key="category.sys.id">
      <Category :category="category"/>
    </nuxt-link>
  </div>
</template>
<script setup>
const props = defineProps(['categories']);

</script>

<style lang="scss">
.categories {
  display: flex;
}
</style>
