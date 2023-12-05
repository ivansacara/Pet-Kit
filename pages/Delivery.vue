<template>
  <div>
    <h1>DELIVERY PAGE</h1>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: 'Delivery',
    meta: [{ name: "description", content: t("meta.deliveryDesc") }],
});
</script>
