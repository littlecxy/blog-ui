<template>
  <div class="home">
    <headPart></headPart>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import headPart from '@/components/headPart.vue'

export default {
  name: 'Home',
  components: {
    headPart
  }
}
</script>

<style lang='scss' scoped>
  
</style>
