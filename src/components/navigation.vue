<template>
  <div class="container">
    <el-row>
      <el-col :offset="offset" :lg="24" :xl="24">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="toHome">
            <img src="../images/home.png" alt="咦!我图呢???">
            <span>首页</span>
          </el-menu-item>
          <el-menu-item @click="tofell" index="3">
            <img src="../images/light.png" alt="咦!我图呢???">
            <span slot="title">个人感悟</span>
          </el-menu-item>
          <el-menu-item @click="toShare" index="4">
            <img src="../images/life.png" alt="咦!我图呢???">
            <span slot="title">生活分享</span>
          </el-menu-item>
          <el-menu-item @click="toNote" index="5">
            <img src="../images/comments.png" alt="咦!我图呢???">
            <span slot="title">学习笔记</span>
          </el-menu-item>
          <el-menu-item @click="about" index="6">
            <img src="../images/about.png" alt="咦!我图呢???">
            <span slot="title">关于我</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'navigation',
  data() {
      return {
        offset: 7,
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      about() {
        window.scrollTo({ 
            top: 380, 
            behavior: "smooth" 
        });
        this.$router.push('/about')
      },
      toHome() {
        window.scrollTo({ 
            top: 380, 
            behavior: "smooth" 
        });
        this.$router.push('/')
      },
      tofell() {
        window.scrollTo({ 
            top: 380, 
            behavior: "smooth" 
        });
        this.$router.push('/felling')
      },
      toShare() {
        window.scrollTo({ 
            top: 380, 
            behavior: "smooth" 
        });
        this.$router.push('/share')
      },
      toNote() {
        window.scrollTo({ 
            top: 380, 
            behavior: "smooth" 
        });
        this.$router.push('/LearnNote')
      }
    },
    mounted(){
      document.body.clientWidth < 1680 ? this.offset = 0 : this.offset = 0;            
    }

}

</script>
<style lang="scss" scoped>
  .el-menu-demo {
    z-index: 100;
    opacity: 0.75;
    padding-left: 10%;
    background-color:transparent;
  }
  .el-menu-item {
    font-size: 1rem;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }
  .el-menu {
    border-bottom: 0px !important;
  }
  .container {
    width: 100%;
    position: absolute;
    top: 0;
      img {
        width: 18px;
        height: 18px;
      }
      span {
        margin-left: 8px;
        cursor: pointer;
        font-family: 'STKaiti';
        color: black;
      }
  }
</style>