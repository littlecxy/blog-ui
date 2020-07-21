<template>
  <div class="container">
    <navigation></navigation>
    <img alt="clannad" src="../images/timg (3).jpg">
      <!-- <music></music> -->
      <h1 class="animate__animated animate__shakeY">
        <svg xmlns="http://www.w3.org/2000/svg">
          <text x="0"  y="60"
            style="font-family: Arial;
                   font-size  : 31;
                   stroke     : #000000;
                   stroke-width: 2;
                   fill       : #9FAAEA;
                  "
            >Welcome to my blog</text>
        </svg>
      </h1>
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
    width: 100%;
    // height: 1020px;
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
  h1 {
    position: absolute;
    top: 380px;
    left: 42%;
  }
</style>