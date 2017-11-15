<template>
  <div class="login-form">
    <form @submit.prevent="onSubmit">

      <input type="text"
             name="email"
             placeholder="email"
             v-validate="'required'"
             v-model="email"
             :class="{'is-danger': errors.has('email')}">

      <input type="password"
             name="password"
             placeholder="password"
             v-validate="'required'"
             v-model="password"
             :class="{'is-danger': errors.has('password')}">

      <input type="submit" value="Login">
    </form>
    <div v-show="loginFailed" class="error-message">
      <span>Username or password does not exist!</span>
    </div>
  </div>

</template>

<script>
export default {

  name: 'LoginForm',

  data () {
    return {
      email: '',
      password: '',
      loginFailed: false
    }
  },

  props: ['returnUrl'],

  methods: {
    onSubmit: function () {
      return this.$validator.validateAll().then(valid => {
        if (!valid) {
          alert('fix dem errors')
          return
        }

        const loginDetails = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('login', loginDetails)
          .then(() => {
            if (this.returnUrl) {
              this.$router.push({ path: this.returnUrl })
            }
          })
          .catch(() => {
            this.loginFailed = true
          })
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.is-danger
    border-color: red
</style>
