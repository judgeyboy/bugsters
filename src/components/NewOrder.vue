<template>
  <div>
    <MenuBar>
      <router-link slot="menu" to="/">BUGSTERS</router-link>
    </MenuBar>
    <div class="content">
      <OrderSection :showCancel="true" />
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
  }
}
</script>

<style lang="sass" scoped>
.content
  margin: 3.8rem 0 0 0
  padding: .4rem
</style>
