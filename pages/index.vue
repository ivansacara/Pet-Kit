<template>
  <Slider/>
  <Categories/>
  <Application/>
  <RecentlyViewed/>
  <About/>
  <Map/>
</template>
<script lang="ts" setup>
const {t} = useI18n();

useHead({
  title: t('meta.mainTitle'),
  meta: [
    {name: 'description', content: t('meta.main')},
    {property: 'og:title', content: 'Petkit'},
    {property: 'og:description', content: t('meta.main')},
    {property: 'og:url', content: 'https://petkit.md'},
    {property: 'og:image', content: '/favicon.ico'},
  ],
});
</script>
