<template>
	<header class="header-main">
		<div class="container">
			<div class="header-container">
				<div class="header-burger" 
					@click="toggleMenu"
					:class="{ 'active': isActive }">
					<span></span>
				</div>
				<div class="header-logo">
					<nuxt-link to='/'>
						<img src="/icons/logo.svg" alt="">
					</nuxt-link>
				</div>
				<nav class="header-nav">
					<ul class="nav-items">
						<li v-for="(item, index) in menuItems" :key="index">
							<nuxt-link @click.native="$router.push(item.path)"> 
								{{ item.label }} 
							</nuxt-link>
						</li>
					</ul>
				</nav>
				<div class="header-languages">
					<Langs />
				</div>
			</div>
		</div>
		<div class="header-menu" :class="{ 'open-menu': isActive }" ref="menu">
			<div class="header-menu-content">
				<Langs @click.native="hideMenu"/>
				<ul class="nav-items-menu">
					<li>
						<nuxt-link @click.native="hideMenu()" to="/">Главная</nuxt-link>
					</li>
					<li v-for="(item, index) in menuItems" :key="index">
						<nuxt-link @click.native="menuItemClick(item.path)">
							{{ item.label }}
						</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
	import Langs from "~/components/Langs.vue"

	export default {
		name: "Header",
		
		data() {
			return {
				isActive: false,
				menuItems: [
					{ label: "Доставка и оплата", path: "/delivery" },
					{ label: "FAQ", path: "/faq" },
					{ label: "О нас", path: "/#about" },
					{ label: "Контакты", path: "/#contacts" },
					{ label: "Возврат и обмен", path: "/returnandchange" },
				],
			};
		},

		methods: {
			toggleMenu() {
				this.isActive = !this.isActive;
				if(!this.isActive) document.body.style.overflow = 'auto'
				else document.body.style.overflow = 'hidden'
			},

			hideMenu() {
				this.isActive = false
				document.body.style.overflow = 'auto'
			},
			
			menuItemClick(path) {
				this.hideMenu()
				this.$router.push(path)
			},
		},
	};
</script>

<style lang="scss">
	.header-container{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 15px;
		padding-bottom: 15px;
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

			>li{
				>a:hover{
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

	.header-menu{
		position: absolute;
		inset: 0;
		z-index: -100;
		transition: all 0.5s ease;

		&.open-menu{
			z-index: 1000;
			background: rgba(0, 0, 0, 0.4);

			.header-menu-content{
				transform: translate(0);
			}
		}

		.header-menu-content{
			background: $bg;
			max-width: 320px;
			padding: 55px 15px 15px;
			height: 100vh;
			transform: translateX(-320px);
			transition: all 0.4s ease;
			border-radius: 0 13px 13px 0;

			@media screen and (max-width: $mob){
				border-radius: 0;
			}

			.nav-items-menu{
				margin-top: 15px;

				>li{
					>a:hover{
						color: $text-hover;
					}

					&:not(:last-of-type){
						margin-bottom: 15px;
						
						
					}
				}
			}
		}
	}
</style>
