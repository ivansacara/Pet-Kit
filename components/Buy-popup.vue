<template>
	<div v-if="showPopup" class="popup-wrapper">
		<div class="popup-body">
			<div class="popup-content">
				<p class="popup-title">Заполните форму: </p>
				
				<form action="" method="post" class="form-popup">
					<input type="text" name="user_name" id="name" placeholder="Ваше имя">
					<input type="email" name="user_email" id="email" placeholder="Ваш email">
					<input type="text" name="user_phone" id="phone" placeholder="Ваш телефон">

					<button type="submit" class="submit-btn">
						<span>Отправить</span>
					</button>
				</form>
			</div>

			<div class="close-form">
				<span></span>
				<span></span>
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
		padding: 0 15px;
	}

	.popup-body{
		background: white;
		padding: 60px 20px;
		border-radius: 10px;
		max-width: 520px;
		width: 100%;
		max-height: 520px;
		overflow-y: auto;
		position: relative;
	}

	.popup-title{
		font-size: 22px;
		line-height: normal;
		text-align: center;
		margin-bottom: 24px;
		font-weight: 600;
	}

	.form-popup{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.form-popup input{
		padding: 20px 16px;
		border-radius: 15px;
		border: 1px solid #999;
		width: 100%;
		font-size: 14px;

		&::placeholder{
			color: #999;
		}

		&:focus, &:active{
			border: 1px solid #000;
		}

		&:not(:last-of-type){
			margin-bottom: 20px;
		}
	}

	.submit-btn{
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.submit-btn{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 400;
		color: $default;
		border-radius: 10px;
		white-space: nowrap;
		margin-top: 42px;
		min-width: 140px;
		padding: 0 20px;
		height: 40px;
		background: $btn-bg;
		font-size: 16px;

		&:hover {
			background: $btn-hover;
		}
	}

	.close-form{
		position: absolute;
		top: 25px;
		right: 25px;
		width: 20px;
		height: 20px;
		cursor: pointer;
		
		&:hover{
			span{
				background-color: #616161;
			}
		}

		span{
			display: inline-block;
			width: 100%;
			height: 2px;
			background: #999;
			transition: background-color .2s ease;
			position: absolute;
			top: 0;
			left: 8px;

			&:first-of-type{
				transform: rotate(45deg);
			}

			&:last-of-type{
				transform: rotate(-45deg);
			}
		}
	}
</style>