<template>
  <div>
    <img alt="clannad" src="../images/clannad.png">
    <el-row>
      <div >
        <el-col :span="1">
          <navigation v-slot:describe>
            <span >主页</span> 
          </navigation>
        </el-col>
        <el-col :span="1">
          <navigation v-slot:icon>
            <i class="el-icon-delete"></i>
          </navigation>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
export default {
  name: 'headPart',
  components: {
    navigation
  },
  data() {
    return {
      describe: ['主页']
    }
  },
}

</script>
<style lang="scss" scoped>
  img {
    max-width: $max-width;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
</style>