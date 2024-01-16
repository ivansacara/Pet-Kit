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
		{name: 'og:title', content: 'Petkit'},
		{name: "og:description", content: t("meta.mainContent")},
		{name: 'og:url', content: 'petkit.md'},
		{name: 'og:image', content: '/android-chrome-512x512.png'},
		{name: 'ag:image', content: 'android-chrome-512x512.png'}
	],
});
</script>
