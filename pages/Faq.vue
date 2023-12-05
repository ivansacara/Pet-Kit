<template>
  <div>
    <h1>FAQ PAGE</h1>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: 'Faq',
    meta: [{ name: "description", content: t("meta.faqDesc") }],
});
</script>
