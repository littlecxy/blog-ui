<template>
    <div class="container">
      <el-row>
        <el-col v-if="show" :span="24" :offset="0">
          <div class="content">
            <mavon-editor
            class="md"
            :value="context"
            :subfield = "prop.subfield"
            :defaultOpen = "prop.defaultOpen"
            :toolbarsFlag = "prop.toolbarsFlag"
            :editable="prop.editable"
            :scrollStyle="prop.scrollStyle"
            ></mavon-editor>
          </div>
        </el-col>
      </el-row>
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
      context:'',
      doc: '',
      isValid: 'inline',
      show: true,
      placeholder: '请输入评论...', // 默认提示文本
      fontSize: '14px', // 编辑区域文字大小
      articleContent: {}
    }
  },
  props: {
    comments: {
      type: Array
    }
  },
  created(){
    if(this.comments != undefined) {
      let str = JSON.stringify(this.comments)
      sessionStorage.setItem('data',str)
    }
    let strData = sessionStorage.getItem('data');
    this.articleContent = JSON.parse(strData)
    this.context = this.articleContent.length
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
    width: 40%;
    margin-left: 30%;
    margin-top: 40px;
    background-color: #ffffff;
    white-space:normal; word-break:break-all;overflow:hidden;
}
  .mavonEditor {
    width: 100%;
    height: 20px;
  }
</style>