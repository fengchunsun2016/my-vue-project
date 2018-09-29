<template>
  <div id="login">
    <div class="header-bar">
      <span class="left back"></span>
      登录-集数据
      <span class="right save"></span>
    </div>

    <div class="logo">
      <img src="../../../public/images/logo.png" alt="">
    </div>

    <div class="warning" id="warning" v-show="warningFlag">
      {{warningText}}
    </div>

    <div class="form">
      <form>
        <div class="username">
          <i class="iconfont icon-phone"></i>
          <input type="text" name="username" placeholder="请输入账号" id="username" v-model="username">
        </div>
        <div class="password">
          <i class="iconfont icon-mima"></i>
          <input type="password" name="password" placeholder="请输入密码" id="password" v-model="password">
        </div>
        <input type="button" value="登录" class="submit" id="submit" @click="login">

      </form>
    </div>


  </div>
</template>

<script>

  import { md5 } from 'vux';
  import { AlertModule } from 'vux';
  import { post } from '../../../request/index';



  export default {
    name : 'Login',
    props : {},
    data() {
      return {
        username : '',
        password : '',
        warningFlag : false,
        warningText : ''
      }
    },
    methods : {
      login() {

        let logining = false;

        let username = this.username;
        let password = this.password;

        if (!username || !password) {
          if (!username) {
            this.warningFlag = true;
            this.warningText = '请输入账号';
            //
            AlertModule.show({
              title: '请输入账号',
              // content: 'Do you agree?',
              onShow () {
                console.log('Module: I\'m showing')
              },
              onHide () {
                console.log('Module: I\'m hiding now')
              }
            })
            return;
          }
          if (!password) {
            this.warningFlag = true;
            this.warningText = '请输入密码';
            //
            AlertModule.show({
              title: '请输入密码',
              // content: 'Do you agree?',
              onShow () {
                console.log('Module: I\'m showing')
              },
              onHide () {
                console.log('Module: I\'m hiding now')
              }
            })
          }
        } else {
          this.warningFlag = false;
          password = md5(password).toUpperCase();
          let data = { username, password };

          if (!logining) {
            logining = true;

            post({url:'/login',params:data}).then(response=>{
              let result = response.data;
              if(result.code == 'SUCCESS'){

                this.$router.push('/home');
              }
            })


          }

        }

      }
    }
  }

</script>

<style lang="less" scoped>
  #login {
    width: 7.5rem;
    height: 100vh;
    background-color: #fff;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 7.5rem;
      height: 3.88rem;
      img {
        display: block;
        border: none;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .warning {

      padding: 0.1rem 0;
      width: 7.5rem;
      line-height: 0.4rem;
      font-size: 0.3rem;
      text-align: center;
      color: #e25607;
    }
    .form {
      padding: 0 0.48rem;
      .username, .password {
        display: flex;
        justify-content: flex-start;

        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.28rem;
        border-bottom: 1px solid #d2d2d2;
        .iconfont {
          font-size: 0.38rem;
        }
        input {
          margin-bottom:0.02rem;
          padding-left: 0.2rem;
          width:80%;
          height: 0.70rem;
          line-height: 0.70rem;
        }
      }
      .password {
        margin-top: 0.37rem;
      }
      .submit {
        margin-top: 0.8rem;
        border-radius: 5px;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        letter-spacing: 4px;
        text-align: center;
        font-size: 0.34rem;
        background-color: #3da8ca;
        color: #fff;
      }
    }
  }
</style>










