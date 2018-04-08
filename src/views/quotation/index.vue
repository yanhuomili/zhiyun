<template>
  <div id="quotation">
    <div class="main-box">
      <div id="toPdfBox" style="background-color:#fff">
        <div class="title">
          广州智运全球国际物流有限公司
        </div>
        <div class="text-center">
          <div class="desc">
            最值得信赖的国际物流企业
          </div>
        </div>
        <div class="toFrom">
          <p class="to">
            <span>To:</span>张三</p>
          <p class="from">
            <span>Fm:</span>李四</p>
        </div>
        <div class="w100b">
          <div class="ship-line-info">
            <div class="h3" v-if="quoteVO.serviceId.indexOf(0)>-1">
              <span>{{quoteVO.startPortName}}→{{quoteVO.endPortName}}</span>
            </div>
            <div>
              <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(0)>-1">
                <span>承运人：张小二</span>
                <span>中转方式：中转BREMRHAVEN</span>
                <span>预计开船日期：2017-11-29</span>
              </p>
              <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(0)>-1">
                <span>承航名/航次：EDITHMAERSK/748W</span>
                <span>航线：*AE7</span>
              </p>
              <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(1)>-1">
                <span>拖柜地点：{{quoteVO.trailerQuoteVOList[0].address}}</span>
                <!-- <i>上海市</i>
                <i>民兴趣</i>
                <i>上市路平安大道七号</i> -->
              </p>
              <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(2)>-1">
                <span>报关地：{{quoteVO.customsQuoteVOList[0].declarePlace}}</span>
                <span>名品数量：{{quoteVO.customsQuoteVOList[0].productQuantity}}</span>
              </p>
              <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(3)>-1">
                <span>仓储港口：{{quoteVO.storageQuoteVOList[0].startPort}}</span>
              </p>
              <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(4)>-1">
                <span>证书类型：{{quoteVO.certificateQuoteVOList[0].certificateQuoteDetailVOList[0].name}}</span>
              </p>
              <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(5)>-1">
                <span>保险发票全额：{{quoteVO.insuranceQuoteVOList[0].insuranceQuoteDetailVOList[0].invoiceAmount}}</span>
              </p>
            </div>
          </div>
          <div class="fcl-price-detail">
            <div class="h3">
              <span>费用包含</span>
            </div>
            <div class="edit-box">
              <div class="edit-input-box el-form">
                <!-- 海运 -->
                <template v-if="quoteVO.shippingQuoteVOList&&quoteVO.shippingQuoteVOList[0]&&quoteVO.shippingQuoteVOList[0].shippingQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.shippingQuoteVOList[0].shippingQuoteDetailVOList">
                    <dt class="edit-box-dt fl">海运费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">USD {{item.quantity*item.actualPrice}}</div>
                      <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                    </dd>
                  </dl>
                </template>
                <!-- 海运附加费 -->
                <dl class="edit-box-dl clearfix" v-for="item in quoteVO.surchargeQuoteDetailVOList">
                  <dt class="edit-box-dt fl">{{formatTitle(item.name)}}：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">{{item.currency}} {{item.quantity*item.actualPrice}}</div>
                    <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} {{item.unit}})</div>
                  </dd>
                </dl>
                <!-- 拖车 -->
                <template v-if="quoteVO.trailerQuoteVOList&&quoteVO.trailerQuoteVOList[0]&&quoteVO.trailerQuoteVOList[0].trailerQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.trailerQuoteVOList[0].trailerQuoteDetailVOList">
                    <dt class="edit-box-dt fl">拖车费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB {{item.quantity*item.actualPrice}}</div>
                      <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                    </dd>
                  </dl>
                </template>
                <!-- 报关 -->
                <template v-if="quoteVO.customsQuoteVOList&&quoteVO.customsQuoteVOList[0]&&quoteVO.customsQuoteVOList[0].customsQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.customsQuoteVOList[0].customsQuoteDetailVOList">
                    <dt class="edit-box-dt fl">{{formatTitle(item.name)}}：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB {{item.quantity*item.actualPrice}}</div>
                      <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                    </dd>
                  </dl>
                </template>
                <!-- 仓储 -->
                <template v-if="quoteVO.storageQuoteVOList&&quoteVO.storageQuoteVOList[0]&&quoteVO.storageQuoteVOList[0].storageQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.storageQuoteVOList[0].storageQuoteDetailVOList">
                    <dt class="edit-box-dt fl">仓储费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB {{item.quantity*item.actualPrice}}</div>
                      <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                    </dd>
                  </dl>
                </template>
                <!-- 证书 -->
                <template v-if="quoteVO.certificateQuoteVOList&&quoteVO.certificateQuoteVOList[0]&&quoteVO.certificateQuoteVOList[0].certificateQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.certificateQuoteVOList[0].certificateQuoteDetailVOList">
                    <dt class="edit-box-dt fl">证书费({{item.name}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB {{item.actualPrice}}</div>
                      <div class="edit-bd-hh fl">({{item.actualPrice}} 票)</div>
                    </dd>
                  </dl>
                </template>
                <template v-if="quoteVO.insuranceQuoteVOList&&quoteVO.insuranceQuoteVOList[0]&&quoteVO.insuranceQuoteVOList[0].insuranceQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.insuranceQuoteVOList[0].insuranceQuoteDetailVOList">
                    <dt class="edit-box-dt fl">保险费：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB {{item.amount}}</div>
                      <div class="edit-bd-hh fl">({{item.amount}} 票)</div>
                    </dd>
                  </dl>
                </template>
                <!-- 保险 -->
                <!-- <dl class="edit-box-dl clearfix">
                  <dt class="edit-box-dt fl">CIF订舱服务费：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">待定</div>
                  </dd>
                </dl>
                <dl class="edit-box-dl clearfix">
                  <dt class="edit-box-dt fl">海运费(20'GP)：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">USD 123 </div>
                    <div class="edit-bd-hh fl">(530 * 1 箱)</div>
                  </dd>
                </dl> -->
              </div>
              <div class="edit-box-count clearfix">
                <div class="fl left">
                  费用合计
                </div>
                <div class="right">
                  <div class="pp">
                    <span>USD</span>
                    <span>{{quoteVO.actualUsdTotal||quoteVO.defaultUsdTotal}}</span>
                  </div>
                  <div class="pp">
                    <span>RMB</span>
                    <span>{{quoteVO.actualRmbTotal||quoteVO.defaultRmbTotal}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ship-line-info">
            <div class="h3">
              <span>备注</span>
            </div>
            <div class="carefull">
              <table class="w100b" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr class="pad-b20" v-if="quoteVO.shippingQuoteVOList&&quoteVO.shippingQuoteVOList[0]">
                    <td class="td-left">海运备注</td>
                    <td>
                      <p class="others" v-html="quoteVO.shippingQuoteVOList[0].remark"></p>
                    </td>
                  </tr>
                  <tr v-if="quoteVO.trailerQuoteVOList&&quoteVO.trailerQuoteVOList[0]">
                    <td class="td-left">拖车备注</td>
                    <td>
                      <p class="others" v-html="quoteVO.trailerQuoteVOList[0].remark"></p>
                    </td>
                  </tr>
                  <tr v-if="quoteVO.customsQuoteVOList&&quoteVO.customsQuoteVOList[0]">
                    <td class="td-left">报关备注</td>
                    <td>
                      <p class="others" v-html="quoteVO.customsQuoteVOList[0].remark"></p>
                    </td>
                  </tr>
                  <!-- <tr class="pad-b20">
                    <td class="td-left">拖车备注</td>
                    <td>
                      <p class="others">
                        1，运价参照GB1598调整方案。
                        <br>2，预提箱费参考标准：（特种箱，缺柜，以及春节除外）2017.12.1号更新
                        <br>&nbsp;&nbsp;&nbsp;&nbsp; MSK：300元/柜；CMA：300元/柜；HMM：250元/柜；MSC：250元/柜；ZIM：250元/柜；
                        <br>&nbsp;&nbsp;&nbsp;&nbsp; 其余未列明船公司 200元/柜，当日加急预提300元/柜，不分船公司。
                        <br>3，洋山落箱费含二次进港20尺500元/柜，40尺600元/柜，五一，十一，春节实报实销；
                        <br>4，洋山提箱费：300元/柜。
                        <br>5，其它未列及费用可电讯4001556956。
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-left">海运备注</td>
                    <td>
                      <p class="others">
                        1，运价参照GB1598调整方案。
                        <br>2，预提箱费参考标准：（特种箱，缺柜，以及春节除外）2017.12.1号更新
                        <br>&nbsp;&nbsp;&nbsp;&nbsp; MSK：300元/柜；CMA：300元/柜；HMM：250元/柜；MSC：250元/柜；ZIM：250元/柜；
                        <br>&nbsp;&nbsp;&nbsp;&nbsp; 其余未列明船公司 200元/柜，当日加急预提300元/柜，不分船公司。
                        <br>3，洋山落箱费含二次进港20尺500元/柜，40尺600元/柜，五一，十一，春节实报实销；
                        <br>4，洋山提箱费：300元/柜。
                        <br>5，其它未列及费用可电讯4001556956。
                      </p>
                    </td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
          <div class="clearfix">
            <div class="user-infomation">
              <p>广州智运全球国际物流有限公司</p>
              <p>
                <span>姓名：</span>李志飞</p>
              <p>
                <span>电话号码：</span>15600000000</p>
              <p>
                <span>微信：</span>15600000000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="f0 button-box">
        <span class="ht_btn_default" @click="gotoExport">导出报价单>></span>
        <span class="ht_btn_default" @click="delegateNow">立即委托</span>
        <span class="ht_btn_default" @click="editAgain">再次编辑</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    input,
    select,
    option,
    button,
    checkbox,
    tag
  } from 'element-ui'
  import jsPDF from 'jspdf'
  import { getQuoteById } from '@/api/quoteAPI'
  import domtoimage from 'dom-to-image'
  export default {
    data() {
      return {
        quoteVO: { serviceId: '' }
      }
    },
    mounted() {
      if (this.$route.params.quoteVO) {
        this.quoteVO = this.$route.params.quoteVO
      } else {
        this.getQuoteById(this.$route.query.id)
      }
    },
    computed: {
    },
    components: {
      'el-input': input,
      'el-button': button,
      'el-select': select,
      'el-option': option,
      'el-checkbox': checkbox,
      'el-tag': tag
    },
    methods: {
      createCanvas() {
        domtoimage.toPng(document.getElementById('toPdfBox'))
          .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img)
          })
      },
      async getQuoteById(id) {
        try {
          let data = (await getQuoteById({ params: { id: id } })).data
          if (data.returnCode === 0) {
            this.quoteVO = data.data
          }
        } catch (error) {
          throw Error(error)
        }
      },
      gotoExport() {
        let vm = this
        let el = document.getElementById('toPdfBox')
        domtoimage.toJpeg(document.getElementById('toPdfBox'))
          .then(function (dataUrl) {
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img)
            var pdf = new jsPDF('', 'pt', 'a4')
            //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
            pdf.addImage(dataUrl, 'PNG', 0, 0, 595.28, 595.28 / el.offsetWidth * el.offsetHeight)
            pdf.save('报价单.pdf')
            // vm.$router.push({ path: '/fcl_price_export' })
          })
      },
      delegateNow() {
        this.$router.push({ path: '/importBooking', query: { id: this.$route.query.id } })
      },
      formatTitle(title) {
        let left = title.slice(0, title.lastIndexOf('_'))
        let right = ''
        if (title.lastIndexOf('_') > -1) {
          right = title.slice(title.lastIndexOf('_') + 1, title.length)
          right = '(' + right.substr(0, 2) + '`' + right.substr(2, 4) + ')'
        } else {
          left = title
        }
        return left + right
      },
      editAgain() {
        this.$router.push({ path: '/priceEdit', query: { id: this.$route.query.id } })
      }
    }
  }

</script>

<style lang="scss" scoped>
  #quotation {
    #toPdfBox {
      padding: 30px 50px 0;
    }
    .title {
      text-align: center;
      color: blue;
      font-size: 24px;
      line-height: 2.0;
    }
    .desc:before {
      content: '';
      display: block;
      position: absolute;
      width: 50px;
      height: 1px;
      top: 50%;
      left: -50px;
      background-color: #333;
      transform: translateY(1px);
    }
    .desc {
      padding-left: 6px;
      display: inline-block;
      position: relative;
      font-size: 18px;
      text-align: center;
      margin-left: 320px;
      line-height: 1.6;
    }
    .toFrom {
      line-height: 1.6;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: -10px;
      span {
        display: inline-block;
        padding: 0 20px;
        width: 30px;
        text-align: left;
      }
    }
    /* .carefull {
      color: blue;
      padding: 20px 0;
      font-size: 14px;
      line-height: 1.6;
    } */
    .ship-li-p {
      font-size: 14px;
      margin-top: 12px;
      line-height: 14px;
      color: #666;
      span {
        margin-left: 100px;
        display: inline-block;
      }
      i {
        display: inline-block;
        font-style: normal;
        margin-left: 22px;
      }
    }
    .h3 {
      position: relative;
      font-size: 20px;
      line-height: 20px;
    }
    .h3:before {
      content: '';
      display: block;
      width: 2px;
      background-color: #6297F4;
      height: 100%;
      top: 0;
      left: -16px;
      position: absolute;
    }
    /* .to-someone_span {
      display: inline-block;
      line-height: 38px;
      font-size: 28px;
      padding-right: 16px;
      vertical-align: middle;
    } */
    .ship-line-info {
      margin-top: 28px;
      padding: 30px 50px;
      border: 1px solid #ddd;
      .ship-li-p span:first-child {
        margin-left: 0;
      }
    }
    .fcl-price-detail {
      background: #F1F1F1;
      margin-top: 28px;
      padding: 30px 50px 20px;
      border: 1px solid #ddd;
      .edit-bd-input {
        width: 90px;
        text-align: left;
      }
    }
    .edit-box {
      width: 520px;
      margin-left: 60px;
      margin-top: 10px;
      /* margin: 20px auto; */
    }
    .edit-input-box {
      border-bottom: 1px solid #ddd;
      font-size: 14px;
    }
    .edit-box-dl {
      margin: 0;
      color: #666;
      margin-bottom: 8px;
    }
    .edit-box-dt {
      width: 180px;
      text-align: right;
    }
    .edit-box-dd {
      margin-left: 5px;
    }
    .edit-bd-unit {
      width: 104px;
      padding-right: 16px;
      text-align: left;
      color: #D84C56;
    }
    .edit-box-count {
      width: 380px;
      /* height: 120px; */
      margin: 10px 50px 0;
      box-sizing: border-box;
      padding: 10px 30px;
      background-color: #fff;
      .left {
        width: 136px;
        font-size: 20px;
      }
      .right {
        float: left;
        color: #D84C56;
        font-size: 16px;
        line-height: 16px;
        .pp+.pp {
          margin-top: 18px;
        }
        span {
          display: inline-block;
        }
        .pp span:first-child {
          display: inline-block;
          width: 88px;
        }
      }
    }
    .carefull {
      font-size: 12px;
      line-height: 12px;
      .others {
        line-height: 1.4;
      }

      .td-left {
        width: 100px;
        text-align: center;
      }
      td {
        border-bottom: 1px solid #ddd;
        padding: 20px 0;
      }
      tr:last-child td {
        padding-bottom: 0;
        border: none;
      }
    }
    /* .table {
      border-collapse: collapse;
      font-size: 18px;
      width: 100%;
      .logo-box {
        margin: 0 auto;
        width: 100px;
        height: 77px;
        background: url('../../assets/logo-old.png') no-repeat center;
      }
      td {
        border: 1px solid #000;
        padding: 6px;
      }
      .td-value-all {
        padding: 0 20px;
        font-size: 16px;
      }
      .td-value {
        padding: 10px 20px;
        font-size: 16px;
      }
      .xiangshu span {
        display: inline-block;
        width: 100px;
        line-height: 1.6;
        font-size: 16px;
      }
      .fpb-right-top-mid {
        padding: 10px 0px;
      }
      .fpb-r-count {
        border-top: 1px solid #ddd;
        padding: 10px 0 0;
        .fpb-r-count-left {
          width: 140px!important;
          font-size: 24px;
          text-align: center;
        }
        .fpb-rdl-span1,
        .fpb-rdl-span2 {
          font-size: 20px;
        }
      }
      .fpb-r-dl {
        margin: 0px 0 10px;
      }
      .fpb-r-dl dt {
        width: 150px;
        text-align: right;
        font-size: 14px;
      }
      .fpb-r-dl dd {
        width: 160px;
        font-size: 0;
        text-align: left;
        margin-left: 0;
      }
      .fpb-rdl-span1 {
        display: inline-block;
        width: 80px;
        color: #D84C56;
        font-size: 14px;
      }
      .fpb-r-count .fpb-rdl-span2 {
        color: #D84C56;
      }
      .fpb-rdl-span2 {
        display: inline-block;
        font-size: 14px;
      }
    } */
    .user-infomation {
      line-height: 1.6;
      font-size: 18px;
      float: right;
      padding: 20px 0;
      span {
        display: inline-block;
        width: 100px;
      }
    }
    .button-box {
      text-align: center;
      span {
        margin: 30px;
        cursor: pointer;
        display: inline-block;
        padding: 0 30px;
        line-height: 40px;
        color: #fff;
        font-size: 18px;
        background-color: #6297F4;
      }
    }
  }
</style>