<template>
  <Slider/>
  <Categories />
  <Application  />
  <RecentlyViewed />
  <About />
</template>
<script setup lang="js">
  import { useHead } from 'nuxt/app';
  const { t } = useI18n();

  useHead({
      title: 'PetKit',
      meta: [{ name: "description", content: t("meta.mainContent") }],
  });
</script>
