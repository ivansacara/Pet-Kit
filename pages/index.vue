<template>
  <Slider />
  <Categories :categories="categoryInformation"/>
  <Application  />
  <RecentlyViewed />
  <About />
</template>
<script setup lang="js">
const { t } = useI18n();
const { $client } = useNuxtApp();
const route = useRoute();
useHead({
    title: 'PetKit',
    meta: [{ name: "description", content: t("meta.mainContent") }],
});

const categoryInformation = ref({
    items: []
});

const fetchData = async () => {
    try {
      const response = await $client.getEntries({
          content_type: 'category',
          'fields.slug': route.params.slug,
          locale: t("locale"),
      });
      // Assuming response.items is the array of categories you want
      categoryInformation.value = {
        items: response.items.map(item => ({
          sys: {
              id: item.sys.id,
              locale: item.sys.locale.split('-')[0]
          },
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

