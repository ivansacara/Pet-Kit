<template>
	<Swiper 
		:modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" 
		:slides-per-view="1"
		:loop="true"
		:effect="'slide'"
		:centered-slides="true"
		:auto-height="true"
		:autoplay="{
			delay: 5000,
			disableOnInteraction: true,
		}">
		<SwiperSlide v-for="(slide, index) in images" :key="index">
			<img class="swiper-img" :src="slide.imageUrl" alt=""/>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
	const { t } = useI18n();
	const images = reactive([
		{ imageUrl: "/img/components/slider/slide_1.jpg" },
		{ imageUrl: "/img/components/slider/slide_2.jpg" },
	]);
</script>

<style lang="scss">
	.swiper-img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
</style>
