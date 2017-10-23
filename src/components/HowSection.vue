<template>
  <div class="how-section">
    <h2>How We Do</h2>
    <div class="how-section__container">
      <div class="how-section__container-item">
        <h4>Experience</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no
        </p>
      </div>
      <div class="how-section__container-item">
        <h4>With Love</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no
        </p>
      </div>
      <div class="how-section__container-item">
        <h4>Devices</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no
        </p>
      </div>
      <div class="how-section__container-item">
        <h4>Customer Dashboard</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowSection'
}
</script>

<style lang="sass" scoped>
.how-section
  background-color: $background-grey

  &__container
    margin-top: 100px
    display: flex
    justify-content: space-around

    &-item
      width: 180px

      p
        text-align: justify
</style>
