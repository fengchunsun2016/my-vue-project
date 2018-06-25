<template>
  <div id="myAccount">
    <!--修改密码页-->
    <div id="repassword">
      <div class="header-bar">
        <span class="left"></span>
        修改密码
        <span class="right save" id="save">保存</span>
      </div>

      <div class="account">
        <i class="iconfont icon-4zhanghu"></i>
        <div>
          <span class="lable">绑定账号：</span>
          <span class="phone" id="phone"></span>
        </div>
      </div>

      <form class="form">
        <div class="password">
          <div>原密码</div>
          <input type="password" placeholder="请输入原密码" id="old-password">
        </div>
        <div class="password">
          <div>新密码</div>
          <input type="password" placeholder="请输入新密码" id="new-password">
        </div>
        <div class="password">
          <div>再次输入</div>
          <input type="password" placeholder="请再次输入新密码" id="new-password-again">
        </div>


        <div class="identify-box">

          <input type="text" placeholder="请输入验证码" id="identify">
          <div class="get-identify" id="get-identify"><span class="line"></span>
            <p id="time">获取验证码</p></div>
        </div>
      </form>

      <div class="tips">
        <i class="iconfont icon-warningo"></i>
        <span id="tips">密码输入不一致，请重新输入</span>
      </div>

    </div>

    <div class="info-box" id="info-box">
      <div class="header-bar">
        <span class="left back"></span>
        我的账号
        <span class="right save" id="change-password">修改密码</span>
      </div>
      <ul class="my-info">
        <li class="info-item">
          <div class="name">账户名称</div>
          <div id="my-name"></div>
        </li>
        <li class="info-item">
          <div class="name">绑定账号</div>
          <div id="my-account"></div>
        </li>
        <li class="info-item">
          <div class="name">客服电话</div>
          <div id="my-phone">400-160-5001</div>
        </li>
      </ul>

      <input type="button" value="退出登录" class="exit" id="exit">
    </div>

  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  #repassword {
    width: 7.5rem;
    height: 100vh;
    background-color: #f0f3f8;

    .account {
      display: flex;
      justify-content: flex-start;
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.28rem;
      background-color: #fff;
      .iconfont {
        padding: 0 0.1rem;
        font-size: 0.4rem;
        color: #42abc9;
      }
    }

    .form {
      margin-top: 0.37rem;
      background-color: #fff;
      .password, .identify-box {
        display: flex;
        justify-content: flex-start;
        padding-left: 0.23rem;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.28rem;
        border-bottom: 1px solid #d2d2d2;
        .iconfont {
          font-size: 0.38rem;
        }
        input {
          padding-left: 0.2rem;
          height: 0.88rem;
          line-height: 0.88rem;
        }
      }

      .identify-box {
        border: none;
        justify-content: space-between;
        input {
          padding-left: 0;
        }
        .get-identify {
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
          #time {
            text-align: center;
          }
        }
      }

    }

    .tips {
      display: none;
      line-height: 0.8rem;
      font-size: 0.24rem;
      .iconfont {
        padding: 0 0.2rem;
        color: #fb8e93;
      }
    }
  }
  #myAccount {
    width: 7.5rem;
    height: 100vh;
    background-color: #f0f3f8;

    .info-box {
      .my-info {
        line-height: 0.9rem;
        font-size: 0.28rem;
        background-color: #fff;
        .info-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          padding: 0 0.24rem;
        }
        :nth-child(3) {
          border: 0;
        }
      }

      .exit {
        margin-top: 1.15rem;
        margin-left: 0.25rem;
        border-radius: 5px;
        width: 7rem;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        font-size: 0.36rem;
        color: #fff;
        background-color: #3da8ca;
      }
    }

  }
</style>