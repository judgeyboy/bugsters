<template>
  <div class="bugsters-section">
    <div class="columns">

      <div class="column col-12">
        <h2 class="text-center">Need A Test?</h2>
      </div>

      <div class="column col-6 col-md-12 col-mx-auto">
        <transition mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated bounceOutRight">
          <OrderForm @submit="handleFormSubmit" v-if="orderState === 'open'" :showCancel="showCancel" />

          <OrderSuccess @closeSuccess="handleCloseSuccess" :orderId="orderId" v-if="orderState === 'success'" />

          <OrderError @closeError="handleCloseError" v-if="orderState === 'error'" />
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

  props: ['showCancel'],

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

    handleCloseSuccess () {
      this.orderState = 'open'
    },

    handleCloseError () {
      this.orderState = 'open'
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
