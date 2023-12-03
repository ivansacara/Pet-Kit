<template>
  <div class="categories">
    <nuxt-link :to="category.fields.slug" v-for="category in categories.items" :key="category.sys.id">
      <Category :category="category"/>
    </nuxt-link>
  </div>
</template>
<script setup>

import {useNuxtApp} from "nuxt/app";
const {$client}=useNuxtApp()
const { t } = useI18n();
const categories = await $client.getEntries({
    content_type: 'category',
    locale: t("locale"),
})
console.log(categories.items)
</script>

<style lang="scss">
.categories {
  display: flex;
}
</style>
