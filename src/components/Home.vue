<template>
  <div class="home">
    <HeaderSection></HeaderSection>
    <div class="slope"></div>
    <AboutSection></AboutSection>
    <div class="slope--inverted"></div>
    <HowSection></HowSection>
    <div class="slope"></div>
    <OrderForm></OrderForm>
    <h2>Contact Us</h2>
    <ContactSection></ContactSection>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection'
import AboutSection from './AboutSection'
import HowSection from './HowSection'
import OrderForm from './OrderForm'
import ContactSection from './ContactSection'

export default {
  name: 'Home',

  components: {
    HeaderSection,
    AboutSection,
    HowSection,
    OrderForm,
    ContactSection
  }
}
</script>

<style lang="sass" scoped>
h1
  font-weight: normal

.slope
  border-style: solid
  border-width: 0 0 100px 100vw
  border-color: $background-grey transparent transparent $background-grey

  &--inverted
    border-style: solid
    border-width: 0 0 100px 100vw
    border-color: transparent $background-grey $background-grey transparent
</style>
