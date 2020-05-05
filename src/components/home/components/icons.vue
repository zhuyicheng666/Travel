<template>

  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index" >
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content" >
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
       </swiper-slide>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: '/img/remengjingdian.png',
          desc: '热门景点'
        },
        {
          id: '0002',
          imgUrl: '/img/jiudian.png',
          desc: '酒店'
        },
        {
          id: '0003',
          imgUrl: '/img/jipiao.png',
          desc: '机票'
        },
        {
          id: '0004',
          imgUrl: '/img/jipiao.png',
          desc: '火车票'
        },
        {
          id: '0005',
          imgUrl: '/img/dujia.png',
          desc: '度假'
        },
        {
          id: '0006',
          imgUrl: '/img/jipiao.png',
          desc: '滑雪季'
        },
        {
          id: '0007',
          imgUrl: '/img/dujia.png',
          desc: '动物园'
        },
        {
          id: '0008',
          imgUrl: '/img/jipiao.png',
          desc: '温泉'
        },
        {
          id: '0009',
          imgUrl: '/img/remengjingdian.png',
          desc: '植物园哈哈哈哈哈哈哈'
        },
        {
          id: '0010',
          imgUrl: '/img/jipiao.png',
          desc: '一日游'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import  '../../../assets/styles/varibles.styl'
@import  '../../../assets/styles/mixins.styl'
.icons
  margin-top: .1rem

  .icons>>>.swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%

  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%

    .icon-desc
      position : absolute
      left :0
      right :0
      bottom 0
      height .44rem
      line-height : .44rem
      color: $darkTextColor
      text-align :center
      ellipsis()

    .icon-img
      position : absolute
      top: 0
      left :0
      right :0
      bottom 0.44rem
      text-align :center
      box-sizing:border-box
      padding :0.1rem

      .icon-img-content
        height :100%
</style>
