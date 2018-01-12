<template>
  <div>

    <p>
      Use the slider to select how much you would like to invest in testing your application
      and provide us with your details. We'll do the rest. Of course we'll send you an offer...
    </p>

    <form class="form-horizontal"
          @submit.prevent="handleSubmit('order-form')"
          data-vv-scope="order-form">

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="order-budget">Budget</label>
        </div>
        <div class="col-6 col-xs-8">
          <input class="slider"
                 type="range"
                 max="2500"
                 min="200"
                 step="100"
                 v-model="budget" />
        </div>
        <div class="col-3 col-xs-4">
          <label class="form-label text-center"><strong>{{ budget }} .- CHF</strong></label>
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="order-company">Company</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="text"
                 id="order-company"
                 class="form-input"
                 name="company"
                 placeholder="company"
                 v-model="company"
                 v-validate="'required'"
                 :class="{'is-error': errors.has('order-form.company')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="order-name">Name</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="text"
                 id="order-name"
                 class="form-input"
                 name="name"
                 placeholder="name"
                 v-model="name"
                 v-validate="'required'"
                 :class="{'is-error': errors.has('order-form.name')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="order-email">Email</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="email"
                 id="order-email"
                 class="form-input"
                 name="email"
                 placeholder="email"
                 v-model="email"
                 v-validate="'required|email'"
                 :class="{'is-error': errors.has('order-form.email')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="order-phone">Phone</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="text"
                 id="order-phone"
                 class="form-input"
                 name="phone"
                 placeholder="phone"
                 v-model="phone"
                 v-validate="'required'"
                 :class="{'is-error': errors.has('order-form.phone')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="order-url">Page Url</label>
        </div>
        <div class="col-9 col-xs-12">
          <input type="text"
                 id="order-url"
                 class="form-input"
                 name="url"
                 placeholder="url"
                 v-model="url"
                 v-validate="'required|url'"
                 :class="{'is-error': errors.has('order-form.url')}">
        </div>
      </div>

      <div class="form-group">
        <div class="col-3 col-xs-12">
          <label class="form-label" for="order-message">Message</label>
        </div>
        <div class="col-9 col-xs-12">
          <textarea placeholder="message"
                    id="order-message"
                    class="form-input"
                    name="message"
                    v-model="message"
                    v-validate="'max:200'"
                    :class="{'is-error': errors.has('order-form.message')}"></textarea>
        </div>
      </div>
      <div class="form-buttons">
        <button type="submit" value="Send" class="btn btn-primary" :class="{loading: isLoading}">Send</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'OrderForm',

  data () {
    return {
      budget: 500,
      company: '',
      name: '',
      email: '',
      url: '',
      message: '',
      phone: '',
      isLoading: false
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

        this.isLoading = true

        const orderDetails = {
          budget: this.budget,
          company: this.company,
          name: this.name,
          email: this.email,
          url: this.url,
          message: this.message,
          phone: this.phone
        }

        this.$emit('submit', orderDetails)
      })
    }
  }
}
</script>
