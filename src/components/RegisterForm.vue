<template>
  <form @submit.prevent="onSubmit">
    <legend>Register</legend>
    <input type="text" placeholder="name" v-model="name"> <br />
    <input type="email" placeholder="email" v-model="email"> <br />
    <input type="password" placeholder="password" v-model="password"> <br />
    <input type="password" placeholder="password repeat" v-model="passwordRepeat"> <br />
    <input type="submit" value="Register">
  </form>
</template>

<script>
export default {

  name: 'RegisterForm',

  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordRepeat: ''
    }
  },

  methods: {
    onSubmit: function () {
      const registerDetails = {
        name: this.name,
        email: this.email,
        password: this.password,
        passwordRepeat: this.passwordRepeat
      }

      this.$store.dispatch('register', registerDetails)
    }
  }

}
</script>
