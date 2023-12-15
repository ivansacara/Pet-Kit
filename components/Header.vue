<template>
	<header class="header-main" :class="{ 'mobile': isActive }">
		<div class="container">
			<div class="header-container">
				<div class="header-burger" 
					:class="{ 'active': isActive }"
					@click="toggleMenu">
					<span></span>
				</div>
				<div class="header-logo">
					<nuxt-link :to="localePath('/')">
						<img src="/icons/logo.svg" alt="logo">
					</nuxt-link>
				</div>
				<nav class="header-nav" 
					:class="{ 'open': isActive }">
					<ul class="nav-items">
						<li>
							<nuxt-link
								class="cn-navigation__link"
								:to="localePath('/delivery')"
								@click="toggleMenu()">
								{{t('links.delivery')}}
							</nuxt-link>
						</li>
						<li >
							<nuxt-link
									class="cn-navigation__link"
									:to="localePath('/faq')"
									@click="toggleMenu()">
								{{ t('links.faq') }}
							</nuxt-link>
						</li>
						<li>
							<nuxt-link
									class="cn-navigation__link"
									:to="localePath('/Return')"
									@click="toggleMenu()">
								{{ t('links.return') }}
							</nuxt-link>
						</li>
						<li><a 	class="cn-navigation__link" @click.prevent="scrollToElement('about')">{{ t('links.about') }}</a></li>
						<li><a 	class="cn-navigation__link" @click.prevent="scrollToElement('contacts')">{{t('links.contacts')}}</a></li>
					</ul>
				</nav>
				<div class="header-languages">
					<Langs />
				</div>

				<div class="bg" @click="toggleMenu()"></div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { ref } from 'vue'
	const { t } = useI18n();
	const localePath = useLocalePath()
	const isActive = ref(false)
	const scrollToElement = (id) => {
		const element = document.getElementById(id);
		if (isActive.value === true) {
			toggleMenu()
		}
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
		}
	};
	const toggleMenu = () => {
		isActive.value = !isActive.value
		document.body.classList.toggle("isOpen");
	}
</script>

<style lang="scss">
	@media screen and (max-width: $md){
		body.isOpen{
			overflow: hidden;
		}
	}

	.header-main{
		position: fixed;
		height: 58px;
		z-index: 100;
		top: 0;
		left: 0;
		right: 0;
		background: $bg;
		border-bottom: 1px solid #ededed;
		
		@media screen and (min-width: $lg){
			height: 74px;
		}
	}

	.header-container{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 15px;
		padding-bottom: 15px;

		@media screen and (min-width: $md){
			margin-left: -10px;
		}
	}

	.header-burger {
		display: block;
		position: relative;
		width: 22px;
		height: 18px;
		cursor: pointer;
		z-index: 1001;

		&::before,
		&::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: $text-color;
			transition: all 0.3s;
		}
		
		&::before {
			top: 2px;
		}

		&::after {
			bottom: 0;
		}

		span {
			display: block;
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: $text-color;
			top: 9px;
		}

		&.active{
			*{
				transition: all 0.3s ease;
			}

			span{
				display: none;
			}

			&::before {
				transform: rotate(-45deg);
				top: 8px;
			}

			&::after {
				transform: rotate(45deg);
				bottom: 8px;
			}
		}

		@media (min-width: $md) {
			display: none;
		}
	}

	.header-logo{
		width: 100px;
		
		>a{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		@media screen and (min-width: $lg){
			width: 155px;
		}
	}
	
	.header-nav{
		display: none;

		@media screen and (min-width: $md){
			display: block;
		}
		
		.nav-items{
			display: flex;

			li{
				a:hover{
					color: $text-hover;
				}

				&:not(:last-of-type){
					margin-right: 30px;
					
					@media screen and (min-width: $lg){
						margin-right: 45px;
					}
				}
			}
		}
	}

	.bg{
		display: none;
	}

	@media screen and (max-width: $md){
		.header-main.mobile{
			.bg{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;
				z-index: 500;
				display: block;
				background: rgb(0, 0, 0, 0.4);
			}
			
			.header-nav{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				max-width: 320px;
				height: 100vh;
				//transition: all 0.5s ease;
				display: block;
				z-index: -1000;

				&.open{
					z-index: 505;

					.nav-items{
						transform: translate(0);
					}
				}
			}

			.nav-items{
				background: $bg;
				padding: 60px 15px 15px;
				height: 100vh;
				//transition: all 0.4s ease;
				border-radius: 0 13px 13px 0;
				transform: translateX(-320px);
				width: 100%;
				display: flex;
				flex-direction: column;

				@media screen and (max-width: 320px){
					border-radius: 0;
				}

				li:not(:last-child){
					margin-bottom: 12px;
				}
			}
		}
	}
</style>
