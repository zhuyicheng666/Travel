<template>
  <div>
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number"><span class="iconfont icontupian banner-icon"></span>{{this.bannerImgs.length}}</div>
    </div>
    </div>
    <FadeAnimation>
       <CommonGallary :imgs="this.bannerImgs" v-show="showGallary" @close="handleGallaryClose" ></CommonGallary>
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  data () {
    return {
      showGallary: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background  rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
