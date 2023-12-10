<template>
  <div>

    <Product-description :product="categoryInformation"/>
  </div>
</template>
<script setup lang="js">
const { t } = useI18n();
const { $client } = useNuxtApp();
const route = useRoute();
useHead({
    title: 'PetKit',
});

const ProductContentType = "product";
const categoryInformation = ref({
    items: []
});

const fetchData = async () => {
    try {
        const response = await $client.getEntries({
            content_type: ProductContentType,
            "fields.slug": route.params.slug,
            locale: t("locale"),
        });

        if (!response.items.length) {
            throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
        }

        // Assuming response.items is the array of categories you want
        categoryInformation.value = {
            items: response.items.map(item => ({
                // sys: { id: item.id }, // Adjust according to your actual data structure
                fields: {
                    // id: item.sys.id,
                    name: item.fields.name,
                    description: item.description,
                    price: item.price,
                    image: item.fields.image.map((image)=> {
                        return image.fields.file?.url
                    })
                }
            })),
        };
        response.items.map((item)=>{
            console.log(item.fields)
        })
    } catch (error) {
        console.error(error);
    }
};
console.log('SLUG')
fetchData();
</script>
<!--<script setup>-->
<!--import {useNuxtApp} from "nuxt/app";-->
<!--const {$client}=useNuxtApp()-->
<!--const route = useRoute();-->
<!--const { t } = useI18n();-->
<!--const product = await $client.getEntries({-->
<!--    content_type: 'product',-->
<!--    "fields.slug": route.params.slug,-->
<!--    locale: t("locale"),-->
<!--})-->


<!--</script>-->
