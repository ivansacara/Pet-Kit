<template>
	<div class="accordion-descr-container">
		<div class="accordion-block"
			:class="{ 'active-item': activeIndex === index }"
			v-for="(item, index) in accordionItems"
			:key="index">
			<button class="accordion-item-header" @click="togglePanel(index)">
				<span>{{ item.title }}</span>
				<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.667 25L25.0003 33.3333L33.3337 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M25 16.6667V33.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			</button>
			<div class="accordion-item-body">
				<p>
					{{ item.description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const accordionItems = [
		{ title: 'Title 1', description: 'На данный момент к сети можно подключить все кормушки Petkit, воздухоочиститель Magicube, автоматический лоток Pura X, домик с функцией климат-контроль Cozy. Список устройств регулярно пополняется, за этим можно следить в самом приложении Petkit.' },
		{ title: 'Title 2', description: 'Description 2' },
		{ title: 'Title 3', description: 'Description 3' },
		{ title: 'Title 4', description: 'Description 4' },
		{ title: 'Title 5', description: 'Description 5' },
	];

	const activeIndex = ref(null);

	const togglePanel = (index) => {
		activeIndex.value = (activeIndex.value === index) ? null : index;
	};
</script>

<style lang="scss">
	.accordion-block{
		border-radius: 30px;
		background: #EFEFEF;
		margin-bottom: 15px;

		&.active-item{
			.accordion-item-body{
				display: block;
				max-height: 1000px;
				transition: max-height 2.2s ease;
			}

			.accordion-item-header{
				svg{
					transform: rotate(-180deg);
				}
			}
		}
	}

	.accordion-item-header{
		padding: 16px 30px 16px 16px;
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
			font-size: 18px;
			line-height: 23px;
			color: $black;
			text-align: left;
			font-style: normal;
			font-weight: normal;

			@media screen and (min-width: $md){
				font-size: 25px;
			}
		}

		svg{
			position: absolute;
			width: 30px;
			height: 30px;
			right: 5px;
			top: calc(50% - 15px);
			transition: all .6s ease;

			@media screen and (min-width: $md){
				width: 50px;
				height: 50px;
				right: 20px;
				top: calc(50% - 25px);
			}
		}
	}

	.accordion-item-body{
		max-height: 0;
		overflow: hidden;
		transition: max-height .6s ease;
		padding: 0 15px;

		p{
			margin: 15px 0;
			font-size: 16px;
			line-height: 19px;
			color: $black;
		}

		@media screen and (min-width: $md){
			padding: 0 70px 0 76px;

			p{
				margin: 20px 0;
			}
		}
	}
</style>