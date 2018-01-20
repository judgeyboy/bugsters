<template>
  <div class="orders">

    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>My Orders</h2>
        </div>
      </div>

      <div class="panel-body">

        <Loader v-if="loading" />

        <OrderTile v-else-if="orders.length > 0"
                   v-for="order in orders"
                   :key="order.id"
                   :order="order" />

        <NoOrders v-else />
      </div>
      <div class="panel-footer">
        <div v-if="orders.length > 0">
          <router-link class="btn btn-primary" to="/">Submit an order</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NoOrders from './NoOrders'
import Loader from './Loader'
import OrderTile from './OrderTile'

export default {
  name: 'Orders',

  data () {
    return {
      loading: false,
      orders: []
    }
  },

  created () {
    this.fetchOrders()
  },

  components: {
    NoOrders,
    Loader,
    OrderTile
  },

  methods: {
    fetchOrders () {
      this.loading = true
      setTimeout(() => {
        this.orders = [
          { id: 'dlkelelege', state: 'in progress' },
          { id: '5e5ge6egeg', state: 'in progress' }
        ]
        this.loading = false
      }, 5000)
    }
  }
}
</script>
