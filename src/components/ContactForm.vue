<template>
  <form @submit.prevent="onSubmit">
    <legend>Contact</legend>
    <input type="text" placeholder="name" v-model="name"> <br />
    <input type="email" placeholder="email" v-model="email"> <br />
    <input type="text" placeholder="subject" v-model="subject"> <br />
    <textarea placeholder="message" v-model="message"></textarea> <br />
    <input type="submit" value="Send">
  </form>
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
