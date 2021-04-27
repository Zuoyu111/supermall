<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list class="cart-list" :cart-list="cartList"></cart-list>

    <bottom-bar></bottom-bar>

    <!--商品列表-->

    <!--底部汇总-->
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./chidlComp/CartList";
  import BottomBar from "./chidlComp/BottomBar";
  import { mapGetters } from 'vuex'


  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      BottomBar
    },
    computed: {
      // carlistLength() {
      //   return this.$store.state.cartList.length
      // }

      //两种语法
      // ...mapGetters(['carLength'])
      ...mapGetters({
        length: 'carLength',
        cartList: 'cartList'
      })
    }
  }
</script>

<style scoped>

  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
    overflow: hidden;
  }
</style>
