<template>
	<nuxt-link 
		:to="`product/${product.fields.slug}`" 
		v-for="product in products.items" 
		:key="products.sys.id">
		<Product :product="product" />
	</nuxt-link>
</template>
<script setup>
	const { $client } = useNuxtApp();
	const route = useRoute();
	const { t } = useI18n();

	onMounted(async () => {
		let title = categories.items[0].fields.name;
		useHead({
			title: title,
			meta: [{ name: "description", content: t("meta.categoryDesc") }],
		});
	});

	const categories = await $client.getEntries({
		content_type: 'category',
		"fields.slug": route.params.slug,
		locale: t("locale"),
	});
	
	const products = await $client.getEntries({
		content_type: 'product',
		'fields.categories.sys.id[in]': categories.items[0].sys.id,
		locale: t("locale"),
	});
</script>

