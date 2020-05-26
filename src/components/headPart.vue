<template>
  <div>
    <!-- <img alt="clannad" src="../images/clannad.png"> -->
    <el-row>
      <navigation></navigation>
      <!-- <music></music> -->
    </el-row>
  </div>
</template>

<script>
import navigation from '@/components/navigation';
import music from '@/components/music'
export default {
  name: 'headPart',
  components: {
    navigation,
    music
  },
  data() {
    return {
      
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