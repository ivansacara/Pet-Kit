<template>
  <nuxt-link v-for="product in products" :to="`product/${product.fields.slug}`" :key="product.sys.id">
    <Product :product="product"/>
  </nuxt-link>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const { $client } = useNuxtApp();
const route = useRoute();
const { t } = useI18n();

const categories = ref([]);
const products = ref([]);
const fetchCategories = async () => {
    try {
        const response = await $client.getEntries({
            content_type: 'category',
            'fields.slug': route.params.slug,
            locale: t("locale"),
        });
        if (response.items.length) {
            categories.value = response.items;
            return response.items[0]; // Return the first category
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

const fetchProducts = async (categoryId) => {
    try {
        const response = await $client.getEntries({
            content_type: 'product',
            'fields.categories.sys.id[in]': categoryId,
            locale: t("locale"),
        });
        products.value = response.items;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

onMounted(async () => {
    const firstCategory = await fetchCategories();
    if (firstCategory) {
        await fetchProducts(firstCategory.sys.id);
        // useHead({
        //     title: firstCategory.fields.name,
        //     // meta: [{ name: "description", content: t("meta.categoryDesc") }],
        // });
    }
});
</script>
<!--<script setup>-->
<!--const { $client } = useNuxtApp();-->
<!--const route = useRoute();-->
<!--const { t } = useI18n();-->

<!--onMounted(async () => {-->
<!--  let title = categories.items[0].fields.name;-->
<!--  useHead({-->
<!--    title: title,-->
<!--    meta: [{ name: "description", content: t("meta.categoryDesc") }],-->
<!--  });-->
<!--});-->

<!--const categories = await $client.getEntries({-->
<!--  content_type: 'category',-->
<!--  "fields.slug": route.params.slug,-->
<!--  locale: t("locale"),-->
<!--});-->
<!--const products = await $client.getEntries({-->
<!--  content_type: 'product',-->
<!--  'fields.categories.sys.id[in]': categories.items[0].sys.id,-->
<!--  locale: t("locale"),-->
<!--});-->

<!--</script>-->

