<template>
  <div class="columns">

    <div class="column col-12">
      <h2 class="text-center">Need A Test?</h2>
      <p>
        Use the slider to select how much you would like to invest in testing your application
        and provide us with your details. We'll do the rest. Of course we'll send you an offer...
      </p>
    </div>

    <div class="column col-6 col-mx-auto">
      <OrderForm />
    </div>
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm'

export default {
  name: 'OrderSection',
  components: {
    OrderForm
  }
}
</script>

