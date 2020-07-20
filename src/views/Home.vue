<template>
  <div class="home">
    <headPart></headPart>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <markdown></markdown> -->
    <div style="position:relative">
      <div v-for="(item,index) in articleContentList" :key="index">
        <article-content :toChild="item"></article-content>
      </div>
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
  },
  data(){
    return {
      articleContentList: [ 
        {id:'1',year:'05',month: '07',title: '2020  我做了什么',date: '2020年5月7日',totalNum: '1300',readTime: '',ContentAbstract: '2020年快过去一半了，我这半年都干了些什么...',content:`醒醒吧!你什么都没有做`},
        {id:'2',year:'08',month: '08',title: '2021  我做了什么',date: '2021年8月8日',totalNum: '1500',readTime: '',ContentAbstract: '2021年快过去一半了，我这半年都干了些什么...',content:'醒醒吧!2021年还没到呢'},
        {id:'3',year:'09',month: '09',title: '2022  我做了什么',date: '2022年8月8日',totalNum: '1800',readTime: '',ContentAbstract: '2022年快过去一半了，我这半年都干了些什么...',content:'醒醒吧!2022年还没到呢'}
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  
</style>
