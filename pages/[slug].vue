<template>
  <nuxt-link :to="`product/${product.fields.slug}`" v-for="product in products.items" :key="products.sys.id">
    <Product :product="product"/>
  </nuxt-link>
</template>
<script setup>
import {useNuxtApp} from "nuxt/app";
const {$client}=useNuxtApp()
const route = useRoute();
const { t } = useI18n();

const categories = await $client.getEntries({
    content_type: 'category',
    "fields.slug": route.params.slug,
    locale: t("locale"),
})
const products = await $client.getEntries({
    content_type: 'product',
    'fields.categories.sys.id[in]': categories.items[0].sys.id,
    locale: t("locale"),
})
console.log(products);
</script>

