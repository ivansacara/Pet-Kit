<template>
	<div class="order">
		<h3 class="order__title">{{ $t("order.title") }}</h3>
		<client-only>
			<div v-if="!formIsSended" class="order__content">
				<input
					v-model="formData.name.value"
					type="text"
					class="order__input form-control"
					:class="{ 'has-error': formData.name.hasError }"
					:placeholder="$t('order.name')"
					required
					@blur="formData.name.hasError = !formData.name.value"
				/>
				<input
					v-model="formData.phone.value"
					v-maska
					data-maska="+### ########"
					type="tel"
					class="order__input form-control"
					:class="{ 'has-error': formData.phone.hasError }"
					:placeholder="$t('order.phone')"
					required
					@blur="formData.phone.hasError = !formData.phone.value"
				/>
				<textarea
					v-model="formData.message.value"
					class="order__textarea form-control"
					:placeholder="$t('order.message')"
				></textarea>

				<button class="order__btn" @click="clickFn()">
					{{ $t("order.btn") }}
				</button>
			</div>
			<div class="order-response" v-else>
				<p>{{ $t("order.response") }}</p>
			</div>
		</client-only>
	</div>
</template>

<script setup lang="ts">
	import { useRouter } from "vue-router";

	const { t } = useI18n();
	const formIsSended = ref(false);
	const router = useRouter()

	const formData = {
		name: {
			value: "",
			hasError: false,
		},
		phone: {
			value: "",
			hasError: false,
		},
		message: {
			value: "",
			hasError: false,
		},
		productLink: {
			value: router.currentRoute.value.path,
			hasError: false,
		}
	};

	async function clickFn() {
		if (!formData.name.value || !formData.name.value) {
			formData.name.hasError = !formData.name.value;
			formData.phone.hasError = !formData.phone.value;

			return;
		}

		formIsSended.value = true;

		const messageBlock = `
		<b>Имя:</b> ${formData.name.value}
		<b>Телефон:</b> ${formData.phone.value}
		<b>Сообщение:</b> ${formData.message.value}
		<b>Продукт:</b> ${formData.productLink.value}`;

		await $fetch("/api/telegram", {
			method: "POST",
			body: messageBlock,
		});
	}
</script>

<style lang="scss">
	.order__title{
		font-weight: 600;
		text-align: center;
		font-size: 24px;
		line-height: normal;
		text-transform: uppercase;
		margin-bottom: 25px;
	}

	.order__content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.order {
		width: 100%;

		&__textarea,
		&__input{
			font-size: 16px;
			resize: none;
			background-color: transparent;
			border-radius: 10px;
			padding: 14px 12px;
			outline: none;
			min-height: 56px;
			display: block;
			width: 100%;
			border: 1px solid #d1d1d1;
			overflow: hidden;

			&::placeholder{
				color: #a0a0a0;
			}

			&:focus{
				border: 1px solid #000;
			}
		}

		&__input:first-child{
			margin-bottom: 15px;
		}

		&__textarea {
			margin-top: 15px;
			min-height: 100px;
		}

		p {
			margin-bottom: 10px;
		}

		&__btn {
			padding: 15px 20px;
			font-size: 16px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			font-weight: 400;
			color: $default;
			border-radius: 10px;
			white-space: nowrap;
			width: fit-content;
			background: $btn-bg;
			margin-top: 20px;

			&:hover {
				background: $btn-hover;
			}

		}
	}

	.order-response{
		position: absolute;
		top: 50%;
		transform: translateY(-50%) translateX(-50%);
		left: 50%;
		
		p{
			font-size: 20px;
			text-transform: uppercase;
			margin-bottom: 0;
		}
	}
</style>
