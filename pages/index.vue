<template>
  <Slider />
  <Categories :categories="categories"/>
  <Application  />
  <About />
</template>
<script setup lang="js">
const { t } = useI18n();

useHead({
    title: 'PetKit',
    meta: [{ name: "description", content: t("meta.mainDesc") }],
});

import {useNuxtApp} from "nuxt/app";
const {$client}=useNuxtApp()

const categories = await $client.getEntries({
    content_type: 'category',
    locale: t("locale"),
})
</script>
<style lang="scss">

</style>
