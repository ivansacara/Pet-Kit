import { createClient } from 'contentful'


// const config = {
// 	space: '33x2fmup01q1',
// 	accessToken: 'bwmGPE-nzjr7L5NZwTEcBMXcMAN_Lg8_hMfFt8VaBOA'
// };

// const config = {
// 	space: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE,
// 	accessToken: process.env.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
// };


export default defineNuxtPlugin(() => {
	const runtimeConfig = useRuntimeConfig();


	const clientConfig = {
		space: runtimeConfig.public.NUXT_PUBLIC_CONTENTFUL_SPACE,
		accessToken: runtimeConfig.public.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	};
	console.log(clientConfig)
	return {
		provide: {
			client: createClient({
				space: clientConfig.space,
				accessToken: clientConfig.accessToken
			})
		}
	}
})

