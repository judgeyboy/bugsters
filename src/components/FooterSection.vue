<template>
  <div class="footer-section">
    Made with <span class="footer-section_heart">♥</span> by <span class="footer-section_bugsters">Bugsters</span> <br>
    © 2018
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style lang="sass" scoped>
.footer-section
  text-align: center
  padding: 3rem 0
  color: #acb3c2

  &_heart
    color: #e85600

  &_bugsters
    color: #667189
</style>
