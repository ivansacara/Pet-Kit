<template>
  <section class="return-section">
    <div class="container">
      <Breadcrumbs :pageTitle="t('links.return')" />
      <div class="return-wrapper">
        <h1 class="return-title">
          <strong>{{ t('returnInfo.title') }}</strong>
        </h1>
        <div class="return-descr">
          <div class="spacing">
            <p>
              <strong>{{ t('returnInfo.description.0.strong') }}</strong>
            </p>
          </div>
          <div class="spacing">
            <p>{{ t('returnInfo.description.1.text') }}</p>
          </div>
          <div class="spacing">
            <p>{{ t('returnInfo.description.2.text') }}</p>
          </div>
          <div class="spacing">
            <p>{{ t('returnInfo.description.3.text') }}</p>
            <p>{{ t('returnInfo.description.3.additionalInfo') }}</p>
          </div>
          <div>
            <p>
              <span>{{ t('returnInfo.automaticLitterInfo.0') }}</span>
              <br />
              <span>{{ t('returnInfo.automaticLitterInfo.1') }}</span>
              <br />
              <span>{{ t('returnInfo.automaticLitterInfo.2') }}</span>
              <br />
              <span>{{ t('returnInfo.automaticLitterInfo.3') }}</span>
              <br />
              <span>{{ t('returnInfo.automaticLitterInfo.4') }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from '#app';

const { t } = useI18n();
const route = useRoute();

useHead({
  title: t('links.return'),
  meta: [
    { name: 'description', content: t('meta.return') },
    { property: 'og:title', content: t('links.return') },
    { property: 'og:description', content: t('meta.return') },
    { property: 'og:image', content: '/petkit.png' },
    { property: 'og:url', content: `https://petkit.md${route.path}` },
  ],
});
</script>

<style lang="scss">
.return-wrapper {
  padding: 30px 0 40px;

  @media screen and (min-width: $md) {
    padding: 30px 0 47px;
  }
}

.return-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 46px;

  @media screen and (min-width: $md) {
    font-size: 40px;
  }
}

.return-descr {
  p {
    font-size: $text-base;
    line-height: 1.4;
  }

  .spacing {
    margin-bottom: 46px;
  }
}
</style>
