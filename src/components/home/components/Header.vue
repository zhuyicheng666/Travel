<template>
  <div class="header">
    <div class="header-left"><div class="iconfont iconfanhui back-icon"></div></div>
    <div class="header-input"><span class="iconfont iconsousuo"></span>输入景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont iconarrow-down arrow-icon"></span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl';
  .header
    display: flex
    height: .86rem
    background : $bgColor
    line-height .86rem
    color:#fff

    .header-left
      width: .64rem
      float:left
      .back-icon
        text-align :center
        font-size:.4rem

    .header-input
      flex: 1
      background:#fff
      border-radius: .1rem
      margin-top:.12rem
      height 0.64rem
      margin-left 0.2rem
      color:#ccc
      line-height :0.64rem
      padding-left :.2rem

    .header-right
      width 1.24rem
      float:right
      text-align :center
      .arrow-icon
        font-size :.24rem
        display :inline-block
        padding-left :0.08rem
</style>
