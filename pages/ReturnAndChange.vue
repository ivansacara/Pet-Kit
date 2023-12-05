<template>
  <div>
    <h1>RETURN PAGE</h1>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: 'Return',
    meta: [{ name: "description", content: t("meta.returnDesc") }],
});
</script>
