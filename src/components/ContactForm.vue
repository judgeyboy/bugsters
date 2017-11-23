<template>
  <div>
    <form @submit.prevent="handleSubmit('contact-form')" data-vv-scope="contact-form">
      <input type="text"
             name="name"
             placeholder="name"
             v-model="name"
             v-validate="'required'"
             :class="{'is-danger': errors.has('contact-form.name')}"> <br />

      <input type="email"
             name="email"
             placeholder="email"
             v-model="email"
             v-validate="'required|email'"
             :class="{'is-danger': errors.has('contact-form.email')}"> <br />

      <input type="text"
             name="subject"
             placeholder="subject"
             v-model="subject"
             v-validate="'required'"
             :class="{'is-danger': errors.has('contact-form.subject')}"> <br />

      <textarea placeholder="message"
                name="message"
                v-model="message"
                v-validate="'required|max:200'"
                :class="{'is-danger': errors.has('contact-form.message')}"></textarea> <br />

      <input type="submit" value="Send" class="btn btn-primary">
    </form>
  </div>
</template>

<script>
export default {

  name: 'ContactForm',

  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
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

        const contactDetails = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        }

        this.$emit('submit', contactDetails)
      })
    }
  }

}
</script>
