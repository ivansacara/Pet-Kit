<template>
  <section class="main-banner">
    <Swiper
        :autoplay="{
			delay: 5000,
			disableOnInteraction: true,
		}"
        :centered-slides="true"
        :effect="'slide'"
        :loop="true"
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1">
      <SwiperSlide v-for="(slide, index) in sliderItems.items" :key="index">
        <picture>
          <source :srcset="slide.mobileUrl" media="(max-width: 768px)" type="image/webp">
          <img :alt="slide.description" :src="slide.desktopUrl" class="swiper-img"/>
        </picture>
      </SwiperSlide>
    </Swiper>
  </section>

</template>

<script setup>
const {t} = useI18n();
const {$client} = useNuxtApp();
const route = useRoute();


const sliderType = "slider";
const {data: slidersData} = await useAsyncData("sliders", () =>
    $client.getEntries({
      content_type: sliderType,
      locale: t("locale"),
    })
);

// Processing sliders data
const sliderItems = computed(() => {
  let groupedSlides = slidersData.value.items.flatMap(item =>
      item.fields.slide.reduce((acc, slideItem) => {
        let key = slideItem.fields.title; // 'mob' or 'desc'

        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(slideItem.fields.file.url, slideItem.fields.description);
        // console.log(slideItem.fields.description)
        return acc;
      }, {})
  );

  let slidesArray = [];
  for (let slideKey in groupedSlides[0]) {
    let slideNumber = slideKey.split('_')[1]; // Extract slide number
    let slideType = slideKey.split('_')[2]; // Extract slide type ('mob' or 'desc')
    if (!slidesArray[slideNumber]) {
      slidesArray[slideNumber] = {mobileUrl: '', desktopUrl: '', description: ''};
    }

    if (slideType === 'mob') {
      slidesArray[slideNumber].mobileUrl = groupedSlides[0][slideKey][0];
      slidesArray[slideNumber].description = groupedSlides[0][slideKey][1];
    } else if (slideType === 'desc') {
      slidesArray[slideNumber].desktopUrl = groupedSlides[0][slideKey][0];
      slidesArray[slideNumber].description = groupedSlides[0][slideKey][1];
    }
  }

  return {
    items: slidesArray.filter(slide => slide)
  };
});
</script>

<style lang="scss">
.swiper-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
