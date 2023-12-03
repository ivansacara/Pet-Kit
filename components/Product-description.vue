<template>
  <div>
    <h1>{{ productName }}</h1>
    <p>{{ productDescription }}</p>
    <img v-if="productImages.length > 0" :src="productImages[0]" alt="Product Image" />
    <p>{{ productPrice }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps(['product']);

const productName = ref('');
const productDescription = ref('');
const productImages = ref([]);
const productPrice = ref('');

onMounted(() => {
    if (props.product) {
        const { items } = props.product;

        if (items && items.length > 0) {
            const productItem = items[0].fields;
            productName.value = productItem.name;
            productDescription.value = productItem.description;
            productImages.value = productItem.images || [];
            productPrice.value = productItem.price;

            console.log('PRODUCT-DETAILS:', productItem);
        }
    }
});
</script>
