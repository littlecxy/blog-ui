<template>
  <div class="container">
    <headPart></headPart>
    <div style="position:relative">
      <markdown :toChild="data"></markdown>
      <div class="leavemsg">
        <el-button type="text" @click="leaveMessage" icon="el-icon-edit">点我留言</el-button>
        <el-dialog title="账号注册" :visible.sync="dialogFormVisible" width="24%">
          <el-form :model="form">
            <el-form-item label="请输入姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请输入邮箱" :label-width="formLabelWidth">
              <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请输入密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请上传头像" :label-width="formLabelWidth">
            </el-form-item>
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                  >
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="text" @click="login">已有账号?直接登录</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="registered">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div v-for="(item,index) in comments" :key="index">
        <comments :comments="item"></comments>
      </div>
      <div v-if="show" class="commentArea">
        <el-input
          prefix-icon="el-icon-eleme"
          type="textarea"
          placeholder="请输入您的留言"
          v-model="textarea"
          maxlength="300"
          show-word-limit
        >
      </el-input>

      <el-button type="primary"  icon="el-icon-s-promotion" @click="postComment">提交</el-button>
      </div>
      <sidebar></sidebar>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>
<script>
import headPart from '@/components/headPart'
import aboutMe from '@/components/aboutMe';
import sidebar from '@/components/sidebar';
import bottomBar from '@/components/bottomBar';
import markdown from '@/components/markdown';
import comments from '@/components/comments';
import {test} from '@/http/api/test'
  export default {
    name: 'About',
    components: {
      headPart,
      sidebar,
      bottomBar,
      aboutMe,
      markdown,
      comments
    },
    data() {
      return {
        data: {},
        comments: [],
        show: false,
        textarea: '',
        input: '',
        token: '',
        dialogFormVisible: false,
        form: {
          name: '',
          email: '', 
          password: '',
          portrait: ''
        },
        formLabelWidth: '100px',
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      }
    },
    created(){
      this.getData();
      test().then(res=>{
        console.log(res)
      })
    },
    methods: {
      getData: function(){
        if(this.$route.params.article != undefined){
          this.data = this.$route.params.article;
          console.log('文章id'+this.data.id);
          sessionStorage.setItem('artId',this.data.id);
        }
        const arr = [
          {articleId:1,portrait:require('../images/timg (1).jpg'),name:'刘备',date:'2020-07-10 16:00',comment:'我打了一辈子仗了就不能享受享受吗?'},
          {articleId:1,portrait:require('../images/timg (4).jpg'),name:'诸葛亮',date:'2020-07-10 17:00',comment:'先帝创业未半而中道蹦迪。。。'},
          {articleId:1,portrait:require('../images/timg.jpg'),name:'陆逊',date:'2020-07-10 18:00',comment:'可曾听闻陆逊火烧迪厅七百里'},
        ]
        let artId = sessionStorage.getItem('artId');
        this.comments = arr.filter(function(currentValue,index,array){
          return currentValue.articleId == artId
        })
        console.log('过滤后的数组'+this.comments)
      },
      leaveMessage: function() {
        this.dialogImageUrl = '';
        this.dialogVisible = false;
        document.getElementsByClassName('el-dialog__title')[0].innerText = '账号注册';
        document.getElementsByClassName('el-button--text')[1].firstElementChild.innerText = '已有账号?直接登录';
        setTimeout(function(){
          document.getElementsByClassName('el-form-item')[0].style.display = 'block'
          document.getElementsByClassName('el-form-item')[3].style.display = 'block';
          document.getElementsByClassName('el-form-item__label')[3].innerText = '请选择头像';
          document.getElementsByClassName('el-form-item')[3].nextElementSibling.style.display = 'block';
        },100)
        if(this.token=='') {
          this.dialogFormVisible = true
        }
        this.textarea = ''
        this.show = true
      },
      postComment: function() {
        this.show = false;
        this.comments.push({'articleId':1,portrait:require('../images/timg (1).jpg'),name:'游客',date:'2020-07-22 00:00',comment:this.textarea});
         this.$notify({
          title: '成功',
          message: '您的评论已发表',
          type: 'success'
        });
      },
      login() {
        document.getElementsByClassName('el-dialog__title')[0].innerText = '账号登录';
        document.getElementsByClassName('el-button--text')[1].firstElementChild.innerText = '';
        document.getElementsByClassName('el-form-item')[0].style.display = 'none';
        document.getElementsByClassName('el-form-item')[3].nextElementSibling.style.display = 'none';
        document.getElementsByClassName('el-form-item__label')[3].innerText = '';
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      registered() {
        this.dialogFormVisible = false;
        this.$notify({
          title: '提示',
          message: '操作成功',
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped>
    h3 {
      text-align: center
    }
    .commentArea {
      margin-top: 2%;
      width: 40.2%;
      margin-left: 30%;
    }
    .leavemsg {
      margin-left: 34%;
    }
    .el-button {
      font-size: 14px;
    }
    .dialog-footer .el-button {
      font-size: 12px;
    }
</style>