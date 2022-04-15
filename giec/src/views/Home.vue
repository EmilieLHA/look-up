<template>
    <home-header></home-header>
</template>

<script>

// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue'

export default {
  name: 'Home',
  components: {
    'home-header': HomeHeader
  }
}
</script>

