<template>
  <div class="home">
    <headPart></headPart>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <articleBody></articleBody>
  </div>
</template>

<script>
// @ is an alias to /src
import headPart from '@/components/headPart.vue'
import articleBody from '@/components/article.vue'
export default {
  name: 'Home',
  components: {
    headPart,
    articleBody
  }
}
</script>

<style lang='scss' scoped>
  
</style>
