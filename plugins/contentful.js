import { createClient } from 'contentful'


// const config = {
// 	space: '33x2fmup01q1',
// 	accessToken: 'bwmGPE-nzjr7L5NZwTEcBMXcMAN_Lg8_hMfFt8VaBOA'
// };

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();
	console.log('LALALA')
	return {
		provide: {
			client: createClient({
				space: config.public.contentfulSpace,
				accessToken: config.public.contentfulAccessToken
			})
		}
	}
})
