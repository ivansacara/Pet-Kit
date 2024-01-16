<template>
  <section class="faq-section">
    <div class="container">
      <Breadcrumbs :pageTitle="t('links.faq')"/>
      <div class="faq-wrapper">
        <h1 class="faq-title">
          <strong>{{ t('faq.title') }}</strong>
        </h1>
        <div v-for="faqInfo in faqsInfo.item" :key="faqInfo.sys.id">
          <Accordion :faqInfo="faqInfo"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const {t} = useI18n();
const {$client} = useNuxtApp();

useHead({
	title: t("links.faq"),
	meta: [
		{name: "description", content: t("meta.faq")},
		{name: "og:title", content: t("links.faq")},
		{name: "og:description", content: t("meta.faq")},
		{name: 'og:image', content: '/petkit.png'}],
});

// Define the content type for your FAQ entries
const contentType = "faq";

// Fetch FAQ data using useAsyncData for SSR compatibility
const {data: faqsData} = await useAsyncData("faqs", () =>
	$client.getEntries({
		content_type: contentType,
		locale: t("locale"),
	})
);

// Process the fetched FAQ data
const faqsInfo = computed(() => ({
	item: faqsData.value.items.map(item => ({
		sys: {id: item.sys.id},
		fields: {
			question: item.fields.question,
			response: item.fields.response,
		}
	})),
}));

</script>


<style lang="scss">
.faq-wrapper {
  padding: 30px 0;

  @media screen and (min-width: $md) {
    padding: 30px 0 37px;
  }
}

.faq-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 46px;

  @media screen and (min-width: $md) {
    font-size: 40px;
  }
}
</style>
