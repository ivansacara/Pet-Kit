<template>
  <div>
    <!-- Display product information here -->
<!--    <h1>{{ product.items }}</h1>-->
<!--    <img :src="product.image" alt="Product Image">-->
<!--    <p>Product ID: {{ product.id }}</p>-->
    <!-- Add more product details as needed -->
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
