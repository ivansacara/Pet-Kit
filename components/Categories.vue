<template>
  <div v-for="category in props.categories.items" :key="category.sys.id">
    <NuxtLink v-if="category.sys.locale.includes('ru')" :to="`${category.sys.locale}/${category.fields.slug}`">
      <Category :category="category.fields" />
    </NuxtLink>
    <NuxtLink v-else :to="`${category.fields.slug}`">
      <Category :category="category.fields" />
    </NuxtLink>
  </div>
</template>
<script setup>
const props = defineProps({
    categories: Object,
});
</script>

<style lang="scss">
.categories {
  display: flex;
}
</style>
