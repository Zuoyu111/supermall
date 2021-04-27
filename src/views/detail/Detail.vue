<template>
  <div id="detail" >
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll :probe-type="3"class="content" ref="scroll" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComp/DetailNavBar";
  import DetailSwiper from "./childComp/DetailSwiper";
  import DetailBaseInfo from "./childComp/DetailBaseInfo";
  import DetailShopInfo from "./childComp/DetailShopInfo";
  import DetailGoodsInfo from "./childComp/DetailGoodsInfo";
  import DetailParamInfo from "./childComp/DetailParamInfo";
  import DetailCommentInfo from "./childComp/DetailCommentInfo";
  import DetailBottomBar from "./childComp/DetailBottomBar";
  import BackTop from "../../components/content/backTop/BackTop";


  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";

  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      BackTop,
      Scroll,
      GoodsList,

    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        currentIndex: 0,
        isShowBackTop: false,
      }
    },
    created() {
      //1.保存传入的id
      this.iid = this.$route.params.id
      console.log(this.$route.params.id);
      //2.根据id请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res.result,66);
        const data = res.result;
        //1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //3.获取店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        //4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        //5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //6.取出评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]

        }

      })

      //3.获取推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
        // console.log(res,999);
      })
    },
    mounted() {

    },
    updated() {

    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        console.log(this.themeTopYs);
      },
      titleClick(index) {
        console.log(index);
        this.$refs.scroll.scrollTo(0,(-this.themeTopYs[index])+44,100)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
        //1.获取y的值
        const positionY = -position.y
        let length = this.themeTopYs.length

        for(let i = 0;i < length - 1; i++ ) {
          if(this.currentIndex !==i && (positionY >= this.themeTopYs[i]) && positionY < this.themeTopYs[i+1]){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        //2.positionY和主题中值进行对比
      },
      backTop() {
        this.$refs.scroll.scrollTo(0,0,500);
      },
      addToCart() {
        //1.获取购物车需要展示的内容
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.iid = this.iid
        product.realPrice = this.goods.realPrice

        //2.将商品添加到购物车里
        this.$store.dispatch('addCart',product)
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
  }

  .content {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>
