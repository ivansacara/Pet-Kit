<template>
	<div class="container">
		<div class="categories" >
			<NuxtLink
					class="category-link"
					v-for="category in categoryInformation.items"
					:key="category.sys.id"
					:to="category.sys.locale.includes('ru') ?
					`/${category.sys.locale}/${category.fields.slug}` :
					`/${category.fields.slug}`"
			>
				<Category :category="category.fields" />
			</NuxtLink>

		</div>
	</div>
</template>

<script setup>
	import { useRoute, useAsyncData } from 'nuxt/app';
	const { t } = useI18n();
	const { $client } = useNuxtApp();
	const route = useRoute();
	const localePath = useLocalePath()

	const props = defineProps({
		categories: Object,
	});
	const categoryType = "category";
	const { data: categoriesData } = await useAsyncData("categories", () =>
			$client.getEntries({
				content_type: categoryType,
				locale: t("locale"),
			})
	);

	// Processing categories data
	const categoryInformation = computed(() => ({
		items: categoriesData.value.items.map(item => ({
			sys: {
				id: item.sys.id,
				locale: item.sys.locale.split('-')[0]
			},
			fields: {
				id: item.sys.id,
				name: item.fields.name,
				image: item.fields.image?.fields.file?.url,
				slug: item.fields.slug
			}
		})),
	}));
</script>

<style lang="scss">
	.categories {
		padding: 30px 0 45px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-flow: row;
		gap: 8px;

		.category-link{
			background: #EFEFEF;
			border-radius: 50px;
			text-align: center;
			transition: 0.5s;
			text-decoration: none;
		}

		@media screen and (min-width: $lg){
			.category-link{
				&:hover{
					box-shadow: 0 7px 20px 5px rgba(0, 0, 0, 0.25);
					transform: scale(107%);
				}
			}
		}

		@media screen and (min-width: $md){
			padding-top: 42px ;
			grid-template-columns: repeat(auto-fill, minmax(min(330px, 100%), 1fr));
			grid-template-rows: auto;
			gap: 32px;
			align-items: self-start;
		}
	}
</style>
