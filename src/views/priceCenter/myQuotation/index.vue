<template>
  <div class="PC-myQuotation" id="PC-myQuotation">
    <pc-header></pc-header>
    <div class="main-box clearfix pc-content-box">
      <div class="left">
        <ul>
          <li class="oc-item">
            <router-link to="/priceCenter/myQuotation" class="oc-link">
              全部订单
            </router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="w100b search-box">
          <pannel>
            <div slot=title>全部订单</div>
            <div slot="content">
              <div class="content-box f0">
                <el-form ref="refForm" :model="searchData" :inline="true" label-width="116px" label-position="right">
                  <div class="search-item">
                    <el-form-item label="订单创建日期:">
                      <el-date-picker v-model="searchData.value1" type="date" placeholder="选择日期">
                      </el-date-picker>
                      <el-date-picker v-model="searchData.value1" type="date" placeholder="选择日期" style="margin-left:30px;">
                      </el-date-picker>
                    </el-form-item>
                  </div>
                  <div class="search-item search-item-dif">
                    <el-form-item label="订单号:" style="margin-bottom:0;">
                      <el-input v-model="searchData.name" placeholder="请选择柜型">
                      </el-input>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="button-search">搜索</div>
              </div>
            </div>
          </pannel>
        </div>
        <div class="order-list">
          <div class="order-item" v-for="item in listArr" :key="item.id" v-if="item.serviceId&&item.serviceId.indexOf('0')>-1">
            <div class="order-item-head f0">
              <div class="order-th-s order-th-s1">{{orderStatus[item.status]}}</div>
              <div class="order-th-s order-th-s2">
                <span style="margin-right:10px;">海运</span>{{(new Date(item.createDate)).Format('yyyy-MM-dd hh:mm')}}</div>
              <div class="order-ths-editDel">
                <!-- <a href="javascript:;" class="order-thsed-edit" @click="gotoPriceEdit">编辑</a> -->
                <a href="javascript:;" class="order-thsed-del">&nbsp;</a>
              </div>
            </div>
            <div class="order-item-content">
              <div class="order-ic-item order-ic-item1">
                <div class="w100b table order-ici1-box">
                  <div class="table-cell order-ici-adress clearfix">
                    <div class="fl order-ici-left">
                      <p>NINGBO</p>
                      <p>宁波</p>
                    </div>
                    <div class="fl order-ici-mid">
                      →
                    </div>
                    <div class="fl order-ici-left">
                      <p>PETERSBURG</p>
                      <p>圣彼得堡</p>
                    </div>
                  </div>
                  <div class="table-cell order-ici-time">
                    2017-11-27开船
                  </div>
                </div>
                <div class="w100b table order-ici1-box order-ici2-box">
                  <div class="order-ici2-img fl">
                    <img src="../../../assets/sea-transport.png" alt="" class="img-wh100">
                  </div>
                  <div class="order-ici2-mid">
                    <p>客户名：长记性</p>
                    <p>航名/航次：EFDSAHGHFDH</p>
                    <p>航次：467W</p>
                  </div>
                  <div class="table-cell">
                    <div>
                      <p>周一</p>
                      <p>一截/二开</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-ic-item order-ic-item2">
                <div style="display:inline-block;text-align:left;">
                  <p v-for="(item1,index) in item.serviceId.split(',')" v-if="serviceNameArr[item1]">{{index+1}}.{{serviceNameArr[item1]['label']}}</p>
                  <!-- <p>2.拖车</p> -->
                </div>
              </div>
              <div class="order-ic-item order-ic-item4">
                <span>¥{{item.defaultRmbTotal||0}}</span>
                </br>
                <span>${{item.defaultUsdTotal||0}}</span>
              </div>
              <div class="order-ic-item order-ic-item5">
                <div>
                  <span class="see-detail" @click="gotoQuoteDetail(item.id)">查看详情</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="order-item">
            <div class="order-item-head f0">
              <div class="order-th-s order-th-s1">已导报价单</div>
              <div class="order-th-s order-th-s2">
                <span style="margin-right:10px;">海运</span>2017-08-23 8:23</div>
              <div class="order-ths-editDel">
                <a href="javascript:;" class="order-thsed-edit" @click="gotoPriceEdit">编辑</a>
                <a href="javascript:;" class="order-thsed-del">&nbsp;</a>
              </div>
            </div>
            <div class="order-item-content">
              <div class="order-ic-item order-ic-item1">
                <div class="w100b table order-ici1-box">
                  <div class="table-cell order-ici-adress clearfix">
                    <div class="fl order-ici-left">
                      <p>NINGBO</p>
                      <p>宁波</p>
                    </div>
                    <div class="fl order-ici-mid">
                      →
                    </div>
                    <div class="fl order-ici-left">
                      <p>PETERSBURG</p>
                      <p>圣彼得堡</p>
                    </div>
                  </div>
                  <div class="table-cell order-ici-time">
                    2017-11-27开船
                  </div>
                </div>
                <div class="w100b table order-ici1-box order-ici2-box">
                  <div class="order-ici2-img fl">
                    <img src="../../../assets/sea-transport.png" alt="" class="img-wh100">
                  </div>
                  <div class="order-ici2-mid">
                    <p>客户名：长记性</p>
                    <p>航名/航次：EFDSAHGHFDH</p>
                    <p>航次：467W</p>
                  </div>
                  <div class="table-cell">
                    <div>
                      <p>周一</p>
                      <p>一截/二开</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-ic-item order-ic-item2">
                <div style="display:inline-block;text-align:left;">
                  <p>1.海运订舱</p>
                  <p>2.拖车</p>
                </div>
              </div>
              <div class="order-ic-item order-ic-item4">
                $400
              </div>
              <div class="order-ic-item order-ic-item5">
                <span class="button-sure">
                          确认完成
                      </span>
                <div>
                  <span class="see-detail" style="margin-top:16px;">查看详情</span>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import header from '../components/header'
  import pannel from '@/components/Pannel'
  import {
    form,
    formItem,
    input,
    datePicker,
    pagination,
  } from 'element-ui'
  import { getQuoteList } from '@/api/quoteAPI'
  export default {
    data() {
      return {
        searchData: {
          value1: '',
          name: ''
        },
        orderStatus: {
          initialize: '初始报价单',
          unconfirmed: '已导出未确认',
          confirmed: '已导出已确认'
        },
        serviceNameArr: window.HTCONFIG.surchargeType,
        listArr: []
      }
    },
    mounted() {
      this.getQuoteList()
    },
    components: {
      'pc-header': header,
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
      'el-date-picker': datePicker,
      'el-pagination': pagination,
      pannel
    },
    methods: {
      gotoPriceEdit() {
        this.$router.push({ path: '/priceEdit' })
      },
      async getQuoteList() {
        try {
          let data = (await getQuoteList()).data
          if (data.returnCode === 0) {
            this.listArr = data.data
          }
        } catch (error) {
          throw Error(error)
        } finally {
        }
      },
      gotoQuoteDetail(id) {
        this.$router.push({ path: '/priceEdit', query: { id: id } })
      }
    },
    computed: {
    },
  }

</script>

<style lang="scss" scoped>
  .PC-myQuotation {
    .pc-content-box {
      padding-top: 40px;
      padding-bottom: 150px;
    }
    .left {
      float: left;
      width: 140px;
      font-size: 18px;
      .oc-item {
        height: 46px;
        text-align: left;
        line-height: 18px;
      }
      .oc-link {
        font-size: 18px;
        line-height: 18px;
        display: inline-block;
        color: #333;
      }
      .oc-link.router-link-active {
        color: #6297F4;
      }
    }
    .right {
      width: 1060px;
      float: left;
      .search-box {
        .content-box {
          padding: 26px 46px 32px;
          font-size: 16px;
          position: relative;
        }
        .content-box /deep/ .el-form .el-form-item__label {
          color: #666;
          font-size: 16px;
        }
        .content-box /deep/ .el-form .el-input {
          width: 160px;
        }
        .button-search {
          width: 120px;
          line-height: 38px;
          color: #fff;
          font-size: 20px;
          text-align: center;
          position: absolute;
          right: 120px;
          bottom: 35px;
          background-color: #D84C56;
          cursor: pointer;
        }
      }
      .order-list {
        margin-top: 32px;
      }
      .order-item-content {
        color: #666;
      }
      .order-item+.order-item {
        margin-top: 24px;
      }
      .order-item {
        border: 1px solid #ddd;
        .order-item-head {
          border-bottom: 1px solid #ddd;
          background-color: #f1f1f1;
          position: relative;
        }
        .order-ths-editDel {
          position: absolute;
          right: 20px;
          bottom: 8px;
          font-size: 14px;
          a {
            vertical-align: middle;
            display: inline-block;
            margin: 0 7px;
            color: #999;
          }
        }
        .order-thsed-del {
          width: 16px;
          height: 24px;
          background: url('../../../assets/icon-trash.png') no-repeat center;
          background-size: 100% 100%;
        }
        .order-th-s {
          display: inline-block;
        }
        .order-th-s1 {
          border-right: 1px solid #ddd;
          padding: 0 30px;
          font-size: 20px;
          text-align: center;
          line-height: 40px;
          background-color: #ddd;
        }
        .order-th-s2 {
          font-size: 18px;
          margin-left: 68px;
          color: #666;
        }
        .shu {
          display: inline-block;
          padding: 0 15px;
        }
        .order-ici1-box {
          padding-bottom: 10px;
          height: 38px;
        }
        .order-ic-item1 {
          padding: 20px 30px;
          width: 452px;
          box-sizing: border-box;
        }
        .order-ici-adress {
          /* width: 342px */
        }
        .order-ici-mid {
          line-height: 38px;
        }
        .order-ici-left p:first-child {
          font-size: 16px;
          line-height: 16px;
        }
        .order-ici-left p+p {
          font-size: 14px;
          margin-top: 8px;
          line-height: 14px;
        }
        .order-ici-left {
          width: 130px;
        }
        .order-ici-time {
          font-size: 14px;
        }
        .order-ici2-box {
          padding-top: 10px;
          border-top: 1px solid #ddd;
        }
        .order-ici2-img {
          width: 100px;
          background-color: #ddd;
          height: 80px;
        }
        .order-ici2-mid {
          width: 190px;
          padding-top: 14px;
          margin-left: 14px;
          float: left;
          text-align: left;
          p:nth-child(1) {
            font-size: 14px;
            line-height: 1;
          }
          p:nth-child(2) {
            font-size: 12px;
            line-height: 1;
            margin-top: 14px;
          }
          p:nth-child(3) {
            font-size: 12px;
            line-height: 1;
            margin-top: 10px;
          }
        }
        .order-ic-item:first-child {
          border-left: none;
        }
        .order-ic-item {
          text-align: center;
          display: table-cell;
          vertical-align: middle;
          border-left: 1px solid #ddd;
        }
        .order-ic-item2 {
          width: 199px;
          font-size: 14px;
          line-height: 26px;
        }
        .order-ic-item3 {
          width: 149px;
          font-size: 14px;
          line-height: 24px;
        }
        .order-ic-item4 {
          width: 199px;
          font-size: 24px;
          color: #D84C56;
        }
        .order-ic-item5 {
          width: 205px;
        }
        .button-sure {
          box-sizing: border-box;
          line-height: 38px;
          display: inline-block;
          padding: 0 20px;
          border: 1px solid #6297F4;
          color: #6297F4;
          font-size: 18px;
          text-align: center;
        }
        .see-detail {
          cursor: pointer;
          color: #6297F4;
          font-size: 18px;
          display: inline-block;
          line-height: 18px;
        }
        .order-item-bottom {
          border-top: 1px solid #ddd;
        }
      }
      .ordertb-s {
        padding: 10px 20px;
        font-size: 16px;
        display: inline-block;
      }
    }
  }
</style>