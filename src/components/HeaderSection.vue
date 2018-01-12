<template>
  <div class="header-section">
    <img :src="require('@/assets/cute-bug.png')" width="150">
    <h1>{{ $t('message.welcome') }}</h1>
    <h2>Home of Professional Software Testers</h2>
    <a class="btn btn-primary" v-section-scroll location="about">Read More</a>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<style lang="sass" scoped>
.header-section
  margin-top: 4rem
  height: calc(100vh - 3.8rem)
  width: calc(100vw - 12rem)
  text-align: center

@media (max-width: 960px)
  .header-section
    width: 100vw
    margin-top: 0
</style>
