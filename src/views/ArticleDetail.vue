<template>
  <div class="container">
    <headPart></headPart>
    <div style="position:relative">
      <markdown :toChild="data"></markdown>
      <comments :comments="comments"></comments>
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
        comments: [{portrait:'1.png',name:'zhuyalun',date:'2020-07-10 16:00',comment:'这是一条测试数据'}]
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData: function(){
        this.data = this.$route.params.article
        console.log(this.data)
      }
    }
  }
</script>

<style scoped>

</style>