<template>
  <div class="bugsters-section">
    <div class="columns">

      <div class="column col-12">
        <h2 class="text-center">Contact Us</h2>
      </div>

      <div class="column col-6 col-mx-auto">
        <transition mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated bounceOutRight">
          <ContactForm @submit="handleFormSubmit" v-if="contactState === 'open'" />

          <ContactSuccess @closeSuccess="handleCloseSuccess" v-if="contactState === 'success'" />

          <ContactError @closeError="handleCloseError" v-if="contactState === 'error'" />
        </transition>
      </div>

    </div>

  </div>
</template>


<script>
import ContactForm from '@/components/ContactForm'
import ContactSuccess from '@/components/ContactSuccess'
import ContactError from '@/components/ContactError'
import ContactService from '@/services/contact'

export default {
  name: 'ContactSection',

  data () {
    return {
      contactState: 'open'
    }
  },

  components: {
    ContactForm,
    ContactSuccess,
    ContactError
  },

  methods: {
    handleFormSubmit (contactDetails) {
      ContactService.send(contactDetails)
        .then(this.contactSuccess)
        .catch(this.contactError)
    },

    handleCloseSuccess () {
      this.contactState = 'open'
    },

    handleCloseError () {
      this.contactState = 'open'
    },

    contactSuccess () {
      this.contactState = 'success'
    },

    contactError () {
      this.contactState = 'error'
    }
  }
}
</script>
