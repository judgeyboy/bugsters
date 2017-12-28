<template>
  <div>
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
    <div v-show="loginFailed">
      <span>Username or password does not exist!</span>
    </div>
  </div>

</template>

<script>
import { ACCOUNT_LOGIN } from '../store/actionTypes'

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

  inject: ['$validator'],

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

        this.$store.dispatch(ACCOUNT_LOGIN, loginDetails)
          .then(() => {
            if (this.returnUrl) {
              this.$router.push({ path: this.returnUrl })
            } else {
              this.$router.push({ path: '/' })
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
