<template>
  <div class="container">
    <headPart></headPart>
    <div style="position:relative">
      <markdown :toChild="data"></markdown>
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
  export default {
    name: 'About',
    components: {
      headPart,
      sidebar,
      bottomBar,
      aboutMe,
      markdown
    },
    data() {
      return {
        data: ''
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData: function(){
        this.data = this.$route.params.content
        console.log(this.$route)
      }
    }
  }
</script>

<style scoped>

</style>