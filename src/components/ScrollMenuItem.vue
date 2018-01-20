<template>
  <li class="nav-item">
    <a v-section-scroll :location="location">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ScrollMenuItem',
  props: ['location']
}
</script>
