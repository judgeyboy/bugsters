<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <Slider></Slider>
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
  import Slider from './Slider.vue'
  import LoginForm from './LoginForm.vue'
  import Logout from './Logout.vue'
  import RegisterForm from './RegisterForm.vue'
  import ContactForm from './ContactForm.vue'

  export default {

    name: 'Home',

    data () {
      return {
        message: 'Welcome to Bugsters!'
      }
    },

    computed: {
      loggedIn () {
        return this.$store.state.accountModule.loggedIn
      }
    },

    components: {
      Slider,
      LoginForm,
      Logout,
      RegisterForm,
      ContactForm
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
