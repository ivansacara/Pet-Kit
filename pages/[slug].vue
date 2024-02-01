<template>
  <div class="container">
    <Breadcrumbs :pageTitle="categoryName"/>
    <div class="catalog">
      <div class="catalog-list">
        <nuxt-link v-for="product in products.items" :key="product.sys.id"
                   :to="localePath(`/product/${product.fields.slug}`)" class="prod-wrap">
          <Product :product="product" @click="selectProduct(product)"/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, computed} from 'vue';
import {useRoute, useAsyncData, useHead} from 'nuxt/app';

const {$client} = useNuxtApp();
const route = useRoute();
const {t} = useI18n();
const localePath = useLocalePath()

// Use ref for viewedProducts and initialize from localStorage if available
const viewedProducts = ref(JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('viewedProducts') : '[]') || []);

const selectProduct = (product) => {
	const existingProductIndex = viewedProducts.value.findIndex(p => p.id === product.sys.id);

	if (existingProductIndex === -1) {
		const newProduct = {
			image: product.fields.image[0].fields.file.url,
			price: product.fields.price,
			description: product.fields.shortDescription,
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
const {data: category} = await useAsyncData('category', () =>
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

const {data: products} = await useAsyncData('products', () => {
	if (category.value.items.length) {
		const firstCategory = category.value.items[0]
		return fetchProducts(firstCategory.sys.id);
	}
	return [];
});

// Update the head element when the category is fetched

useHead(() => ({
	title: category.value.items[0]?.fields.name,
	meta: [
		{name: "description", content: category.value.items[0]?.fields?.description},
		{property: "og:title", content: category.value.items[0]?.fields.name},
		{property: "og:description", content: category.value.items[0]?.fields?.description},
		{property: 'og:image', content: category.value.items[0]?.fields?.image.fields?.file?.url},
		{property: 'og:url', content: `https://petkit.md${route.path}`}
	],
}));


const categoryName = computed(() => category.value.items[0]?.fields?.name);
</script>

<style lang="scss">
.prod-title {
  font-size: $text-lg;
  font-weight: 400;
  padding: 30px 0 0;
  margin-bottom: 16px;

  @media screen and (min-width: $md) {
    font-size: $text-2xl;
  }
}

.prod-wrap {
  display: flex;
  align-items: stretch;
}

.catalog {
  padding: 30px 0;
}

.catalog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
  grid-template-rows: auto;
  grid-row-gap: 32px;
  grid-column-gap: 16px;
  align-items: stretch;

  @media screen and (min-width: $md) {
    grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
    gap: 32px;
  }
}
</style>
