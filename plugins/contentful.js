import {createClient} from 'contentful'

const config = {
    space:'33x2fmup01q1',
    accessToken:'bwmGPE-nzjr7L5NZwTEcBMXcMAN_Lg8_hMfFt8VaBOA'
};

export default defineNuxtPlugin(() => {
    return {
        provide: {
            client :createClient({
                space:'33x2fmup01q1',
                accessToken:'bwmGPE-nzjr7L5NZwTEcBMXcMAN_Lg8_hMfFt8VaBOA'
            })
        }
    }

})
