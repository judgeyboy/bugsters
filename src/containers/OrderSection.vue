<template>
  <div class="order-section">
    <div class="columns">

      <div class="column col-12">
        <h2 class="text-center">Need A Test?</h2>
      </div>

      <div class="column col-6 col-mx-auto">
        <OrderForm />
        <OrderSuccess />
      </div>

    </div>
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm'
import OrderSuccess from '@/components/OrderSuccess'

export default {
  name: 'OrderSection',
  components: {
    OrderForm,
    OrderSuccess
  }
}
</script>

