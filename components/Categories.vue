<template>
  <div>
    <h1>CATEGORIES</h1>
  </div>
</template>
<script setup>

import {useNuxtApp} from "nuxt/app";
const {$client}=useNuxtApp()
const { t } = useI18n();
const data =await $client.getEntries({
    locale: t("locale"),
})
console.log(data)
</script>
