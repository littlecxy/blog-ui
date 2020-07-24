<template>
  <div class="home">
    <headPart></headPart>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <markdown></markdown> -->
    <div style="position:relative;">
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
        {id:1,year:'05',month: '07',title: 'CLANNAD观后感',date: '2020年5月7日',totalNum: '1300',readTime: '',ContentAbstract: 'CL为什么被称为神作?你真的看懂了吗...',
        content:`::: hljs-center 
### CLANNAD观后感 
:::
![blockchain](http://localhost:8080/img/timg%20(1).9af526b3.jpg)
#### 剧情概要
> 在某个小镇,主角冈崎朋也因为家庭原因成为不良少年,一直与春原阳平为伍,在光板高校过着潦倒的生活,但冀望终有一天能够离开所在的小镇。某年4月14日,他在学校坡道前发现了一个止步不前的女孩,在朋也认识了这个名为"古河渚"的女孩后,他的生活开始有了重大的变化
#### 人物分析
1. 冈崎朋也:
> 作为不良少年而全校文明的高三学生,因为一些原因不能打篮球,而后便自甘堕落。性格十分开朗,迟到的惯犯。
2. 古河渚
> 性格积极,但缺乏自信,通常被周围的人们所忽略。
3. 冈崎汐
> 汐代表浪潮退后的沙滩,代表着黑夜后的黎明
#### 主线分析
|风子线|琴美线|智代线|阳平线|古河线|
|-|-|-|-|-|
|伊吹风子|一之赖琴美|坂上智代|春原阳平|古河秋生|
#### 观后感悟
> 第一季的剧情或许并不是那么出奇,很多人看到一半心里可能会感到很失望，认为它被网友们夸大了。起初我也是这么认为的,直到看到第二季After Stroy之后我才明白了这部动漫的意义所在,在我看来它仅仅是讲述了一个普通人的人生,但即便再普通也能感受到来自生命的震撼!
        `
        // ![blockchain](http://localhost:8080/img/timg%20(4).4c87336c.jpg)
        },
        {id:2,year:'08',month: '08',title: '2021  我做了什么',date: '2021年8月8日',totalNum: '1500',readTime: '',ContentAbstract: '2021年快过去一半了，我这半年都干了些什么...',content:'醒醒吧!2021年还没到呢'},
        {id:3,year:'09',month: '09',title: '2022  我做了什么',date: '2022年8月8日',totalNum: '1800',readTime: '',ContentAbstract: '2022年快过去一半了，我这半年都干了些什么...',content:'醒醒吧!2022年还没到呢'}
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  
</style>
