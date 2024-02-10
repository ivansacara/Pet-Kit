<template>
  <section class="categories">
    <div class="container">
      <h1 class="section-title categories__title">{{ t('categories.title') }}</h1>
      <div class="categories__inner">
        <NuxtLink
                v-for="category in categoryInformation.items"
                :key="category.sys.id"
                :to="localePath(`/${category.fields.slug}`)"
                class="category-link"
        >
          <Category :category="category.fields"/>
        </NuxtLink>

      </div>
    </div>
  </section>

</template>

<script setup>
import {useRoute, useAsyncData} from 'nuxt/app';

const {t} = useI18n();
const {$client} = useNuxtApp();
const route = useRoute();
const localePath = useLocalePath()


const props = defineProps({
	categories: Object,
});
const categoryType = "category";
const {data: categoriesData} = await useAsyncData("categories", () =>
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
		},
		fields: {
			id: item.sys.id,
			name: item.fields.name,
			image: item.fields.image?.fields.file?.url,
			alt: item.fields.image?.fields.title,
			slug: item.fields.slug
		}
	})),
}));
</script>

<style lang="scss">
.categories {
  padding-top: 30px;
  padding-bottom: 45px;
}

.categories__inner {
  //padding: 30px 0 45px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  gap: 8px;


  .category-link {
    background: #EFEFEF;
    border-radius: 25px;
    text-align: center;
    transition: 0.5s;
    text-decoration: none;
    @media screen and (min-width: $md) {
      border-radius: 50px;
    }
  }

  @media screen and (min-width: $lg) {
    .category-link {
      &:hover {
        box-shadow: 0 7px 20px 5px rgba(0, 0, 0, 0.25);
        transform: scale(107%);
      }
    }
  }

  @media screen and (min-width: $md) {
    grid-template-columns: repeat(auto-fill, minmax(min(330px, 100%), 1fr));
    grid-template-rows: auto;
    gap: 32px;
    align-items: self-start;
  }
}

.categories__title {
  margin-bottom: 28px;
  @media screen and (min-width: $lg) {
    margin-bottom: 42px;
  }
}
</style>
