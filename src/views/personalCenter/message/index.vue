<template>
  <div id="personalCenter-message">
    <div class="main-box clearfix ">
      <div class="left-tab-box">
        <self-header></self-header>
      </div>
      <div class="right-content-box">
        <div class="rcb-top-tab">
          <ul class="rcb-tab-list clearfix">
            <li class="tcb-tab-item active">
              系统消息
            </li>
            <li class="tcb-right">
              共47条
            </li>
          </ul>
          <div class="rcb-content">
            <div>全部标记已读</div>
            <ul>
              <li class="rcb-c-item">
                <div class="clearfix rcb-ci-inner">
                  <div class="rcb-ci-left">
                    <span class="rcb-cil-icon">&nbsp;</span>
                  </div>
                  <div class="rcb-ci-mid">
                    <p class="rcb-cim-time">2018-01-09 19:57</p>
                    <p class="rcb-cim-detail">您的编号为DD123123拖车委托已经成功提交
                      <router-link to="/login" class="rcb-cim-view">查看详情</router-link>
                    </p>
                  </div>
                </div>
              </li>
              <li class="rcb-c-item visited">
                <div class="clearfix rcb-ci-inner">
                  <div class="rcb-ci-left">
                    <span class="rcb-cil-icon">&nbsp;</span>
                  </div>
                  <div class="rcb-ci-mid">
                    <p class="rcb-cim-time">2018-01-09 19:57</p>
                    <p class="rcb-cim-detail">您的编号为DD123123拖车委托已经成功提交
                      <router-link to="/login" class="rcb-cim-view">查看详情</router-link>
                    </p>
                  </div>
                  <a href="javascript:;" class="rcb-cim-del">删除</a>
                </div>
              </li>
            </ul>
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
    input
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

    }
  }

</script>

<style lang="scss" scoped>
  #personalCenter-message {
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
        position: relative;
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
        .tcb-right {
          position: absolute;
          right: 20px;
          top: 15px;
        }
      }

      .rcb-content {
        padding: 16px 30px;
        .rcb-c-item:first-child {
          border-top: none;
        }
        .rcb-ci-inner {
          padding: 10px 10px 0;
          position: relative;
        }
        .rcb-ci-inner:hover {
          background: rgba(98, 151, 244, 0.05);
        }
        .rcb-c-item.visited {
          color: #999;
        }
        .rcb-c-item {
          font-size: 14px;
          border-top: 1px solid #ddd;
          padding: 10px 0;
          color: #333;
          .rcb-ci-left {
            float: left;
            width: 45px;
          }
          .rcb-cim-del {
            color: #999;
            font-size: 12px;
            position: absolute;
            top: 10px;
            right: 10px;
          }
          .rcb-cil-icon {
            width: 20px;
            height: 14px;
            display: inline-block;
            background-color: #333;
          }
          .rcb-ci-mid {
            float: left;
            p {
              line-height: 14px;
              margin-bottom: 10px;
            }
          }
          .rcb-cim-view {
            margin-left: 20px;
            color: #6297F4;
          }
        }
      }
    }
  }
</style>