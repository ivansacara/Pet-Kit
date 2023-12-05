<template>
	<section class="app-section">
		<div class="container">
			<div class="app-wrapper">
				<h2 class="app-title">Одно приложение для всех устройств</h2>
				<div class="app-info-block">
					<div class="app-descr">
						<p>
							В приложении Petkit вы сможете завести аккаунт своему питомцу 
							(если их несколько, то можно создать несколько профилей). 
							К отдельному профилю можно привязать свой гаджет и внести 
							свои настройки/график и т.д. 
						</p>
						<p>
							С помощью приложения Petkit будет доступно управление 
							автоматическими кормушками, автоматическим лотком Pura X, 
							умным воздухоочистителем Air Magicube, аквариумом и др.
						</p>
						<p>
							Вы будете получать необходимые уведомления от ваших гаджетов, 
							рекомендации по использованию, напоминания 
							(например, о корме или необходимости уборки), 
							о технических неполадках и возможностях их устранения. 
						</p>
						<p>
							В приложении есть социальная сеть для питомцев. 
							Присоединяйтесь к новым технологиям вместе с хвостатым другом!
						</p>
					</div>
					<div class="app-img">
						<img src="/img/components/application/phone-bg.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
</script>

<style lang="scss">
	.app-wrapper{
		padding: 40px 0;
	}

	.app-title{
		font-size: 20px;
		font-weight: normal;
		line-height: 23px;
		color: $black;
		margin-bottom: 16px;

		@media screen and (min-width: $md){
			font-size: 40px;
			line-height: 47px;
		}
	}

	.app-info-block{
		display: flex;
		justify-content: center;
		flex-direction: column-reverse;
		background: url('/img/components/application/free-icon-paw.png') center no-repeat;

		@media screen and (min-width: $lg){
			display: grid;
			grid-template-columns: 44% 24.22% 31.18%;
			align-items: flex-start;
			justify-items: flex-start;
			grid-auto-flow: dense;
		}
	}

	.app-img{
		align-self: center;
		max-width: 320px;

		@media screen and (min-width: $lg){
			align-self: auto;
		}
	}

	.app-descr{
		p{
			font-size: $text-base;
			&:not(:last-of-type){
				margin-bottom: 25px;
			}
		}
	}
</style>
