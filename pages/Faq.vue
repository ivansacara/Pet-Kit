<template>
	<Breadcrumbs />
	
	<section class="faq-section">
		<div class="container">
			<div class="faq-wrapper">
				<h1 class="faq-title">
					<strong>Часто задаваемые вопросы</strong>
				</h1>
				<Accordion />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
	.faq-wrapper{
		padding: 30px 0;

		@media screen and (min-width: $md){
			padding: 30px 0 37px;
		}
	}

	.faq-title{
		font-size: 32px;
		text-align: center;
		margin-bottom: 46px;

		@media screen and (min-width: $md){
			font-size: 40px;
		}
	}
</style>