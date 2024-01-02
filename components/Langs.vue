<template>
	<div class="locales">
		<NuxtLink class="locale" :class="{ exact__active_link: activeLanguage === 'ro' }" @click="selectLang('ro')" :to="switchLocalePath('ro')">RO</NuxtLink>
		<NuxtLink class="locale" :class="{ exact__active_link: activeLanguage === 'ru' }" @click="selectLang('ru')" :to="switchLocalePath('ru')">RU</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const activeLanguage = ref(locale.value);

const selectLang = (lang: string) => {
	localStorage.setItem('LANG', lang);
	activeLanguage.value = lang;
};

onMounted(() => {
	const defaultLocale = localStorage.getItem('LANG') || locale.value;
	selectLang(defaultLocale);
});
</script>

<style scoped lang="scss">
	.locale {
		position: relative;
		z-index: 12;
		cursor: pointer;
		color: currentColor;
		text-decoration: none;

		&:hover {
			color: $text-hover;
		}

		&.exact__active_link {
			display: none;
		}
	}
</style>
