<template>
  <header class="header-main">
    <div class="container">
      <div class="header-container">
        <div class="header-burger"
             @click="toggleMenu">
          <span></span>
        </div>
        <nuxt-link :to="localePath('/')" class="header-logo">
          <img alt="logo" src="/icons/logo.svg">
        </nuxt-link>
        <nav class="header-nav">
          <ul class="nav-items">
            <li class="nav-item">
              <nuxt-link :to="localePath('/delivery')" class="nav-link" @click="toggleMenu()">
                {{ t('links.delivery') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/faq')" class="nav-link" @click="toggleMenu()">
                {{ t('links.faq') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/return')" class="nav-link" @click="toggleMenu()">
                {{ t('links.return') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/about')" class="nav-link" @click="toggleMenu()">
                {{ t('links.about') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="scrollToElement('contacts')">{{ t('links.contacts') }}</a>
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
	if (isActive.value === true) {
		toggleMenu()
	}
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
</script>

<style lang="scss">
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
    padding: 60px 15px 15px;
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
  display: inline;
  margin-bottom: 12px;

  @media screen and (min-width: $md) {
    margin-right: 30px;
    margin-bottom: 0;
  }

  @media screen and (min-width: $lg) {
    margin-right: 45px;
  }

  &:last-of-type {
    margin-right: 0;
  }

}

.nav-link {
  display: inline;

  &:hover {
    color: #888;
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
