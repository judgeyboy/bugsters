<template>
  <div>
    <MenuBar :foo="true">
      <router-link slot="menu" to="/">BUGSTERS</router-link>
    </MenuBar>
    <div class="content">
      <OrderSection />
    </div>
  </div>
</template>

<script>
import OrderSection from '@/containers/OrderSection'
import MenuBar from './MenuBar'

export default {
  name: 'NewOrder',
  components: {
    OrderSection,
    MenuBar
  }
}
</script>

<style lang="sass" scoped>
.content
  margin: 3.8rem 0 0 0
  padding: .4rem
</style>
