<template>
  <div class="language-switcher">
    <a class="language-switcher__language"
       :class="isCurrentLanguage('de') ? 'language-switcher__language--active' : ''"
       @click="changeLanguage('de')" >DE</a> |

    <a class="language-switcher__language"
       :class="isCurrentLanguage('en') ? 'language-switcher__language--active' : ''"
       @click="changeLanguage('en')" >EN</a>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    changeLanguage (language) {
      this.$i18n.locale = language
    },
    isCurrentLanguage (language) {
      return this.$i18n.locale === language
    }
  }
}
</script>

<style lang="sass" scoped>
.language-switcher

  &__language
    color: #667189
    padding: 0.2rem 0.4rem
    text-decoration: none

    &--active
      color: #50596c
      font-weight: bold
</style>
