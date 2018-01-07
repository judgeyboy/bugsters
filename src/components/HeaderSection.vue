<template>
  <div class="header-section">
    <div class="container">
      <div class="columns">
        <div class="column col-12">
          <h1>{{ $t('message.welcome') }}</h1>
          <h2>Home of Professional Software Testers</h2>
          <a class="btn btn-primary" v-section-scroll location="about">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>
