<template>
  <div id="personalCenter-baseInfo">
    <div class="main-box clearfix ">
      <div class="left-tab-box">
        <self-header></self-header>
        <!-- <div class="avatar-box">
          <div class="avatar">
            <img src="../../../assets/avatar.png" alt="头像" class="img-wh100b">
          </div>
        </div>
        <ul class="link-list">
          <li class="link-item">
            <router-link to="/personalCenter-baseInfo/baseInfo">
              个人资料
            </router-link>
          </li>
          <li class="link-item">
            <router-link to="/#">
              消息
            </router-link>
          </li>
        </ul> -->
      </div>
      <div class="right-content-box">
        <div class="rcb-top-tab">
          <ul class="rcb-tab-list clearfix">
            <li :class="['tcb-tab-item',showTab1?'active':'']" @click="showTab1=true">
              基本信息
            </li>
            <li :class="['tcb-tab-item',showTab1?'':'active']" @click="showTab1=false">
              账户安全
            </li>
          </ul>
          <div class="rcb-content">
            <div class="rcb-form-box" v-show="showTab1">
              <el-form ref="refForm" :model="userInfoData" :inline="false" label-width="70px" label-position="left">
                <el-form-item label="公司名">
                  <el-input v-model="userInfoData.value"></el-input>
                </el-form-item>
                <el-form-item label="英文名">
                  <el-input v-model="userInfoData.value"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                  <el-input v-model="userInfoData.value"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <div style="line-height:32px;">
                    <span>517172387@qq.com</span>
                    <a href="javascript:;" class="rcb-edit">修改</a>
                  </div>
                </el-form-item>
                <el-form-item label="手机号码">
                  <div style="line-height:32px;">
                    <span class="ver-mid">15577888990</span>
                    <a href="javascript:;" class="rcb-edit">修改</a>
                  </div>
                </el-form-item>
                <el-form-item label="固定号码">
                  <el-input v-model="userInfoData.value"></el-input>
                </el-form-item>
                <el-form-item label="个人介绍">
                  <el-input type="textarea" v-model="userInfoData.value"></el-input>
                </el-form-item>
                <div class="btn-save">
                  保存
                </div>
              </el-form>
            </div>
            <div class="rcb-form-box" v-show="!showTab1">
              <div>
                <div class="w100b table rcb-fb2-tc-item">
                  <div class="rcb-fb2-tc1">邮箱账号</div>
                  <div class="rcb-fb2-tc2">未绑定邮箱，绑定后可使用该邮箱直接登录</div>
                  <div class="rcb-fb2-tc3">&nbsp;</div>
                  <div class="rcb-fb2-tc4">
                    <span class="btn-binding" @click="gotoModifyEmail">更换</span>
                  </div>
                </div>
                <div class="w100b table rcb-fb2-tc-item">
                  <div class="rcb-fb2-tc1">手机账号</div>
                  <div class="rcb-fb2-tc2">可以使用手机18*******44马上登录</div>
                  <div class="rcb-fb2-tc3">&nbsp;</div>
                  <div class="rcb-fb2-tc4">
                    <span class="btn-binding" @click="gotoModifyPhone">更换</span>
                  </div>
                </div>
                <div class="w100b table rcb-fb2-tc-item">
                  <div class="rcb-fb2-tc1">登录密码</div>
                  <div class="rcb-fb2-tc2">密码要求至少包含字母，符号或数字中的两项且长度超过6 位，建议您经常修改密码，以保证帐号更加安全。
                  </div>
                  <div class="rcb-fb2-tc3">&nbsp;</div>
                  <div class="rcb-fb2-tc4">
                    <span class="btn-binding" @click="gotoModifyPW">更换</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '../components/header'
  import {
    form,
    formItem,
    input,
  } from 'element-ui'
  export default {
    data() {
      return {
        userInfoData: {
          value: ''
        },
        showTab1: true
      }
    },
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
      'self-header': header
    },
    mounted() {

    },
    methods: {
      gotoModifyEmail() {
        this.$router.push({ path: '/personalCenter/modifyEmail' })
      },
      gotoModifyPW() {
        this.$router.push({ path: '/personalCenter/modifyPW' })
      },
      gotoModifyPhone() {
        this.$router.push({ path: '/personalCenter/modifyPhone' })
      }
    }
  }

</script>

<style lang="scss" scoped>
  #personalCenter-baseInfo {
    padding: 40px 0 240px;
    .left-tab-box {
      width: 200px;
      float: left;
    }
    .right-content-box {
      float: left;
      width: 980px;
      margin-left: 20px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      .rcb-tab-list {
        border-bottom: 1px solid #ddd;
        .tcb-tab-item.active {
          color: #333;
          font-weight: bold;
        }
        .tcb-tab-item.active:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          display: block;
          bottom: -2px;
          background-color: #333;
        }
        .tcb-tab-item {
          cursor: pointer;
          position: relative;
          color: #666;
          line-height: 46px;
          font-size: 16px;
          margin: 0 30px;
          float: left;
        }
      }
      .rcb-form-box {
        padding: 20px 40px 50px;
        .el-form .el-form-item /deep/ .el-input__inner {
          width: 200px;
          height: 32px;
        }
        .el-form .el-form-item /deep/ .el-form-item__label {
          color: #999;
          font-size: 14px;
          line-height: 32px;
        }
        .el-form-item /deep/ .el-textarea {
          width: 340px;
          /* height: 120px; */
          textarea {
            border-color: #666666;
            color: #333;
            border-radius: 0;
          }
        }
        .rcb-edit {
          margin-left: 12px;
          color: #6297F4;
        }
        .btn-save {
          color: #fff;
          background-color: #6297F4;
          padding: 0 80px;
          display: inline-block;
          font-size: 16px;
          line-height: 34px;
        }
      }
      .rcb-fb2-tc-item {
        font-size: 14px;
        margin-top: 20px;
      }
      .rcb-fb2-tc1 {
        display: table-cell;
        width: 100px;
        color: #999;
      }
      .rcb-fb2-tc2 {
        display: table-cell;
        width: 380px;
        color: #666;
      }
      .rcb-fb2-tc3 {
        display: table-cell;
        width: 200px;
        text-align: center;
        box-sizing: border-box;
      }
      .rcb-fb2-tc4 {
        display: table-cell;
        /* width: 150px; */
      }
      .btn-binding {
        line-height: 34px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        padding: 0 50px;
        display: inline-block;
        background-color: #6297F4;
        cursor: pointer;
      }
      .btn-unbind {
        line-height: 32px;
        text-align: center;
        color: #666;
        font-size: 16px;
        padding: 0 49px;
        display: inline-block;
        background-color: #fff;
        border: 1px solid #999;
        cursor: pointer;
      }
    }
  }
</style>