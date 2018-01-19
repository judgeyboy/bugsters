<template>
  <div class="orders">

    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>My Orders</h2>
        </div>
      </div>

      <div class="panel-body">

        <div v-if="loading" class="loading loading-lg"></div>

          <div v-else-if="orders.length > 0" class="tile bugster-tile" v-for="order in orders" :key="order.id">
            <div class="tile-icon">
              <div class="example-tile-icon">
                <i class="icon icon-link centered"></i>
              </div>
            </div>
            <div class="tile-content">
              <div class="tile-title">{{order.id}}</div>
              <div class="tile-subtitle text-gray">{{order.status}} · 1 Jan, 2018</div>
            </div>
            <div class="tile-action">
              <button class="btn btn-link">
                <i class="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>

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
    NoOrders
  },

  methods: {
    fetchOrders () {
      this.loading = true
      setTimeout(() => {
        this.orders = [
          { id: 'dlkelelege', state: 'in progress' }
        ]
        this.loading = false
      }, 5000)
    }
  }
}
</script>

<style lang="sass" scoped>
.bugster-tile
  margin: 0.4rem 0
</style>
