<template>
  <section class="map">
    <div class="container">
      <div class="map__inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.2862735067115!2d28.88407327667547!3d47.05423442595744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cebd3b95555%3A0x66c52ca6c8b9ab31!2zQnVsZXZhcmR1bCBNaXJjZWEgY2VsIELEg3Ryw65uIDMsIE1ELTIwNDQsIENoaciZaW7Eg3UsINCc0L7Qu9C00L7QstCw!5e0!3m2!1sru!2s!4v1708541568127!5m2!1sru!2s"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.map {
  padding-bottom: 40px;
  margin-left: -15px;
  margin-right: -15px;
  @media screen and (min-width: $md) {
    margin-left: 0;
    margin-right: 0;
  }
  &__inner {
    border-radius: 15px;
    overflow: hidden;
    width: 100%;

    iframe {
      width: 100%;
    }
  }
}
</style>
