<template>
  <div class="container">
    <h2>个人感悟</h2>
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
          <div @click="toDetail">
            {{activity.content}}
          </div>
          </el-timeline-item>
        </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'felling',
  data() {
    return {
      activities: [{
        content: '暂时没有感悟',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '暂时没有感悟',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        content: '暂时没有感悟',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: '暂时没有感悟',
        timestamp: '2018-04-03 20:46'
      }]
    };
  },
  methods: {
    toDetail(){
      this.$router.push({name:'ArticleDetail',query:{name:'haha'}})
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
            width: 50%;
          }
    }
</style>