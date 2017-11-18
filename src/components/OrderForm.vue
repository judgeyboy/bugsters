<template>
  <div class="order-form">
    <form @submit.prevent="handleSubmit('order-form')" data-vv-scope="order-form">

      <input type="text"
             name="company"
             placeholder="company"
             v-model="company"
             v-validate="'required'"
             :class="{'is-danger': errors.has('order-form.company')}"> <br />

      <input type="text"
             name="name"
             placeholder="name"
             v-model="name"
             v-validate="'required'"
             :class="{'is-danger': errors.has('order-form.name')}"> <br />

      <input type="email"
             name="email"
             placeholder="email"
             v-model="email"
             v-validate="'required|email'"
             :class="{'is-danger': errors.has('order-form.email')}"> <br />

      <input type="text"
             name="phone"
             placeholder="phone"
             v-model="phone"
             v-validate="'required'"
             :class="{'is-danger': errors.has('order-form.phone')}"> <br />

      <input type="text"
             name="url"
             placeholder="url"
             v-model="url"
             v-validate="'required|url'"
             :class="{'is-danger': errors.has('order-form.url')}"> <br />

      <textarea placeholder="message"
                name="message"
                v-model="message"
                v-validate="'max:200'"
                :class="{'is-danger': errors.has('order-form.message')}"></textarea> <br />

      <input type="submit" value="Send" class="button">
    </form>
  </div>
</template>

<script>
export default {
  name: 'OrderForm',

  data () {
    return {
      budget: '300.-',
      company: '',
      name: '',
      email: '',
      url: '',
      message: '',
      phone: ''
    }
  },

  inject: ['$validator'],

  methods: {
    handleSubmit (scope) {
      return this.$validator.validateAll(scope).then(valid => {
        if (!valid) {
          alert('fix dem errors')
          return
        }

        const orderDetails = {
          budget: this.budget,
          company: this.company,
          name: this.name,
          email: this.email,
          url: this.url,
          message: this.message,
          phone: this.phone
        }

        this.$store.dispatch('order', orderDetails)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.is-danger
    border-color: red
</style>
