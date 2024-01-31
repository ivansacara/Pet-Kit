<template>
  <section class="about-section">
    <div class="container">
      <Breadcrumbs :pageTitle="t('links.about')"/>
    </div>
    <VideoBanner
            :video-url="'nyqLVrSvB4I'"/>

    <!--    <VideoBanner :video-url="'https://www.youtube.com/embed/nyqLVrSvB4I?enablejsapi=1&mute=1&loop=1&playlist=nyqLVrSvB4I'"/>-->
    <!--    <div class="about-video-wrap">-->
    <!--      <div class="about-video">-->
    <!--        <iframe-->
    <!--                height="455"-->
    <!--                src="https://www.youtube.com/embed/nyqLVrSvB4I?enablejsapi=1&mute=1&loop=1&playlist=nyqLVrSvB4I&controls=0&rel=0&showinfo=0&autoplay=1"-->
    <!--                title="final company introduction video"-->
    <!--                width="100%">-->
    <!--        </iframe>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="container">
      <div class="about-wrapper">
        <div class="about-block">
          <div class="about-info">
            <h2 class="title">
              {{ t('about.0.title') }}
            </h2>
            <p class="text">
              {{ t('about.0.text.0') }}
            </p>
            <p class="text">
              {{ t('about.0.text.1') }}
            </p>
          </div>
          <div class="about-image">
            <img :src="t('about.0.image')" alt="" class="img">
          </div>
        </div>

        <div class="about-block">
          <div class="about-info">
            <h2 class="title">
              {{ t('about.1.title') }}
            </h2>
            <p class="text">
              {{ t('about.1.text.0') }}
            </p>
          </div>
          <div class="about-image">
            <img :src="t('about.1.image')" alt="" class="img">
          </div>
        </div>

        <div class="about-block">
          <div class="about-info">
            <h2 class="title">
              {{ t('about.2.title') }}
            </h2>
            <p class="text">
              {{ t('about.2.text.0') }}
            </p>
          </div>
          <div class="about-image">
            <img :src="t('about.2.image')" alt="" class="img">
          </div>
        </div>

        <div class="about-block">
          <div class="about-info">
            <h2 class="title">
              {{ t('about.3.title') }}
            </h2>
            <p class="text">
              {{ t('about.3.text.0') }}
            </p>
          </div>
          <div class="about-image">
            <img :src="t('about.3.image')" alt="" class="img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useHead} from 'nuxt/app';
import {useRoute} from "#app";

const route = useRoute();
const {t} = useI18n();

useHead({
	title: t("links.about"),
	meta: [
		{name: "description", content: t("meta.about")},
		{property: "og:title", content: t("links.about")},
		{property: "og:description", content: t("meta.about")},
		{property: 'og:image', content: '/petkit.png'},
		{property: 'og:url', content: `https://petkit.md${route.path}`}
	],
});
</script>

<style lang="scss">

//.about-video-wrap {
//  position: relative;
//  padding-top: 180px;
//  padding-bottom: 180px;
//  pointer-events: none;
//  overflow: hidden;
//}
//
//.about-video {
//  pointer-events: none;
//  position: relative;
//  font-size: 50px;
//  text-align: center;
//  z-index: 2;
//  list-style: 120%;
//  color: #fff;
//}
//
//iframe {
//  position: absolute;
//  z-index: 1;
//  border: 0;
//  outline: 0;
//  width: 100vw;
//  min-width: 177.77vh;
//  height: 56.25vw;
//  min-height: 100vh;
//  top: 50%;
//  left: 50%;
//  transform: translate(-50%, -50%);
//}

.about-block {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-bottom: 48px;

  @media screen and (min-width: $md) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 124px;
  }

  &:nth-child(even) {
    @media screen and (min-width: $md) {
      flex-direction: row-reverse;
    }
  }
}

.about-info {
  @media screen and (min-width: $md) {
    flex: 0 0 50%;
  }
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 12px;
  line-height: 1;
  color: $black;

  @media screen and (min-width: $lg) {
    margin-bottom: 26px;
    font-size: 45px;
  }
}

.text {
  font-size: 16px;
  line-height: 1.2;

  &:first-of-type {
    margin-bottom: 18px;
  }

  @media screen and (min-width: $lg) {
    font-size: 18px;
    line-height: 1.8;

    &:first-of-type {
      margin-bottom: 60px;
    }
  }
}
</style>
