<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p  class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: '/img/xihu.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0002',
          imgUrl: '/img/xihu.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0003',
          imgUrl: '/img/xihu.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '0004',
          imgUrl: '/img/xihu.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import  '../../../assets/styles/mixins.styl'
  .recommend-title
    margin-top : .2rem
    line-height :.8rem
    background : #eee
    text-indent: .2rem

  .item
    display :flex
    height :1.9rem
    overflow :hidden
    .item-img
      height :1.7rem
      width: 1.7rem
      padding :0.1rem
    .item-info
      min-width :0
      flex:1
      padding: 0.1rem
      .item-title
        line-height :.54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height :.4rem
        color :#ccc
        ellipsis()
      .item-button
        line-height :.44rem
        margin-top :.16rem
        background :#ff9300
        padding:0 0.2rem
        border-radius :0.6rem
        color :#fff
</style>
