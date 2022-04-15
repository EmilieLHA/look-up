<template>
  <div class="app">

    <navbar></navbar>
    <router-view/>

  </div>
</template>

<script>

  import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    'navbar': Navbar
  }
}
</script>


<style lang="scss">

  @import "./sass/main.scss";

</style>
