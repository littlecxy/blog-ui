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
import {GetChinese} from "@/utils/util";
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
        context: '',
        content: ''
      }
    }
  },
  props: {
    toChild:{
      type: Object
    }
  },
  created(){
    const html2md=require('html-to-md');
    let data = this.toChild;
    this.article.id = data.id;
    this.article.year = data.date.substring(5,7);
    this.article.month = data.date.substring(8,10);
    this.article.date = data.date;
    this.article.totalNum = GetChinese(data.content).length;
    this.article.readTime = parseInt(GetChinese(data.content).length/100);
    this.article.title = data.content.substring(data.content.indexOf('<center>')+8,data.content.indexOf('</center>'));
    this.article.content = data.content;
    let ContentAbstract = GetChinese(data.content);
    let rest = ContentAbstract.replace(this.article.content,'');
    this.article.ContentAbstract = rest.substring(0,15)+'......';
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
      this.$router.push({name:'ArticleDetail',params: {article: this.article}})
    }
  }
}

</script>
<style lang="scss" scoped>
  article {
    display: inline-block;
    position: relative;
    margin-top: 2%;
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