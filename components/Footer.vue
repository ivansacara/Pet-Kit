<template>
  <footer id="contacts" class="footer-main">
    <div class="container">
      <div class="footer-logo">
        <nuxt-link :to="localePath('/')">
          <img alt="Petkit" src="/icons/logo.svg">
        </nuxt-link>
      </div>
      <div class="footer-wrapper">
        <div>
          <div class="footer-content">
            <div class="social-links">
              <div>
                <nuxt-link aria-label="Follow us on Facebook" target="_blank"
                           to="https://www.facebook.com/profile.php?id=61552068257398&mibextid=9R9pXO">
                  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </nuxt-link>
                <nuxt-link aria-label="Follow us on Instagram"
                           target="_blank"
                           to="https://www.instagram.com/petkit_moldova?igsh=MWJ2NGJudDhrNGt4eA%3D%3D&utm_source=qr">
                  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </nuxt-link>
              </div>
              <nuxt-link to="mailto:petkitmoldova@gmail.com">
                petkitmoldova@gmail.com
              </nuxt-link>
            </div>
            <div class="footer-descr">
              <p>
                {{ t('contactInfo.workTimeMarket') }} <br>
                {{ t('contactInfo.workTimeOffice') }}<br>
                {{ t('contactInfo.address') }}<br>
                {{ t('contactInfo.phone') }}: <a class="footer-descr__phone" href="tel:+37378876969">078876969</a><br>
              </p>
              <p>
                {{ t('contactInfo.brand') }}<br>
                {{ t('contactInfo.number') }}
              </p>
            </div>
            <div class="footer-pays">
              <div>
                <img alt="google" src="/icons/google-new.png">
              </div>
              <div>
                <img alt="visa" src="/icons/visa-new.png">
              </div>
              <div>
                <img alt="ceb" src="/icons/ceb-new.png">
              </div>
              <div>
                <img alt="apple" src="/icons/apple-new.png">
              </div>
            </div>
            <div class="footer-app">
              <div>
                <nuxt-link target="_blank"
                           to="http://file5-us.petkit.com/app/petkit-android-oversea/petkit-android-oversea-latest.apk">
                  <img alt="google-play" src="/icons/footer-google.jpg">
                </nuxt-link>
              </div>
              <div>
                <nuxt-link target="_blank" to="https://apps.apple.com/us/app/petkit/id994053492?ls=1">
                  <img alt="apple-store" src="/icons/footer-apple.jpg">
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="footer-title">{{ t('aboutCompany') }}</div>
          <ul class="footer-items-menu">
            <li>
              <nuxt-link
                      :to="localePath('/delivery')"
                      class="cn-navigation__link">
                {{ t('links.delivery') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                      :to="localePath('/faq')"
                      class="cn-navigation__link">
                {{ t('links.faq') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                      :to="localePath('/Return')"
                      class="cn-navigation__link">
                {{ t('links.return') }}
              </nuxt-link>
            </li>
            <li class="cn-navigation__link">
              <nuxt-link :to="localePath('/about')" class="nav-link" @click="toggleMenu()">
                {{ t('links.about') }}
              </nuxt-link>
            </li>
            <li><span class="cn-navigation__link">{{ t('links.contacts') }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const {t} = useI18n();
const localePath = useLocalePath()

const scrollToElement = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		});
	}
};
</script>

<style lang="scss">

.footer-main {
  border-top: 1px solid $black;
  padding: 40px 0 20px;

  @media screen and (min-width: $md) {
    padding-top: 30px;
  }
}

.footer-wrapper {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: auto;
  gap: 25px;

  @media screen and (min-width: $md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1250px) {
    > div:first-child {
      min-width: 920px;
    }
  }
}

.footer-logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;

  > a {
    width: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: -10px;

    @media screen and (min-width: $lg) {
      width: 175px;
    }
  }
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.social-links {
  width: 100%;
  margin-bottom: 15px;


  > div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 6px;

    > a {
      max-width: 25px;

      &:first-child {
        margin-right: 5px;
      }
    }
  }

  svg {
    transition: all 0.3s;

    &:hover {
      fill: $text-hover;
    }
  }
}


.footer-descr {
  width: 100%;
  margin-bottom: 32px;
  line-height: 1.33;

  p {
    margin-top: 12px;
  }

  &__phone {
    display: inline;

    &:hover {
      color: $text-hover;
    }
  }
}

.footer-pays {
  display: flex;
  align-items: center;
  width: 100%;

  div {
    max-width: 50px;

    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }
}

.footer-app {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 12px;

  div {
    max-width: 100px;

    &:first-child {
      margin-right: 12px;
    }
  }
}

.footer-title {
  font-weight: 700;
  font-size: $text-xl;
  margin-bottom: 15px;
}

.footer-items-menu {
  li {
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    a:hover {
      color: $text-hover;
    }
  }
}
</style>
