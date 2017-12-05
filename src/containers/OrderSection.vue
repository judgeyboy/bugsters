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
      <OrderSuccess />
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

