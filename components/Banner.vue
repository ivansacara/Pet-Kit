<template>
  <div class="banner">
    <div class="container">
      <div class="banner-wrap">
        <div class="banner-txt">
          <h6 class="banner-title">{{ bannerTitle }}</h6>

          <p class="banner-descr">
            {{ bannerDescr }}
          </p>

          <div v-if="isFaq" class="banner-buttons">
            <a class="banner-link" href="https://t.me/petkitrussia" target="_blank">
              <span> TELEGRAM </span>
              <svg fill="none" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3601 2.9426L2.32388 8.35523C1.36596 8.73998 1.37151 9.27435 2.14813 9.51265L5.7518 10.6368L14.0896 5.37619C14.4839 5.13631 14.8441 5.26535 14.548 5.52819L7.79271 11.6248H7.79113L7.79271 11.6256L7.54413 15.3401C7.9083 15.3401 8.06901 15.1731 8.27326 14.9759L10.0236 13.2739L13.6645 15.9631C14.3358 16.3329 14.818 16.1429 14.985 15.3417L17.375 4.07785C17.6197 3.09698 17.0006 2.65285 16.3601 2.9426Z"
                      fill="#26A5E4"></path>
              </svg>
            </a>
            <a class="banner-link" href="https://api.whatsapp.com/send?phone=74999384699" target="_blank">
              <span> WHTATSAPP </span>
              <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_591_15794)">
                  <path clip-rule="evenodd"
                        d="M13.0613 10.7865C12.8378 10.6748 11.742 10.1363 11.538 10.0613C11.334 9.98703 11.1855 9.95028 11.0363 10.1738C10.8877 10.3958 10.461 10.8983 10.3312 11.0468C10.2007 11.196 10.071 11.214 9.84825 11.103C9.6255 10.9905 8.907 10.7558 8.05575 9.99678C7.3935 9.40578 6.94575 8.67603 6.816 8.45253C6.68625 8.22978 6.80175 8.10903 6.9135 7.99803C7.014 7.89828 7.13625 7.73778 7.248 7.60803C7.35975 7.47753 7.3965 7.38453 7.47075 7.23528C7.54575 7.08678 7.50825 6.95703 7.452 6.84528C7.3965 6.73353 6.951 5.63628 6.765 5.19003C6.58425 4.75578 6.4005 4.81503 6.264 4.80753C6.1335 4.80153 5.985 4.80003 5.8365 4.80003C5.688 4.80003 5.4465 4.85553 5.2425 5.07903C5.03775 5.30178 4.4625 5.84103 4.4625 6.93828C4.4625 8.03478 5.2605 9.09453 5.37225 9.24378C5.484 9.39228 6.9435 11.6438 9.17925 12.609C9.71175 12.8385 10.1265 12.9758 10.4497 13.0778C10.9837 13.248 11.4698 13.224 11.8538 13.1663C12.2812 13.1025 13.1723 12.627 13.3583 12.1065C13.5435 11.586 13.5435 11.1398 13.488 11.0468C13.4325 10.9538 13.284 10.8983 13.0605 10.7865H13.0613ZM8.99475 16.3388H8.99175C7.66382 16.339 6.36028 15.9821 5.21775 15.3053L4.94775 15.1448L2.14125 15.8813L2.8905 13.1453L2.71425 12.8648C1.97185 11.683 1.57897 10.3154 1.581 8.91978C1.5825 4.83228 4.908 1.50678 8.99775 1.50678C10.9777 1.50678 12.8393 2.27928 14.2388 3.68028C14.929 4.36772 15.4762 5.1852 15.8485 6.08545C16.2208 6.9857 16.4109 7.95084 16.4078 8.92503C16.4062 13.0125 13.0807 16.3388 8.99475 16.3388ZM15.3038 2.61603C14.4774 1.78422 13.4942 1.12468 12.4111 0.675631C11.328 0.226579 10.1665 -0.00305719 8.994 3.07332e-05C4.0785 3.07332e-05 0.0765 4.00128 0.075 8.91903C0.0727223 10.4841 0.483281 12.0221 1.26525 13.3778L0 18L4.728 16.7595C6.03591 17.4721 7.50157 17.8455 8.991 17.8455H8.99475C13.9102 17.8455 17.9123 13.8443 17.9137 8.92578C17.9174 7.75374 17.6886 6.59261 17.2406 5.50956C16.7926 4.42651 16.1343 3.44303 15.3038 2.61603Z"
                        fill="#4BCC63"
                        fill-rule="evenodd"></path>
                </g>
                <defs>
                  <clipPath id="clip0_591_15794">
                    <rect fill="white" height="18" width="18"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a class="banner-link" href="mailto:info@petkit.ru.com" target="_blank">
              <span> НАПИСАТЬ НА ПОЧТУ </span>
              <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 16.5001H3C2.60218 16.5001 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3979 1.5 15.0001V6.78681C1.51247 6.53889 1.58533 6.29778 1.71226 6.08445C1.83918 5.87112 2.01632 5.69205 2.22825 5.56281L8.22825 1.96281C8.46129 1.82308 8.7279 1.74927 8.99962 1.74927C9.27134 1.74927 9.53796 1.82308 9.771 1.96281L15.771 5.56281C16.2217 5.83506 16.4985 6.32256 16.5 6.84906V15.0001C16.5 15.3979 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5001 15 16.5001ZM3 7.40106V15.0001H15V7.40106L9 11.4008L3 7.40106ZM9 3.24906L3.987 6.25656L9 9.59856L14.0122 6.25656L9 3.24906Z"
                      fill="#A7A2A2"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="banner-img">
          <img :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref} from 'vue';

const {t} = useI18n();
const props = defineProps({
	isFaq: Boolean,
	image: String,
	bannerTitle: String,
	bannerDescr: String,
});

</script>

<style lang="scss">
.banner {
  margin-bottom: -1px;
  background: url('/img/components/content/banner-bg.png') left 100% / 100% 100% no-repeat;

  @media screen and (min-width: $md) {
    background-position: left 100%;
    background-size: 100% 450px;
  }

  > .container {
    max-width: 1140px;
  }
}

.banner-wrap {
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: $md) {
    flex-direction: row;
    padding: 0;
  }
}

.banner-txt {
  color: $default;
  text-align: center;

  @media screen and (min-width: $md) {
    max-width: 555px;
    width: 100%;
    text-align: left;
  }
}

.banner-img {
  width: 100%;

  img {
    object-fit: contain;
    width: 100%;
  }
}

.banner-title {
  margin: 0 0 15px 0;
  font-size: 22px;
  line-height: 27px;
  font-weight: 600;

  @media screen and (min-width: $md) {
    margin: 0 0 27px 0;
    font-size: 45px;
    line-height: 54px;
  }
}

.banner-descr {
  font-size: 15px;
  line-height: 25px;
}

.banner-buttons {
  margin: 21px 0 0 0;
  max-width: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.banner-link {
  max-width: calc(50% - 5px);
  width: calc(50% - 5px);
  flex-basis: calc(50% - 5px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
  height: 65px;
  background: #FFFFFF;
  border-radius: 7px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.08em;
  color: #818181;
  text-decoration: none;
  text-transform: uppercase;

  &:last-of-type {
    max-width: 100%;
    width: 100%;
    flex-basis: 100%;
  }

  > svg {
    overflow: hidden;
    vertical-align: middle;
    width: 19px;
  }
}
</style>
