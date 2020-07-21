<template>
  <div class="container">
    <h2>生活分享</h2>
    <div class="block">
        <el-timeline>
          <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp">
          {{activity.content}}
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
        content: '暂时没有分享',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-lightning'
      }, {
        content: '暂时没有分享',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        color: '#0bbd87',
        icon: 'el-icon-lightning'
      }, {
        content: '暂时没有分享',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: '暂时没有分享',
        timestamp: '2018-04-03 20:46'
      }]
    };
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
            width: 50%;
          }
    }
    .el-timeline-item__wrapper {
      padding-left: 1px;
    }
</style>