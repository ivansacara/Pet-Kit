<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-wrapper">
        <h2 class="section-title about-title">{{ t('aboutUs.title') }}</h2>
        <div class="about-descr">
          <p>{{ t('aboutUs.description.0') }}</p>
          <p>{{ t('aboutUs.description.1') }}</p>
          <p>{{ t('aboutUs.description.2') }}</p>
          <p>{{ t('aboutUs.goal') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const {t} = useI18n();
</script>
<style lang="scss">
.about-wrapper {
  padding: 30px 0;

  @media screen and (min-width: $md) {
    padding: 30px 0 37px;
  }
}

.about-title {
  margin-bottom: 20px;

  @media screen and (min-width: $md) {
    margin-bottom: 60px;
  }
}

.about-descr {
  border-radius: 20px;
  padding: 12px;
  background: $bg;
  transition: all .3s;
  border: 1px solid $black;
  position: relative;
  color: $black;
  font-size: 16px;

  > p:first-child {
    margin-bottom: 24px;
  }

  &::before, &::after {
    position: absolute;
    content: '';
    width: 40%;
    background: #fff;
    height: 4px;
    left: calc(50% - 20%);
  }

  &::before {
    top: auto;
    bottom: -2px;
  }

  &::after {
    top: -2px;
    bottom: auto;
  }

  @media screen and (min-width: $md) {
    padding: 80px;
  }
}
</style>
