<template>
  <a @click="scrollTo()">{{this.$slots.default[0].text}}</a>
</template>

<script>
export default {
  name: 'ScrollLink',
  props: ['location'],
  methods: {
    scrollTo: function () {
      document.querySelector(this.location).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>
