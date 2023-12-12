<template>
	<Breadcrumbs />
	
	<section class="delivery-section">
		<div class="container">
			<div class="delivery-wrapper">
				<h1 class="delivery-title">
					<strong>Доставка и оплата:</strong>
				</h1>
				<div class="delivery-descr">
					<div class="spacing">
						<p><strong>Мы доставим ваш заказ в любой город или населенный пункт Российской Федерации. </strong></p>
						<p>Доставка в нашем интернет-магазине осуществляется с помощью курьерских компаний: СДЭК, Логсис и Fulllog.</p>
						<p>При оформлении заказа вы сможете выбрать любой доступный вариант доставки до вашего города.</p>
					</div>
					<div class="spacing">
						<p>Информация для доставки заказов по Москве:</p>
						<p>Мы доставим заказ ТК Логсис/Fulllog уже на следующий день при оформлении заказа до 16-00. При оформлении после 16-00 доставка заказа переносится через день.&nbsp;</p>
						<p>Стоимость доставки при заказе до 6000 рублей - 450 рублей, от 6000 рублей - бесплатно.</p>
					</div>
					<div class="spacing">
						<p>МО: Вы можете выбрать службу доставки для заказов в область: СДЭК или Логсис. Стоимость и срок доставки будет зависеть от выбранной ТК. Сайт предложит Вам варианты при оформлении.</p>
					</div>
					<div class="spacing">
						<p>Санкт-Петербург:</p>
						<p>Мы доставим заказ ТК Логсис в течение 1-2 дней при оформлении заказа до 17-00. При оформлении после 17-00 доставка заказа займет +1 день. Стоимость доставки 450 рублей. Вы также можете выбрать ТК Сдэк (доставку курьером или до ПВЗ).</p>
					</div>
					<div class="spacing">
						<p>Доставка в другие города России:</p>
						<p>Доставка от 3-х рабочих дней компанией СДЭК. Вы сможете выбрать подходящий тариф и способ доставки (курьером или до ПВЗ).</p>
						<p>Список городов, в которые мы отправляем:<br>Москва, Санкт-Петербург, Нижний-Новгород, Казань, Сочи, Краснодар, Ростов на Дону, Воронеж, Пермь, Екатеринбург, Уфа, Самара, Новосибирск, Красноярск и др.</p>
					</div>
					<div>
						<p>Оплата:</p>
						<p>Мы не отправляем заказы с оплатой при получении. Оплата производится на сайте <nuxt-link target="_blank" class="link" to="http://petkit.com.ru">petkit.com.ru</nuxt-link> любой банковской картой и проходит как покупка. После оплаты Вы получите электронный чек на е-мейл с подтверждением покупки в магазине Petkit.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Breadcrumbs } from '#build/components';

	const { t } = useI18n();

	useHead({
		title: 'Delivery',
		meta: [{ name: "description", content: t("meta.deliveryDesc") }],
	});
</script>

<style lang="scss">
	.delivery-wrapper{
		padding: 30px 0;

		@media screen and (min-width: $md){
			padding: 30px 0 37px;
		}
	}

	.delivery-title{
		font-size: 32px;
		text-align: center;
		margin-bottom: 46px;

		@media screen and (min-width: $md){
			font-size: 40px;
		}
	}

	.delivery-descr{
		p{
			font-size: $text-base;
			&:not(:last-of-type){
				margin-bottom: 16px;
			}
		}

		>div:last-child{
			.link{
				text-decoration: underline;
				display: unset;

				&:hover{
					color: #283b54;
					text-decoration: none;
				}
			}
		}

		.spacing{
			margin-bottom: 46px;
		}
	}
</style>