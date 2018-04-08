<template>
  <div class="order-trailer" id="order-trailer">
    <div class="main-box">
      <div class="order-box">
        <div class="title">
          订单状态
        </div>
        <order-steps v-model="currentStattus">
          <order-step v-for="item in orderStepTextArr" :key="item.text">
            <div>
              <p>{{item.text}}</p>
              <p>{{item.time}}</p>
            </div>
          </order-step>
        </order-steps>
      </div>
    </div>
    <div class="full-line">
    </div>
    <div class="main-box">
      <div class="start-end">
        <div class="fpb-left-top">
          <div class="h1">NINGBO 宁波ST.PETERSBURG圣彼得堡
          </div>
          <div>
            <span class="fpb-ltb-span">承运人：张小二</span>
            <span class="fpb-ltb-span">中转方式：中转BREMRHAVEN</span>
          </div>
        </div>
      </div>
      <div class="box-num">
        <div class="box-num-title">
          箱量箱数
        </div>
        <div class="box-num-table">
          <div class="box-num-head clearfix">
            <div class="column column1">
              尺寸
            </div>
            <div class="column column2">
              箱数
            </div>
            <div class="table-cell column column3">
              数量
            </div>
          </div>
          <div class="clearfix box-num-body">
            <div class="column column1">
              20
            </div>
            <div class="column column2">
              GP
            </div>
            <div class="table-cell column column3">
              1
            </div>
          </div>
        </div>
      </div>
      <div class="box-num file-info">
        <div class="box-num-title">
          相关文件
        </div>
        <div class="choose-file mar-t20">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3">
            <span class="choose-file-button">选择文件</span>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </div>
        <div class="file-info-table">
          <div class="box-num-head clearfix">
            <div class="column column1">
              尺寸
            </div>
            <div class="column column2">
              箱数
            </div>
            <div class="table-cell column column3">
              数量
            </div>
          </div>
          <div class="clearfix box-num-body">
            <div class="column column1">
              20
            </div>
            <div class="column column2">
              GP
            </div>
            <div class="table-cell column column3">
              1
            </div>
          </div>
        </div>
      </div>
      <div class="box-num contact-info">
        <div class="box-num-title">
          联系信息
        </div>
        <div class="box-num-table">
          <div class="table w100b contact-info-nei">
            <div class="table-cell left-sight">
              <div class="dl">
                <span class="dt">公司名称：</span>
                <span class="dd"></span>
              </div>
              <div class="dl">
                <span class="dt">联系电话：</span>
                <span class="dd"></span>
              </div>
              <div class="dl">
                <span class="dt">QQ：</span>
                <span class="dd"></span>
              </div>
            </div>
            <div class="table-cell">
              <div class="dl">
                <span class="dt">联系人：</span>
                <span class="dd">张小二</span>
              </div>
              <div class="dl">
                <span class="dt">手机号码：</span>
                <span class="dd">1331313131</span>
              </div>
              <div class="dl">
                <span class="dt">贸易订单号：</span>
                <span class="dd"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-num charge-info">
        <div class="box-num-title">
          费用信息
        </div>
        <div class="box-num-table">
          <div>
            <div class="dl">
              <span class="dt">拖车费(20'GP):</span>
              <span class="dd">
                <span class="span1">CNY 1100</span>
              <span class="span2">(100*1车)</span>
              </span>
            </div>
          </div>
          <div class="all-price-box clearfix">
            <div class="fl left-text">
              总价
            </div>
            <div class="right-proce fl">
              <div class="price-usd">
                <span class="price-usd-text">USD</span>
                <span class="price-usd-num">666</span>
              </div>
              <div class="price-usd mar-t20">
                <span class="price-usd-text">CNY</span>
                <span class="price-usd-num">6788</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import orderSteps from '@/components/OrderSteps/steps'
  import orderStep from '@/components/OrderSteps/step'
  import { upload } from 'element-ui'
  export default {
    data() {
      return {
        orderStepTextArr: [
          {
            text: '委托代理',
            time: '2017-11-27 17:52'
          }, {
            text: '接收委托',
            time: '2017-11-27 17:52'
          }, {
            text: '已打单',
            time: '2017-11-27 17:52'
          }, {
            text: '提箱成功',
            time: '2017-11-27 17:52'
          }, {
            text: '出发装箱',
            time: '2017-11-27 17:52'
          }, {
            text: '已到场',
            time: '2017-11-27 17:52'
          }, {
            text: '装箱完成',
            time: '2017-11-27 17:52'
          }, {
            text: '已过港',
            time: '2017-11-27 17:52'
          }, {
            text: '订单完成',
            time: '2017-11-27 17:52'
          },
        ],
        currentStattus: 1
      }
    },
    components: {
      'el-upload': upload,
      orderStep,
      orderSteps
    },
    methods: {

    },
    mounted() {
    },
    computed: {}
  }

</script>
<style lang="scss" scoped>
  #order-trailer {
    .order-box {
      .title {
        font-size: 24px;
        padding: 20px 0 14px;
        line-height: 24px;
      }
    }
    .full-line {
      width: 100%;
      height: 27px;
      margin: 20px auto 30px;
      background: url('../../../assets/line-bg.png') repeat-x center;
    }
    .start-end {
      padding: 35px 0;
      font-size: 20px;
      line-height: 20px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      .fpb-left-top:before {
        content: '';
        display: block;
        position: absolute;
        height: 20px;
        left: -20px;
        top: 0;
        width: 2px;
        background-color: #6297F4;
      }
      .fpb-left-top {
        position: relative;
        box-sizing: border-box;
        margin-left: 34px;
      }
      .fpb-ltb-span {
        font-size: 16px;
        margin-top: 16px;
        display: inline-block;
      }
    }
    .box-num {
      margin-top: 68px;
      .box-num-table {
        border: 1px solid #ddd;
        box-sizing: border-box;
        margin-top: 20px;
      }
      .box-num-head {
        width: 100%;
        background-color: #F1F1F1;
        text-align: center;
        border-bottom: 1px solid #ddd;
      }
      .box-num-head.box-num-body {
        background-color: #fff;
      }
      .box-num-title {
        padding-left: 34px;
        font-size: 20px;
        line-height: 20px;
      }
      .column {
        line-height: 40px;
        font-size: 16px;
        text-align: center;
      }
      .column1 {
        width: 150px;
        float: left;
      }
      .column2 {
        width: 160px;
        float: left;
      }
      .column3 {
        width: 160px;
        float: left;
      }
    }
    .file-info {
      .file-info-table {
        border: 1px solid #ddd;
      }
      .choose-file {
        border: 1px solid #ddd;
        border-bottom: none;
        padding: 40px 60px;
        box-sizing: border-box;
      }
      .choose-file-button {
        line-height: 40px;
        padding: 0 28px;
        color: #fff;
        background-color: #6297F4;
        border-radius: 8px;
        font-size: 16px;
        display: inline-block;
      }
    }
    .contact-info {
      padding: 30px 0;
      .contact-info-nei {
        padding: 30px 0;
      }
      .left-sight {
        border-right: 2px solid #ddd;
      }
      .dl {
        font-size: 16px;
        line-height: 16px;
      }
      .dl+.dl {
        margin-top: 24px;
      }
      .dt {
        width: 160px;
        display: inline-block;
        text-align: right;
      }
    }
    .charge-info {
      padding-bottom: 200px;
      .box-num-table {
        padding: 32px 0 52px;
      }
      .dt,
      .dd,
      .span1,
      .span2 {
        display: inline-block;
      }
      .dl {
        font-size: 16px;
        line-height: 16px;
      }
      .dl+.dl {
        margin-top: 24px;
      }
      .dt {
        width: 200px;
        text-align: right;
      }
      .dd .span1 {
        width: 160px;
      }
      .all-price-box {
        width: 440px;
        height: 120px;
        box-sizing: border-box;
        padding: 26px 0;
        margin: 18px auto 0;
        background-color: rgba(207, 223, 251, 0.6);
        border: 2px solid rgba(98, 151, 244, 0.60);
      }
      .left-text {
        width: 120px;
        line-height: 28px;
        font-size: 28px;
        height: 100%;
        text-align: right;
      }
      .price-usd {
        font-size: 24px;
      }
      .price-usd-text {
        width: 120px;
        text-align: center;
        line-height: 24px;
        display: inline-block;
      }
      .price-usd-num {
        line-height: 24px;
        display: inline-block;
      }
    }
  }
</style>