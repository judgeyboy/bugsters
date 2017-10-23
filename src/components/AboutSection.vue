<template>
  <div class="about-section">
    <h2>What We Do</h2>
    <div class="about-section__container">
      <div class="about-section__container-item">
        <h4>Mobile Devices</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no
        </p>
      </div>
      <div class="about-section__container-item">
        <h4>Desktop</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no
        </p>
      </div>
      <div class="about-section__container-item">
        <h4>Browser</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no
        </p>
      </div>
      <div class="about-section__container-item">
        <h4>Explorative Testing</h4>
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
  name: 'AboutSection'
}
</script>

<style lang="sass" scoped>
.about-section

  &__container
    margin-top: 100px
    display: flex
    justify-content: space-around

    &-item
      width: 180px

      p
        text-align: justify
</style>

