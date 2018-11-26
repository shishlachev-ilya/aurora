<template>
  <div>
    <section class="partners">
      <h2>Партнерам</h2>
    </section>

    <div class="container">
      <some></some>
    </div>
  </div>
</template>

<script>
  import some from '../components/Custom.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      some
    }
  }
</script>

<style lang="scss">
  .partners {
    color: #000;
  }
</style>
