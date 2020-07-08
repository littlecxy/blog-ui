<template>
  <div class="introduce">
    <div class="portrait">
      <img src="../images/portrait.jpg" alt="咦!我图呢???">
    </div>
    <div class="textPart">
      <span>热爱编程,热爱生活</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduce'
}

</script>
<style lang="scss" scoped>
  .introduce {
    position: absolute;
    top: 300px;
    left: 44%;
      .portrait {
          img {
            width: 144px;
            height: 144px;
            max-width: $max-width;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.6s;
          }
          img:hover {
            transform: scale(1.3);
          }
      }
      span {
        transition: all 0.3s;
        color: #97dffd;
        font-size: 18px;
        margin-top: 30px;
        text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
      }
      .textPart {
        margin-top: 20px;
      }
  }
</style>