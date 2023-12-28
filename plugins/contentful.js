import { createClient } from 'contentful'

export default defineNuxtPlugin(() => {
	const runtimeConfig = useRuntimeConfig();

	const clientConfig = {
		space: runtimeConfig.public.NUXT_PUBLIC_CONTENTFUL_SPACE,
		accessToken: runtimeConfig.public.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	};

	return {
		provide: {
			client: createClient({
				space: clientConfig.space,
				accessToken: clientConfig.accessToken
			})
		}
	}
})

