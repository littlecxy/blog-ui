<template>
  <div class="introduce">
    <div class="portrait">
      <img src="../images/portrait.jpg" alt="咦!我图呢???">
    </div>
    <div class="textPart">
      <span>我生待明日,万事成蹉跎</span>
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
    width: 70%;
    // background-color: rgba(116, 190, 212, 0.3);
    background-color: rgba(158, 224, 245, 0.35);
    position: absolute; 
    top: 560px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 0 10px 0;
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
        // color: #97dffd;
        color: rgb(238, 55, 42);
        font-size: 22px;
        margin-top: 30px;
        text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
      }
      .textPart {
        margin-top: 20px;
      }
  }
</style>