<template>
  <Slider/>
  <Categories />
  <Application  />
  <RecentlyViewed />
  <About />
</template>
<script setup lang="js">
// import { useHead } from 'nuxt/app';
const { t } = useI18n();
const { $client } = useNuxtApp();
useHead({
    title: 'PetKit',
    meta: [{ name: "description", content: t("meta.mainContent") }],
});
// Fetching categories data
// const categoryType = "category";
// const { data: categoriesData } = await useAsyncData("categories", () =>
//     $client.getEntries({
//         content_type: categoryType,
//         'fields.slug': route.params.slug,
//         locale: t("locale"),
//     })
// );
//
// // Processing categories data
// const categoryInformation = computed(() => ({
//     items: categoriesData.value.items.map(item => ({
//         sys: {
//             id: item.sys.id,
//             locale: item.sys.locale.split('-')[0]
//         },
//         fields: {
//             id: item.sys.id,
//             name: item.fields.name,
//             image: item.fields.image?.fields.file?.url,
//             slug: item.fields.slug
//         }
//     })),
// }));

// Fetching sliders data
// const sliderType = "slider";
// const { data: slidersData } = await useAsyncData("sliders", () =>
//     $client.getEntries({
//         content_type: sliderType,
//     })
// );
//
// // Processing sliders data
// const sliderItems = computed(() => {
//     let groupedSlides = slidersData.value.items.flatMap(item =>
//         item.fields.slide.reduce((acc, slideItem) => {
//             let key = slideItem.fields.title; // 'mob' or 'desc'
//             if (!acc[key]) {
//                 acc[key] = [];
//             }
//             acc[key].push(slideItem.fields.file.url);
//             return acc;
//         }, {})
//     );
//
//     let slidesArray = [];
//     for (let slideKey in groupedSlides[0]) {
//         let slideNumber = slideKey.split('_')[1]; // Extract slide number
//         let slideType = slideKey.split('_')[2]; // Extract slide type ('mob' or 'desc')
//
//         if (!slidesArray[slideNumber]) {
//             slidesArray[slideNumber] = { mobileUrl: '', desktopUrl: '' };
//         }
//
//         if (slideType === 'mob') {
//             slidesArray[slideNumber].mobileUrl = groupedSlides[0][slideKey][0];
//         } else if (slideType === 'desc') {
//             slidesArray[slideNumber].desktopUrl = groupedSlides[0][slideKey][0];
//         }
//     }
//
//     return {
//         items: slidesArray.filter(slide => slide)
//     };
// });
</script>



<!--<script setup lang="js">-->
<!--const { t } = useI18n();-->
<!--const { $client } = useNuxtApp();-->
<!--const route = useRoute();-->
<!--useHead({-->
<!--    title: 'PetKit',-->
<!--    meta: [{ name: "description", content: t("meta.mainContent") }],-->
<!--});-->

<!--const categoryInformation = ref({-->
<!--    items: []-->
<!--});-->

<!--const sliderItems = ref ({-->
<!--    items: []-->
<!--})-->

<!--const fetchData = async () => {-->
<!--    try {-->
<!--      const categories = await $client.getEntries({-->
<!--          content_type: 'category',-->
<!--          'fields.slug': route.params.slug,-->
<!--          locale: t("locale"),-->
<!--      });-->

<!--      const slides = await $client.getEntries({-->
<!--          content_type: 'slider',-->
<!--      });-->

<!--      categoryInformation.value = {-->
<!--        items: categories.items.map(item => ({-->
<!--          sys: {-->
<!--              id: item.sys.id,-->
<!--              locale: item.sys.locale.split('-')[0]-->
<!--          },-->
<!--          fields: {-->
<!--            id: item.sys.id,-->
<!--            name: item.fields.name,-->
<!--            image: item.fields.image?.fields.file?.url,-->
<!--            slug: item.fields.slug-->
<!--          }-->
<!--        })),-->
<!--      };-->

<!--        let groupedSlides = slides.items.flatMap(item =>-->
<!--            item.fields.slide.reduce((acc, slideItem) => {-->
<!--                let key = slideItem.fields.title; // 'mob' или 'desc'-->
<!--                if (!acc[key]) {-->
<!--                    acc[key] = [];-->
<!--                }-->
<!--                acc[key].push(slideItem.fields.file.url);-->
<!--                return acc;-->
<!--            }, {})-->
<!--        );-->

<!--        let slidesArray = [];-->
<!--        for (let slideKey in groupedSlides[0]) {-->
<!--            let slideNumber = slideKey.split('_')[1]; // Получаем номер слайда из ключа-->
<!--            let slideType = slideKey.split('_')[2]; // Получаем тип слайда (mob или desc)-->

<!--            if (!slidesArray[slideNumber]) {-->
<!--                slidesArray[slideNumber] = { mobileUrl: '', desktopUrl: '' };-->
<!--            }-->

<!--            if (slideType === 'mob') {-->
<!--                slidesArray[slideNumber].mobileUrl = groupedSlides[0][slideKey][0];-->
<!--            } else if (slideType === 'desc') {-->
<!--                slidesArray[slideNumber].desktopUrl = groupedSlides[0][slideKey][0];-->
<!--            }-->
<!--        }-->

<!--        slidesArray = slidesArray.filter(slide => slide);-->

<!--        sliderItems.value = {-->
<!--            items: slidesArray-->
<!--        };-->

<!--    } catch (error) {-->
<!--        console.error(error);-->
<!--      }-->
<!--};-->

<!--fetchData();-->
<!--</script>-->

