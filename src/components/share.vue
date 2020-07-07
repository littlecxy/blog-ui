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
        content: '支持使用图标支持使用图标',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '支持自定义颜色支持使用图标',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        content: '支持自定义尺寸支持使用图标',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: '默认样式的节点支持使用图标',
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
</style>