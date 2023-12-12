<template>
  <div>
    <div v-for="productDesc in product" :key="productDesc.sys.id">
      {{productDesc.fields.name}}
      {{productDesc.fields.description}}
      {{productDesc.fields.price}}
      <img :src="productDesc.fields.image" alt="">
    </div>
  </div>
</template>

<script setup lang="js">
import { defineProps } from 'vue';

// Define the props the component accepts
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

// Now you can use props.product in your template
</script>
