<template>
  <div class="container">
    <Breadcrumbs :pageTitle="categoryName"/>

	<h1 class="prod-title">Title</h1>

    <div class="catalog">
		<div class="catalog-list">
			<nuxt-link v-for="product in products" :to="`product/${product.fields.slug}`" :key="product.sys.id">
				<Product :product="product"/>
			</nuxt-link>
			<nuxt-link v-for="product in products" :to="`product/${product.fields.slug}`" :key="product.sys.id">
				<Product :product="product"/>
			</nuxt-link>
		</div>
	</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import {Breadcrumbs} from "#components";

const { $client } = useNuxtApp();
const route = useRoute();
const { t } = useI18n();

const category = ref([]);
const products = ref([]);
let categoryName

const fetchCategories = async () => {
    try {
        const response = await $client.getEntries({
            content_type: 'category',
            'fields.slug': route.params.slug,
            locale: t("locale"),
        });
        if (response.items.length) {
            const firstCategory = response.items[0];
            category.value = firstCategory;

            // Extract name and id from the category
            const { name } = firstCategory.fields; // Assuming name and id are fields in your category schema
            categoryName = name

            return firstCategory; // Return the first category
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
    useHead({
      title: firstCategory.fields.name,
      meta: [{ name: "description", content: firstCategory.fields?.description }],
    });
  }
});
</script>

<style lang="scss">
	.prod-title{
		font-size: $text-lg;
		font-weight: 400;
		padding: 30px 0 0;
		margin-bottom: 16px;

		@media screen and (min-width: $md){
			font-size: $text-2xl;
		}
	}

	.catalog{
		padding: 30px 0;
	}

	.catalog-list{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
		grid-template-rows: auto;
		grid-row-gap: 32px;
		grid-column-gap: 16px;
		align-items: stretch;

		@media screen and (min-width: $md){
			grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
			gap: 32px;
		}
	}
</style>