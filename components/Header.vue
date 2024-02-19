<template>
  <header class="header-main">
    <div class="container">
      <div class="header-container">
        <div class="header-burger"
             @click="toggleMenu">
          <span></span>
        </div>
        <nuxt-link :to="localePath('/')" class="header-logo">
          <img alt="Petkit" src="/icons/logo.svg">
        </nuxt-link>
        <nav class="header-nav">
          <ul class="nav-items">
            <li class="nav-item">
              <nuxt-link :to="localePath('/categories')" class="nav-link nav-link-categories" @click="navClick()">
                <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8125 1.0625H4.25C3.96821 1.0625 3.69796 1.17444 3.4987 1.3737C3.29944 1.57296 3.1875 1.84321 3.1875 2.125V4.25H2.125V5.3125H3.1875V7.96875H2.125V9.03125H3.1875V11.6875H2.125V12.75H3.1875V14.875C3.1875 15.1568 3.29944 15.427 3.4987 15.6263C3.69796 15.8256 3.96821 15.9375 4.25 15.9375H13.8125C14.0943 15.9375 14.3645 15.8256 14.5638 15.6263C14.7631 15.427 14.875 15.1568 14.875 14.875V2.125C14.875 1.84321 14.7631 1.57296 14.5638 1.3737C14.3645 1.17444 14.0943 1.0625 13.8125 1.0625ZM13.8125 14.875H4.25V12.75H5.3125V11.6875H4.25V9.03125H5.3125V7.96875H4.25V5.3125H5.3125V4.25H4.25V2.125H13.8125V14.875Z"/>
                  <path d="M7.4375 4.25H11.6875V5.3125H7.4375V4.25ZM7.4375 7.96875H11.6875V9.03125H7.4375V7.96875ZM7.4375 11.6875H11.6875V12.75H7.4375V11.6875Z"/>
                </svg>
                {{ t('links.categories') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/delivery')" class="nav-link" @click="navClick()">
                <svg fill="none" height="18" viewBox="0 0 17 18" width="17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.125 9H8.5V10.125H2.125V9ZM1.0625 6.1875H6.375V7.3125H1.0625V6.1875Z"/>
                  <path d="M15.8946 9.34088L14.3009 5.40337C14.26 5.30217 14.1919 5.21591 14.1051 5.15531C14.0183 5.09471 13.9166 5.06244 13.8126 5.0625H12.2189V3.9375C12.2189 3.78832 12.1629 3.64524 12.0633 3.53975C11.9637 3.43426 11.8285 3.375 11.6876 3.375H3.18765V4.5H11.1564V11.5627C10.9143 11.7116 10.7025 11.9097 10.5331 12.1456C10.3636 12.3816 10.24 12.6507 10.1693 12.9375H6.83096C6.70166 12.4073 6.39415 11.9451 5.96608 11.6378C5.53801 11.3304 5.01877 11.1989 4.50568 11.2679C3.99259 11.3369 3.52088 11.6017 3.17898 12.0126C2.83707 12.4235 2.64844 12.9524 2.64844 13.5C2.64844 14.0476 2.83707 14.5765 3.17898 14.9874C3.52088 15.3983 3.99259 15.6631 4.50568 15.7321C5.01877 15.8011 5.53801 15.6696 5.96608 15.3622C6.39415 15.0549 6.70166 14.5927 6.83096 14.0625H10.1693C10.2849 14.5453 10.5492 14.9734 10.9204 15.2793C11.2916 15.5851 11.7485 15.7512 12.2189 15.7512C12.6893 15.7512 13.1462 15.5851 13.5174 15.2793C13.8886 14.9734 14.1529 14.5453 14.2685 14.0625H15.4064C15.5473 14.0625 15.6824 14.0032 15.782 13.8977C15.8817 13.7923 15.9376 13.6492 15.9376 13.5V9.5625C15.9377 9.4863 15.923 9.41089 15.8946 9.34088ZM4.7814 14.625C4.57125 14.625 4.36583 14.559 4.1911 14.4354C4.01638 14.3118 3.88019 14.1361 3.79978 13.9305C3.71936 13.725 3.69832 13.4988 3.73931 13.2805C3.78031 13.0623 3.8815 12.8618 4.0301 12.7045C4.17869 12.5472 4.36801 12.44 4.57411 12.3966C4.78022 12.3532 4.99385 12.3755 5.188 12.4606C5.38214 12.5458 5.54808 12.69 5.66483 12.875C5.78158 13.06 5.8439 13.2775 5.8439 13.5C5.84362 13.7983 5.73158 14.0843 5.53239 14.2952C5.33319 14.5061 5.0631 14.6247 4.7814 14.625ZM12.2189 6.1875H13.462L14.601 9H12.2189V6.1875ZM12.2189 14.625C12.0088 14.625 11.8033 14.559 11.6286 14.4354C11.4539 14.3118 11.3177 14.1361 11.2373 13.9305C11.1569 13.725 11.1358 13.4988 11.1768 13.2805C11.2178 13.0623 11.319 12.8618 11.4676 12.7045C11.6162 12.5472 11.8055 12.44 12.0116 12.3966C12.2177 12.3532 12.4314 12.3755 12.6255 12.4606C12.8196 12.5458 12.9856 12.69 13.1023 12.875C13.2191 13.06 13.2814 13.2775 13.2814 13.5C13.2811 13.7983 13.1691 14.0843 12.9699 14.2952C12.7707 14.5061 12.5006 14.6247 12.2189 14.625ZM14.8751 12.9375H14.2685C14.1514 12.4557 13.8867 12.0286 13.5158 11.7232C13.1449 11.4178 12.6888 11.2514 12.2189 11.25V10.125H14.8751V12.9375Z"/>
                </svg>
                {{ t('links.delivery') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/faq')" class="nav-link" @click="navClick()">
                <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1.2C8.72632 1.2 10.8 3.27368 10.8 6C10.8 8.72632 8.72632 10.8 6 10.8C5.04211 10.8 4.22105 10.5474 3.45263 10.0737L1.43158 10.5789C1.42105 10.5789 1.42105 10.5789 1.42105 10.5684L1.92632 8.54737C1.45263 7.77895 1.2 6.95789 1.2 6C1.2 3.27368 3.27368 1.2 6 1.2ZM6 0C2.68421 0 0 2.68421 0 6C0 6.96842 0.242105 7.90526 0.642105 8.71579L0.263158 10.2947C0.0526316 11.1684 0.831579 11.9474 1.70526 11.7368L3.28421 11.3579C4.09474 11.7579 5.03158 12 6 12C9.31579 12 12 9.31579 12 6C12 2.68421 9.31579 0 6 0ZM3.6 5.2C3.15789 5.2 2.8 5.55789 2.8 6C2.8 6.44211 3.15789 6.8 3.6 6.8C4.04211 6.8 4.4 6.44211 4.4 6C4.4 5.55789 4.04211 5.2 3.6 5.2ZM6 5.2C5.55789 5.2 5.2 5.55789 5.2 6C5.2 6.44211 5.55789 6.8 6 6.8C6.44211 6.8 6.8 6.44211 6.8 6C6.8 5.55789 6.44211 5.2 6 5.2ZM8.4 5.2C7.95789 5.2 7.6 5.55789 7.6 6C7.6 6.44211 7.95789 6.8 8.4 6.8C8.84211 6.8 9.2 6.44211 9.2 6C9.2 5.55789 8.84211 5.2 8.4 5.2Z"/>
                </svg>
                {{ t('links.faq') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/Return')" class="nav-link" @click="navClick()">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5.671 4.257c3.928-3.219 9.733-2.995 13.4.672 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0A9.993 9.993 0 0 1 2.25 9.767l.077-.313 1.934.51a8 8 0 1 0 3.053-4.45l-.221.166 1.017 1.017-4.596 1.06 1.06-4.596 1.096 1.096zM13 6v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z"/>
                </svg>
                {{ t('links.return') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/about')" class="nav-link" @click="navClick()">
                <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0.875C3.61758 0.875 0.875 3.61758 0.875 7C0.875 10.3824 3.61758 13.125 7 13.125C10.3824 13.125 13.125 10.3824 13.125 7C13.125 3.61758 10.3824 0.875 7 0.875ZM7 12.0859C4.1918 12.0859 1.91406 9.8082 1.91406 7C1.91406 4.1918 4.1918 1.91406 7 1.91406C9.8082 1.91406 12.0859 4.1918 12.0859 7C12.0859 9.8082 9.8082 12.0859 7 12.0859Z"/>
                  <path d="M6.34375 4.59375C6.34375 4.7678 6.41289 4.93472 6.53596 5.05779C6.65903 5.18086 6.82595 5.25 7 5.25C7.17405 5.25 7.34097 5.18086 7.46404 5.05779C7.58711 4.93472 7.65625 4.7678 7.65625 4.59375C7.65625 4.4197 7.58711 4.25278 7.46404 4.12971C7.34097 4.00664 7.17405 3.9375 7 3.9375C6.82595 3.9375 6.65903 4.00664 6.53596 4.12971C6.41289 4.25278 6.34375 4.4197 6.34375 4.59375ZM7.32812 6.125H6.67188C6.61172 6.125 6.5625 6.17422 6.5625 6.23438V9.95312C6.5625 10.0133 6.61172 10.0625 6.67188 10.0625H7.32812C7.38828 10.0625 7.4375 10.0133 7.4375 9.95312V6.23438C7.4375 6.17422 7.38828 6.125 7.32812 6.125Z"/>
                  <defs>
                    <clipPath id="clip0_886_17047">
                      <rect fill="white" height="14" width="14"/>
                    </clipPath>
                  </defs>
                </svg>
                {{ t('links.about') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <span class="nav-link" @click.prevent="scrollToElement('contacts')">
                 <svg fill="none" height="12" viewBox="0 0 11 12" width="11" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.04211 2.30179C0.434211 2.64962 0 3.44757 0 4.16368V9.66752C0 10.977 0.964912 12 2.2 12H8.8C10.0351 12 11 10.977 11 9.66752V4.16368C11 3.44757 10.5658 2.64962 9.95789 2.30179L6.47456 0.245525C5.91491 -0.0818415 5.08509 -0.0818415 4.52544 0.245525L1.04211 2.30179ZM1.56316 3.32481L5.06579 1.26854C5.33597 1.10486 5.66404 1.10486 5.93421 1.26854L9.43684 3.32481C9.72632 3.48849 9.9 3.80563 9.9 4.16368V9.66752C9.9 10.4041 9.49474 10.8338 8.8 10.8338H2.2C1.50526 10.8338 1.1 10.4041 1.1 9.66752V4.16368C1.1 3.80563 1.27368 3.48849 1.56316 3.32481ZM11 4.60358C11 4.05115 10.4693 3.73402 10.0254 4.01023L5.93421 6.41432C5.66404 6.57801 5.33597 6.57801 5.06579 6.41432L0.974561 4.01023C0.530702 3.73402 0 4.05115 0 4.60358V9.66752C0 10.977 0.964912 12 2.2 12H8.8C10.0351 12 11 10.977 11 9.66752V4.60358ZM9.9 4.60358V9.66752C9.9 10.4041 9.49474 10.8338 8.8 10.8338H2.2C1.50526 10.8338 1.1 10.4041 1.1 9.66752V4.60358C1.1 4.71611 1.01316 4.91049 0.781579 5.22762L4.52544 7.43734C5.08509 7.76471 5.91491 7.76471 6.47456 7.43734L10.2184 5.22762C9.98684 4.91049 9.9 4.71611 9.9 4.60358Z"/>
              </svg>
                {{ t('links.contacts') }}
              </span>
            </li>
          </ul>
        </nav>
        <div class="header-languages">
          <Langs/>
        </div>

        <div class="overlay" @click="toggleMenu()"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue'

const {t} = useI18n();
const localePath = useLocalePath()
const isActive = ref(false)
const scrollToElement = (id) => {
	const element = document.getElementById(id);
	navClick()

	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		});
	}
};
const toggleMenu = () => {
	isActive.value = !isActive.value
	document.body.classList.toggle("isOpen");
}
const navClick = () => {
	if (isActive.value) {
		isActive.value = false
		document.body.classList.remove("isOpen");
	}
}
</script>

<style lang="scss" scoped>
.header-main {
  position: fixed;
  height: 58px;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background: $bg;
  border-bottom: 1px solid #ededed;

  @media screen and (min-width: $lg) {
    height: 74px;
  }
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (min-width: $md) {
    margin-left: -10px;
  }
}

.header-burger {
  display: block;
  position: relative;
  width: 22px;
  height: 18px;
  cursor: pointer;
  z-index: 1001;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $text-color;
    transition: all 0.3s;
  }

  &::before {
    top: 2px;
  }

  &::after {
    bottom: 0;
  }

  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $text-color;
    top: 9px;
  }

  @media (min-width: $md) {
    display: none;
  }
}

.header-logo {
  width: 100px;

  @media screen and (min-width: $lg) {
    width: 155px;
  }
}

.header-nav {
  @media screen and (max-width: $md) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    transition: transform 0.4s ease;
    z-index: 1000;
    background: $bg;
    border-radius: 0 13px 13px 0;
    padding: 60px 0 15px;
    transform: translateX(-350px);
  }
}

.nav-items {
  display: flex;

  @media screen and (max-width: $md) {
    flex-direction: column;
  }
}

.nav-item {
  line-height: 1;


  @media screen and (min-width: $md) {
    margin-right: 30px;
  }

  @media screen and (min-width: $lg) {
    margin-right: 45px;
  }

  &:last-of-type {
    margin-right: 0;
  }

}

.header-nav {
  .router-link-active {
    @media screen and (max-width: $md) {
      background: $btn-bg;
      color: white;

      svg {
        fill: $default !important;
      }
    }
  }
}


.nav-link {
  display: inline;
  cursor: pointer;

  &:hover {
    color: #888;
  }

  svg {
    display: none;
    transition: all 0.3s;
  }

  @media screen and (max-width: $md) {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    padding: 11px 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f4f4f4;

    &:first-of-type {
      border-top: 1px solid #f4f4f4;
    }

    &:hover {
      background: $btn-bg;
      color: $default;

      svg {
        fill: $default;
      }
    }
    svg {
      display: block;
      fill: $btn-bg;
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
  }


}

.nav-link-categories {
  @media screen and (min-width: $md) {
    display: none;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 500;
  background: rgb(0, 0, 0, 0.4);
  display: none;
}

.isOpen {
  .overlay {
    display: block;
  }

  @media screen and (min-width: $md) {
    .overlay {
      display: none;
    }
  }

  .header-nav {
    transform: translate(0);
  }

  .header-burger {
    * {
      transition: all 0.3s ease;
    }

    span {
      display: none;
    }

    &::before {
      transform: rotate(-45deg);
      top: 8px;
    }

    &::after {
      transform: rotate(45deg);
      bottom: 8px;
    }
  }
}
</style>
