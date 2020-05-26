<template>
  <el-row>
    <el-col :span="4">
      <aplayer :autoplay="flag" :controls="flag"
         :music="{
          title: '有人',
          artist: '赵柯',
          src: 'http://music.163.com/song/media/outer/url?id=287035.mp3',
          pic: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000002ehzTm0TxXC2.jpg'
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