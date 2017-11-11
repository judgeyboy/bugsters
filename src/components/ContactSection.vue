<template>
  <div class="contact-section">

    <div v-if="contactState === 'clean'" class="contact-section__form">
      <ContactForm @submit="handleFormSubmit"></ContactForm>
    </div>

    <div v-if="contactState === 'success'" class="contact-section__success">
      <h2>SUCCESS ;)</h2>
    </div>

    <div v-if="contactState === 'error'" class="contact-section__error">
      <h2>ERROR ;(</h2>
    </div>

  </div>
</template>


<script>
import ContactForm from './ContactForm'

export default {
  name: 'ContactSection',

  components: {
    ContactForm
  },

  computed: {
    contactState () {
      return this.$store.state.contactModule.contactState
    }
  },

  methods: {
    handleFormSubmit (contactDetails) {
      this.$store.dispatch('contact', contactDetails)
    }
  }
}
</script>
