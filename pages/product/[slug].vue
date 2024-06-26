<template>
  <div class="container">
    <Breadcrumbs v-if="product" :pageTitle="product.fields.name"
                 :parentPage="product?.fields?.categories[0].name"
                 :parentSlug="product?.fields?.categories[0].slug"/>
  </div>
  <ProductDescription v-if="product" :product="product"/>
</template>
<script setup>
import {useRoute, useAsyncData, useHead} from 'nuxt/app';

const {$client} = useNuxtApp();
const route = useRoute();
const {t} = useI18n();

// Fetching product data with SSR
const {data: productData} = await useAsyncData('product', () =>
    $client.getEntries({
      content_type: 'product',
      'fields.slug': route.params.slug,
      locale: t("locale"),
    })
);
// Process the fetched product data
const product = computed(() => {
  const firstItem = productData.value.items.length > 0 ? productData.value.items[0] : null;
  return firstItem ? {
    sys: {id: firstItem.sys.id},
    fields: {
      categories: firstItem.fields.categories
          ? firstItem.fields.categories.map((cat) => ({
            name: cat.fields.name,
            slug: cat.fields.slug,
          }))
          : [],
      name: firstItem.fields.name,
      shortDescription: firstItem.fields.shortDescription,
      description: firstItem.fields.description,
      price: firstItem.fields.price,
      oldPrice: firstItem.fields.oldPrice,
      image: firstItem.fields.image,
      characteristics: firstItem.fields.characteristics,
      banner: firstItem.fields.banner,
      videoLink: firstItem.fields.videoLink,
      stock: firstItem.fields.stock
    }
  } : null;
});


// Update the head element when the product is fetched
useHead(() => product.value ? {
  title: product.value.fields.name,
  meta: [
    {name: "description", content: product.value.fields.shortDescription + product.value.fields.name},
    {property: "og:title", content: product.value.fields.name},
    {property: "og:description", content: product.value.fields.shortDescription + product.value.fields.name},
    {property: "og:image", content: product.value.fields?.image[0]?.fields?.file?.url},
    {property: 'og:url', content: `https://petkit.md${route.path}`}
  ],
} : {});
</script>

<style lang="scss">
.prod-descr-wrapper {
  padding-top: 30px;
}
</style>
