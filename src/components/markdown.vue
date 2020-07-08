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
export default {
  name: "Create",
  components: {mavonEditor},
  data(){
    return {
      context:'',
      doc: '',
      show: true,
      placeholder: '请输入评论...', // 默认提示文本
      fontSize: '14px' // 编辑区域文字大小
    }
  },
  props: {
    toChild: {
      type: String
    }
  },
  created(){
    if(this.toChild != undefined) {
      sessionStorage.setItem('data',this.toChild)
    }
    this.context = sessionStorage.getItem('data');
  },
  computed: {
        prop () {
          let data = {
            subfield: false,// 单双栏模式
            defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
            editable: false,
            toolbarsFlag: false,
            scrollStyle: true
          }
          return data
        }
      },
  methods: {
    save() {
      this.show ? this.show = false : this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 39%;
    margin-left: 28%;
    margin-top: 40px;
    background-color: #ffffff;
}
  .mavonEditor {
    width: 100%;
    height: 20px;
  }
</style>