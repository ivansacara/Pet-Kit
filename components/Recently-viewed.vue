<template>
	<div class="container">
		<div class="recent-wrapper">
			<div class="viewed-products">
				<div class="viewed-head"> 
					<div class="h2 special-products__title heading">Ранее просмотренные</div>

					<div class="special-products__slider-controls">
						<div class="special-products__slider-arrow special-products__slider-arrow-prev js-move-slide">
							<span class="special-products__slider-arrow-icon icon-arrow-left"></span>
						</div>
						<div
							class="special-products__slider-arrow special-products__slider-arrow-next js-move-slide is-disabled">
							<span class="special-products__slider-arrow-icon icon-arrow-right"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const { t } = useI18n();
</script>
<style lang="scss">
	.recent-wrapper{
		padding: 40px 0;
	}
</style>