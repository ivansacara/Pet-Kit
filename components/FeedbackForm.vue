<template>
  <div class="cs-feedback">
    <h3 class="cs-feedback__title">{{ $t("feedback.title") }}</h3>
    <client-only>
      <div v-if="!formIsSended" class="cs-feedback__content">
        <input
                v-model="formData.name.value"
                type="text"
                class="cs-feedback__input form-control"
                :class="{ 'has-error': formData.name.hasError }"
                :placeholder="$t('feedback.namePlaceholder')"
                required
                @blur="formData.name.hasError = !formData.name.value"
        />
        <input
                v-model="formData.phone.value"
                v-maska
                data-maska="+### ########"
                type="tel"
                class="cs-feedback__input form-control"
                :class="{ 'has-error': formData.phone.hasError }"
                :placeholder="$t('feedback.phonePlaceholder')"
                required
                @blur="formData.phone.hasError = !formData.phone.value"
        />
        <textarea
                v-model="formData.message.value"
                class="cs-feedback__textarea form-control"
                :placeholder="$t('feedback.messagePlaceholder')"
        ></textarea>

        <button class="cs-feedback__btn btn btn-dark" @click="clickFn()">
          {{ $t("feedback.btn") }}
        </button>
      </div>
      <div v-else>
        <p>{{ $t("feedback.response") }}</p>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const formIsSended = ref(false);
const formData = {
    name: {
        value: "",
        hasError: false,
    },
    phone: {
        value: "",
        hasError: false,
    },
    message: {
        value: "",
        hasError: false,
    },
};


async function clickFn() {
    if (!formData.name.value || !formData.name.value) {
        formData.name.hasError = !formData.name.value;
        formData.phone.hasError = !formData.phone.value;

        return;
    }

    formIsSended.value = true;

    const messageBlock = `
    <b>Имя:</b> ${formData.name.value}
    <b>Телефон:</b> ${formData.phone.value}
    <b>Сообщение:</b> ${formData.message.value}`;

    await $fetch("/api/telegram", {
        method: "POST",
        body: messageBlock,
    });
}
</script>

<style lang="scss">
.cs-feedback {
  &__textarea,
  &__input,
  .captcha_input {
    margin-bottom: 10px;
    resize: none;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
    outline: none;
    height: 40px;
    padding: 0 2px;
    display: block;

    &::placeholder {
      color: var(--cn-secondary-color);
    }
    &:hover,
    &:focus {
      background-color: transparent;
      border-color: var(--cn-global-color);
      box-shadow: none;
    }
  }

  &__textarea {
    height: 60px;
    margin-top: 15px;
  }
  p {
    margin-bottom: 10px;
  }

  &__btn {
    padding: 15px 20px;
  }


}
</style>
