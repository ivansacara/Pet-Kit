<template>
	<div class="container">
		<div class="categories">
			<nuxt-link class="category-link" :to="category.fields.slug" v-for="category in categories.items" :key="category.sys.id">
				<Category :category="category" />
			</nuxt-link>
			<nuxt-link class="category-link" :to="category.fields.slug" v-for="category in categories.items" :key="category.sys.id">
				<Category :category="category" />
			</nuxt-link>
		</div>
	</div>
</template>

<script setup>
	import { useNuxtApp } from "nuxt/app";
	
	const { $client } = useNuxtApp()
	const { t } = useI18n();

	const categories = await $client.getEntries({
		content_type: 'category',
		locale: t("locale"),
	})
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
					box-shadow: 0px 7px 20px 5px rgba(0, 0, 0, 0.25);
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
