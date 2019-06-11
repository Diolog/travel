<template>
  <div class="icons">
    <swiper :options="swiperOption">

      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
        },  
        iconList: [{
          id: '0001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc:'亲子游'
        },{
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc:'动植物园'
        },{
          id: '0004',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc:'自然风光'
        },{
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc:'常州必游'
        },{
          id: '0006',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
          desc:'淹城动物园'
        },{
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc:'恐龙园'
        },{
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc:'亲子游'
        },{
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc:'天目湖'
        }]
      }
    },
    computed:{
      pages (){
        const pages=[]
        this.iconList.forEach((item,index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]){
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height:0
    padding-bottom:50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom:25%
    .icon-img
      position:absolute
      top:0
      left:0
      right:0
      bottom: .44rem
      box-sizing: border-box
      padding:.1rem
      .icon-img-content
        display: block
        margin :0 auto
        height:100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height .44rem
      line-height: .44rem
      color: $darkTextColor
      text-align:center
      ellipsis()

</style>
