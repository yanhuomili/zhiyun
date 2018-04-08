<template>
  <div id="register-container">
    <div class="main-box">
      <div class="top">
        <span class="top-sign-in-text">账户安全</span>
      </div>
      <div class="top-tab text-center">
        <div class="top-tab-right f0">
          <router-link to="/personalCenter/baseInfo" class="top-tab-r_span top-tab-r_span2">返回</router-link>
          <!-- <span class="top-tab-r_span top-tab-r_span2">马上登录</span> -->
          <span class="top-tab-r_span top-tab-r_shu">|</span>
          <router-link to="/home" class="top-tab-r_span top-tab-r_span2">返回智运网</router-link>
          <!-- <span class="top-tab-r_span top-tab-r_span4">返回智运网</span> -->
        </div>
      </div>
      <div class="mid-box">
        <div v-if="registerStep==1">
          <el-form autoComplete="on" :model="registerForm" ref="registerForm1" label-position="left" :inline="false" label-width="110px">
            <el-form-item label="">
              <div class="mb-el-form-title">
                修改手机号
              </div>
            </el-form-item>
            <el-form-item label="旧手机号">
              <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="新手机号">
              <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="验证码" class="mb-authCode f0">
              <el-input v-model="registerForm.password"></el-input>
              <span class="btn-sendcode">发送验证码</span>
            </el-form-item>
            <el-form-item>
              <span class="mb-next">确定</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="main-box">
        <div class="line1"></div>
      </div>
    </div>
    <footer class="lc-footer">
      Copyright © 2012-2017广州智运科技有限公司 ｜粤公网安备 31011002000858号｜粤ICP备 1
    </footer>
  </div>
</template>

<script>
  import { form, formItem, input, checkbox } from 'element-ui'
  export default {
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
      'el-checkbox': checkbox
    },
    name: 'login',
    data() {
      return {
        registerForm: {
          username: 'admin',
          password: '1111111',
          checked: true,
          remeberLogin: true
        },
        registerStep: 1,
      }
    },
    methods: {
      next() {
        this.registerStep++
      }
    },
    mounted() {

    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #register-container {
    .top-sign-in-text {
      font-size: 30px;
      padding: 60px 0 0;
      display: inline-block;
    }
    .top-tab {
      border-bottom: 2px solid #6297F4;
      position: relative;
      text-align: right;
    }

    .top-tab-right {
      display: inline-block;
      line-height: 40px;
      .top-tab-r_shu {
        padding: 0 18px;
      }
      .top-tab-r_span {
        font-size: 16px;
        display: inline-block;
      }
      .top-tab-r_span2,
      .top-tab-r_span4 {
        color: #D84C56;
      }
    }
    .mid-box {
      width: 390px;
      margin: 60px auto 140px;
      .mb-el-form-title {
        text-align: center;
        font-size: 24px;
        padding-bottom: 16px;
      }
      .mb-next {
        display: inline-block;
        width: 100%;
        line-height: 48px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        background-color: #6297F4;
        cursor: pointer;
      }
      .el-form {
        .el-form-item /deep/ .el-form-item__label {
          line-height: 48px;
          font-size: 16px;
          color: #999;
        }
        .mb-authCode .el-input {
          width: 140px;
        }
        .mb-authCode /deep/ .el-form-item__content {
          .el-input {
            vertical-align: middle;
          }
          font-size: 0;
        }
        .el-form-item {
          margin-bottom: 24px;
        }
        .el-form-item /deep/ .el-input__inner {
          height: 48px;
          border-color: #ddd;
        }
        .el-form-item /deep/ .el-checkbox__input {
          .el-checkbox__inner {
            width: 14px;
            height: 14px;
          }
          .el-checkbox__inner:after {
            height: 7px;
            left: 4px;
          }
        }
        .el-form-item /deep/ .el-checkbox__label {
          font-size: 14px;
          color: #333;
        }
        .btn-sendcode.loading {
          background-color: #F4F4F4;
        }
        .btn-sendcode {
          font-size: 18px;
          width: 130px;
          background-color: #6297F4;
          line-height: 48px;
          display: inline-block;
          color: #fff;
          text-align: center;
          vertical-align: middle;
          margin-left: 10px;
        }
      }
      .register-success {
        font-size: 20px;
        text-align: center;
        .icon-mb-rs {
          display: inline-block;
          width: 53px;
          height: 38px;
          margin-right: 12px;
          /* background: url('../../assets/icon-register-success.png') no-repeat center; */
          background-size: 100% 100%;
          vertical-align: middle;
        }
        .mb-goto-login {
          margin-top: 50px;
          background-color: #6297F4;
          color: #fff;
          font-size: 14px;
          padding: 0 16px;
          line-height: 32px;
          display: inline-block;
        }
      }
    }
    .lc-footer {
      font-size: 14px;
      line-height: 1;
      padding: 40px 0;
      text-align: center;
    }
  }
</style>