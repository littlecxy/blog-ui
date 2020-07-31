<template>
  <div class="container">
    <h2>生活分享</h2>
      <div class="block">
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp" type="success" placement="top">
            <div @click="toDetail">
              <el-card>
                <h4>{{ activity.title }}</h4>
                <p>{{ activity.content }}</p>
              </el-card>
            </div>  
          </el-timeline-item>
        </el-timeline>
      </div>
  </div>
</template>

<script>
export default {
  name: 'share',
  data() {
    return {
      activities: [{
        content: '2020冲冲冲',
        timestamp: '2018-04-12 20:46',
        title: '你好,2020'
      }, {
        content: '2021冲冲冲',
        timestamp: '2018-04-12 20:46',
        title: '你好,2021'
      }, {
        content: '2022冲冲冲',
        timestamp: '2018-04-12 20:46',
        title: '你好,2022'
      }]
    };
  },
  methods: {
    toDetail(){
      this.$message({
        message: '本模块正在开发中',
        type: 'success'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .container {
    padding: 15px 20px;
    width: 38%;
    margin-left: 29%;
    margin-top: 40px;
    background-color: #ffffff;
      .block {
        margin-top: 10%;
        width: 91%;
      }
  }
  .el-card {
    background-color: rgb(178, 238, 217);
  }
</style>