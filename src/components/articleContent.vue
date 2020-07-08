<template>
  <div>
    <article class="article">
      <div class="label">
        <span class="year">{{ article.year }}月</span>
        <span class="month">{{ article.month }}</span>
      </div>
      <el-row>
        <h1>{{ article.title }}</h1>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="4">
          <i class="el-icon-date"></i>
          <span style="color:#00a7e0">{{ article.date }}</span>
        </el-col>
        <el-col :span="5">
          <i class="el-icon-tickets"></i>
          <span>共计{{ article.totalNum }}字</span>
        </el-col>
        <el-col :span="5">
          <i class="el-icon-view"></i>
          <span style="color:#ff3f1a">预计阅读{{ article.readTime }}分钟</span>
        </el-col>
      </el-row>
      <div class="content">
        {{ article.ContentAbstract }}
      </div>
      <div class="detail">
        <el-button type="primary" size="small" @click="fullText" icon="el-icon-s-unfold">阅读全文</el-button>
      </div>
    </article>
  </div>
</template>
  
<script>
export default {
  name: 'articleContent',
  data(){
    return {
      article:{
        id: '',
        year: '',
        month: '',
        title: '',
        date: '',
        totalNum: '',
        readTime: '',
        ContentAbstract: '',
      }
    }
  },
  props: {
    toChild:{
      type: Object
    }
  },
  created(){
    this.article = this.toChild
    this.article.readTime = parseInt(this.toChild.totalNum/100)
  },
  computed: {
    // calculateTime(){
    //   this.article.readTime = parseInt(this.article.totalNum/100)
    // }
  },
  mounted(){
    
  },
  methods: {
    fullText: function(){
      this.$router.push({name:'ArticleDetail',params: {content: this.article.content}})
    }
  }
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