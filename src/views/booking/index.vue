<template>
  <div id="booking">
    <div class="main-box">
      <div id="toPdfBox" style="background-color:#fff">
        <div class="title">
          出口货物托运单
        </div>
        <div class="w100b">
          <table border="1" class="table">
            <tbody>
              <tr>
                <td colspan="2">
                  <span>发货人 Shipper</span>
                  <div class="td-value">{{dataObj.shipper}}</div>
                </td>
                <td colspan="2" rowspan="4" style="width:50%">
                  <div style="text-align:center;padding:30px 0;">
                    <div class="logo-box">
                    </div>
                    <div style="font-size:20px;margin-top:30px;letter-spacing:15px;font-weight:bold">广州恒通新供应链管理有限公司</div>
                    <div style="font-size:16px;margin-top:10px;">ADD:广州市天河区燕岭路燕侨大厦4015-4018</div>
                    <div style="margin-top:50px;font-size:16px;line-height:1.4">
                      <div>Mobile phone:13660586141</div>
                      <div>Contact person:Lisa</div>
                      <div> E-mail:zhaoyanflower@foxmail.com</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <span>收货人 Consignee</span>
                  <div class="td-value">{{dataObj.consignee}}</div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <span>通知人 Notify Party</span>
                  <div class="td-value">{{dataObj.notifier}}</div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <span>船名/航次 Vessel/Voy</span>
                  <div class="td-value">{{dataObj.vessel}}/{{dataObj.voyage}}</div>
                </td>
              </tr>
              <tr>
                <td>装货港 Port of Loading</td>
                <td>目的港 Port of Discharge</td>
                <td colspan="2">箱量 Volume</td>
              </tr>
              <tr>
                <td class="td-value-all">{{dataObj.loadingPort}}</td>
                <td class="td-value-all">{{dataObj.destinationPort}}</td>
                <td class="td-value-all" colspan="2">
                  <div class="xiangshu" style="padding:6px 80px;">
                    <span v-for="item in dataObj.shippingQuoteDetailVOList">{{item.containerTypeName.substr(0,2)+item.containerTypeName.substr(2,4)}}(*{{item.quantity}})</span>
                    <!-- <div>
                      <span>20GP()</span>
                      <span>40GP()</span>
                      <span>40`HQ()</span>
                    </div>
                    <div>
                      <span>45HQ()</span>
                      <span>CFS()</span>
                      <span>其他()</span>
                    </div> -->
                  </div>
                </td>
              </tr>
              <tr>
                <td>Marks and Numbers</td>
                <td>件数 Packages</td>
                <td>货品名称 Description Of Goods</td>
                <td style="padding:0 6px;">
                  <span style="display:inline-block;width:45%;padding:6px 0;height:100%;border-right:1px solid #333;">毛重(KGS)</span>
                  <span style="display:inline-block;width:45%;padding:6px 0;height:100%">体积(CBM)</span>
                </td>
              </tr>
              <tr class="td-value">
                <td>6666</td>
                <td>1</td>
                <td>{{dataObj.articleName}}</td>
                <td style="padding:0 6px;">
                  <span style="display:inline-block;width:45%;padding:6px 0;height:100%;border-right:1px solid #333;">{{dataObj.weight}}</span>
                  <span style="display:inline-block;width:45%;padding:6px 0;height:100%">{{dataObj.size}}</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="fl">
                    <p>运费结算</p>
                    <p>Freight Payment Terms</p>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="dataObj.paymentType" label="prePaid">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>预付金额</p>
                        <p>Prepaid</p>
                      </div>
                    </div>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="dataObj.paymentType" label="collect">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>到付金额</p>
                        <p>Collect</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td colspan="2" rowspan="2">
                  <div class="fl">
                    <p>提单</p>
                    <p>类型</p>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="dataObj.billLadingType" label="masterBill">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>船东单</p>
                        <p>Master B/L</p>
                      </div>
                    </div>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="dataObj.billLadingType" label="surrenderedBill">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>电放单</p>
                        <p>Telex Release</p>
                      </div>
                    </div>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="dataObj.billLadingType" label="swb">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>CORWIN单</p>
                        <p>House B/L</p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="fl">
                    <p>发票类型</p>
                    <p>Invoice Type</p>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="dataObj.invoiceType" label="special">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>货运税票</p>
                        <p>Taxable Invoice</p>
                      </div>
                    </div>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="dataObj.invoiceType" label="general">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>普通发票</p>
                        <p>DebitNote</p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2" :trailerWayAUTO="(dataObj.serviceId.indexOf('1')>-1)?trailerWay=2:trailerWay=1">
                  <div class="fl">
                    <p>拖车方式</p>
                    <p>Trucking</p>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="trailerWay" :label="1">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>自行拖车</p>
                        <p>Self-Trucking</p>
                      </div>
                    </div>
                  </div>
                  <div class="fl mar-l20">
                    <div class="table">
                      <div class="table-cell">
                        <el-radio disabled v-model="trailerWay" :label="2">&nbsp;</el-radio>
                      </div>
                      <div class="table-cell">
                        <p>委托拖车</p>
                        <p>Assigned</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td colspan="2">
                  <div class="table">
                    <div class="table-cell">
                      <p>联系人 /电话 /传真</p>
                      <p>Contact /Tel /Fax</p>
                    </div>
                    <div class="table-cell">
                      <p>{{dataObj.trailerContactPhone}}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="table">
                    <div class="table-cell">
                      <p>装货地点</p>
                      <p>Place Of Receipt</p>
                    </div>
                    <div class="table-cell">
                      <p>1231231231</p>
                    </div>
                  </div>
                </td>
                <td colspan="2">
                  <div class="table">
                    <div class="table-cell">
                      <p>装货时间</p>
                      <p>Appointed Date</p>
                    </div>
                    <div class="table-cell">
                      <p>{{(new Date(dataObj.trailerExpectedTime)).Format('yyyy-MM-dd hh:mm')}}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="4" :customsWayAUTO="(dataObj.serviceId.indexOf('2')>-1)?customsWay=2:customsWay=1">
                  <div class="table">
                    <div class="table-cell" style="width:180px">
                      <p>报关方式</p>
                      <p>Customs Clearance</p>
                    </div>
                    <div class="table-cell">
                      <div class="fl mar-l20 mar-t10">
                        <div class="table">
                          <div class="table-cell">
                            <el-radio disabled v-model="customsWay" :label="1">&nbsp;</el-radio>
                          </div>
                          <div class="table-cell">
                            <p>自行报关</p>
                            <p> Self-Customs Clearnce</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl mar-l20 mar-t10">
                        <div class="table">
                          <div class="table-cell">
                            <el-radio disabled v-model="customsWay" :label="2">&nbsp;</el-radio>
                          </div>
                          <div class="table-cell">
                            <p>委托报关</p>
                            <p>Assigned</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl mar-l20 mar-t10">
                        <div class="table">
                          <div class="table-cell">
                            <el-radio disabled v-model="customsWay" :label="3">&nbsp;</el-radio>
                          </div>
                          <div class="table-cell">
                            <p>一般贸易</p>
                            <p>General Trading</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl mar-l20 mar-t10">
                        <div class="table">
                          <div class="table-cell">
                            <el-radio disabled v-model="customsWay" :label="4">&nbsp;</el-radio>
                          </div>
                          <div class="table-cell">
                            <p>转关</p>
                            <p>Customs Transit</p>
                          </div>
                        </div>
                      </div>
                      <div class="fl mar-l20 mar-t10">
                        <div class="table">
                          <div class="table-cell">
                            <el-radio disabled v-model="customsWay" :label="5">&nbsp;</el-radio>
                          </div>
                          <div class="table-cell">
                            <p>手册报关</p>
                            <p>Customs Hand-book</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p>特别要求</p>
                  <p>Special Requirement</p>
                  <div class="Special-Requirement" :gg="dataObj.remark?specialRequirement=1:specialRequirement=2">
                    <el-radio disabled v-model="specialRequirement" :label="1">有</el-radio>
                    <el-radio disabled v-model="specialRequirement" :label="2">无</el-radio>
                    <div style="padding:10px;font-size:14px;" v-if="dataObj.remark">{{dataObj.remark}}</div>
                  </div>
                  <div style="color:red">
                    <p>首次订舱请传营业执照副本,谢谢合作</p>
                    <p>订舱请盖圆形公章/财务专用章或业务专用章.</p>
                  </div>
                </td>
                <td colspan="2">
                  <p>托运人签字盖章</p>
                  <p>Shipper (Seal)</p>
                  <div style="color:red">
                    <p>托运人声明:我司托运的货物名称及重量为真实的,如因虚报</p>
                    <p>或瞒报产生的一切连带责任及后果将由我公司全部承担！</p>
                  </div>
                  <p>托运日期</p>
                  <p>Date</p>
                </td>
              </tr>
              <!-- <tr>
                <td colspan="4">费用包含</td>
              </tr>
              <tr>
                <td colspan="4" class="td-value">
                  <div class="baojia-box" style="display:inline-block">
                    <div class="fpb-right-top-mid">
                      <dl class="fpb-r-dl clearfix">
                        <dt class="fl">CIF订舱服务费：</dt>
                        <dd class="fl">待定</dd>
                      </dl>
                      <dl class="fpb-r-dl clearfix">
                        <dt class="fl">电子箱单费(20'GP)：</dt>
                        <dd class="fl">
                          <span class="fpb-rdl-span1">USD 530</span>
                          <span class="fpb-rdl-span2">(530*1 箱)</span>
                        </dd>
                      </dl>
                      <dl class="fpb-r-dl clearfix">
                        <dt class="fl">订舱费(20'GP)：</dt>
                        <dd class="fl">
                          <span class="fpb-rdl-span1">CNY 184</span>
                          <span class="fpb-rdl-span2">(30*1 票)</span>
                        </dd>
                      </dl>
                    </div>
                    <div class="fpb-r-count">
                      <dl class="fpb-r-dl clearfix">
                        <dt class="fl fpb-r-count-left">费用共计</dt>
                        <dd class="fl">
                          <span class="fpb-rdl-span1">USD</span>
                          <span class="fpb-rdl-span2">625起</span>
                        </dd>
                      </dl>
                      <dl class="fpb-r-dl clearfix">
                        <dt class="fl fpb-r-count-left">&nbsp;</dt>
                        <dd class="fl">
                          <span class="fpb-rdl-span1">CNY</span>
                          <span class="fpb-rdl-span2">1454</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </td>
              </tr> -->
            </tbody>
          </table>
          <div class="carefull">申明：我司承诺在领取提单或电放货物前付清运费，并在贵司与船公司要求的付款期限内支付。</div>
        </div>
      </div>
      <!-- <span style="color:red;margin-left:50px;cursor:pointer" @click="gotoExport">导出托运单>></span> -->
      <div class="f0 button-box">
        <span class="ht_btn_default" @click="gotoExport">导出托运单>></span>
        <span class="ht_btn_default" @click="delegateNow">立即委托</span>
        <!-- <span @click="editAgain">再次编辑</span> -->
      </div>
      <!-- <el-button @click="gotoExport">导出并保存报价单</el-button>
      <el-button @click="createCanvas">生成canvas</el-button> -->
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
    tag,
    radio
  } from 'element-ui'
  import jsPDF from 'jspdf'
  import domtoimage from 'dom-to-image'
  import { showPrepareOrder, prepareOrder, savePrepareOrder, saveOrder } from '@/api/orderAPI'
  export default {
    data() {
      return {
        specialRequirement: 1,
        freightPayment: 1,
        trailerWay: 1,
        customsWay: 1,
        dataObj: { serviceId: '' },
      }
    },
    mounted() {
      // if (this.$route.params.dataObj) {
      //   this.dataObj = this.$route.params.dataObj
      // } else {
      this.getQuoteById(this.$route.query.id)
      // }
      // this.dataObj = this.$route.params.dataObj
      // this.getQuoteById(this.$route.query.id)
    },
    computed: {
    },
    components: {
      'el-input': input,
      'el-button': button,
      'el-select': select,
      'el-option': option,
      'el-checkbox': checkbox,
      'el-tag': tag,
      'el-radio': radio
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
          let data = (await showPrepareOrder({ params: { quoteId: id } })).data
          if (data.returnCode === 0) {
            this.dataObj = data.data
            // this.serviceId = this.dataObj.serviceId
            // this.hasChooseServiceStr(this.dataObj.serviceId)
            console.log(data, 'getQuoteById')
          }
        } catch (error) {
          throw Error(error)
        }
      },
      async saveOrder(id) {
        try {
          let data = (await saveOrder({ data: this.dataObj, params: { quoteId: id } })).data
          if (data.returnCode === 0) {
            console.log(data.quote, 'saveOrder')
            this.$alert('更新成功')
            return data
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
            pdf.save('托运单.pdf')
            // vm.$router.push({ path: '/fcl_price_export' })
          })
      },
      async delegateNow() {
        let data = await this.saveOrder(this.$route.query.id)
        if (data.returnCode === 0) {
          this.$router.push({ path: '/orderCreate', query: { id: data.order.id } })
        }
      },
      editAgain() {
        this.$router.push({ path: '/priceEdit' })
      }
    }
  }

</script>

<style lang="scss" scoped>
  #booking {
    padding: 6px 0 120px;
    #toPdfBox {
      padding: 50px 50px 0;
    }
    .title {
      text-align: center;
      color: blue;
      font-size: 24px;
      line-height: 2.0;
      padding-bottom: 30px;
    }

    .carefull {
      color: blue;
      padding: 20px 0;
      font-size: 14px;
      line-height: 1.6;
    }

    .table {
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
      .Special-Requirement /deep/ .el-radio__label {
        color: #333;
      }
    }
    .table /deep/ .el-radio__input.is-disabled.is-checked .el-radio__inner {
      border-color: #409EFF;
      background: #409EFF;
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