<template>
  <div class="container">
    <HeaderSection></HeaderSection>
    <AboutSection></AboutSection>
    <HowSection></HowSection>
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
