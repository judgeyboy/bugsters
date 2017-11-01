<template>
  <div class="contact-form">
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="name" v-model="name"> <br />
      <input type="email" placeholder="email" v-model="email"> <br />
      <input type="text" placeholder="subject" v-model="subject"> <br />
      <textarea placeholder="message" v-model="message"></textarea> <br />
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

  methods: {
    onSubmit: function () {
      const contactDetails = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }

      this.$store.dispatch('contact', contactDetails)
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

input[type=text], input[type=email]
  height: 40px

textarea
  height: 120px
</style>
