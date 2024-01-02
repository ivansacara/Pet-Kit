<template>
	<div class="cs-feedback">
		<h3 class="cs-feedback__title">{{ $t("feedback.title") }}</h3>
		<client-only>
			<div v-if="!formIsSended" class="cs-feedback__content">
				<input
					v-model="formData.name.value"
					type="text"
					class="cs-feedback__input form-control"
					:class="{ 'has-error': formData.name.hasError }"
					:placeholder="$t('feedback.namePlaceholder')"
					required
					@blur="formData.name.hasError = !formData.name.value"
				/>
				<input
					v-model="formData.phone.value"
					v-maska
					data-maska="+### ########"
					type="tel"
					class="cs-feedback__input form-control"
					:class="{ 'has-error': formData.phone.hasError }"
					:placeholder="$t('feedback.phonePlaceholder')"
					required
					@blur="formData.phone.hasError = !formData.phone.value"
				/>
				<textarea
					v-model="formData.message.value"
					class="cs-feedback__textarea form-control"
					:placeholder="$t('feedback.messagePlaceholder')"
				></textarea>

				<button class="cs-feedback__btn btn btn-dark" @click="clickFn()">
					{{ $t("feedback.btn") }}
				</button>
			</div>
			<div class="feedback-response" v-else>
				<p>{{ $t("feedback.response") }}</p>
			</div>
		</client-only>
	</div>
</template>

<script setup lang="ts">
	const formIsSended = ref(false);
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
		<b>Сообщение:</b> ${formData.message.value}`;

		await $fetch("/api/telegram", {
			method: "POST",
			body: messageBlock,
		});
	}
</script>

<style lang="scss">
	.cs-feedback__title{
		font-weight: 600;
		text-align: center;
		font-size: 24px;
		line-height: normal;
		text-transform: uppercase;
		margin-bottom: 25px;
	}

	.cs-feedback__content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cs-feedback {
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

	.feedback-response{
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