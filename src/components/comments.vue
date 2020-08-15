<template>
    <div class="container">
      <el-row>
        <el-col v-if="show">
          <div class="content">
            <img :src="content.avator" alt="">
            <div class="comment">
              <span class="span1">{{ content.name }}</span>
              <span class="span2">{{ content.date }}</span>
              <br>
              {{ content.content }}
            </div>
          </div>
        </el-col>
      </el-row>
      <hr>
    </div>
</template>
<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import articleContentVue from './articleContent.vue';
export default {
  name: "comments",
  components: {mavonEditor},
  data(){
    return {
      show: true,
      content:{
        avator:'',
        name: '',
        date: '',
        content: '',
      }
    }
  },
  props: {
    comments: {
      type: Object
    }
  },
  created(){
    console.log('我是评论:'+this.comments)
    this.content = this.comments
  },
  computed: {
    prop () {
      let data = {
        subfield: false,// 单双栏模式
        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
        editable: false,
        toolbarsFlag: false,
        scrollStyle: false
      }
      return data
    }
  },
  methods: {
    // getData() {
    // this.content = this.toChild
    // }
  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 35.4%;
    margin-left: 30%;
    // margin-top: 40px;
    padding: 20px 30px 0 30px;
    background-color: #ffffff;
    text-align: left;
    white-space:normal; word-break:break-all;overflow:hidden;
    .content {
      display: flex;
      img {
        width: 48px;
        height: 48px;
      }
      .comment {
        margin-left: 4%;
        .span1 {
          color: rgb(9, 80, 187);
        }
        .span2 {
          margin-left:5px;
          color: #f77272; 
          font-size: 0.9rem;
        }
      }
    }
    
}
</style>