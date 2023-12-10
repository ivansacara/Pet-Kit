<template>
  <Slider />
  <Categories :categories="categoryInformation"/>
  <Application  />
  <About />
</template>
<script setup lang="js">

const { t } = useI18n();
const { $client } = useNuxtApp();

useHead({
    title: 'PetKit',
});

const blogCategoriesContentType = "category";
const categoryInformation = ref(null); // Using ref to hold the response
console.log(categoryInformation)
// Asynchronous function to fetch data
const fetchData = async () => {
    try {
        const response = await $client.getEntries({
            content_type: blogCategoriesContentType,
            locale: t("locale"),
        });

        if (!response.items.length) {
            throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
        }

        categoryInformation.value = response;
    } catch (error) {
        // Handle error
        console.error(error);
        // Redirect or show error message
    }
};

// Immediately invoked
fetchData();
</script>
<style lang="scss">

</style>
