<template>
  <div class="container">
    <el-row>
      <el-col :offset="offset" :lg="24" :xl="24">
        <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#9FAAEA" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="toHome">
            <img src="../images/home.png" alt="咦!我图呢???">
            <span>首页</span>
          </el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title"><img src="../images/learn.png" alt="咦!我图呢???"><span>学习笔记</span></template>
              <el-menu-item index="2-1">javascript</el-menu-item>
              <el-menu-item index="2-2">html</el-menu-item>
              <el-menu-item index="2-3">css</el-menu-item>
          </el-submenu> -->
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
        console.log(key, keyPath);
      },
      about() {
        this.$router.push('/about')
      },
      toHome() {
        this.$router.push('/')
      },
      tofell() {
        this.$router.push('/felling')
      },
      toShare() {
        this.$router.push('/share')
      },
      toNote() {
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
    padding-left: 5%;
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
        color: black;
      }
  }
</style>