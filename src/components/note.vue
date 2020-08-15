<template>
  <div class="container">
    <h2>学习笔记</h2>
    <div class="block">
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.date" type="success" placement="top">
            <div @click="toDetail(activity)">
              <el-card>
                <h4>{{ activity.title }}</h4>
                <p>{{ activity.reserved }}</p>
              </el-card>
            </div>  
          </el-timeline-item>
        </el-timeline>
    </div>
  </div>
</template>

<script>
import {findArticleByType} from '@/http/api/article';
export default {
  name: 'note',
  data() {
    return {
      activities: []
    };
  },
  created() {
    let type = [];
    type[0] = 3;
    findArticleByType(type).then(res => {
    console.log(res);
    this.activities = res;
    })
  },
  methods: {
    toDetail(activity){
      this.$router.push({name:'ArticleDetail',params: {article: activity}})
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
        width: 86%;
      }
  }
  .el-card {
    background-color: rgb(178, 238, 217);
  }
</style>