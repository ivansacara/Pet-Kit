<template>
	<Swiper
		:modules="[SwiperAutoplay, SwiperEffectCreative]"
		:slides-per-view="1"
		:loop="true"
		:effect="'slide'"
		:centered-slides="true"
		:auto-height="true"
		:autoplay="{
			delay: 5000,
			disableOnInteraction: true,
		}">
		<SwiperSlide v-for="(slide, index) in sliderItems.items" :key="index">
			<picture>
				<source :srcset="slide.mobileUrl" type="image/webp" media="(max-width: 768px)">
				<img class="swiper-img" :src="slide.desktopUrl" alt=""/>
			</picture>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
	const { t } = useI18n();
	const props = defineProps({
		sliderItems: Object,
	});
</script>

<style lang="scss">
	.swiper-img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
</style>
