<template>
  <div>
    <MenuBar :foo="true">
      <router-link slot="menu" to="/">BUGSTERS</router-link>
    </MenuBar>
    <div class="content">
      <a @click="goBack" class="btn">Go Back</a>
      <OrderSection />
    </div>

    <FooterSection />
  </div>
</template>

<script>
import OrderSection from '@/containers/OrderSection'
import MenuBar from './MenuBar'
import FooterSection from './FooterSection'

export default {
  name: 'NewOrder',

  components: {
    OrderSection,
    MenuBar,
    FooterSection
  },

  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="sass" scoped>
.content
  margin: 3.8rem 0 0 0
  padding: .4rem
</style>
