<template>
	<header class="header-main">
		<div class="header-container">
			<div class="header-burger">
				<svg role="presentation" stroke-width="1.4" focusable="false" width="22" height="22" class="icon icon-hamburger" viewBox="0 0 22 22">
					<path d="M1 5h20M1 11h20M1 17h20" stroke="currentColor" stroke-linecap="round"></path>
				</svg>
			</div>
			<div class="header-logo">
				<a href="/">
					<img src="../public/icons/logo.svg" alt="">
				</a>
			</div>
			<div class="header-languages">
				<Langs />
			</div>
		</div>
	</header>
</template>

<script setup>
	import Langs from "~/components/Langs.vue"
</script>

<style lang="scss">
	.header-container{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px;
	}

	.header-burger{
		width: 22px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		>svg{
			cursor: pointer;
		}
	}

	.header-logo{
		width: 100px;
		
		>a{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	
</style>
