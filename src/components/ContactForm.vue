<template>
  <div>
    <form class="form-horizontal"
          @submit.prevent="handleSubmit('contact-form')"
          data-vv-scope="contact-form">

      <FormErrorMessage v-if="hasError"/>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="contact-name">Name</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="text"
                 id="contact-name"
                 class="form-input"
                 name="name"
                 placeholder="name"
                 v-model="name"
                 v-validate="'required'"
                 :class="{'is-error': errors.has('contact-form.name')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="contact-email">Email</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="email"
                 id="contact-email"
                 class="form-input"
                 name="email"
                 placeholder="email"
                 v-model="email"
                 v-validate="'required|email'"
                 :class="{'is-error': errors.has('contact-form.email')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="contact-subject">Subject</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="text"
                 id="contact-subject"
                 class="form-input"
                 name="subject"
                 placeholder="subject"
                 v-model="subject"
                 v-validate="'required'"
                 :class="{'is-error': errors.has('contact-form.subject')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="contact-message">Message</label>
        </div>
        <div class="col-9 col-xs-12">
          <textarea placeholder="message"
                    id="contact-message"
                    class="form-input"
                    name="message"
                    v-model="message"
                    v-validate="'required|max:200'"
                    :class="{'is-error': errors.has('contact-form.message')}"></textarea>
        </div>
      </div>
      <div class="form-buttons">
        <button type="submit" class="btn btn-primary" :class="{loading: isLoading}">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import FormErrorMessage from '@/components/FormErrorMessage'
export default {

  name: 'ContactForm',

  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      isLoading: false,
      hasError: false
    }
  },

  components: {
    FormErrorMessage
  },

  inject: ['$validator'],

  methods: {
    handleSubmit (scope) {
      return this.$validator.validateAll(scope).then(valid => {
        if (!valid) {
          this.hasError = true
          return
        }

        this.hasError = false
        this.isLoading = true

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
