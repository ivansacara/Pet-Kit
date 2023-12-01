<template>
  <div class="cn-locales">
    <NuxtLink class="cn-locales__link" :to="switchLocalePath('ro')"
    >RO</NuxtLink
    >
    <NuxtLink class="cn-locales__link" :to="switchLocalePath('ru')"
    >RU</NuxtLink
    >
  </div>
</template>

<style scoped lang="scss">
.cn-locales {
  position: relative;
  z-index: 12;
  &__link {
    color: var(--cn-link-color-normal);
    text-decoration: none;
    transition: 0.3s ease-in-out;
    &:hover {
      color: var(--cn-link-color-hover);
    }

    &.router-link-active {
      display: none;
    }
  }
}
</style>
<script setup lang="ts">
</script>
