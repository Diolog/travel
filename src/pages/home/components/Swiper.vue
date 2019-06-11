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
          imageUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
        },{
          id:'0002',
          imageUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/3a3066c073a492c1a881607181ac84ab.jpg_750x200_ca7fff4c.jpg'
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
  padding-bottom: 26.66%
  background:#eee
  .swiper-img
    width: 100%
</style>
