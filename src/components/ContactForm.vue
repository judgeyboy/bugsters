<template>
  <div class="contact-form">
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

      <input type="submit" value="Send" class="button">
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

<style lang="sass" scoped>
.contact-form
  max-width: 400px
  margin: 40px auto

input[type=text], input[type=email], textarea
  border-radius: 4px
  width: 100%
  font-size: 20px
  line-height: 40px
  margin-bottom: 20px

.is-danger
    border-color: red

input[type=text], input[type=email]
  height: 40px

textarea
  height: 120px
</style>
