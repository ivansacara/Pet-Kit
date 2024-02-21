<template>
  <section class="map">
    <div class="container">
      <div class="map__inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.7731234362091!2d28.88846858209561!3d47.03841580684346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c891372c5a7%3A0xb0826deb97461b11!2zQWxlZWEgTWlyY2VhIGNlbCBCxIN0csOibiAzLCBDaGnImWluxIN1LCDQnNC-0LvQtNC-0LLQsA!5e0!3m2!1sru!2s!4v1708543945290!5m2!1sru!2s"
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
      outline: none;
    }
  }
}
</style>
