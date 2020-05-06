<template>
  <div class="header">
    <div class="header-left"><div class="iconfont iconfanhui back-icon"></div></div>
    <div class="header-input"><span class="iconfont iconsousuo"></span>输入景点/游玩主题</div>
    <router-link to='/city'>
    <div class="header-right">{{this.doubleCity}}<span class="iconfont iconarrow-down arrow-icon"></span></div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl';
  .header
    display: flex
    height: $headerHeight
    background : $bgColor
    line-height $headerHeight
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
      min-width 1.04rem
      padding  0 0.1rem
      float:right
      text-align :center
      color: #fff
      .arrow-icon
        font-size :.24rem
        display :inline-block
        padding-left :0.08rem
</style>
