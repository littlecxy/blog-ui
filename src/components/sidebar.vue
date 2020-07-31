<template>
  <div class="sidebar">
    <div class="portrait">
      <img src="../images/portrait.jpg" alt="">
    </div>
    <div class="hobby">
      <div class="label">
        
      </div>
      <div class="label">
        
      </div>
      <div class="label">

      </div>
    </div>
    <div class="bestLove">
      <p>最喜欢的文学作品:三重门</p>
      <p>最喜欢看的动漫:clannad</p>
      <p>最喜欢的游戏:人类一败涂地</p>
      <p>最喜欢的食物:橘子And肉松</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: white;
    padding: 20px 16px;
    position: absolute;
    top: 1px;
    margin-left: 72%;
    display: flex;
    flex-direction: column;
      .label {
        width: 54px;
        height: 30px;
        background-color: rgba(164, 225, 247, 0.8);
        border-radius: 20px;
        float: left;
        margin: 5%;
      }
      p {
        font-size: .75rem;
      }
  }
  img {
    width: 240px;
    height: 230px;
  }
</style>