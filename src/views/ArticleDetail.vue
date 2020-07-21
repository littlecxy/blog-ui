<template>
  <div class="container">
    <headPart></headPart>
    <div style="position:relative">
      <markdown :toChild="data"></markdown>
      <h3>先占个地</h3>
      <div v-for="(item,index) in comments" :key="index">
        <comments :comments="item"></comments>
      </div>
      <sidebar></sidebar>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>
<script>
import headPart from '@/components/headPart'
import aboutMe from '@/components/aboutMe';
import sidebar from '@/components/sidebar';
import bottomBar from '@/components/bottomBar';
import markdown from '@/components/markdown';
import comments from '@/components/comments';
  export default {
    name: 'About',
    components: {
      headPart,
      sidebar,
      bottomBar,
      aboutMe,
      markdown,
      comments
    },
    data() {
      return {
        data: {},
        comments: [
          {articleId:1,portrait:require('../images/timg (1).jpg'),name:'刘备',date:'2020-07-10 16:00',comment:'我打了一辈子仗了就不能享受享受吗?'},
          {articleId:2,portrait:require('../images/timg (4).jpg'),name:'诸葛亮',date:'2020-07-10 17:00',comment:'先帝创业未半而中道蹦迪。。。'},
          {articleId:3,portrait:require('../images/timg.jpg'),name:'陆逊',date:'2020-07-10 18:00',comment:'可曾听闻火烧迪厅七百里'},
        ]
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData: function(){
        this.data = this.$route.params.article
      }
    }
  }
</script>

<style scoped>
    h3 {
      text-align: center
    }
</style>