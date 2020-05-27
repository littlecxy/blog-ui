<template>
  <div>
    <navigation></navigation>
    <img alt="clannad" src="../images/clannad.png">
      <!-- <music></music> -->
      <introduce></introduce>
  </div>
</template>

<script>
import navigation from '@/components/navigation';
import music from '@/components/music';
import introduce from '@/components/introduce'
export default {
  name: 'headPart',
  components: {
    navigation,
    music,
    introduce
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
    height: 1100px;
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