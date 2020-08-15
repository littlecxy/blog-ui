<template>
<div class="container">
  <!-- action="http://localhost:3000/user/uploadfile" -->
  <!-- action="http://192.144.171.231:3000/user/uploadfile" -->
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
  <button @click="upload">上传</button>
  </div>
</template>
<script>
  export default {
    name: 'Upload',
    data() {
      return {
        disabled: false
      }
    },
    created() {
        
    },
    methods: {
      upload() {
        this.$refs.upload.submit();
      },
      handleRemove(file) {
        let fileList = this.$refs.upload.uploadFiles;
        let index = fileList.findIndex(fileItem => {
          return fileItem.uid === file.uid
        })
        fileList.splice(index,1)
      },
    }
  }
</script>

<style scoped>

</style>