<template>
	<div class="widget-main">
		<div class="social-block" :class="{'open-social': activeBtn}">
			<div class="social-wrap">
				<nuxt-link class="bh-telegram" target="_blank" to="https://telegram.me/PETKITBOT">
					<img class="bh-button-icon" src="data:image/svg+xml,%3csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m22.81 2.952-3.568 18.215s-.153.832-1.186.832c-.548 0-.831-.26-.831-.26l-7.728-6.413-3.78-1.905L.863 12.13S0 11.88 0 11.166c0-.595.889-.879.889-.879l20.3-8.065S21.81 2 22.262 2c.278 0 .595.119.595.476 0 .238-.047.476-.047.476z' fill='white'/%3e%3cpath d='m12.381 17.719-3.263 3.213s-.142.11-.331.115a.472.472 0 0 1-.209-.041l.918-5.681 2.885 2.394z' fill='%23C8D2D7'/%3e%3cpath d='M18.95 5.996a.476.476 0 0 0-.668-.088l-12.568 7.52s2.006 5.612 2.312 6.583c.306.973.552.996.552.996l.918-5.681 9.364-8.663a.475.475 0 0 0 .09-.667z' fill='%23E4EAEC'/%3e%3c/svg%3e" alt="button-icon">
				</nuxt-link>
				<nuxt-link class="bh-whatsapp" target="_blank" to="https://api.whatsapp.com/send?phone=74999384699">
					<img class="bh-w-button-icon" src="data:image/svg+xml,%3csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M.395 19.925a.252.252 0 0 0 .243.067l4.986-1.308a9.863 9.863 0 0 0 4.616 1.15c5.423 0 9.836-4.412 9.838-9.835A9.776 9.776 0 0 0 17.2 3.042 9.778 9.778 0 0 0 10.24.157C4.817.157.404 4.57.402 9.992a9.835 9.835 0 0 0 1.261 4.825L.331 19.682a.253.253 0 0 0 .064.243zm15.48-15.562a7.913 7.913 0 0 0-5.633-2.335c-4.394 0-7.968 3.572-7.97 7.964 0 1.505.42 2.97 1.218 4.238l.19.302-.805 2.939 3.015-.79.292.172a7.952 7.952 0 0 0 4.055 1.11h.003c4.391 0 7.965-3.573 7.967-7.965 0-2.128-.827-4.13-2.332-5.635zm-8.57 1.21c.17.006.36.014.539.413.125.278.338.802.503 1.211.117.287.21.518.235.567.06.12.1.26.02.42a9.181 9.181 0 0 0-.034.068c-.06.122-.104.212-.206.331l-.125.15c-.082.1-.163.199-.234.27-.12.12-.245.25-.105.488.14.24.62 1.024 1.332 1.659.765.681 1.43.97 1.767 1.116l.16.072c.239.12.379.1.518-.06.14-.16.6-.699.759-.938.16-.24.32-.2.539-.12.22.08 1.397.659 1.637.779l.133.065c.166.08.277.134.326.214.06.1.06.58-.14 1.139-.2.56-1.178 1.098-1.617 1.138l-.127.014c-.406.048-.918.108-2.747-.613-2.25-.887-3.734-3.086-4.04-3.54a2.547 2.547 0 0 0-.051-.075l-.002-.002c-.126-.168-.976-1.302-.976-2.475 0-1.103.541-1.68.791-1.947a6.05 6.05 0 0 0 .047-.05c.22-.24.48-.3.639-.3h.034c.148 0 .295 0 .425.005z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20v20H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="button-icon">
				</nuxt-link>
			</div>
		</div>
		<button 
			class="widget-btn" 
			@click="toggleActive" 
			:class="{ 'btn-active': activeBtn }"
			@mouseenter="addActiveClass">
		</button>
	</div>
</template>
<script setup>
	import { ref } from 'vue'
	const activeBtn = ref(false)

	const toggleActive = () =>{
		activeBtn.value = !activeBtn.value
	}

	const addActiveClass = () => {
		if (!activeBtn.value) {
			activeBtn.value = true
		}
	}
</script>
<style lang="scss">
	.widget-main{
		position: fixed;
		z-index: 9999;
		bottom: 100px;
		right: 16px;
	}

	.widget-btn{
		background-color: #0F0F0E;
		position: relative;
		z-index: 1001;
		transform: rotate(0deg);
		transition: all .4s cubic-bezier(0, 0.3, 0.3, 2);
		width: 56px;
		height: 56px;
		box-shadow: 0px 4px 8px rgba(0,0,0,.16);
		border-radius: 50%;
    	justify-content: center;
		color: #fff;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: .2px;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		box-sizing: border-box;
		cursor: pointer;
		overflow: hidden;
		background-image: url("data:image/svg+xml,%3csvg width='28' height='28' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M20.982 9.333V6.982h-14v2.351h14zm-4.649 7v-2.351H6.982v2.351h9.351zm-9.351-5.851v2.351h14v-2.351h-14zm16.351-8.149c.62 0 1.149.237 1.586.711.474.438.711.966.711 1.586v14c0 .62-.237 1.167-.71 1.64-.438.475-.967.712-1.587.712H6.982L2.333 25.63v-21c0-.62.219-1.148.656-1.586.474-.474 1.021-.71 1.641-.71h18.703z' fill='white'/%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: 50% 50%;

		&.btn-active{
			transform: rotate(180deg);
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='32' viewBox='0 0 24 24' width='32' fill='white'%3e%3cpath d='M0 0h24v24H0z' fill='none'/%3e%3cpath d='m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z'/%3e%3c/svg%3e");
			box-shadow: none !important;
		}
	}

	.social-block{
		right: -10px;
		width: 200px;
		z-index: -1;
		overflow: hidden;
		padding: 16px;
		margin: -16px 0;
		position: absolute;
		bottom: 96px;
		box-sizing: content-box;
		
		.social-wrap{
			display: flex;
			align-items: flex-end;
			flex-direction: column;
		}

		&.open-social{
			z-index: 1000;
			a{
				opacity: 1;
				transition-duration: 60ms;
			}
		}

		a{
			opacity: 0;
			transition-duration: 30ms;
			transition: all .2s;
			position: relative;
			width: 50px;
			height: 50px;
			color: #fff;
			font-weight: 400;
			line-height: 16px;
			letter-spacing: .2px;
			display: inline-flex;
   			align-items: center;
			overflow: hidden;
			border-radius: 50%;
   			justify-content: center;

			&:hover{
				overflow: inherit;
				
				&:before{
					position: absolute;
					right: 62px;
					left: unset;
					top: 10px;
					padding: 6px 12px;
					background: #fff;
					border-radius: 20px;
					color: #000;
					cursor: pointer;
					font-size: 14px;
					line-height: 20px;
					letter-spacing: .25px;
					text-transform: capitalize;
					filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.16));
				}
			}

			&.bh-telegram{
				background: #4faee6;

				&:hover{
					&:before{
						content: "Telegram";
					}
				}
			}

			&.bh-whatsapp{
				margin-top: 12px;
				background: #4dc247;

				&:hover{
					&:before{
						content: "whatsapp";
					}
				}
			}
		}
	}

	.bh-w-button-icon{
		width: 24px;
		height: 24px;
		object-fit: contain;
		pointer-events: none;
	}
</style>