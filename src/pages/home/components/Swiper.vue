<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <img class="swiper-img" :src="slide.imageUrl" />
      </swiper-slide>
      <!-- <swiper-slide>
        <img
          class="swiper-img"
          src="http://i0.hdslb.com/bfs/article/a8c6df0dd7455fdb133575965d0719ee17aab281.png"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://i0.hdslb.com/bfs/article/802b949231440fef8ed8af718750e4ff25189b24.jpg"
        >
      </swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true
        },
        swiperSlides: [{
          id:'0001',
          imageUrl:'http://i0.hdslb.com/bfs/article/a8c6df0dd7455fdb133575965d0719ee17aab281.png'
        },{
          id:'0002',
          imageUrl:'http://i0.hdslb.com/bfs/article/802b949231440fef8ed8af718750e4ff25189b24.jpg'
        }]
      }
    }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background:#eee
  .swiper-img
    width: 100%
</style>
