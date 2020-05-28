<template>
    <div>
      <el-row>
        <el-col v-if="show" :span="12" :offset="6">
          <div class="content">
            <mavonEditor ref="editor" :fontSize="fontSize" :placeholder="placeholder" v-model="doc"> </mavonEditor>
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
      doc: '',
      show: true,
      placeholder: '请输入评论...', // 默认提示文本
      fontSize: '14px' // 编辑区域文字大小
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
  .mavonEditor {
    width: 100%;
    height: 20px;
  }
</style>