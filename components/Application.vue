<template>
  <section class="app-section">
    <div class="container">
      <div class="app-wrapper">
        <h2 class="section-title app-title">{{ t('application.title') }}</h2>
        <div class="app-info-block">
          <div class="app-descr">
            <p>{{ t('application.appDescription.0.text') }}</p>
            <p>{{ t('application.appDescription.1.text') }}</p>
            <p>{{ t('application.appDescription.2.text') }}</p>
            <p>{{ t('application.appDescription.3.text') }}</p>
          </div>
          <div class="app-img">
            <img alt="mobile_application_img" src="/img/components/application/phone-bg.png">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const {t} = useI18n();

</script>

<style lang="scss">
.app-wrapper {
  padding: 40px 0;
}

.app-title {
  margin-bottom: 16px;
}

.app-info-block {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  background: url('/img/components/application/free-icon-paw.png') center no-repeat;

  @media screen and (min-width: $lg) {
    display: grid;
    grid-template-columns: 44% 24.22% 31.18%;
    align-items: flex-start;
    justify-items: flex-start;
    grid-auto-flow: dense;
  }
}

.app-img {
  align-self: center;
  max-width: 320px;

  @media screen and (min-width: $lg) {
    align-self: auto;
  }
}

.app-descr {
  p {
    font-size: $text-base;

    &:not(:last-of-type) {
      margin-bottom: 25px;
    }
  }
}
</style>
