<template>
  <div class="order">
    <h3 class="order__title">{{ $t("order.title") }}</h3>
    <client-only>
      <form v-if="!formIsSended" class="order__content" @submit.prevent="submitForm">

        <input v-model="formData.name.value"
               :class="{ 'has-error': formData.name.hasError }"
               :placeholder="$t('order.name')"
               class="order__input form-control"
               required
               type="text"
               @blur="formData.name.hasError = !formData.name.value"
        />
        <input v-model="formData.phone.value"
               v-maska
               :class="{ 'has-error': formData.phone.hasError }"
               :placeholder="$t('order.phone')"
               class="order__input form-control"
               data-maska="+### ########"
               required
               type="tel"
               @blur="formData.phone.hasError = !formData.phone.value"
        />
        <textarea v-model="formData.message.value"
                  :placeholder="$t('order.message')"
                  class="order__textarea form-control"
        ></textarea>

        <button :disabled="submited"
                class="order__btn"
                type="submit">
          {{ $t("order.btn") }}
        </button>
      </form>
      <div v-else class="order-response">
        <p>{{ $t("order.response") }}</p>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const {t} = useI18n();
const formIsSended = ref(false);
const submited = ref(false)
const router = useRouter()
const config = useRuntimeConfig();
const error = ref(false)
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
    productLink: {
        value: config.public.NUXT_PUBLIC_SITE_URL + router.currentRoute.value.path,
        // value: `https://petkit.md${router.currentRoute.value.path}`,
        hasError: false,
    }
};
const token = config.public.TELEGRAM_TOKEN;
const chat_id = config.public.TELEGRAM_CHAT_ID;

const submitForm = async () => {
    submited.value = true
    const messageInTelegram = `<b>Новый Запрос:</b>%0A <b>Имя:</b> <i>"${formData.name.value}"</i>%0A <b>Телефон:</b> <i>+${formData.phone.value}</i>%0A <b>Сообшение:</b> <i>"${formData.message.value}"</i>%0A <b>Продукт:</b> <i>"${formData.productLink.value}"</i>`;

    if (!formData.name.value || !formData.phone.value) {
        formData.name.hasError = !formData.name.value;
        formData.phone.hasError = !formData.phone.value;

        return;
    }
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${messageInTelegram}&parse_mode=html`,)
        .then(() => {
            formData.name.value = "";
            formData.phone.value = "";
            formData.message.value = "";
            formData.productLink.value = "";
            formIsSended.value = true;
        })
        .catch(error => {
            console.log(error)
        })
}
</script>

<style lang="scss">
button[disabled] {
  pointer-events: none;
  background: $text-hover;
}

.order__title {
  font-weight: 600;
  text-align: center;
  font-size: 24px;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 25px;
}

.order__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order {
  width: 100%;

  &__textarea,
  &__input {
    font-size: 16px;
    resize: none;
    background-color: transparent;
    border-radius: 10px;
    padding: 14px 12px;
    outline: none;
    min-height: 56px;
    display: block;
    width: 100%;
    border: 1px solid #d1d1d1;
    overflow: hidden;

    &::placeholder {
      color: #a0a0a0;
    }

    &:focus {
      border: 1px solid #000;
    }
  }

  &__input:first-child {
    margin-bottom: 15px;
  }

  &__textarea {
    margin-top: 15px;
    min-height: 100px;
  }

  p {
    margin-bottom: 10px;
  }

  &__btn {
    padding: 15px 20px;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    color: $default;
    border-radius: 10px;
    white-space: nowrap;
    width: fit-content;
    background: $btn-bg;
    margin-top: 20px;

    &:hover {
      background: $btn-hover;
    }

  }
}

.order-response {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;

  p {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
}
</style>
