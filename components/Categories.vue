<template>
	<div class="container">
		<div class="categories" >
			<NuxtLink
					class="category-link"
					v-for="category in props.categories.items"
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
	const props = defineProps({
		categories: Object,
	});
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
