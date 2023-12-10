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
const categoryInformation = ref({
    items: []
});

const fetchData = async () => {
    try {
        const response = await $client.getEntries({
            content_type: blogCategoriesContentType,
            locale: t("locale"),
        });

        if (!response.items.length) {
            throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
        }

        // Assuming response.items is the array of categories you want
        categoryInformation.value = {
            items: response.items.map(item => ({
                sys: { id: item.id }, // Adjust according to your actual data structure
                fields: {
                    id: item.sys.id,
                    name: item.fields.name,
                    image: item.fields.image?.fields.file?.url,
                    slug: item.fields.slug
                }
            })),
        };
    } catch (error) {
        console.error(error);
    }
};

fetchData();
</script>
<style lang="scss">

</style>
