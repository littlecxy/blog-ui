<template>
    <div>
      <el-row>
        <el-col :span="6">
          <button id="save" @click="save">保存</button>
        </el-col>
        <el-col v-if="show" :span="12">
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
        this.show = false
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