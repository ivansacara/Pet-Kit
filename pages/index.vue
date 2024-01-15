<template>
  <Slider/>
  <Categories/>
  <Application/>
  <RecentlyViewed/>
  <About/>
</template>
<script lang="js" setup>
import {useHead} from 'nuxt/app';

const {t} = useI18n();

useHead({
	title: 'PetKit',
	meta: [
		{name: "description", content: t("meta.mainContent")},
		{property: 'og:title', content: 'Petkit'},
		{name: "og:description", content: t("meta.mainContent")},
		{property: 'og:url', content: 'petkit.md'},
		{property: 'og:image', content: 'favicon.ico'}],
});
</script>
