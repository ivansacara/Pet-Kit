<template>
	<div class="credit">
		<div class="credit__months">
			6 {{ t('credit.months') }} (0%)
		</div>
		<div class="credit__progress-bar">
			<div v-for="month of months">
				<span>{{ t(`month.${month}`) }}</span>
			</div>
		</div>
		<div class="credit__prices">
			<div class="credit__price">
				<span>{{ t('credit.today') }}:</span>
				<span>0 MDL</span>
			</div>
			<div class="credit__price">
				<span>{{ t('credit.monthly') }}:</span>
				<span>{{ Math.ceil(productPrice / 6) }} MDL</span>
			</div>
			<div class="credit__price">
				<span>{{ t('credit.total') }}:</span>
				<span>{{ productPrice }} MDL</span>
			</div>
		</div>
	</div>
</template>

<script setup>
const {t} = useI18n();
const props = defineProps({
	productPrice: Number
})
const today = new Date();
let currentMonth = today.getMonth() + 2;
let months = [];

for (let i = 0; i < 6; i++) {
	months.push((currentMonth + i) % 12 || 12); // Добавляем номер месяца в массив, учитывая переход через год
}

console.log(months);
</script>

<style lang="scss" scoped>
.credit {
	background: #FFFFFF;
	padding: 16px;
	border-radius: 10px;
	box-shadow: 0 7px 20px 5px rgba(0, 0, 0, 0.09);

	width: 100%;

	@media screen and (min-width: $md) {
		max-width: 438px;
	}

	&__label {
		font-weight: 600;
		font-size: $text-xl;
		margin-bottom: 12px;
	}

	&__months {
		font-size: $text-xl;
		font-weight: 600;
		color: $btn-bg;
	}

	&__progress-bar {
		display: flex;
		height: 4px;
		background: $btn-bg;
		border-radius: 5px;
		margin: 12px 0;

		> div {
			width: 16.666%;
			position: relative;
			height: 100%;
			cursor: pointer;
			border-right: 2px solid #ececec;

			span {
				font-size: 12px;
				font-weight: 600;
				position: absolute;
				top: -14px;
				left: 50%;
				transform: translateX(-50%);
				opacity: 0;
				transition: all 0.2s ease-in;
			}

			&:hover {
				span {
					opacity: 1;
				}
			}
		}
	}

	&__price {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
		font-weight: 600;
	}
}
</style>
