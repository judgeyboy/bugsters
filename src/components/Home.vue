<template>
<div>
  <HeaderSection></HeaderSection>
  <div class="container">
    <AboutSection></AboutSection>
    <HowSection></HowSection>
    <OrderSection></OrderSection>
    <ContactSection></ContactSection>
  </div>
</div>
</template>

<script>
import HeaderSection from './HeaderSection'
import AboutSection from './AboutSection'
import HowSection from './HowSection'
import ContactSection from '@/containers/ContactSection'
import OrderSection from '@/containers/OrderSection'

export default {
  name: 'Home',

  components: {
    HeaderSection,
    AboutSection,
    HowSection,
    ContactSection,
    OrderSection
  }
}
</script>
