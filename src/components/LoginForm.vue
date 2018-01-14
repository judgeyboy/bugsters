<template>
  <div class="login-form">

    <div class="container">
      <div class="columns">
        <div class="column col-6 col-sm-8 col-mx-auto">
          <h2 class="section-title">Log In</h2>

          <FormErrorMessage v-show="loginFailed" message="Username or password does not exist!" />
          <FormErrorMessage v-if="hasError"/>

          <form class="form-horizontal" @submit.prevent="onSubmit">
            <div class="form-group">
              <div class="col-3 col-xs-12">
                <label class="form-label" for="email">Email</label>
              </div>
              <div class="col-9 col-xs-12">
                <input class="form-input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      v-validate="'required'"
                      v-model="email"
                      :class="{'is-danger': errors.has('email')}">
              </div>
            </div>

            <div class="form-group">
              <div class="col-3 col-xs-12">
                <label class="form-label" for="password" >Password</label>
              </div>
              <div class="col-9 col-xs-12">
                <input class="form-input"
                      type="password"
                      name="password"
                      placeholder="password"
                      v-validate="'required'"
                      v-model="password"
                      :class="{'is-danger': errors.has('password')}">
              </div>
            </div>
            <div class="form-buttons">
              <button type="submit" class="btn btn-primary" :class="isLoading? 'loading' : ''">Log In</button>
              <router-link to="/" class="btn btn-link">Cancel</router-link>
            </div>
          </form>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ACCOUNT_LOGIN } from '../store/actionTypes'
import FormErrorMessage from '@/components/FormErrorMessage'

export default {

  name: 'LoginForm',

  data () {
    return {
      email: '',
      password: '',
      loginFailed: false,
      isLoading: false,
      hasError: false
    }
  },

  props: ['returnUrl'],

  components: {
    FormErrorMessage
  },

  inject: ['$validator'],

  methods: {
    onSubmit: function () {
      return this.$validator.validateAll().then(valid => {
        if (!valid) {
          this.hasError = true
          return
        }

        this.hasError = false
        this.isLoading = true

        const loginDetails = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch(ACCOUNT_LOGIN, loginDetails)
          .then(() => {
            this.isLoading = false

            if (this.returnUrl) {
              this.$router.push({ path: this.returnUrl })
            } else {
              this.$router.push({ path: '/' })
            }
          })
          .catch(() => {
            this.loginFailed = true
            this.isLoading = false
          })
      })
    }
  }
}
</script>
