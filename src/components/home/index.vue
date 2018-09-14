<template>
  <div>
    <router-view></router-view>
    <footer>
      <div class="foot-item record" @click="clickRecord">
        <router-link to="/record">
          <div class="icon"><img :src="iconRecord" alt=""></div>
          <div class="text">记录表单</div>
        </router-link>

      </div>
      <div class="foot-item my-form" @click="clickOrder">
        <router-link to="/order">
          <div class="icon"><img :src="iconOrder" alt=""></div>
          <div class="text">我的表单</div>
        </router-link>

      </div>
      <div class="foot-item my-account" @click="clickAccount">
        <router-link to="account">
          <div class="icon"><img :src="iconAccount" alt=""></div>
          <div class="text">我的账号</div>
        </router-link>

      </div>
    </footer>
  </div>

</template>

<script>

  import recordone from '../../../public/images/recordone.png';
  import recordtwo from '../../../public/images/recordtwo.png';
  import formone from '../../../public/images/formone.png';
  import fromtwo from '../../../public/images/formtwo.png';
  import accountone from '../../../public/images/accountone.png';
  import accounttwo from '../../../public/images/accounttwo.png';

  export default {
    name : 'home',
    data : function () {
      return {
        iconRecord : recordtwo,
        iconOrder : formone,
        iconAccount : accountone
      }
    },
    methods : {
      clickRecord : function () {
        this.iconRecord = recordtwo;
        this.iconOrder = formone;
        this.iconAccount = accountone;
      },
      clickOrder : function () {
        this.iconRecord = recordone;
        this.iconOrder = fromtwo;
        this.iconAccount = accountone;
      },
      clickAccount : function () {
        this.iconRecord = recordone;
        this.iconOrder = formone;
        this.iconAccount = accounttwo;
      }
    }
  }
</script>

<style lang="less" scoped>
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

  #record, #modify-detail {
    padding-bottom: 1.5rem;
    width: 7.5rem;
    //height:100vh;
    background-color: #f0f3f8;
    font-size: 0.28rem;

    .custom .tittle, .ticket .tittle, .date .tittle {
      line-height: 0.85rem;
      color: #c0c0c0;
      padding-left: 0.23rem;
    }
    .custom {
      .info {
        background-color: #fff;
        .item {
          display: flex;
          justify-content: flex-start;
          border-bottom: 1px solid #ccc;
          padding-left: 0.23rem;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.3rem;

          .left {
            width: 2.37rem;
          }
          input {
            height: 0.88rem;
            line-height: 0.88rem;
          }
        }
        .custom-identify {
          border: none;
          justify-content: space-between;
          input {
            padding-left: 0;
          }
          .get-custom-identify {
            position: relative;
            padding: 0 0.3rem 0 0.2rem;
            width: 2.5rem;
            font-size: 0.26rem;
            text-align: center;
            color: #3ca9ca;
            .line {
              position: absolute;
              top: 0.2rem;
              left: 0;
              width: 1px;
              height: 0.5rem;
              background-color: #ccc;
            }
            #time_ {
              text-align: center;
            }
          }
        }
      }
    }

    .ticket {
      .formExchangeType {
        display: flex;
        justify-content: flex-start;
        padding: 0.2rem 0 0 0.2rem;
        background-color: #fff;

        .prefix {
          margin-right: 0.3rem;
          height: 0.58rem;
          line-height: 0.58rem;
          font-size: 0.3rem;
        }

        .exchangeTypeList {
          display: flex;
          justify-content: flex-start;
          li {
            margin-right: 0.3rem;
            border: 1px solid #333;
            border-radius: 0.08rem;
            width: 1.6rem;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
          }
          .active {
            border: 1px solid #3da9cb;
            color: #3da9cb;
            background: url("../../../public/images/active.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .list {
        padding: 0.2rem 0.23rem 0.23rem 0.23rem;
        background-color: #fff;
        .list-item {
          display: flex;
          justify-content: space-between;
          border-right: 1px solid #d7d7d7;
          border-left: 1px solid #d7d7d7;

          .left, .right, .right-modify {
            width: 50%;
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            border-bottom: 1px solid #d7d7d7;
          }
          .left {
            border-right: 1px solid #d7d7d7;
          }
        }
        .header {
          border-top: 1px solid #d7d7d7;

          .left, .right {
            border-bottom: none;
            height: 0.6rem;
            line-height: 0.6rem;
            background-color: #e8e7ed;
          }
        }

        .meitong-tips {
          margin-top: 0.23rem;
          height: 0.3rem;
          line-height: 0.3rem;
          font-size: 0.26rem;
          .iconfont {
            color: #3da9cb;
            margin-right: 0.05rem;
            font-size: 0.3rem;
            font-weight: 600;
          }
        }

      }

      .meitong-list {
        display: none;
      }

      .saveTip {
        padding: 0 0.23rem 0.23rem;
        line-height: 0.35rem;
        text-indent: -0.1rem;
        color: #9fa326;
        background-color: #fff;
      }
    }

    .select-date {
      width: 7.5rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      background-color: #fff;
    }
  }


</style>











