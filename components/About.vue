<template>
	<section class="about-section" id="about">
		<div class="container">
			<div class="about-wrapper">
				<h4 class="about-title">О нас</h4>
				<div class="about-descr">
					<p>
						
						PETKIT - производитель умных современных гаджетов для домашних животных.
						Компания была основана в августе 2013 в Шанхае, и стремительно развилась в одну из
						лидирующих фирм в сфере товаров для домашних животных.
						У нас вы найдете домик с климат-контролем, лоток, который убирает сам, миски с весами, автоматические
						кормушки, которыми можно управлять через приложение, очистители воздуха, фонтаны для питья и другие
						современные гаджеты для собак и кошек.
						Последние несколько лет PETKIT побеждает в номинации Product Design в
						международной премии Red Dot Design Award.
					</p>
					<p>
						Petkit - это не только товары, которыми можно удивить, но и новые технологии для домашних животных и их людей. 
						Наша цель:сделать заботу о питомцах увлекательнее и проще.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
</script>
<style lang="scss">
	.about-wrapper{
		padding: 30px 0;

		@media screen and (min-width: $md){
			padding: 30px 0 37px;
		}
	}

	.about-title{
		font-weight: normal;
		margin: 0 0 20px 0;
		font-size: 20px;
		line-height: 23px;
		color: $black;

		@media screen and (min-width: $md){
			font-size: 40px;
			line-height: 47px;
			margin-bottom: 60px;
		}
	}

	.about-descr{
		border-radius: 20px;
		padding: 12px;
		background: $bg;
		transition: all .3s;
		border: 1px solid $black;
		position: relative;
		color: $black;
		font-size: 16px;

		>p:first-child{
			margin-bottom: 24px;
		}

		&::before, &::after{
			position: absolute;
			content: '';
			width: 40%;
			background: #fff;
			height: 4px;
			left: calc(50% - 20%);
		}

		&::before{
			top: auto;
			bottom: -2px;
		}

		&::after{
			top: -2px;
			bottom: auto;
		}

		@media screen and (min-width: $md){
			padding: 80px;
		}
	}
</style>