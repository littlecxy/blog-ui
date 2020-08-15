<template>
    <div class="container">
      <el-row>
        <el-col v-if="show" :span="24" :offset="0">
          <div class="content">
            <mavon-editor
            fontSize="10px"
            class="md"
            :value="context"
            :subfield = "prop.subfield"
            :defaultOpen = "prop.defaultOpen"
            :toolbarsFlag = "prop.toolbarsFlag"
            :editable="prop.editable"
            :scrollStyle="prop.scrollStyle"
            ref=md
            @save="save"
            @change="changeData"
            @imgAdd="imgAdd"
            @imgDel="imgDel"
            ></mavon-editor>
          </div>
        </el-col>
      </el-row>
      <!-- <button @click="publish">评论</button>
      <input type="text" :style="{display: isValid}"> -->
    </div>
</template>
<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import {postArticle} from '@/http/api/article';
import {curentTime} from '@/utils/datetime';
import {uploadimg} from '@/http/api/user'
export default {
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
  created(){
    
  },
  computed: {
    prop () {
      let data = {
        subfield: true,// 单双栏模式
        defaultOpen: 'edit',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
        editable: true,
        toolbarsFlag: true,
        scrollStyle: true
      }
      return data
    }
  },
  methods: {
    save(value,render) {
      console.log('html格式'+render);
      let num = value.indexOf('<type>');
      let type = value.substring(num+6,num+10);
      let title = value.substring(value.indexOf('<center>')+8,value.indexOf('</center>'));
      let reserved = value.substring(value.indexOf('<reserved>')+10,value.indexOf('</reserved>'));
      let atype;
      if(type == '个人感悟') atype = 1
      if(type == '生活分享') atype = 2
      if(type == '学习笔记') atype = 3
      alert(type);
      alert(title);
      const obj = [];
      obj[0] = title;
      obj[1] = render;
      obj[2] = 'markdown';
      obj[3] = curentTime(new Date())
      obj[4] = 100;
      obj[5] = atype;
      obj[6] = reserved;
      postArticle(obj).then(res=>{
        console.log(res)
      })
      
    },
    imgAdd(pos,file) {
      console.log(pos);
      let formdata = new FormData();
      formdata.append('file', file);
      uploadimg(formdata).then(res => {
        // $vm.$img2Url(pos, url);
      })
    },
    imgDel() {
      alert(2)
    },
    changeData() {

    },
    publish() {

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 60%;
    margin-left: 20%;
    height: 500px;
    margin-top: 20%;
    transform: translateY(-50%);
    background-color: #ffffff;
    white-space:normal; word-break:break-all;overflow:hidden;
}
  // .mavonEditor {
  //   width: 100%;
  //   height: 20px;
  // }
</style>