<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
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
        loop: true,
        autoplay: false
      },
      baseUrl: process.env.BASE_URL
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  props: {
    list: Array
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
