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
          <router-link class="btn btn-primary" to="/orders/submit">Submit an order</router-link>
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
          {
            id: 'dlkelelege',
            site: 'www.zeplin.io',
            state: 'in progress',
            date: new Date().toISOString(),
            passed: 55,
            partial: 13,
            failed: 8,
            open: 44,
            percentage: 75
          },
          {
            id: 'lgeoleogel',
            site: 'www.github.com',
            state: 'completed',
            date: new Date().toISOString(),
            passed: 120,
            partial: 32,
            failed: 4,
            open: 0,
            percentage: 100
          },
          {
            id: 'kgoelslgoe',
            site: 'www.gitlab.com',
            state: 'in progress',
            date: new Date().toISOString(),
            passed: 50,
            partial: 23,
            failed: 28,
            open: 38,
            percentage: 60
          }
        ]
        this.loading = false
      }, 5000)
    }
  }
}
</script>
