<template>
	<div class="cn-locales">
		<NuxtLink class="cn-locales__link" :to="switchLocalePath('ro')">RO</NuxtLink>
		<NuxtLink class="cn-locales__link" :to="switchLocalePath('ru')">RU</NuxtLink>
	</div>
</template>

<style scoped lang="scss">
	.cn-locales {
		position: relative;
		z-index: 12;
		cursor: pointer;

		&__link {
			color: currentColor;
			text-decoration: none;
			transition: 0.2s ease-in-out;

			&:hover {
				color: $hover;
			}

			&.router-link-active {
				display: none;
			}
		}
	}
</style>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
	
</script>
