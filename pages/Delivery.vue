<template>
	<section class="delivery-section">
		<div class="container">
			<Breadcrumbs :pageTitle="t('links.delivery')" />

			<div class="delivery-wrapper">
				<h1 class="delivery-title">
					<strong>{{t('delivery.title')}}</strong>
				</h1>
				<div class="delivery-descr">
					<div class="spacing">
						<p><strong>{{ t('delivery.description.0.strong') }}</strong></p>
						<p>{{ t('delivery.description.1.text') }}</p>
						<p>{{ t('delivery.description.2.text') }}</p>
					</div>
					<div class="spacing">
						<p>{{ t('delivery.moscowInfo.0.text') }}</p>
						<p>{{ t('delivery.moscowInfo.1.text') }}</p>
						<p>{{ t('delivery.moscowInfo.2.text') }}</p>
					</div>
					<div class="spacing">
						<p>{{ t('delivery.moInfo.0.text') }}</p>
					</div>
					<div class="spacing">
						<p>{{ t('delivery.spbInfo.0.text') }}</p>
						<p>{{ t('delivery.spbInfo.1.text') }}</p>
					</div>
					<div class="spacing">
						<p>{{ t('delivery.otherCitiesInfo.0.text') }}</p>
						<p>{{ t('delivery.otherCitiesInfo.1.text') }}</p>
						<p>{{ t('delivery.otherCitiesInfo.2.text') }}</p>
						<p>{{ t('delivery.otherCitiesInfo.3.text') }}</p>
					</div>
					<div>
						<p>{{ t('delivery.paymentInfo.0.text') }}</p>
						<p>{{ t('delivery.paymentInfo.1.text') }} <nuxt-link target="_blank" class="link" to="{{ t('delivery.paymentInfo.1.link.url') }}">{{ t('delivery.paymentInfo.1.link.text') }}</nuxt-link> {{ t('delivery.paymentInfo.2.text') }}</p>
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
	title: t("links.delivery"),
	meta: [{ name: "description", content: t("meta.delivery") }],
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
