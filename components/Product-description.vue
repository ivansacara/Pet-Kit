<template>
	<div class="container">
		<div class="prod-descr">
			<div class="prod-area">
				<div class="prod-descr-photo">
					<ProductSlider :productSlider="product.fields.image" @update-lightbox="lightboxVisible = !lightboxVisible"/>
				</div>
			</div>
			<div class="prod-descr-title">
				<h1 class="title-head">{{ product.fields.name }}</h1>
			</div>

			<p class="prod-descr-info">
				{{ product.fields.shortDescription }}
			</p>
			<div class="prod-descr-price">
				<span class="price-cur">{{ product.fields.price }}<span>MDL</span></span>
				<Credit v-if="product.fields.price > 2000" :product-price="product.fields.price"/>
			</div>
			<div class="prod-descr-buy">
				<button :disabled="!product.fields.stock" class="prod-descr-btn" @click="() => openModal()">
					{{ product.fields.stock ? t('product.buy') : t('product.outOfStock') }}
				</button>
				<ModalsContainer/>
			</div>
		</div>
		<Product-info :characteristics="characteristics" :description="description" productprice="productPrice"/>
	</div>
	<VideoBanner v-if="product.fields.videoLink"
							 :video-url="product.fields.videoLink"/>
	<ProductBanner v-if="!product.fields.videoLink"
								 :images="product.fields.banner"/>

	<FsLightbox :exitFullscreenOnClose="true" :sources="imageSources" :toggler="lightboxVisible"/>

</template>
<script lang="ts" setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import FsLightbox from "fslightbox-vue/v3";
import { ModalsContainer, useModal } from 'vue-final-modal'
import FeedbackModal from "~/components/FeedbackModal.vue";
import ProductBanner from "~/components/Product-banner.vue";
import ProductInfo from "~/components/Product-info.vue";

const {t} = useI18n();
const {open, close} = useModal({
	component: FeedbackModal,
	attrs: {
		onConfirm() {
			close()
		},
	},
})

const props = defineProps({
	product: {
		type: Object,
		required: true
	}
});

const description = documentToHtmlString(props.product.fields.description);
const characteristics = documentToHtmlString(props.product.fields.characteristics)
const lightboxVisible = ref(false);
const imageSources = Object.values(props.product.fields.image).map(image => image?.fields.file?.url);

const openModal = () => {
	open();
}
</script>

<style lang="scss">
.prod-descr {
	padding-top: 30px;
	padding-bottom: 45px;
	display: grid;
	grid-template-areas:
			"photo"
			"title"
			"descr"
			"price"
			"buy";
	grid-template-columns: auto;
	grid-template-rows: auto;
	grid-column-gap: 0;

	@media screen and (min-width: $lg) {
		grid-template-areas:
				"photo title"
				"photo descr"
				"photo price"
				"photo buy"
				"photo .";
		grid-template-columns: 50% 1fr;
		grid-template-rows: repeat(7, auto) 1fr;
		grid-column-gap: 30px;
	}
}

.prod-area {
	position: relative;
	grid-area: photo;
	min-width: 0;

	@media screen and (min-width: $lg) {
		padding-left: calc(20% + 2rem);
	}
}

.prod-descr-photo {
	max-width: 500px;
	margin: 0 auto 10px;
	top: auto;

	@media screen and (min-width: $lg) {
		max-width: none;
		margin: 0;
	}
}

.product-photo {
	display: block;
}

.prod-descr-title {
	grid-area: title;

	.title-head {
		padding: 23px 0;
		margin: 0;
		font-size: 18px;
		line-height: 16px;
		font-weight: bold;
		color: $black;
		border-top: 1px solid $border;

		@media screen and (min-width: $md) {
			padding: 0;
			margin: 0 0 24px 0;
			font-size: 24px;
			line-height: 32px;
			border-top: 0;
		}
	}
}

.prod-descr-price {
	margin-bottom: 20px;

	@media screen and (min-width: $md) {
		margin-bottom: 40px;
	}

	.price-cur {
		font-size: 28px;
		line-height: 29px;
		display: inline-block;
		font-style: normal;
		font-weight: bold;
		color: $black;
		margin-right: 15px;

		@media screen and (min-width: $md) {
			font-size: 38px;
			line-height: 56px;
		}

		> span {
			font-size: 20px;
			padding-left: 2px;
			@media screen and (min-width: $md) {
				font-size: 25px;
				line-height: 56px;
			}
		}
	}
}

.credit-btn {
	font-size: 20px;
	font-weight: 600;
	color: #FFFFFF;
	background: $btn-bg;
	padding: 10px 15px;
	border-radius: 5px;

	&:hover {
		background: $btn-hover;
	}
}

.prod-descr-info {
	grid-area: descr;
	margin: 10px 0 15px 0;

	span {
		font-size: 13px;

		@media screen and (min-width: $md) {
			font-size: 16px;
		}
	}
}

.prod-descr-buy {
	grid-area: buy;
	border-radius: 10px;
	display: block;
	margin: 0;
	background: none;


	@media screen and (min-width: $md) {
		max-width: 438px;
	}

	.prod-descr-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 400;
		color: $default;
		border-radius: 10px;
		white-space: nowrap;
		width: 100%;
		height: 60px;
		font-size: calc(16px * 1.5);
		background: $btn-bg;
		padding: 0 16px;

		&:hover {
			background: $btn-hover;
		}

		&[disabled] {
			background: $disabled;
		}
	}
}

.fslightbox-source {
	background: white;
}

.video-banner-container {
	margin-bottom: -1px;
	position: relative;
}

</style>
