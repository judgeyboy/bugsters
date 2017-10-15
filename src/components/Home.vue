<template>
  <div class="home">
    <HeaderSection></HeaderSection>
    <div class="slope"></div>
    <Logout v-if="loggedIn"></Logout>
    <div v-else>
      <LoginForm></LoginForm>
      <h3>or</h3>
      <RegisterForm></RegisterForm>
    </div>
    <h2>Contact Us</h2>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection'
import LoginForm from './LoginForm'
import Logout from './Logout'
import RegisterForm from './RegisterForm'
import ContactForm from './ContactForm'

export default {
  name: 'Home',

  computed: {
    loggedIn () {
      return this.$store.state.accountModule.loggedIn
    }
  },

  components: {
    HeaderSection,
    LoginForm,
    Logout,
    RegisterForm,
    ContactForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1
  font-weight: normal

.slope
  border-style: solid
  border-width: 0 0 100px 100vw
  border-color: $background-grey transparent transparent $background-grey
</style>
