<template>
  <article class="article">
    <el-row>
      <h3>文章标题</h3>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="9">
        <span>2020年5月7日</span>
      </el-col>
      <el-col :span="2">
        <span>共计1300字</span>
      </el-col>
      <el-col :span="2">
        <span>预计需要10分钟</span>
      </el-col>
    </el-row>
    <div class="content">
      123333333333333333333333333333333333333333</br>
      1233333333333333333333333333333</br>  
      333333333333333333333333333333331233333333333333333333333333333</br>
      1233333333333333333333333333333</br>
      1233333333333333333333333333333</br>
      1233333333333333333333333333333</br>
      1233333333333333333333333333333</br>
    </div>
    <div class="detail">
      <span>点击详细</span>
    </div>
  </article>
</template>
  
<script>
export default {
  name: 'articleContent'
}

</script>
<style lang="scss" scoped>
  article {
    // background-color: $background-color;
    // border: $border;
      h3 {
        font-weight: 700
      }
      .content {
        height: 50px;
        overflow: hidden;
      }
      .detail {
        margin-top: 20px;
      }
    }
</style>