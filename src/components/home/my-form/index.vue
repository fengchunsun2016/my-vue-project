
<template>
 <div id="my-form">

  <!--新录入表单列表页面-->
  <div class="order-list" id="order-list">
   <div class="header-bar">
    我的表单
    <span class="right save" id="submit-form">提交表单</span>
   </div>

   <div class="reject" id="reject">
    您有一条驳回表单，请及时修改后再提交！
   </div>

   <!--有兑换类型时，显示电子券和美通卡选项卡-->
   <div class="exchangeTypeListSearchBox" id="exchangeTypeListSearchBox">
    <ul class="exchangeTypeListSearch" id="exchangeTypeListSearch">
     <li class="dianzi active">
      电子券
     </li>
     <li class="meitong">
      美通卡
     </li>
    </ul>
   </div>


   <!--电子券列表-->
   <div class="dianzi-order-list" id="dianzi-order-list">
    <div class="search-box">
     <span class="iconfont icon-search search-icon"></span>
     <input type="text" class="search" id="search" placeholder="请输入相关内容查询">
     <input type="button" value="查询" class="search-btn" id="search-btn">
    </div>

    <div class="list-wrapper" id="wrapper">
     <div class="scroller" id="scroller">
      <div class="pull-refresh-box" id="pull-refresh-box">
       <div class="pull-refresh" id="pull-refresh">
        <span class="icon"></span>
        继续下拉刷新
       </div>
      </div>

      <ul class="list">

      </ul>

      <div class="load-more" id="load-more">
       正在努力加载数据...
      </div>
     </div>
    </div>
   </div>

   <!--美通卡列表-->
   <div class="meitong-order-list" id="meitong-order-list">
    <div class="search-box">
     <span class="iconfont icon-search search-icon"></span>
     <input type="text" class="search" id="search-meitong" placeholder="请输入相关内容查询">
     <input type="button" value="查询" class="search-btn" id="search-btn-meitong">
    </div>

    <div class="list-wrapper" id="wrapper-meitong">
     <div class="scroller" id="scroller-meitong">
      <div class="pull-refresh-box" id="pull-refresh-box-meitong">
       <div class="pull-refresh" id="pull-refresh-meitong">
        <span class="icon"></span>
        继续下拉刷新
       </div>
      </div>

      <ul class="list">

      </ul>

      <div class="load-more" id="load-more-meitong">
       正在努力加载数据...
      </div>
     </div>
    </div>
   </div>


  </div>

  <!--驳回表单页面-->
  <div class="order-list" id="order-reject-list">
   <div class="header-bar">
    <span class="left back"><i class="iconfont icon-back"></i></span>
    驳回表单
    <span class="right save" id="submit-reject-form">提交表单</span>
   </div>

   <!--有兑换类型时，显示电子券和美通卡选项卡-->
   <div class="exchangeTypeListSearchBox" id="exchangeTypeListRejectSearchBox">
    <ul class="exchangeTypeListSearch" id="exchangeTypeListRejectSearch">
     <li class="dianzi active">
      电子券
     </li>
     <li class="meitong">
      美通卡
     </li>
    </ul>
   </div>


   <div class="dianzi-list-reject" id="dianzi-list-reject">
    <div class="search-box">
     <span class="iconfont icon-search search-icon"></span>
     <input type="text" class="search" id="search-reject" placeholder="请输入相关内容查询">
     <input type="button" value="查询" class="search-btn" id="search-reject-btn">
    </div>

    <div class="list-wrapper" id="wrapper-reject">

     <div class="scroller" id="scroller-reject">
      <div class="pull-refresh-box" id="pull-refresh-box-reject">
       <div class="pull-refresh" id="pull-refresh-reject">
        <span class="icon"></span>
        继续下拉刷新
       </div>
      </div>

      <ul class="list">

      </ul>

      <div class="load-more" id="load-more-reject">
       正在努力加载数据...
      </div>
     </div>

    </div>
   </div>
   <div class="meitong-list-reject" id="meitong-list-reject">
    <div class="search-box">
     <span class="iconfont icon-search search-icon"></span>
     <input type="text" class="search" id="search-reject-meitong" placeholder="请输入相关内容查询">
     <input type="button" value="查询" class="search-btn" id="search-reject-btn-meitong">
    </div>

    <div class="list-wrapper" id="wrapper-reject-meitong">

     <div class="scroller" id="scroller-reject-meitong">
      <div class="pull-refresh-box" id="pull-refresh-box-reject-meitong">
       <div class="pull-refresh" id="pull-refresh-reject-meitong">
        <span class="icon"></span>
        继续下拉刷新
       </div>
      </div>

      <ul class="list">

      </ul>

      <div class="load-more" id="load-more-reject-meitong">
       正在努力加载数据...
      </div>
     </div>

    </div>
   </div>


  </div>

  <!--今日不可再提交-->
  <div class="have-submit" id="have-submit">
   <div class="header-bar">
    我的表单

   </div>

   <div class="reject" id="reject_">
    您有一条驳回表单，请及时修改后再提交！
   </div>

   <div class="icon">
    <span class="iconfont icon-yiwancheng"></span>
   </div>
   <div class="text">
    <div class="bigText">数据已提交</div>
    <div class="smallText">今日表单已提交，不可再记录咯</div>
   </div>
  </div>


 </div>
</template>

<script>
 export default{

 }
</script>

<style lang="less" scoped>
 #have-submit, #order-reject-list {
  display: none;
 }
 #my-form {
  width: 7.5rem;
  height: 100vh;
  background-color: #f0f3f8;

  .reject {
   display: none;
   height: 0.88rem;
   line-height: 0.88rem;
   font-size: 0.22rem;
   text-align: center;
   color: #fff;
   background-color: #fb8739;
  }

  .order-list {

   .exchangeTypeListSearchBox{
    display:none;
    .exchangeTypeListSearch {
     display: flex;
     justify-content: flex-start;
     border-bottom:1px solid #d7d7d7;
     padding:0.18rem 1.45rem;
     height:0.95rem;
     background-color:#fff;

     li {
      border:1px solid #888;
      width:100%;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
     }
     .dianzi{
      border-right:none;
      border-radius:0.08rem 0 0 0.08rem;
     }
     .meitong{
      border-left:none;
      border-radius:0 0.08rem 0.08rem 0;
     }
     .active {
      color:#fff;
      background-color:#3da9cb;
     }
    }
   }


   .search-box {
    position: relative;
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;

    .icon-search {
     position: absolute;
     top: 0;
     left: 0.22rem;
     line-height: 0.88rem;
     font-size: 0.4rem;
    }
    .search {
     margin-left: 0.8rem;
     width: 5.4rem;
     height: 0.88rem;
     line-height: 0.88rem;
     font-size: 0.28rem;
    }
    .search-btn {
     margin-top: 0.2rem;
     border: 1px solid #ccc;
     border-radius: 5px;
     width: 1rem;
     height: 0.46rem;
     line-height: 0.46rem;
     font-size: 0.3rem;
     color: #ccc;
     background-color: #fff;
    }

   }

   .list-wrapper {
    //padding:0.2rem;
    height: calc(100vh - 2.7rem);
    font-size: 0.28rem;
    overflow: auto;

    .scroller {
     padding-bottom: 3.6rem;
     width: 17.5rem;
     min-height: calc(100vh - 2.7rem + 1px);

     .list {
      margin: 0.2rem 0.2rem 0 0.2rem;
      text-align: center;
      font-size: 0.24rem;
      line-height: 0.68rem;

      li {
       display: flex;
       justify-content: flex-start;
       text-align: center;
       background-color: #fff;
       div {
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
       }

       .index {
        border-left: 1px solid #ccc;
        width: 0.8rem;
       }
       .name {
        width: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
       }
       .card-id {
        width: 3.2rem
       }
       .phone {
        width: 2rem;
       }
       .coupon {
        width: 2rem;
        /*overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;*/
        line-height: 0.34rem;
       }
       .date {
        width: 2rem;
       }
       .modify-person {
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
       }
       .last-modify-person {
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
       }
       .time {
        width: 3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
       }
      }
      .header {
       background-color: #e7e7ed;
       div {
        border-top: 1px solid #ccc;
        line-height: 0.5rem;
       }
      }
     }

     .load-more, .pull-refresh-box {
      position: relative;
      width: 7.5rem;
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.2rem;
      color: #ccc;
      overflow: hidden;
     }

     .load-more {
      margin-bottom: 0.2rem;
     }

     .pull-refresh-box .pull-refresh {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 7.5rem;
      height: 0.6rem;
      line-height: 0.6rem;
     }

    }

   }

   .meitong-order-list,.meitong-list-reject{
    display:none;
   }

  }

  .have-submit {
   text-align: center;

   .reject {
    display: none;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.22rem;
    text-align: center;
    color: #fff;
    background-color: #fb8739;
   }

   .icon {
    margin-top: 1.9rem;
    height: 2rem;
    .iconfont {
     color: #3da8ca;
     font-size: 2rem;
    }
   }
   .text {

    .bigText {
     line-height: 0.88rem;
     font-size: 0.36rem;
    }
    .smallText {
     line-height: 0.72rem;
     font-size: 0.28rem;
     color: #636361;
    }
   }
  }

 }
</style>




