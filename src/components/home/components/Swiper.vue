<template>
<div class="wrapper">
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of SwiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" >
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      SwiperList: [{
        id: '001',
        imgUrl: '/img/swiper1.jpg'
      },
      {
        id: '002',
        imgUrl: 'img/swiper2.jpg'
      },
      {
        id: '003',
        imgUrl: require('../../../assets/img/swiper3.jpg')
      },
      {
        id: '004',
        imgUrl: require('../../../assets/img/swiper4.jpg')
      }
      ],
      baseUrl: process.env.BASE_URL
    }
  }

}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width :100%
    height :0
    padding-bottom :25.6%
    .swiper-img
      width:100%
  .wrapper >>> .swiper-pagination-bullet-active
    background-color :#fff
</style>
