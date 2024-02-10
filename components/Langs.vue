<template>
  <div class="locales">
    <NuxtLink :class="{ exact__active_link: activeLanguage === 'ro' }" :to="switchLocalePath('ro')" class="locale"
              @click="selectLang('ro', true)">RO
    </NuxtLink>
    <NuxtLink :class="{ exact__active_link: activeLanguage === 'ru' }" :to="switchLocalePath('ru')" class="locale"
              @click="selectLang('ru', true)">RU
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useHead } from "#app";

const {locale} = useI18n();
const switchLocalePath = useSwitchLocalePath();
const activeLanguage = ref(locale.value);

const selectLang = (lang: string, event: boolean) => {
    localStorage.setItem('LANG', lang);
    activeLanguage.value = lang;
    if (event) localStorage.removeItem('viewedProducts')
};

onMounted(() => {
    const defaultLocale = localStorage.getItem('LANG') || locale.value;
    selectLang(defaultLocale, false);
});

useHead({
    htmlAttrs: {
        lang: activeLanguage
    }
});
</script>

<style lang="scss" scoped>
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
