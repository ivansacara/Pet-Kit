<template>
  <div class="container">
    <Breadcrumbs :pageTitle="t('links.categories')"/>
  </div>
  <Categories/>
</template>
<script lang="js" setup>
import {useHead} from 'nuxt/app';
import {useRoute} from "#app";

const {t} = useI18n();
const route = useRoute();

useHead({
	title: t("links.categories"),
	meta: [
		{name: "description", content: t("meta.main")},
		{property: 'og:title', content: t("links.categories")},
		{property: "og:description", content: t("meta.main")},
		{property: 'og:image', content: '/petkit.png'},
		{property: 'og:url', content: `https://petkit.md${route.path}`},
	],
});
</script>
