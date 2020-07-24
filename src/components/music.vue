<template>
  <el-row>
    <el-col :span="4">
      <aplayer :autoplay="flag" :controls="flag" listFolded="true"
         :music="{
            title: '起风了',
            author: '买辣条也用券',
            url: 'http://devtest.qiniudn.com/Preparation.mp3',
            pic: 'http://localhost:8080/img/wind.35d7c0ed.jpg',
          }"
      />
    </el-col>
  </el-row>
</template>
<script>
import Aplayer from 'vue-aplayer'
  export default {
    name: 'music',
    components: {
      Aplayer
    },
    data() {
      return {
        flag: true
      }
    }
  }
</script>
<style>
  
</style>