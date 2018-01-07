<template>
  <div class="bugsters-section">
    <div class="columns">

      <div class="column col-6 col-mx-auto">
        <transition mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated bounceOutRight">
          <OrderForm @submit="handleFormSubmit" v-if="orderState === 'open'" />

          <OrderSuccess :orderId="orderId" v-if="orderState === 'success'" />

          <OrderError v-if="orderState === 'error'" />
        </transition>
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
      orderState: 'open',
      orderId: ''
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

    orderSuccess (response) {
      this.orderState = 'success'
      this.orderId = response.data
    },

    orderError () {
      this.orderState = 'error'
    }
  }
}
</script>
