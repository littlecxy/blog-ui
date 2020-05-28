<template>
  <div class="home">
    <headPart></headPart>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <markdown></markdown> -->
    <div style="position:relative">
      <article-content></article-content>
      <article-content></article-content>
      <article-content></article-content>
      <sidebar></sidebar>
      <bottomBar></bottomBar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headPart from '@/components/headPart.vue';
import markdown from '@/components/markdown.vue';
import articleContent from '@/components/articleContent.vue';
import sidebar from '@/components/sidebar.vue';
import bottomBar from '@/components/bottomBar.vue';
export default {
  name: 'Home',
  components: {
    headPart,
    markdown,
    articleContent,
    sidebar,
    bottomBar
  }
}
</script>

<style lang='scss' scoped>
  
</style>
