<template>
  <div class="breadcrumb-wrapper">
    <ul class="breadcrumb">
      <li class="breadcrumb-item home">
        <nuxt-link :to="localePath('/')"
                   class="breadcrumb-link">
          {{ t('mainPage') }}
        </nuxt-link>
      </li>
      <li v-if="parentPage" class="breadcrumb-item home">
        <nuxt-link :to="localePath(`/${parentSlug}`)"
                   class="breadcrumb-link">
          {{ parentPage }}
        </nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <span class="breadcrumb-page">{{ pageTitle }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const {t} = useI18n();
const props = defineProps({
	pageTitle: String,
	parentPage: String,
	parentSlug: String
});
</script>

<style lang="scss">
.breadcrumb-wrapper {
  padding: 16px 0;
  display: grid;
  justify-content: start;
}

.breadcrumb-item {
  display: inline-block;
  vertical-align: top;
  color: $text-breadcrumb;
  position: relative;
  font-size: $text-base;
  font-weight: 400;

  &:not(:last-child) {
    margin-right: 31px;

    &:after {
      content: '-';
      font-size: 1.5rem;
      vertical-align: middle;
      line-height: 0;
      font-family: auto;
      position: absolute;
      top: 12px;
      right: -20px
    }
  }
}
</style>
