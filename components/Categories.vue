<template>
  <div>
    {{ props.categories.items[0] }}
  </div>
  <div v-for="category in props.categories.items" :key="category.sys.id">
    <div>
      {{ category.fields.name }}
    </div>
<!--    <nuxt-link :to="category.fields.slug">-->
<!--      <Category :category="category.fields"/>-->
<!--    </nuxt-link>-->
  </div>
</template>
<script setup>
const props = defineProps({
    categories: Object, // Define the type of the prop (in your case, it's an object)
});
</script>

<style lang="scss">
.categories {
  display: flex;
}
</style>
