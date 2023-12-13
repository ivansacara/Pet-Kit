<template>
		<div class="breadcrumb-wrapper">
			<ul class="breadcrumb">
				<li class="breadcrumb-item home">
					<nuxt-link class="breadcrumb-link" 
						:to="localePath('/')">
						Главная
					</nuxt-link>
				</li>
				<li class="breadcrumb-item">
					<span class="breadcrumb-page">{{ pageTitle }}</span>
				</li>
			</ul>
		</div>
</template>

<script setup >
	const localePath = useLocalePath()
	const props =  defineProps({
		pageTitle: String,
	});
</script>

<style lang="scss">
	.breadcrumb-wrapper{
		padding: 16px 0;
		display: grid;
		justify-content: start;
	}

	.breadcrumb-item{
		display: inline-block;
		vertical-align: top;
		color: $text-breadcrumb;
		position: relative;
		font-size: $text-base;

		&:not(:last-child){
			margin-right: 26px;

			&:after{
				content: '-';
				font-size: 1.5rem;
				vertical-align: middle;
				line-height: 0;
				font-family: auto;
				position: absolute;
				top: 12px;
				right: -16px
			}
		}
	}
</style>
