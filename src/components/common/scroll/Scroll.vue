<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  import BSscroll from '@better-scroll/core';
  import Pullup from '@better-scroll/pull-up'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 1.创建BScroll对象
      setTimeout(()=>{
        BSscroll.use(Pullup)
        this.scroll = new BSscroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })

        // 2.监听滚动的位置
        if(this.probeType == 2 || this.probeType == 3) {
          this.scroll.on('scroll', (position) => {

            this.$emit('scroll', position)
          })
        }

       if(this.pullUpLoad) {
         // 3.监听上拉事件
         this.scroll.on('pullingUp', () => {
           this.$emit('pullingUp')
         })
       }


      },3000)
    },
    methods: {
      scrollTo(x,y,time=300) {

        this.scroll && this.scrollTo && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll &&   this.scroll.refresh();
        // console.log('----');
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }

  }
</script>

<style scoped>

</style>
