<template>
  <div class="container">
		<Breadcrumbs v-if="product" :pageTitle="product.fields.name" />
	<div class="prod-descr-wrapper"  v-if="product">
		<ProductDescription :product="product" />
	</div>
  </div>
</template>
<script setup>
import { useRoute, useAsyncData, useHead } from 'nuxt/app';

const { $client } = useNuxtApp();
const route = useRoute();
const { t } = useI18n();

// Fetching product data with SSR
const { data: productData } = await useAsyncData('product', () =>
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
		sys: { id: firstItem.sys.id },
		fields: {
			categories: firstItem.fields.categories ? firstItem.fields.categories.map((cat) => cat.fields.name) : [],
			name: firstItem.fields.name,
			description: firstItem.fields.description,
			price: firstItem.fields.price,
			image: firstItem.fields.image
		}
	} : null;
});

// Update the head element when the product is fetched
useHead(() => product.value ? {
	title: product.value.fields.name,
	meta: [{ name: "description", content: product.value.fields.description }],
} : {});
</script>
<!--<script setup>-->
<!--import { onMounted } from 'vue';-->

<!--const { $client } = useNuxtApp();-->
<!--const route = useRoute();-->
<!--const { t } = useI18n();-->

<!--const product = ref({-->
<!--    item: []-->
<!--});-->

<!--const fetchProducts = async () => {-->
<!--    try {-->
<!--        const response = await $client.getEntries({-->
<!--            content_type: 'product',-->
<!--            'fields.slug': route.params.slug,-->
<!--            locale: t("locale"),-->
<!--        });-->

<!--        if (response.items.length > 0) {-->
<!--            const firstItem = response.items[0];-->
<!--            product.value = {-->
<!--                item: [{-->
<!--                    sys: { id: firstItem.sys.id },-->
<!--                    fields: {-->
<!--                        categories: firstItem.fields.categories ? firstItem.fields.categories.map((cat) => cat.fields.name) : [],-->
<!--                        name: firstItem.fields.name,-->
<!--                        description: firstItem.fields.description,-->
<!--                        price: firstItem.fields.price,-->
<!--                        image: firstItem.fields.image-->
<!--                    }-->
<!--                }]-->
<!--            };-->
<!--            return product.value.item[0]; // Return the first item-->
<!--        }-->
<!--    } catch (error) {-->
<!--        console.error(error);-->
<!--    }-->
<!--};-->

<!--onMounted(async () => {-->
<!--    const firstItem = await fetchProducts();-->
<!--    if (firstItem) {-->
<!--        useHead({-->
<!--            title: firstItem.fields.name,-->
<!--            meta: [{ name: "description", content: firstItem.fields.description }],-->
<!--        });-->
<!--    }-->
<!--});-->

<!--// Initial fetch on component mount-->
<!--fetchProducts();-->
<!--</script>-->
<style lang="scss">
	.prod-descr-wrapper{
		padding: 30px 0;
	}
</style>
