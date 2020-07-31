<template>
  <div class="container">
    <h1>关于这个博客的主人</h1>
    <p>Hi,我是笔塑流年,一个在平凡世界里寻找宝物的年轻人(●'◡'●)ﾉ♥</p>
    <h2>自我介绍</h2>
    <table cellspacing="0" cellpadding="0">
      <tr>
        <td class="title graybgd">说明</td>
        <td class="explian graybgd">爱学习,爱游戏,爱生活,爱间接性踌躇满志。</td>
      </tr>
      <tr>
        <td class="title">生日</td>
        <td class="explian">1997/05/07</td>
      </tr>
      <tr>
        <td class="title graybgd">工作</td>
        <td class="explian graybgd">程序员</td>
      </tr>
      <tr>
        <td class="title">特长</td>
        <td class="explian">什么是特长?</td>
      </tr>
      <tr>
        <td class="title graybgd">喜欢的颜色</td>
        <td class="explian graybgd">绿色And天空蓝</td>
      </tr>
      <tr>
        <td class="title">喜欢的漫画</td>
        <td class="explian">龙珠&海贼王</td>
      </tr>
      <tr>
        <td class="title graybgd">喜欢的电影</td>
        <td class="explian graybgd">肖申克的救赎</td>
      </tr>
      <tr>
        <td class="title">喜欢的游戏</td>
        <td class="explian">云顶之弈</td>
      </tr>
    </table>
    <h2>我的动态</h2>
     <p>这个人很懒,暂时什么也没有写,甚至还拿自我介绍来充数。</p>
     <table cellspacing="0" cellpadding="0">
      <tr>
        <td class="title graybgd">说明</td>
        <td class="explian graybgd">爱学习,爱游戏,爱生活,爱间接性踌躇满志。</td>
      </tr>
      <tr>
        <td class="title">生日</td>
        <td class="explian">1997/05/07</td>
      </tr>
      <tr>
        <td class="title graybgd">工作</td>
        <td class="explian graybgd">程序员</td>
      </tr>
      <tr>
        <td class="title">特长</td>
        <td class="explian">什么是特长?</td>
      </tr>
      <tr>
        <td class="title graybgd">喜欢的颜色</td>
        <td class="explian graybgd">绿色And天空蓝</td>
      </tr>
      <tr>
        <td class="title">喜欢的漫画</td>
        <td class="explian">龙珠&海贼王</td>
      </tr>
      <tr>
        <td class="title graybgd">喜欢的电影</td>
        <td class="explian graybgd">肖申克的救赎</td>
      </tr>
      <tr>
        <td class="title">喜欢的游戏</td>
        <td class="explian">云顶之弈</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      
    }
  },
  methods: {
      
    }
}
</script>

<style lang='scss' scoped>
  .container {
    padding: 15px 20px;
    width: 39%;
    margin-left: 28%;
    margin-top: 40px;
    background-color: #ffffff;
    p {
      font-size: .875rem;
      text-align: left;
      margin: 25px 0px 0px 4%;
    }
    h1 {
      font-size: 25px;
    }
    h2 {
      text-align: left;
      color: $color;
      font-size: 20px;
      margin: 35px 0 20px 4%;
    }
    table {
      width: 92%;
      margin-left: 4%;
      text-align: left;
      border: $border;
      border-collapse: collapse;
        tr {
          display: flex;
          td {
            font-size: .875rem;
            padding: 10px 10px;
            border: $border;
            flex-grow: 1;
          }
        }
      td:first-child {
        color: #ff9800;
      }
    }
    .title {
      width: 22%;
    }
    .explian {
      width: 78%;
    }
    .graybgd {
      background: #F5F5F5;
    }
  }
</style>