<template>
  <section class="privacy-policy">
    <div class="container">
      <Breadcrumbs :pageTitle="t('links.privacy')"/>

      <p>{{ t('privacy.description.0.text') }}</p>
      <p>{{ t('privacy.description.1.text') }}</p>
      <p>{{ t('privacy.description.2.text') }}
        <strong><a href="www.petkit.md">www.petkit.md</a></strong>
      </p>
      <p>{{ t('privacy.description.3.text') }}
        <strong>{{ t('privacy.description.3.strong') }}</strong>
      </p>
      <p>{{ t('privacy.description.4.text') }}</p>
      <p>{{ t('privacy.description.5.text') }}</p>
      <p>{{ t('privacy.description.6.text') }}</p>
      <p>{{ t('privacy.description.7.text') }}</p>
      <p>{{ t('privacy.description.8.text') }}</p>
      <p>{{ t('privacy.description.9.text') }}
        <strong><a href="www.petkit.md">www.petkit.md</a></strong>
        {{ t('privacy.description.9.text_2') }}
        <strong><a href="tel:+37378876969">+37378876969</a></strong>
      </p>
    </div>
  </section>
</template>

<script setup>

import {useRoute} from "#app";

const {t} = useI18n();
const route = useRoute();

useHead({
  title: t('links.privacy'),
  meta: [
    {name: 'description', content: t('meta.privacy')},
    {property: 'og:title', content: t('links.privacy')},
    {property: 'og:description', content: t('meta.privacy')},
    {property: 'og:image', content: '/favicon.ico'},
    {property: 'og:url', content: `https://petkit.md${route.path}`}
  ],
});
</script>

<style scoped>
p {
  margin-bottom: 20px;
}

a {
  display: inline;
}
</style>
