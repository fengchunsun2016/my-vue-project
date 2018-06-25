<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name : 'app'

  }
</script>

<style lang='less' src="../public/css/reset.less"></style>
<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #f0f3f8;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    width: 7.5rem;
    height: 1rem;
    background-color: #fff;
    .foot-item {
      width: 1rem;
      height: 1rem;
      .icon {
        margin-top: 0.16rem;
        margin-left: 0.25rem;
        width: 0.45rem;
        height: 0.5rem;
      }
      .text {
        font-size: 0.2rem
      }
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.28rem
  }

  img {
    display: block;
    border: none;
    width: 100%;
    height: 100%
  }

  input {
    outline: none
  }

  .header-bar {
    position: relative;
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #37383c;
    color: #fff;
    font-size: 0.34rem;
    text-align: center;
    .left, .right {
      position: absolute;
      top: 0;

      font-size: 0.3rem;
      .iconfont {
        font-size: 0.4rem;
        font-weight: 600;
      }

    }
    .left {
      left: 0.13rem;
    }
    .right {
      right: 0.24rem;
      text-align: right;
      line-height: 0.8rem;
      color: #fff;
      background-color: #37383c;
    }

  }
</style>




