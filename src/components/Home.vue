<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <Slider></Slider>
    <Logout v-if="loggedIn"></Logout>
    <LoginForm v-else></LoginForm>
  </div>
</template>

<script>
  import Slider from './Slider.vue'
  import LoginForm from './LoginForm.vue'
  import Logout from './Logout.vue'

  export default {

    name: 'Home',

    data () {
      return {
        message: 'Welcome to Bugsters!'
      }
    },

    computed: {
      loggedIn () {
        return this.$store.state.loggedIn
      }
    },

    components: {
      Slider,
      LoginForm,
      Logout
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
