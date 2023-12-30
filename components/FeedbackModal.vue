<template>
  <VueFinalModal
          class="confirm-modal"
          content-class="confirm-modal-content"
          @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <FeedbackForm />
    <button class="close-btn" @click="emit('confirm')">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
      >
        <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)" />
        <path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)" />
      </svg>
    </button>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import FeedbackForm from "~/components/FeedbackForm.vue";

const emit = defineEmits<{
    (e: "update:modelValue", modelValue: boolean): void;
    (e: "confirm"): void;
}>();

</script>

<style lang="scss">
.confirm-modal-content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $default;
  padding: 35px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;

  //@include media-max-xs {
  //  padding: 35px 20px;
  //}
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
}
</style>
