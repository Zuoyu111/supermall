<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
  @import "../../../assets/css/base.css";

  #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
    z-index: 4;
  }

</style>
