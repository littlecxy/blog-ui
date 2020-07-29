<template>
  <div class="container">
    <headPart></headPart>
    <div style="position:relative">
      <markdown :toChild="data"></markdown>
      <div class="leavemsg">
        <el-button type="text" @click="leaveMessage" icon="el-icon-edit">点我留言</el-button>
        <el-dialog title="账号注册" :visible.sync="dialogFormVisible" width="32%">
          <el-form :model="form">
            <el-form-item label="请输入姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" clearable autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请输入邮箱" :label-width="formLabelWidth">
              <el-input v-model="form.email" clearable autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请输入密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" clearable autocomplete="off" show-password></el-input>
            </el-form-item>
            <el-form-item label="请上传头像" :label-width="formLabelWidth">
            </el-form-item>
            <el-upload
              action="http://localhost:3000/user/uploadfile"
              ref="upload"
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
            <el-button type="text" @click="toLogin">已有账号?直接登录</el-button>
            <el-button @click="cancleRegistered">取 消</el-button>
            <el-button type="primary" @click="registered">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="账号登录" :visible.sync="dialogFormVisible1" width="32%">
          <el-form :model="form">
            <el-form-item label="请输入邮箱" :label-width="formLabelWidth">
              <el-input v-model="form.email" clearable autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="请输入密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" clearable autocomplete="off" show-password></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="login">确 定</el-button>
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
import {register,login} from '@/http/api/user';
import {format,curentTime} from '@/utils/datetime';
import {isEmail} from '@/utils/validate';
import {postComment,findComment} from '@/http/api/comment';
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
        dialogFormVisible1: false,
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
      this.$store.commit('setUserInfo',sessionStorage.getItem('status'));
      if(this.$store.state.status == '1') {
        this.show = true;
      }
    },
    methods: {
      getData: function(){
        if(this.$route.params.article != undefined){
          this.data = this.$route.params.article;
          console.log('文章内容'+this.data.content);
          console.log('文章id'+this.data.id);
          sessionStorage.setItem('artId',this.data.id);
        }
        let objArray = [];
        objArray[0] = sessionStorage.getItem('artId');
        findComment(objArray).then(res => {
          console.log(res);
          for (let item of res) {
            item.avator = require(`../images/${item.avator}`)
          }
          this.comments = res;
        })
        let artId = sessionStorage.getItem('artId');
      },
      leaveMessage: function() {
        this.dialogImageUrl = '';
        this.dialogVisible = false;
        this.form = {};
        
        if(this.token=='') {
          this.dialogFormVisible = true
        }
        this.textarea = '';
      },
      postComment: function() {
        // this.show = false;
        let strObj = sessionStorage.getItem('currentUser');
        let userObj = JSON.parse(strObj);
        let currentDate = curentTime();
        this.comments.push({'articleId':this.data.id,avator:require(`../images/${userObj[0].avator}`),name:userObj[0].name,date:currentDate,content:this.textarea});
         this.$notify({
          title: '成功',
          message: '发表成功',
          type: 'success'
        });
        let commentObj = [];
        commentObj[0] = 0;
        commentObj[1] = this.textarea;
        commentObj[2] = currentDate;
        commentObj[3] = 1;
        commentObj[4] = sessionStorage.getItem('artId');
        commentObj[5] = userObj[0].id;
        commentObj[6] = '111';
        postComment(commentObj).then(res => {
          console.log(res);
        })
        this.textarea = '';
      },
      toLogin() {
        this.dialogFormVisible = false;
        this.dialogFormVisible1 = true;
      },
      // 登录按钮
      login() {
        let form = this.form;
        if(form.email == undefined) {
          this.$notify({
            title: '警告',
            message: '请输入邮箱',
            type: 'error'
        });
        return
        }
        if(form.password == undefined) {
          this.$notify({
            title: '警告',
            message: '请输入密码',
            type: 'error'
        });
        return
        };
        if(!isEmail(form.email)) {
          this.$notify({
            title: '警告',
            message: '请输入正确的邮箱',
            type: 'error'
        });
        return
        };
        let obj = [];
        obj[0] = form.email;
        obj[1] = form.password;
        login(obj).then(res => {
          console.log('我是登录用户啊啊啊啊啊啊啊'+ res);
          if(res.length == 0) {
              this.$notify({
              title: '失败',
              message: '用户名或密码错误',
              type: 'error'
            });
            return
          }
          console.table(res);
          let strArray = JSON.stringify(res);
          sessionStorage.setItem('currentUser',strArray);
          this.dialogFormVisible1 = false;
          sessionStorage.setItem('status','1');
          this.$notify({
            title: '成功',
            message: '登录成功',
            type: 'success'
           });
        this.show = true;
        })
      },
      handleRemove(file) {
        let fileList = this.$refs.upload.uploadFiles;
        let index = fileList.findIndex(fileItem => {
          return fileItem.uid === file.uid
        })
        fileList.splice(index,1)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      registered() {
        const obj = [];
        let form = this.form;
        if(form.name == undefined) {
          this.$notify({
            title: '警告',
            message: '请输入姓名',
            type: 'error'
        });
        return
        }
        if(form.password == undefined) {
          this.$notify({
            title: '警告',
            message: '请输入密码',
            type: 'error'
        });
        return
        }
        if(form.email == undefined) {
          this.$notify({
            title: '警告',
            message: '请输入邮箱',
            type: 'error'
        });
        return
        }
        if(this.$refs.upload.uploadFiles[0] == undefined) {
          this.$notify({
            title: '警告',
            message: '请选择头像',
            type: 'error'
          });
          return
        }
        if(!isEmail(form.email)) {
          this.$notify({
            title: '警告',
            message: '请输入正确的邮箱',
            type: 'error'
        });
        return
        }
        console.log('我是zz' + this.$refs.name)
        this.$refs.upload.submit();
        obj[0] = form.name;
        obj[1] = form.password;
        obj[2] = this.$refs.upload.uploadFiles[0].name;
        obj[3] = format(new Date());
        obj[4] = 1;
        obj[5] = form.email;
        register(obj).then(res => {
          console.log(res)
        })
        this.dialogFormVisible = false;
        this.$notify({
          title: '提示',
          message: '注册成功',
          type: 'success'
        });
      },
      cancleRegistered() {
        this.dialogFormVisible = false;
      }
    },
    mounted() {
      if(document.body.clientWidth < 1440)
        document.getElementsByClassName('el-dialog')[0].style.width = '40%';
    }
  }
</script>

<style lang="scss" scoped>
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