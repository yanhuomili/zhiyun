<template>
  <div id="personalCenter-left-tab-box">
    <div class="avatar-box">
      <div class="avatar">
        <img src="../../../assets/avatar.png" alt="头像" class="img-wh100b">
        <div class="avatar-bg" @click="showUploadImgBg=true">
          修改头像
        </div>
      </div>
    </div>
    <ul class="link-list">
      <li class="link-item">
        <router-link to="/personalCenter/baseInfo">
          个人资料
        </router-link>
      </li>
      <li class="link-item">
        <router-link to="/personalCenter/message">
          消息
        </router-link>
      </li>
    </ul>
    <div class="avatar-change-box" v-show="showUploadImgBg">
      <div class="mid3 acb-outbox">
        <div class="acb-title">
          上传头像
        </div>
        <div class="upload-area">
          <div class="ua-jia">+</div>
          <div class="ua-text">
            <p class="ua-text-title">添加图片</p>
            <p>只支持JPG、PNG、GIF、大小不超过5M,建议尺寸为240×240</p>
            <!-- <p></p> -->
          </div>
        </div>
        <div class="acb-button text-center f0">
          <span class="btn-acb-save btn-sure" @click="uploadImg">确定</span>
          <span class="btn-acb-save btn-cancel" @click="uploadImg">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        showTab1: true,
        showUploadImgBg: false
      }
    },
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
    },
    methods: {
      uploadImg() {
        this.showUploadImgBg = false
      }
    },
    mounted() {

    }
  }

</script>

<style lang="scss" scoped>
  #personalCenter-left-tab-box {
    .avatar-box {
      width: 200px;
      height: 180px;
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
    .avatar {
      width: 90px;
      height: 90px;
      margin: 30px auto 22px;
      border-radius: 100% 100%;
      overflow: hidden;
      position: relative;
    }
    .avatar:hover .avatar-bg {
      display: block;
    }
    .avatar-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      font-size: 12px;
      line-height: 90px;
      color: #fff;
      text-align: center;
      display: none;
      cursor: pointer;
      background-color: rgba(51, 51, 51, 0.60);
    }
    .avatar-change-box {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 9;
      left: 0;
      top: 0;
      .acb-outbox {
        width: 310px;
        border: 2px solid #e6e6e6;
        background-color: #fff;
        box-sizing: border-box;
        padding: 20px 25px;
      }
      .acb-title {
        color: #666;
        font-size: 12px;
        line-height: 1;
        padding-bottom: 8px;
        border-bottom: 2px solid #e6e6e6;
      }
      .upload-area {
        margin: 20px auto 0;
        width: 200px;
        height: 180px;
        padding: 0 10px;
        box-sizing: border-box;
        background-color: #f4f4f4;
        text-align: center;
        box-sizing: border-box;
        color: #999;
        padding-top: 42px;
      }
      .ua-jia {
        width: 18px;
        height: 18px;
        background-color: #6297F4;
        color: #fff;
        font-size: 20px;
        line-height: 15px;
        font-weight: bold;
        text-align: center;
        border-radius: 100% 100%;
        margin: 0 auto 2px;
      }
      .ua-text-title {
        color: #666;
        font-size: 14px;
      }
      .acb-button {
        padding: 20px 0 10px;
      }
      .btn-acb-save {
        font-size: 14px;
        line-height: 28px;
        padding: 0 26px;
        display: inline-block;
        cursor: pointer;
      }
      .btn-sure {
        color: #fff;
        background-color: #6297F4;
      }
      .btn-cancel {
        color: #666;
        border: 1px solid #666;
        line-height: 26px;
        padding: 0 24px;
        margin-left: 16px;
      }
    }
    .link-list {
      border: 1px solid #ddd;
      margin-top: 10px;
    }
    .link-item+.link-item {
      border-top: 1px solid #ddd;
    }
    .link-item {
      text-align: center;
      font-size: 16px;
      a {
        line-height: 46px;
        color: #333;
      }
      a.router-link-active {
        color: #6297F4;
      }
    }
  }
</style>