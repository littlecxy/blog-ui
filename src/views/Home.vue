<template>
  <div class="home">
    <headPart></headPart>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <markdown></markdown> -->
    <!-- <article-content></article-content> -->
  </div>
</template>

<script>
// @ is an alias to /src
import headPart from '@/components/headPart.vue';
import markdown from '@/components/markdown.vue';
import articleContent from '@/components/articleContent.vue'
export default {
  name: 'Home',
  components: {
    headPart,
    markdown,
    articleContent
  }
}
</script>

<style lang='scss' scoped>
  
</style>
