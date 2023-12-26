<template>
  <div class="container">
    <Breadcrumbs :pageTitle="categoryName"/>

		<h1 class="prod-title">{{categoryName}}</h1>
    <div class="catalog">
		<div class="catalog-list">
			<nuxt-link v-for="product in products.items" :to="`product/${product.fields.slug}`" :key="product.sys.id">
				<Product :product="product" @click="selectProduct(product)"/>
			</nuxt-link>
		</div>
	</div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRoute, useAsyncData, useHead } from 'nuxt/app';
import { Breadcrumbs } from "#components";

const { $client } = useNuxtApp();
const route = useRoute();
const { t } = useI18n();

// Use ref for viewedProducts and initialize from localStorage if available
const viewedProducts = ref(JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('viewedProducts') : '[]') || []);

const selectProduct = (product) => {
	const existingProductIndex = viewedProducts.value.findIndex(p => p.id === product.sys.id);

	if (existingProductIndex === -1) {
		const newProduct = {
			image: product.fields.image[0].fields.file.url,
			price: product.fields.price,
			description: product.fields.description,
			slug: product.fields.slug,
			locale: product.sys.locale.split('-')[0],
			id: product.sys.id
		};

		viewedProducts.value.unshift(newProduct);
		if (viewedProducts.value.length > 10) {
			viewedProducts.value = viewedProducts.value.slice(0, 10);
		}

		if (typeof window !== 'undefined') {
			localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts.value));
		}
	}
};

// Fetching category data with SSR
const { data: category } = await useAsyncData('category', () =>
		$client.getEntries({
			content_type: 'category',
			'fields.slug': route.params.slug,
			locale: t("locale"),
		})
);

// Fetching products data with SSR
const fetchProducts = async (categoryId) => {
	return $client.getEntries({
		content_type: 'product',
		'fields.categories.sys.id[in]': categoryId,
		locale: t("locale"),
	});
};

const { data: products } = await useAsyncData('products', () => {
	if (category.value.items.length) {
		const firstCategory = category.value.items[0]
		return fetchProducts(firstCategory.sys.id);
	}
	return [];
});

// Update the head element when the category is fetched
useHead(() => ({
	title: category.value.items[0]?.fields.name,
	meta: [{ name: "description", content: category.value.items[0]?.fields?.description }],
}));

const categoryName = computed(() => category.value.items[0]?.fields?.name);
</script>

<!--<script setup>-->
<!--import { ref, onMounted } from 'vue';-->
<!--import {Breadcrumbs} from "#components";-->

<!--const { $client } = useNuxtApp();-->
<!--const route = useRoute();-->
<!--const { t } = useI18n();-->

<!--const category = ref([]);-->
<!--const products = ref([]);-->
<!--const viewedProducts = ref([]);-->
<!--let categoryName-->

<!--const selectProduct = (product) => {-->
<!--	// Получаем существующие данные из localStorage-->
<!--	const storedData = localStorage.getItem('viewedProducts');-->

<!--	// Если данные уже существуют, парсим их-->
<!--	if (storedData) {-->
<!--		viewedProducts.value = JSON.parse(storedData);-->
<!--	}-->

<!--	// Проверяем, есть ли продукт с таким id в массиве-->
<!--	const existingProductIndex = viewedProducts.value.findIndex(p => p.id === product.sys.id);-->

<!--	// Если продукт с таким id не найден, добавляем его-->
<!--	if (existingProductIndex === -1) {-->
<!--		const newProduct = {-->
<!--			image: product.fields.image[0].fields.file.url,-->
<!--			price: product.fields.price,-->
<!--			description: product.fields.description,-->
<!--			slug: product.fields.slug,-->
<!--			locale: product.sys.locale.split('-')[0],-->
<!--			id: product.sys.id-->
<!--		};-->

<!--		// Добавляем новый продукт в начало массива-->
<!--		viewedProducts.value.unshift(newProduct);-->

<!--		// Убеждаемся, что массив не превышает 10 элементов-->
<!--		if (viewedProducts.value.length > 10) {-->
<!--			viewedProducts.value = viewedProducts.value.slice(0, 10);-->
<!--		}-->

<!--		// Сохраняем данные в localStorage-->
<!--		localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts.value));-->
<!--	}-->
<!--};-->

<!--const fetchCategories = async () => {-->
<!--    try {-->
<!--        const response = await $client.getEntries({-->
<!--            content_type: 'category',-->
<!--            'fields.slug': route.params.slug,-->
<!--            locale: t("locale"),-->
<!--        });-->
<!--        if (response.items.length) {-->
<!--            const firstCategory = response.items[0];-->
<!--            category.value = firstCategory;-->

<!--            // Extract name and id from the category-->
<!--            const { name } = firstCategory.fields; // Assuming name and id are fields in your category schema-->
<!--            categoryName = name-->

<!--            return firstCategory; // Return the first category-->
<!--        }-->
<!--    } catch (error) {-->
<!--        console.error('Error fetching categories:', error);-->
<!--    }-->
<!--};-->

<!--const fetchProducts = async (categoryId) => {-->
<!--    try {-->
<!--        const response = await $client.getEntries({-->
<!--            content_type: 'product',-->
<!--            'fields.categories.sys.id[in]': categoryId,-->
<!--            locale: t("locale"),-->
<!--        });-->
<!--        products.value = response.items;-->
<!--    } catch (error) {-->
<!--        console.error('Error fetching products:', error);-->
<!--    }-->
<!--};-->

<!--onMounted(async () => {-->
<!--  const firstCategory = await fetchCategories();-->
<!--  if (firstCategory) {-->
<!--    await fetchProducts(firstCategory.sys.id);-->
<!--    useHead({-->
<!--      title: firstCategory.fields.name,-->
<!--      meta: [{ name: "description", content: firstCategory.fields?.description }],-->
<!--    });-->
<!--  }-->
<!--});-->
<!--</script>-->

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
