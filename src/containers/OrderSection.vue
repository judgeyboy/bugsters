<template>
  <div class="order-section">
    <div class="columns">

      <div class="column col-12">
        <h2 class="text-center">Need A Test?</h2>
      </div>

      <div class="column col-6 col-mx-auto">
        <OrderForm @submit="handleFormSubmit"
                   v-if="orderState === 'open'" />

        <OrderSuccess v-if="orderState === 'success'" />

        <OrderError v-if="orderState === 'error'" />
      </div>
    </div>
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm'
import OrderSuccess from '@/components/OrderSuccess'
import OrderError from '@/components/OrderError'
import OrderService from '@/services/order'

export default {
  name: 'OrderSection',

  data () {
    return {
      orderState: 'open'
    }
  },

  components: {
    OrderForm,
    OrderSuccess,
    OrderError
  },

  methods: {
    handleFormSubmit (orderDetails) {
      OrderService.send(orderDetails)
        .then(this.orderSuccess)
        .catch(this.orderError)
    },

    orderSuccess () {
      this.orderState = 'success'
    },

    orderError () {
      this.orderState = 'error'
    }
  }
}
</script>

