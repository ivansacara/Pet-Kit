<template>
	<div class="popup-wrapper">
		<div class="popup-body">
			<div class="popup-content">
				<p class="popup-title">Заполните форму: </p>
				<form action="" method="post">
					<label for="name">
						<input type="text" name="user_name" id="name" placeholder="Введите имя">
						<span>Ваше имя</span>
					</label>

					<label for="Ваш телефон">
						<input type="text" name="user_phone" id="phone" placeholder="Введите телефон">
						<span>Ваше имя</span>
					</label>

					<button type="submit" class="submit">
						<span>Отправить</span>
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped lang="scss">
	.popup-wrapper{
		position: fixed;
		z-index: 91919;
		background: rgba(0, 0, 0, 0.3);
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.popup-body{
		background: white;
		padding: 15px;
		border-radius: 10px;
		
	}
</style>