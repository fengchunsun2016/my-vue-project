
<template>

  <div id="record">
    <div class="header-bar">
      <span class="left back"></span>
      登记表
      <span class="right save" id="save-form" @click="saveOrder">保存</span>

    </div>

    <div class="custom">
      <div class="tittle">
        客户信息
      </div>
      <ul class="info" id="custom-info">
        <li class="item custom-name">
          <div class="left name">姓名</div>
          <input type="text" id="custom-name" placeholder="请输入姓名" v-model="name">
        </li>
        <li class="item custom-id">
          <div class="left id">身份证号码</div>
          <input type="text" id="custom-id" placeholder="请输入身份证号" v-model="idCard">
        </li>
        <li class="item custom-phone">
          <div class="left phone">手机号码</div>
          <input type="text" id="custom-phone" placeholder="请输入银行预留手机号" v-model="phoneNum">
        </li>
        <li class="item custom-identify">
          <input type="text" placeholder="请输入验证码" id="custom-identify" v-model="smsCode">
          <div class="get-custom-identify" id="get-custom-identify"><span class="line"></span> <p id="time_">获取验证码</p></div>
        </li>
      </ul>
    </div>

    <div class="ticket" id="custom-ticket">
      <!--<div class="tittle">
        券码信息
      </div>

      <div class="formExchangeType" id="formExchangeType">
        <div class="prefix">
          兑换类型
        </div>
        <ul class="exchangeTypeList">
          <li class="dianzi active">
            电子券
          </li>
          <li class="meitong">
            美通卡
          </li>
        </ul>
      </div>

      <div class="list dianzi-list" id="dianzi-list">
        <div class="list-item header">
          <div class="left">券码面值</div>
          <div class="right">数量</div>
        </div>
        <div class="list-item item">
          <div class="left">100元</div>
          <input type="text" class="right" placeholder="输入兑换张数" ticket-code=${item.formTicketCode}>
        </div>
        <div class="list-item item">
          <div class="left">100元</div>
          <input type="text" class="right" placeholder="输入兑换张数" ticket-code=${item.formTicketCode}>
        </div>
        <div class="list-item item">
          <div class="left">100元</div>
          <input type="text" class="right" placeholder="输入兑换张数" ticket-code=${item.formTicketCode}>
        </div>
      </div>

      <div class="list meitong-list" id="meitong-list">
        <div class="list-item header">
          <div class="left">券码面值</div>
          <div class="right">数量</div>
        </div>
        <div class="list-item item">
          <div class="left">100元</div>
          <input type="text" class="right" placeholder="输入兑换张数" ticket-code=${item.formTicketCode}>
        </div>
        <div class="list-item item">
          <div class="left">100元</div>
          <input type="text" class="right" placeholder="输入兑换张数" ticket-code=${item.formTicketCode}>
        </div>
        <div class="list-item item">
          <div class="left">100元</div>
          <input type="text" class="right" placeholder="输入兑换张数" ticket-code=${item.formTicketCode}>
        </div>

        <div class="meitong-tips" id="meitong-tips">
          <span class="iconfont icon-tishi"></span>
          美通卡兑换最小面值1000元，2张起兑
        </div>
      </div>-->

    </div>

    <div class="date" id="custom-date">
      <div class="tittle">
        日期
      </div>

      <input class="select-date"
             id="select-date"
             type="text"
             readonly=""
             name="input_date"
             placeholder="请选择日期"
             data-lcalendar="${dateNow},2030-12-31"
      />
    </div>

  </div>

</template>

<script>
  export default{
    data:function () {
      return {
        name:'',
        idCard:'',
        phoneNum:'',
        smsCode:''
      }
    },
    methods:{
      saveOrder:function () {

      }
    }
  }
</script>


<style lang="less" scoped>

  #record {
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
        padding:0.2rem 0 0 0.2rem;
        background-color: #fff;

        .prefix{
          margin-right:0.3rem;
          height:0.58rem;
          line-height:0.58rem;
          font-size:0.3rem;
        }

        .exchangeTypeList {
          display: flex;
          justify-content: flex-start;
          li {
            margin-right:0.3rem;
            border:1px solid #333;
            border-radius:0.08rem;
            width:1.6rem;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
          }
          .active {
            border:1px solid #3da9cb;
            color:#3da9cb;
            background:url("../../../../public/images/active.png") no-repeat;
            background-size:100% 100%;
          }
        }
      }

      .list {
        padding:0.2rem 0.23rem 0.23rem 0.23rem;
        background-color: #fff;
        .list-item {
          display: flex;
          justify-content: space-between;
          border-right:1px solid #d7d7d7;
          border-left:1px solid #d7d7d7;

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
          border-top:1px solid #d7d7d7;

          .left, .right {
            border-bottom: none;
            height: 0.6rem;
            line-height: 0.6rem;
            background-color: #e8e7ed;
          }
        }


        .meitong-tips{
          margin-top:0.23rem;
          height:0.3rem;
          line-height:0.3rem;
          font-size:0.26rem;
          .iconfont{
            color:#3da9cb;
            margin-right:0.05rem;
            font-size:0.3rem;
            font-weight:600;
          }
        }

      }

      .meitong-list{
        display:none;
      }

      .saveTip{
        padding:0 0.23rem 0.23rem;
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








