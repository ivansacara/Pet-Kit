<template>
  <div class="wrapper">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
	main{
		padding-top: 58px;

		@media screen and (min-width: $lg){
			padding-top: 74px;
		}
	}
</style>