<template>
  <div class="tile tile-centered bugster-tile">
    <div class="tile-icon">
      <div class="example-tile-icon">
        <i class="icon icon-link centered"></i>
      </div>
    </div>
    <div class="tile-content">
      <div class="tile-title">{{order.id}}</div>
      <div class="tile-subtitle text-gray">{{order.state}} · 1 Jan, 2018</div>
    </div>
    <div class="tile-action">
      <button class="btn btn-link">
        <i class="icon icon-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderTile',
  props: ['order']
}
</script>

<style lang="sass" scoped>
.bugster-tile
  margin: 0.4rem 0
</style>
