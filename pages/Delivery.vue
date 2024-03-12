<template>
  <section class="delivery-section">
    <div class="container">
      <Breadcrumbs :pageTitle="t('links.delivery')"/>

      <div class="delivery-wrapper">
        <h1 class="delivery-title">
          <strong>{{ t('delivery.title') }}</strong>
        </h1>
        <div class="delivery-descr">
          <div class="spacing">
            <p>{{ t('delivery.description.0.text') }}</p>
            <p>{{ t('delivery.description.1.text') }}</p>
            <p>
              {{ t('delivery.description.2.text') }} <br>
              {{ t('delivery.description.3.text') }}
            </p>
            <ul>
              <li>{{ t('delivery.description.4.text') }}</li>
              <li>{{ t('delivery.description.5.text') }}</li>
              <li>{{ t('delivery.description.6.text') }}</li>
              <li>{{ t('delivery.description.7.text') }}</li>
            </ul>
            <p>
              {{ t('delivery.description.8.text') }}
              <nuxt-link
                  class="link"
                  target="_blank"
                  to="tel:+37378876969">
                +37378876969
              </nuxt-link>
            </p>
          </div>
          <div>
            <h4>{{ t('delivery.paymentInfo.0.text') }}</h4>
            <p>{{ t('delivery.paymentInfo.1.text') }}</p>
            <p>{{ t('delivery.paymentInfo.2.text') }}</p>
            <br>
            <p>{{ t('delivery.paymentInfo.3.text') }}</p>
            <p>{{ t('delivery.paymentInfo.4.text') }}</p>
            <p>{{ t('delivery.paymentInfo.5.text') }}</p>
            <p>{{ t('delivery.paymentInfo.6.text') }}</p>
            <b>{{ t('delivery.paymentInfo.7.text') }}</b>
            <p>{{ t('delivery.paymentInfo.8.text') }}</p>
            <p>{{ t('delivery.paymentInfo.9.text') }}</p>
          </div>
        </div>
      </div>
    </div>

    <Banner
        :banner-descr="t('delivery.banner.text')"
        :banner-title="t('delivery.banner.title')"
        image="/img/components/content/dog.png"
    />
  </section>
</template>

<script setup>
import {useHead} from 'nuxt/app';
import {useRoute} from "#app";

const {t} = useI18n();
const route = useRoute();

useHead({
  title: t('links.delivery'),
  meta: [
    {name: 'description', content: t('meta.delivery')},
    {property: 'og:title', content: t('links.delivery')},
    {property: 'og:description', content: t('meta.delivery')},
    {property: 'og:image', content: '/favicon.ico'},
    {property: 'og:url', content: `https://petkit.md${route.path}`}
  ],
});
</script>

<style lang="scss">
.delivery-wrapper {
  padding: 30px 0;

  @media screen and (min-width: $md) {
    padding: 30px 0 37px;
  }
}

.delivery-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 46px;

  @media screen and (min-width: $md) {
    font-size: 40px;
  }
}


.delivery-descr {

  h4 {
    margin-bottom: 15px;
  }

  p {
    font-size: $text-base;

    @media screen and (min-width: $md) {
      font-size: $text-lg;
    }

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    margin-bottom: 20px;

    li {
      margin-bottom: 5px;
      list-style-type: disc;
    }
  }

  a {
    display: inline;
    text-decoration: underline;
  }

  > div:last-child {
    .link {
      text-decoration: underline;
      display: unset;

      &:hover {
        color: #283b54;
        text-decoration: none;
      }
    }
  }

  .spacing {
    margin-bottom: 35px;
  }
}
</style>
