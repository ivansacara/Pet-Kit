<template>
  <Slider />
  <Categories />
  <Application  />
  <About />
</template>
<script setup lang="js">
const { t } = useI18n();

useHead({
    title: 'PetKit',
    meta: [{ name: "description", content: t("meta.mainDesc") }],
});
</script>
<style lang="scss">

</style>
