<template>
	<Swiper
		:modules="[SwiperAutoplay, SwiperEffectCreative]"
		:slides-per-view="1"
		:loop="true"
		:effect="'slide'"
		:centered-slides="true"
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
	import { useRoute, useAsyncData } from 'nuxt/app';
	const { t } = useI18n();
	const { $client } = useNuxtApp();
	const route = useRoute();


	const sliderType = "slider";
	const { data: slidersData } = await useAsyncData("sliders", () =>
			$client.getEntries({
				content_type: sliderType,
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
					acc[key].push(slideItem.fields.file.url);
					return acc;
				}, {})
		);

		let slidesArray = [];
		for (let slideKey in groupedSlides[0]) {
			let slideNumber = slideKey.split('_')[1]; // Extract slide number
			let slideType = slideKey.split('_')[2]; // Extract slide type ('mob' or 'desc')

			if (!slidesArray[slideNumber]) {
				slidesArray[slideNumber] = { mobileUrl: '', desktopUrl: '' };
			}

			if (slideType === 'mob') {
				slidesArray[slideNumber].mobileUrl = groupedSlides[0][slideKey][0];
			} else if (slideType === 'desc') {
				slidesArray[slideNumber].desktopUrl = groupedSlides[0][slideKey][0];
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
