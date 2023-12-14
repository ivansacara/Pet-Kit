<template>
	<section class="faq-section">
		<div class="container">
			<Breadcrumbs :pageTitle="t('links.faq')" />
			<div class="faq-wrapper">
				<h1 class="faq-title">
					<strong>{{t('faq.title')}}</strong>
				</h1>
				<div v-for="faqInfo in faqsInfo.item" :key="faqInfo.sys.id">
					<Accordion :faqInfo="faqInfo"/>
				</div>

			</div>
		</div>
	</section>
</template>

<script setup>
const { t } = useI18n();
const { $client } = useNuxtApp();
useHead({
	title: t("links.faq"),
	meta: [{ name: "description", content: t("meta.faq") }],
});

const faqsInfo = ref({
	item: Object
});

const fetchData = async () => {
	try {
		const response = await $client.getEntries({
			content_type: 'faq',
			locale: t("locale"),
		});
		response.items.map(item => {
			console.log(item)
		})
				// Assuming response.items is the array of categories you want
		faqsInfo.value = {
			item: response.items.map(item => ({
				sys: { id: item.sys.id },
				fields: {
					question: item.fields.question,
					response: item.fields.response,
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
	.faq-wrapper{
		padding: 30px 0;

		@media screen and (min-width: $md){
			padding: 30px 0 37px;
		}
	}

	.faq-title{
		font-size: 32px;
		text-align: center;
		margin-bottom: 46px;

		@media screen and (min-width: $md){
			font-size: 40px;
		}
	}
</style>
