<template>
  <div class="container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#B5AEA7" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <img src="../images/home.png" alt="咦!我图呢???">
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><img src="../images/learn.png" alt="咦!我图呢???"><span>学习笔记</span></template>
          <el-menu-item index="2-1">javascript</el-menu-item>
          <el-menu-item index="2-2">html</el-menu-item>
          <el-menu-item index="2-3">css</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <img src="../images/light.png" alt="咦!我图呢???">
        <span slot="title">个人感悟</span>
      </el-menu-item>
      <el-menu-item index="4">
        <img src="../images/life.png" alt="咦!我图呢???">
        <span slot="title">生活分享</span>
      </el-menu-item>
      <el-menu-item index="5">
        <img src="../images/comments.png" alt="咦!我图呢???">
        <span slot="title">欢迎留言</span>
      </el-menu-item>
      <el-menu-item index="6">
        <img src="../images/about.png" alt="咦!我图呢???">
        <span slot="title">关于我</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'navigation',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}

</script>
<style lang="scss" scoped>
  .el-menu-demo {
    width:40%;
    left: 30%;
    z-index: 100;
    opacity: 0.75;
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