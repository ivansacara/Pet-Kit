<template>
  <div class="video-banner-container">
    <div class="video-banner-wrapper">
      <iframe
        :src="`https://www.youtube.com/embed/${videoUrl}?enablejsapi=1&mute=1&loop=1&playlist=${videoUrl}&controls=0&rel=0&showinfo=0&autoplay=1`"
        height="455"
        title="final company introduction video"
        width="100%"
      >
      </iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videoUrl: String,
});
</script>
<style scoped lang="scss">
.video-banner-container {
  position: relative;
  padding-top: 180px;
  padding-bottom: 180px;
  pointer-events: none;
  overflow: hidden;
}

.video-banner-wrapper {
  pointer-events: none;
  position: relative;
  font-size: 50px;
  text-align: center;
  z-index: 2;
  list-style: 120%;
  color: #fff;
}

iframe {
  position: absolute;
  z-index: 1;
  border: 0;
  outline: 0;
  width: 100vw;
  min-width: 177.77vh;
  height: 56.25vw;
  min-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
