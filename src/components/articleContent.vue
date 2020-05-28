<template>
  <div>
    <article class="article">
      <div class="label">
        <span class="year">05月</span>
        <span class="month">07</span>
      </div>
      <el-row>
        <h1>2020  我做了什么</h1>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="4">
          <i class="el-icon-date"></i>
          <span style="color:#00a7e0">2020年5月7日</span>
        </el-col>
        <el-col :span="5">
          <i class="el-icon-tickets"></i>
          <span>共计1300字</span>
        </el-col>
        <el-col :span="5">
          <i class="el-icon-view"></i>
          <span style="color:#ff3f1a">预计阅读10分钟</span>
        </el-col>
      </el-row>
      <div class="content">
        2020年快过去一半了，我这半年都干了些什么...
      </div>
      <div class="detail">
        <el-button type="primary" size="small" icon="el-icon-s-unfold">阅读全文</el-button>
      </div>
    </article>
  </div>
</template>
  
<script>
export default {
  name: 'articleContent'
}

</script>
<style lang="scss" scoped>
  article {
    display: inline-block;
    position: relative;
    margin-top: 40px;
    width: 40%;
    margin-left: 30%;
    display: flex;
    flex-direction: column;
    background-color: white;
    // border: $border;
      .label {
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: center;
        top: -20px;
        left: -30px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #97dffd;
        color: white;
        box-shadow:2px 2px 10px #d4d3d3;
          .year {
            font-size: .8rem;
          }
          .month {
            font-size: 2rem;
          }
      }
      h1 {
        font-weight: 700;
        font-size: 1.5625rem;
        margin-top: 30px;
      }
      .content {
        text-indent: 20px;
        text-align: left;
        height: 50px;
        overflow: hidden;
        margin-top: 65px;
        font-size: .875rem;
      }
      .detail {
        margin-top: 10px;
        padding-bottom: 30px;
      }
      span {
        font-size: .75rem
      }
    }
    .el-icon-date {
      color: #00a7e0;
    }
    .el-icon-view {
      color: #ff3f1a;
    }
    el-button {
      color: #00a7e0;
    }
</style>