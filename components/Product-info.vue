<template>
	<div class="tabs">
		<nav class="tabs__items">
			<a :class="{'active': data.activeTab === 'tab_01'}" class="tabs__item"
				 @click="activateTab('tab_01')">{{ t('productInfo.desc') }}</a>
			<a :class="{'active': data.activeTab === 'tab_02'}" class="tabs__item"
				 @click="activateTab('tab_02')">{{ t('productInfo.char') }}</a>
		</nav>
		<div class="tabs__body">
			<div v-if="data.activeTab === 'tab_01'" class="tabs__block">
				<div class="tabs__description" v-html="description"></div>
			</div>
			<div v-if="data.activeTab === 'tab_02'" class="tabs__block">
				<div class="tabs__characteristics" v-html="characteristics"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
const {t} = useI18n();
const props = defineProps({
	characteristics: String,
	description: String,
});


let data = ref({
	activeTab: 'tab_01',
});

const activateTab = (tabId) => {
	data.value.activeTab = tabId;
};

</script>
<style lang="scss">
.tabs {
	margin: 0 0 50px 0;
}

.tabs__items {
	display: flex;
	width: fit-content;
	background: #f4f4f4;
	border-radius: 5px;
}

.tabs__item {
	padding: 15px 25px 13px 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	line-height: 15px;
	color: #949494;
	text-decoration: none;
	background: #f4f4f4;
	width: fit-content;
	letter-spacing: 0.08em;
	border-radius: 5px;

	&.active {
		background: #98ceff;
		color: #FFFFFF;
	}
}

.tabs__body {
	overflow: hidden;
}

.tabs__block {
	padding: 30px 0;
}

.tabs__description {
	p {
		margin-bottom: 14px;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	h3, h2, h4 {
		margin-bottom: 16px;
	}

	ul {
		list-style-type: disc;
		list-style-position: inside;
		margin-bottom: 20px;

		li {
			margin-bottom: 5px;
		}

		p {
			display: inline;
		}
	}

	ol {
		list-style-type: decimal;
		list-style-position: inside;
		margin-bottom: 20px;

		li {
			margin-bottom: 5px;
			list-style-type: decimal;
		}

		p {
			display: inline;
		}
	}

	//ul ul, ol ul {
	//  list-style-type: circle;
	//  list-style-position: inside;
	//  margin-left: 15px;
	//}
	//
	//ol ol, ul ol {
	//  list-style-type: lower-latin;
	//  list-style-position: inside;
	//  margin-left: 15px;
	//}
}

.tabs__characteristics {
	display: flex;
	flex-wrap: wrap;

	table {
		flex: 0 0 100%;
		font-size: 14px;

		@media screen and (min-width: $md) {
			flex: 0 0 50%;
		}
	}

	tr {
		line-height: 2;
		@media screen and (max-width: $md) {
			display: flex;
			flex-direction: column;

		}
	}

	tr {
		td:first-of-type {
			height: fit-content;
			position: relative;

			&:after {
				content: "..............................................................................................................................................";
				position: absolute;
				left: 0;
				bottom: 0;
				width: calc(100% - 5px);
				max-width: 100%;
				color: #cacaca;
				font-family: "Montserrat", sans-serif;
				font-size: 13px;
				font-style: normal;
				font-weight: 400;
				line-height: 26px;
				height: 25px;
				overflow: hidden;
				z-index: 1;
			}

			p {
				color: #cacaca;
				letter-spacing: 0.2px;
				background-color: #fff;
				position: relative;
				width: fit-content;
				padding-right: 5px;
				z-index: 2;
			}
		}
	}
}
</style>
