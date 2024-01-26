<template>
  <Slider />
  <Categories />
  <Application />
  <RecentlyViewed />
  <About />
</template>
<script lang="js" setup>
import {useHead} from 'nuxt/app';

const {t} = useI18n();

useHead({
	title: 'PetKit',
	meta: [
		{name: "description", content: t("meta.main")},
		{name: 'og:title', content: 'Petkit'},
		{name: "og:description", content: t("meta.main")},
		{name: 'og:url', content: 'petkit.md'},
		{name: 'og:image', content: '/petkit.png'},
	],
});
</script>
