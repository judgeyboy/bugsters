<template>
  <div>
    <form class="form-horizontal"
          @submit.prevent="handleSubmit('contact-form')"
          data-vv-scope="contact-form">

      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="name">Name</label>
        </div>
        <div class="col-9">
          <input type="text"
                 id="name"
                 class="form-input"
                 name="name"
                 placeholder="name"
                 v-model="name"
                 v-validate="'required'"
                 :class="{'is-error': errors.has('contact-form.name')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="email">Email</label>
        </div>
        <div class="col-9">
          <input type="email"
                 id="email"
                 class="form-input"
                 name="email"
                 placeholder="email"
                 v-model="email"
                 v-validate="'required|email'"
                 :class="{'is-error': errors.has('contact-form.email')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="subject">Subject</label>
        </div>
        <div class="col-9">
          <input type="text"
                 id="subject"
                 class="form-input"
                 name="subject"
                 placeholder="subject"
                 v-model="subject"
                 v-validate="'required'"
                 :class="{'is-error': errors.has('contact-form.subject')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="message">Message</label>
        </div>
        <div class="col-9">
          <textarea placeholder="message"
                    id="message"
                    class="form-input"
                    name="message"
                    v-model="message"
                    v-validate="'required|max:200'"
                    :class="{'is-error': errors.has('contact-form.message')}"></textarea>
        </div>
      </div>

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
