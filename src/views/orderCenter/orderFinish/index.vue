<template>
  <div id="orderAll">
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
                <el-form-item label="订单号:">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
                <el-form-item label="提单号:">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
                <el-form-item label="起运港:">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
              </div>
              <div class="search-item search-item-dif">
                <el-form-item label="目的港:">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
                <el-form-item label="贸易订单号:">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
                <el-form-item label="订单类型:">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
              </div>
              <el-form-item label="其他:" style="margin-bottom:0;">
                <el-input v-model="searchData.name" placeholder="请选择柜型">
                </el-input>
              </el-form-item>
            </el-form>
            <div class="button-search">搜索</div>
          </div>
        </div>
      </pannel>
    </div>
    <div>
      <div class="order-item">
        <div class="order-item-head f0">
          <div class="order-th-s order-th-s1">进行中</div>
          <div class="order-th-s order-th-s2">
            <span>123123123</span><span class="shu">|</span><span style="margin-right:10px;">海运</span>2017-08-23 8:23</div>
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
            <div>
              <p>1.海运订舱</p>
              <p>2.拖车</p>
            </div>
          </div>
          <div class="order-ic-item order-ic-item3">
            <p>货车运输中</p>
            <p>订单追踪</p>
            <p>订单详情</p>
          </div>
          <div class="order-ic-item order-ic-item4">
            $400
          </div>
          <div class="order-ic-item order-ic-item5">
            <span class="button-sure">
                确认完成
            </span>
          </div>
        </div>
        <!-- <div class="order-item-bottom">
          <div class="ordertb-s ordertb-s1">承运人：张小二</div>
          <div class="ordertb-s">航名/航次:EDITHGMBKDNJ/748W</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import pannel from '@/components/Pannel'
  import {
    form,
    formItem,
    input,
    datePicker,
    pagination,
  } from 'element-ui'
  export default {
    data() {
      return {
        searchData: {
          value1: '',
          name: ''
        }
      }
    },
    mounted() {
    },
    computed: {
    },
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
      'el-date-picker': datePicker,
      'el-pagination': pagination,
      pannel
    },
    watch: {
    },
    methods: {

    }
  }

</script>

<style lang="scss" scoped>
  #orderAll {
    .search-box {
      .content-box {
        padding: 43px 46px;
        font-size: 16px;
        position: relative;
      }
      .content-box /deep/ .el-form .el-form-item__label {
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
    .order-item {
      border: 1px solid #ddd;
      margin-top: 32px;
      .order-item-head {
        border-bottom: 1px solid #ddd;
        background-color: #f1f1f1;
      }
      .order-th-s {
        display: inline-block;
      }
      .order-th-s1 {
        border-right: 1px solid #ddd;
        width: 120px;
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        background-color: #ddd;
      }
      .order-th-s2 {
        font-size: 18px;
        margin-left: 40px;
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
        width: 149px;
        font-size: 14px;
        line-height: 26px;
      }
      .order-ic-item3 {
        width: 149px;
        font-size: 14px;
        line-height: 24px;
      }
      .order-ic-item4 {
        width: 149px;
        font-size: 24px;
        color: #D84C56;
      }
      .order-ic-item5 {
        width: 155px;
      }
      .button-sure {
        box-sizing: border-box;
        line-height: 34px;
        display: inline-block;
        width: 90px;
        border: 1px solid #6297F4;
        color: #6297F4;
        font-size: 16px;
        text-align: center;
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
</style>