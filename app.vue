<template>
  <div class="wrapper">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
<script setup >
import {useNuxtApp} from "nuxt/app";
const {$client}=useNuxtApp()
const { t } = useI18n();
const categories = await $client.getEntries({
    content_type: 'category',
    locale: t("locale"),
})
console.log(categories)
</script>
