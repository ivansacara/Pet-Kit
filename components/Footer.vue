<template>
	<footer class="footer-main" id="contacts">
		<div class="container">
			<div class="footer-wrapper">
				<div>
					<div class="footer-logo">
						<nuxt-link :to="localePath('/')">
							<img src="/icons/logo.svg" alt="Petkit">
						</nuxt-link>
					</div>
					<div class="footer-content">
						<div class="social-links">
							<div>
								<nuxt-link target="_blank" to="https://vk.com/public211051403">
									<img src="/icons/vk.svg" alt="vk">
								</nuxt-link>
								<nuxt-link target="_blank" to="https://t.me/+n3NwTwd8tzhlNDNi">
									<img src="/icons/telegram.svg" alt="telegram">
								</nuxt-link>
							</div>
							<nuxt-link to="mailto:info@petkit.ru.com">
								info@petkit.ru.com
							</nuxt-link>
						</div>
						<div class="footer-descr">
							<p>
								{{t('contactInfo.workTimeMarket')}} <br>
								{{t('contactInfo.workTimeOffice')}}<br>
								{{t('contactInfo.address')}}<br>
							</p>
							<p>
								{{t('contactInfo.brand')}}<br>
								{{t('contactInfo.number')}}
							</p>
						</div>
						<div class="footer-pays">
							<div>
								<img src="/icons/google-new.png" alt="google">
							</div>
							<div>
								<img src="/icons/visa-new.png" alt="visa">
							</div>
							<div>
								<img src="/icons/ceb-new.png" alt="ceb">
							</div>
							<div>
								<img src="/icons/apple-new.png" alt="apple">
							</div>
						</div>
						<div class="footer-app">
							<div>
								<nuxt-link target="_blank" to="http://file5-us.petkit.com/app/petkit-android-oversea/petkit-android-oversea-latest.apk">
									<img src="/icons/footer-google.jpg" alt="google-play">
								</nuxt-link>
							</div>
							<div>
								<nuxt-link target="_blank" to="https://apps.apple.com/us/app/petkit/id994053492?ls=1">
									<img src="/icons/footer-apple.jpg" alt="apple-store">
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="footer-title">{{t('aboutCompany')}}</div>
					<ul class="footer-items-menu">
						<li>
							<nuxt-link
									class="cn-navigation__link"
									:to="localePath('/delivery')">
								{{t('links.delivery')}}
							</nuxt-link>
						</li>
						<li >
							<nuxt-link
									class="cn-navigation__link"
									:to="localePath('/faq')">
								{{ t('links.faq') }}
							</nuxt-link>
						</li>
						<li>
							<nuxt-link
									class="cn-navigation__link"
									:to="localePath('/Return')">
								{{ t('links.return') }}
							</nuxt-link>
						</li>
						<li><a class="cn-navigation__link" @click.prevent="scrollToElement('about')">{{ t('links.about') }}</a></li>
						<li><a class="cn-navigation__link" @click.prevent="scrollToElement('contacts')">{{t('links.contacts')}}</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	const { t } = useI18n();
	const localePath = useLocalePath()

	const scrollToElement = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
		}
	};
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
		font-size: $text-xl;
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
