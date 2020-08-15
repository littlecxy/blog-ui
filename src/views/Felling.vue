<template>
  <div>
      <headPart></headPart>
      <div style="position:relative">
        <!-- <div v-for="(item,index) in articleContentList" :key="index"> -->
        <felling></felling>
        <!-- </div> -->
        <sidebar></sidebar>
      </div>
      <bottomBar></bottomBar>
  </div>
</template>

<script>
import headPart from '@/components/headPart';
import felling from '@/components/felling';
import sidebar from '@/components/sidebar';
import bottomBar from '@/components/bottomBar';
export default {
    components: {
        felling,
        sidebar,
        headPart,
        bottomBar
    },
    data() {
      return {
      }
    },
}

</script>
<style>
</style>