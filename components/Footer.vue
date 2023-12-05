<template>
	<footer class="footer-main" id="contacts">
		<div class="container">
			<div class="footer-wrapper">
				<div>
					<div class="footer-logo">
						<nuxt-link :to="localePath('/')">
							<img src="/icons/logo.svg" alt="">
						</nuxt-link>
					</div>
					<div class="footer-content">
						<div class="social-links">
							<div>
								<nuxt-link target="_blank" to="https://vk.com/public211051403">
									<img src="/icons/vk.svg" alt="">
								</nuxt-link>
								<nuxt-link target="_blank" to="https://t.me/+n3NwTwd8tzhlNDNi">
									<img src="/icons/telegram.svg" alt="">
								</nuxt-link>
							</div>
							<nuxt-link to="mailto:info@petkit.ru.com">
								info@petkit.ru.com
							</nuxt-link>
						</div>
						<div class="footer-descr">
							<p>
								Режим работы интернет-магазина: Пн-Вск:  10:00  - 18:00 <br>
								Режим работы офиса: Пн-Пт с 10:00-18:00 127015 г.Москва, ул.Новодмитровская д.1 стр 2, 3 этаж офис PETKIT
							</p>
							<p>
								ООО АЗИАНБРЭНД<br>
								ИНН:7719423946
							</p>
						</div>
						<div class="footer-pays">
							<div>
								<img src="/icons/google-new.png" alt="">
							</div>
							<div>
								<img src="/icons/visa-new.png" alt="">
							</div>
							<div>
								<img src="/icons/ceb-new.png" alt="">
							</div>
							<div>
								<img src="/icons/apple-new.png" alt="">
							</div>
						</div>
						<div class="footer-app">
							<div>
								<nuxt-link target="_blank" to="http://file5-us.petkit.com/app/petkit-android-oversea/petkit-android-oversea-latest.apk">
									<img src="/icons/footer-google.jpg" alt="">
								</nuxt-link>
							</div>
							<div>
								<nuxt-link target="_blank" to="https://apps.apple.com/us/app/petkit/id994053492?ls=1">
									<img src="/icons/footer-apple.jpg" alt="">
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p class="footer-title">О компании</p>
					<ul class="footer-items-menu">
						<li v-for="(item, index) in footerItems" :key="index">
							<nuxt-link @click.native="$router.push(item.path)">
								{{ item.label }}
							</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	const localePath = useLocalePath()
	const footerItems = [
		{ label: "Доставка и оплата", path: "/delivery" },
		{ label: "FAQ", path: "/faq" },
		{ label: "О нас", path: "/#about" },
		{ label: "Контакты", path: "/#contacts" },
		{ label: "Возврат и обмен", path: "/returnandchange" },
	]
</script>

<style lang="scss">
	.footer-main{
		border-top: 1px solid $black;
		padding: 40px 0 20px;

		@media screen and (min-width: $md){
			padding-top: 30px;
		}
	}

	.footer-wrapper{
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: auto;
		gap: 25px;

		@media screen and (min-width: $md){
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (min-width: 1250px){
			>div:first-child{
				min-width: 920px;
			}
		}
	}

	.footer-logo{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 16px;
		
		>a{
			width: 140px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-left: -10px;

			@media screen and (min-width: $lg){
				width: 175px;
			}
		}
	}

	.footer-content{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}

	.social-links{
		width: 100%;
		margin-bottom: 15px;
		
		>div:first-child{
			display: flex;
			align-items: center;
			margin-bottom: 6px;

			>a{
				max-width: 25px;
				
				&:first-child{
					margin-right: 3px;
				}
			}
		}

		>a:hover{
			color: $text-hover;
		}
	}

	.footer-descr{
		width: 100%;
		margin-bottom: 32px;
		line-height: 1.33;

		p{
			margin-top: 12px;
		}
	}

	.footer-pays{
		display: flex;
		align-items: center;
		width: 100%;

		div{
			max-width: 50px;

			&:not(:last-of-type){
				margin-right: 12px;
			}
		}
	}

	.footer-app{
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 12px;

		div{
			max-width: 100px;

			&:first-child{
				margin-right: 12px;
			}
		}
	}

	.footer-title{
		font-weight: 700;
		font-size: 20px;
		margin-bottom: 15px;
	}

	.footer-items-menu{
		li{
			&:not(:last-of-type){
				margin-bottom: 10px;
			}

			a:hover{
				color: $text-hover;
			}
		}
	}
</style>
