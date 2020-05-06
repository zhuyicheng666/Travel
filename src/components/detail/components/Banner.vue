<template>
  <div>
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="https://img1.qunarzz.com/p/tts0/1806/62/d8306970858fa602.jpg_r_640x420x95_c9988855.jpg">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界（AAAA景区）</div>
      <div class="banner-number"><span class="iconfont icontupian banner-icon"></span>39</div>
    </div>
    </div>
    <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose" ></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Detail',
  components: {
    CommonGallary
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
      imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/900a57bb-72e1-42f4-b3f0-a98474ace092.jpg_r_1280x840x95_16ffc0f9.jpg', 'https://img1.qunarzz.com/vs_ceph_vs_tts/900a57bb-72e1-42f4-b3f0-a98474ace092.jpg_r_1280x840x95_16ffc0f9.jpg'],
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
