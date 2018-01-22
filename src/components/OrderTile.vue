<template>
  <div class="tile bugster-tile">
    <div class="tile-icon bugster-tile-icon">
      <div class="example-tile-icon">
        <figure class="avatar bugster-avatar">
          <img :src="'http://' + order.site + '/favicon.ico'" alt="Avatar">
          <i class="avatar-presence online"></i>
        </figure>
      </div>
    </div>
    <div class="tile-content">
      <p class="tile-title">{{ order.site }}</p>

      <span class="badge badge-passed" :data-badge="order.passed"></span>

      <span class="badge badge-partial" :data-badge="order.partial"></span>

      <span class="badge badge-failed" :data-badge="order.failed"></span>

      <span class="badge badge-open" :data-badge="order.open"></span>

      <div class="bar bar-sm">
        <div class="bar-item tooltip" :data-tooltip="order.percentage + '%'" :style="{width:order.percentage + '%'}"></div>
      </div>
    </div>
    <div class="tile-action">
      <router-link class="btn btn-link" :to="'orders/' + order.id">
        <i class="icon icon-arrow-right"></i>
      </router-link>
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
.bugster-avatar
  background: transparent

.bugster-tile
  margin: 1.5rem 0

  &:first-of-type
    margin: .4rem 0

.bugster-tile-icon
  padding-right: .4rem

.badge-passed::after
  background-color: green

.badge-failed::after
  background-color: red

.badge-partial::after
  background-color: orange

.badge-open::after
  background-color: #50596c
</style>
