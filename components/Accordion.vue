<template>
		<div class="accordion">
			<button class="accordion-header" @click="toggleAccordion">
				<span>{{ props.faqInfo.fields.question }}</span>
				<svg :class="{ 'rotate': isOpen }" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.667 25L25.0003 33.3333L33.3337 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M25 16.6667V33.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			</button>

			<div ref="accordionBody" class="accordion-body">
				<p>
					{{ props.faqInfo.fields.response }}
				</p>
			</div>
		</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	faqInfo: {
		type: Object,
	}
});

const accordionBody = ref(null);
const isOpen = ref(false);

function toggleAccordion() {
  const currentMaxHeight = accordionBody.value.style.maxHeight;
	isOpen.value = !isOpen.value;
  accordionBody.value.style.maxHeight = currentMaxHeight ? "" : `${accordionBody.value.scrollHeight}px`;
}
</script>

<style lang="scss">
	.accordion{
		border-radius: 30px;
		background: #EFEFEF;
		margin-bottom: 15px;

		&.active{
			.accordion-header{
				svg{
					transform: rotate(-180deg);
				}
			}
		}
	}

	.accordion-header{
		padding: 16px 40px 16px 16px;
		position: relative;
		border-radius: 30px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		transition: none;

		@media screen and (min-width: $md){
			padding: 20px 70px 20px 76px;
		}

		span{
			font-size: $text-lg;
			line-height: 23px;
			font-family: 'PT Root UI';
			color: $black;
			text-align: left;
			font-style: normal;
			font-weight: normal;

			@media screen and (min-width: $md){
				font-size: 25px;
				line-height: 32px;
			}
		}

		svg{
			position: absolute;
			width: 40px;
			height: 40px;
			right: 5px;
			top: calc(50% - 20px);
			transition: all .4s ease;

			@media screen and (min-width: $md){
				width: 50px;
				height: 50px;
				right: 20px;
				top: calc(50% - 25px);
			}
		}
	}

	.rotate{
		transform: rotate(180deg);
	}

	.accordion-body{
		overflow: hidden;
		padding: 0 36px 0 16px;
		transition: max-height 0.3s ease;
		max-height: 0;

		p{
			margin: 36px 0;
			font-size: 16px;
			line-height: 19px;
			color: $black;
		}

		@media screen and (min-width: $md){
			padding: 0 70px 0 76px;
		}
	}
</style>
