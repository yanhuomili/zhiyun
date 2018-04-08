<template>
  <div id="orderCreate">
    <div class="main-box">
      <div class="or-top">
        <div class="or-title">
          {{orderStatus[detailData.status]}}
        </div>
        <div class="or-detail">
          <div class="or-detail-item">
            <span class="or-di_span1">订单总价</span>
            <span class="or-di_span2">
              <span>
                <span style="width:38px;display:inline-block">RMB</span> {{detailData.rmbTotal||0}}</span>
              </br>
              <span>
                <span style="width:38px;display:inline-block;margin-top:10px;">USD</span>
                {{detailData.usdTotal||0}}</span>
            </span>
          </div>
          <div class="or-detail-item">
            <span class="or-di_span1">订单号</span>
            <span class="or-di_span2">{{detailData.id}}</span>
          </div>
          <div class="or-detail-item">
            <span class="or-di_span1">下单时间</span>
            <span class="or-di_span2">{{(new Date(detailData.createDate)).Format('yyyy-MM-dd hh:mm')}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="full-line">
    </div>
    <div class="main-box" style="margin-bottom:140px;">
      <div class="service-status-box">
        <div class="stb-head table w100b">
          <div class="stb-th1">服务/当前状态</div>
          <div class="stb-th2">订单号</div>
          <div class="stb-th3">提单号</div>
          <div class="stb-th4">船名/航次</div>
        </div>
        <div class="stb-body table w100b">
          <div class="stb-tb1">
            <div class="stb-tb-item table w100b" v-if="detailData.orderBookingVOList&&detailData.orderBookingVOList[0]">
              <div class="stb-tbi1 table-cell">
                <div class="stb-tbi1-img">
                  <img src="../../assets/sea-transport.png" alt="" class="img-wh100">
                </div>
              </div>
              <div class="stb-tbi2 table-cell">
                <div class="stb-tbi2-top f0">
                  <span>{{detailData.orderBookingVOList[0].loadingPort}}</span>
                  <span class="stb-tbi2t-jiantou">→</span>
                  <span>{{detailData.orderBookingVOList[0].destinationPort}}</span>
                </div>
                <div class="stb-tbi2-bottom">
                  {{orderStatus[detailData.orderBookingVOList[0].status]}}
                </div>
              </div>
              <div class="stb-tbi3 table-cell">{{detailData.orderBookingVOList[0].id}}</div>
              <div class="stb-tbi4 table-cell">12124124124124</div>
            </div>
            <div class="stb-tb-item table w100b" v-if="detailData.orderTrailerVOList&&detailData.orderTrailerVOList[0]">
              <div class="stb-tbi1 table-cell">
                <div class="stb-tbi1-img">
                  <img src="../../assets/trailer.png" alt="" class="img-wh100">
                </div>
              </div>
              <div class="stb-tbi2 table-cell">
                <div class="stb-tbi2-top f0">
                  <span>宿州市</span>
                  <span class="stb-tbi2t-jiantou">→</span>
                  <span>上海吴淞码头</span>
                </div>
                <div class="stb-tbi2-bottom">
                  {{orderStatus[detailData.orderTrailerVOList[0].status]}}
                </div>
              </div>
              <div class="stb-tbi3 table-cell">{{detailData.orderTrailerVOList[0].id}}</div>
              <div class="stb-tbi4 table-cell">12124124124124</div>
            </div>
            <div class="stb-tb-item table w100b" v-if="detailData.orderCustomsVOList&&detailData.orderCustomsVOList[0]">
              <div class="stb-tbi1 table-cell">
                <div class="stb-tbi1-img">
                  <img src="../../assets/customer.png" alt="" class="img-wh100">
                </div>
              </div>
              <div class="stb-tbi2 table-cell">
                <div class="stb-tbi2-top f0">
                  <span>预计 {{(new Date(detailData.orderCustomsVOList[0].expectedTime)).Format('yyyy-MM-dd hh:mm')}} 申报
                  </span>
                  <!-- <span class="stb-tbi2t-jiantou">→</span>
                  <span>COLOMBO(SIR LANKA)</span> -->
                </div>
                <div class="stb-tbi2-bottom">
                  {{orderStatus[detailData.orderCustomsVOList[0].status]}}
                </div>
              </div>
              <div class="stb-tbi3 table-cell">{{detailData.orderCustomsVOList[0].id}}</div>
              <div class="stb-tbi4 table-cell">12124124124124</div>
            </div>
            <div class="stb-tb-item table w100b" v-if="detailData.orderInsuranceVOList&&detailData.orderInsuranceVOList[0]">
              <div class="stb-tbi1 table-cell">
                <div class="stb-tbi1-img">
                  <img src="../../assets/insurance.png" alt="" class="img-wh100">
                </div>
              </div>
              <div class="stb-tbi2 table-cell">
                <div class="stb-tbi2-top f0">
                  <span>发票全额RMB {{detailData.orderInsuranceVOList[0].insuranceOrderDetailVOList[0].amount}}</span>
                  <!-- <span class="stb-tbi2t-jiantou">→</span>
                  <span>COLOMBO(SIR LANKA)</span> -->
                </div>
                <div class="stb-tbi2-bottom">
                  {{orderStatus[detailData.orderInsuranceVOList[0].status]}}
                </div>
              </div>
              <div class="stb-tbi3 table-cell">{{detailData.orderInsuranceVOList[0].id}}</div>
              <div class="stb-tbi4 table-cell">12124124124124</div>
            </div>
            <div class="stb-tb-item table w100b" v-if="detailData.orderStorageVOList&&detailData.orderStorageVOList[0]">
              <div class="stb-tbi1 table-cell">
                <div class="stb-tbi1-img">
                  <img src="../../assets/storage.png" alt="" class="img-wh100">
                </div>
              </div>
              <div class="stb-tbi2 table-cell">
                <div class="stb-tbi2-top f0">
                  <span>{{detailData.orderStorageVOList[0].loadingPort}}</span>
                  <!-- <span class="stb-tbi2t-jiantou">→</span>
                  <span>COLOMBO(SIR LANKA)</span> -->
                </div>
                <div class="stb-tbi2-bottom">
                  {{orderStatus[detailData.orderStorageVOList[0].status]}}
                </div>
              </div>
              <div class="stb-tbi3 table-cell">{{detailData.orderStorageVOList[0].id}}</div>
              <div class="stb-tbi4 table-cell">12124124124124</div>
            </div>
            <div class="stb-tb-item table w100b" v-if="detailData.orderCertificateVOList&&detailData.orderCertificateVOList[0]">
              <div class="stb-tbi1 table-cell">
                <div class="stb-tbi1-img">
                  <img src="../../assets/certificate.png" alt="" class="img-wh100">
                </div>
              </div>
              <div class="stb-tbi2 table-cell">
                <div class="stb-tbi2-top f0">
                  <span>证书类型 {{detailData.orderCertificateVOList[0].certificateOrderDetailVOList[0].name}}</span>
                  <!-- <span class="stb-tbi2t-jiantou">→</span>
                  <span>COLOMBO(SIR LANKA)</span> -->
                </div>
                <div class="stb-tbi2-bottom">
                  {{orderStatus[detailData.orderCertificateVOList[0].status]}}
                </div>
              </div>
              <div class="stb-tbi3 table-cell">{{detailData.orderCertificateVOList[0].id}}</div>
              <div class="stb-tbi4 table-cell">12124124124124</div>
            </div>
          </div>
          <div class="stb-tb2">EDUFDHGFDHGFHGFHGFDHF</div>
        </div>
        <div class="stb-foot">
          <div class="stb-foot-left">费用信息</div>
          <div class="stb-foot-right">订单费用总计：USD{{detailData.usdTotal||0}}&nbsp;&nbsp;&nbsp;&nbsp;RMB{{detailData.rmbTotal||0}}</div>
        </div>
      </div>
      <div class="service-status-box service-container-box" v-if="detailData.orderBookingVOList&&detailData.orderBookingVOList[0]">
        <div class="stb-head table w100b">
          <div class="ssb-th1 table-cell">包含服务：海运整柜</div>
          <div class="ssb-th2 table-cell">订单号：{{detailData.orderBookingVOList[0].id}}</div>
          <div class="ssb-th3 table-cell"></div>
        </div>
        <div class="ssb-body">
          <div class="ssb-th1 table-cell">结算客户：
            <span class="ssb-th1-name">{{detailData.name}}</span>
          </div>
          <div class="ssb-th2 ssb-tb2 table-cell">
            <div class="ssb-t2-item f0" v-for="item in detailData.orderBookingVOList[0].bookingDetailVOList">
              <span class="inline-block ssb-t2_span1">海运费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})</span>
              <span class="inline-block ssb-t2_span2">USD {{item.quantity*item.actualPrice}}</span>
              <span class="inline-block ssb-t2_span3">({{item.actualPrice}}*{{item.quantity}} 箱)</span>
            </div>
            <div class="ssb-t2-item f0" v-for="item in detailData.orderSurchargeVOList">
              <span class="inline-block ssb-t2_span1">{{formatTitle(item.name)}}</span>
              <span class="inline-block ssb-t2_span2">{{item.currency}} {{item.quantity*item.actualPrice}}</span>
              <span class="inline-block ssb-t2_span3">({{item.actualPrice}}*{{item.quantity}} {{item.unit}})</span>
            </div>
            <!-- 海运附加费 -->
            <!-- <dl class="edit-box-dl clearfix" v-for="item in detailData.orderSurchargeVOList">
                <dt class="edit-box-dt fl">{{formatTitle(item.name)}}：</dt>
                <dd class="edit-box-dd fl">
                  <div class="edit-bd-unit fl">{{item.currency}} {{item.quantity*item.actualPrice}}</div>
                  <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} {{item.unit}})</div>
                </dd>
              </dl> -->
          </div>
          <div class="ssb-th3 table-cell">
            <div class="ssb-tb3-sum">
              <div class="table-cell">客户费用合计：</div>
              <div class="table-cell">
                <div style="padding-top:15px;line-height:1.2">RMB {{detailData.orderBookingVOList[0].rmbTotal||0}}</div>
                <div style="padding:15px 0;line-height:1.2">USD {{detailData.orderBookingVOList[0].usdTotal||0}}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="service-status-box service-container-box" v-if="detailData.orderTrailerVOList&&detailData.orderTrailerVOList[0]">
        <div class="stb-head table w100b">
          <div class="ssb-th1 table-cell">包含服务：拖车</div>
          <div class="ssb-th2 table-cell">订单号：{{detailData.orderTrailerVOList[0].id}}</div>
          <div class="ssb-th3 table-cell"></div>
        </div>
        <div class="ssb-body">
          <div class="ssb-th1 table-cell">结算客户：
            <span class="ssb-th1-name">{{detailData.name}}</span>
          </div>
          <div class="ssb-th2 ssb-tb2 table-cell">
            <div class="ssb-t2-item f0" v-for="item in detailData.orderTrailerVOList[0].trailerOrderDetailVOList">
              <span class="inline-block ssb-t2_span1">拖车费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})</span>
              <span class="inline-block ssb-t2_span2">RMB {{item.quantity*item.actualPrice}}</span>
              <span class="inline-block ssb-t2_span3">({{item.actualPrice}}*{{item.quantity}} 箱)</span>
            </div>
            <!-- <dl class="edit-box-dl clearfix" v-for="item in detailData.orderTrailerVOList[0]">
                <dt class="edit-box-dt fl">拖车费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                <dd class="edit-box-dd fl">
                  <div class="edit-bd-unit fl">RMB {{item.quantity*item.actualPrice}}</div>
                  <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                </dd>
              </dl> -->
          </div>
          <div class="ssb-th3 table-cell">
            <div class="ssb-tb3-sum">客户费用合计：RMB {{detailData.orderTrailerVOList[0].rmbTotal||0}}</div>
          </div>
        </div>
      </div>
      <div class="service-status-box service-container-box" v-if="detailData.orderCustomsVOList&&detailData.orderCustomsVOList[0]">
        <div class="stb-head table w100b">
          <div class="ssb-th1 table-cell">包含服务：报关</div>
          <div class="ssb-th2 table-cell">订单号：{{detailData.orderCustomsVOList[0].id}}</div>
          <div class="ssb-th3 table-cell"></div>
        </div>
        <div class="ssb-body">
          <div class="ssb-th1 table-cell">结算客户：
            <span class="ssb-th1-name">{{detailData.name}}</span>
          </div>
          <div class="ssb-th2 ssb-tb2 table-cell">
            <div class="ssb-t2-item f0" v-for="item in detailData.orderCustomsVOList[0].customsOrderDetailVOList">
              <span class="inline-block ssb-t2_span1">{{formatTitle(item.name)}}</span>
              <span class="inline-block ssb-t2_span2">RMB {{item.quantity*item.actualPrice}}</span>
              <span class="inline-block ssb-t2_span3">({{item.actualPrice}}*{{item.quantity}} 箱)</span>
            </div>
          </div>
          <div class="ssb-th3 table-cell">
            <div class="ssb-tb3-sum">客户费用合计：RMB {{detailData.orderCustomsVOList[0].rmbTotal||0}}</div>
          </div>
        </div>
      </div>
      <div class="service-status-box service-container-box" v-if="detailData.orderStorageVOList&&detailData.orderStorageVOList[0]">
        <div class="stb-head table w100b">
          <div class="ssb-th1 table-cell">包含服务：仓储</div>
          <div class="ssb-th2 table-cell">订单号：{{detailData.orderStorageVOList[0].id}}</div>
          <div class="ssb-th3 table-cell"></div>
        </div>
        <div class="ssb-body">
          <div class="ssb-th1 table-cell">结算客户：
            <span class="ssb-th1-name">{{detailData.name}}</span>
          </div>
          <div class="ssb-th2 ssb-tb2 table-cell">
            <div class="ssb-t2-item f0" v-for="item in detailData.orderStorageVOList[0].storageOrderDetailVOList">
              <span class="inline-block ssb-t2_span1">仓储费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})</span>
              <span class="inline-block ssb-t2_span2">RMB {{item.quantity*item.actualPrice}}</span>
              <span class="inline-block ssb-t2_span3">({{item.actualPrice}}*{{item.quantity}} 箱)</span>
            </div>
          </div>
          <div class="ssb-th3 table-cell">
            <div class="ssb-tb3-sum">客户费用合计：RMB {{detailData.orderStorageVOList[0].rmbTotal}}</div>
          </div>
        </div>
      </div>
      <div class="service-status-box service-container-box" v-if="detailData.orderCertificateVOList&&detailData.orderCertificateVOList[0]">
        <div class="stb-head table w100b">
          <div class="ssb-th1 table-cell">包含服务：证书</div>
          <div class="ssb-th2 table-cell">订单号：{{detailData.orderCertificateVOList[0].id}}</div>
          <div class="ssb-th3 table-cell"></div>
        </div>
        <div class="ssb-body">
          <div class="ssb-th1 table-cell">结算客户：
            <span class="ssb-th1-name">{{detailData.name}}</span>
          </div>
          <div class="ssb-th2 ssb-tb2 table-cell">
            <div class="ssb-t2-item f0" v-for="item in detailData.orderCertificateVOList[0].certificateOrderDetailVOList">
              <span class="inline-block ssb-t2_span1">证书费({{item.name}})</span>
              <span class="inline-block ssb-t2_span2">RMB {{item.actualPrice}}</span>
              <span class="inline-block ssb-t2_span3">({{item.actualPrice}}/票)</span>
            </div>
          </div>
          <div class="ssb-th3 table-cell">
            <div class="ssb-tb3-sum">客户费用合计：RMB {{detailData.orderCertificateVOList[0].rmbTotal||0}}</div>
          </div>
        </div>
      </div>
      <div class="service-status-box service-container-box" v-if="detailData.orderInsuranceVOList&&detailData.orderInsuranceVOList[0]">
        <div class="stb-head table w100b">
          <div class="ssb-th1 table-cell">包含服务：保险</div>
          <div class="ssb-th2 table-cell">订单号：{{detailData.orderInsuranceVOList[0].id}}</div>
          <div class="ssb-th3 table-cell"></div>
        </div>
        <div class="ssb-body">
          <div class="ssb-th1 table-cell">结算客户：
            <span class="ssb-th1-name">{{detailData.name}}</span>
          </div>
          <div class="ssb-th2 ssb-tb2 table-cell">
            <div class="ssb-t2-item f0">
              <span class="inline-block ssb-t2_span1">保险费</span>
              <span class="inline-block ssb-t2_span2">{{detailData.orderInsuranceVOList[0].rmbTotal}}</span>
              <span class="inline-block ssb-t2_span3"></span>
            </div>
          </div>
          <div class="ssb-th3 table-cell">
            <div class="ssb-tb3-sum">客户费用合计：RMB {{detailData.orderInsuranceVOList[0].rmbTotal||0}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import districtSelect from '@/components/DistrictSelect'
  import orderSteps from '@/components/OrderDetailFillSteps/steps'
  import orderStep from '@/components/OrderDetailFillSteps/step'
  import { getOrderDetail } from '@/api/orderAPI'
  import {
    form,
    formItem,
    input,
    checkboxGroup,
    checkbox,
    select,
    option,
    radioGroup,
    radio,
  } from 'element-ui'
  export default {
    data() {
      return {
        searchData: {
          type: '',
          value: '',
          radio: 3,
          desc: '',
          checkList: []
        },
        orderStatus: window.HTCONFIG.orderStatus,
        detailData: {}
      }
    },
    mounted() {
      console.log(this.orderStatus)
      this.getOrderDetail(this.$route.query.id)
    },
    computed: {
    },
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
      'el-checkbox': checkbox,
      'el-select': select,
      'el-option': option,
      'el-checkbox-group': checkboxGroup,
      'el-radio': radio,
      'el-radio-group': radioGroup,
      districtSelect,
      orderStep,
      orderSteps
    },
    methods: {
      async getOrderDetail(id) {
        try {
          let data = (await getOrderDetail({ params: { id: id } })).data
          if (data.returnCode === 0) {
            this.detailData = data.order
          }
        } catch (error) {
          throw Error(error)
        }
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
    }
  }

</script>

<style lang="scss" scoped>
  #orderCreate {
    .or-top {
      padding: 30px 0 10px;
      .or-title {
        color: #6297F4;
        font-size: 24px;
        line-height: 1;
      }
      .or-detail-item {
        font-size: 0;
        margin-top: 12px;
        color: #666;
      }
      .or-di_span1 {
        display: inline-block;
        font-size: 14px;
        line-height: 14px;
        vertical-align: middle;
        width: 80px;
      }
      .or-di_span2 {
        display: inline-block;
        font-size: 14px;
        line-height: 14px;
        vertical-align: middle;
        color: #D84C56
      }
    }
    .full-line {
      width: 100%;
      height: 27px;
      margin: 20px auto 30px;
      background: url('../../assets/line-bg.png') repeat-x center;
    }
    .service-status-box {
      border: 1px solid #ddd;
      .stb-head {
        border-bottom: 1px solid #ddd;
        font-size: 16px;
        background-color: #F1F1F1;
        line-height: 40px;
      }
      .stb-th1 {
        width: 550px;
        box-sizing: border-box;
        padding-left: 30px;
        display: table-cell;
      }
      .stb-th2 {
        text-align: center;
        width: 170px;
        display: table-cell;
        text-align: left;
        text-indent: 36px;
      }
      .stb-th3 {
        text-align: center;
        width: 170px;
        display: table-cell;
        text-align: left;
        text-indent: 26px;
      }
      .stb-th4 {
        text-align: center;
        width: 326px;
        display: table-cell;
      }
      .stb-body {
        border-bottom: 1px solid #ddd;
        font-size: 16px;
        text-align: center;
        color: #666;
      }
      .stb-tb1 {
        width: 870px;
        display: table-cell;
        border-right: 1px solid #ddd;
        box-sizing: border-box;
        padding: 0 45px 0 30px;
      }
      .stb-tb-item+.stb-tb-item {
        border-top: 1px solid #ddd;
      }
      .stb-tb2 {
        width: 306px;
        display: table-cell;
        vertical-align: middle;
      }
      .stb-tb-item {
        padding: 10px 0;
      }
      .stb-tbi1 {
        width: 110px;
      }
      .stb-tbi2 {
        text-align: left;
        width: 410px;
      }
      .stb-tbi3 {
        width: 160px;
      }
      .stb-tbi4 {
        width: 160px;
      }
      .stb-tbi1-img {
        width: 68px;
        height: 48px;
        background-color: #ddd;
      }
      .stb-tbi2t-jiantou {
        display: inline-block;
        padding: 0 20px;
      }
      .stb-tbi2-top span {
        display: inline-block;
        font-size: 16px;
      }
      .stb-tbi2-bottom {
        color: #6297F4;
        font-size: 14px;
      }
      .stb-foot {
        line-height: 40px;
        font-size: 16px;
      }
      .stb-foot-left {
        color: #6297F4;
        padding: 0 30px;
        display: inline-block;
      }
      .stb-foot-right {
        color: #D84C56;
        display: inline-block;
      }
    }
    .ssb-body {
      color: #666;
    }
    .service-container-box {
      text-align: left;
      font-size: 16px;
      margin-top: 30px;
      .ssb-th1 {
        width: 270px;
        box-sizing: border-box;
        padding-left: 30px;
      }
      .ssb-th2 {
        width: 400px;
      }
      .ssb-tb2 {
        /* padding: 30px 0 44px; */
        padding: 30px 0 30px;
      }
      .ssb-th3 {
        width: 528px;
      }
      .ssb-th1-name {
        color: #6297F4;
      }
      .ssb-t2-item {
        /* line-height: 30px; */
        /* margin-bottom: 16px; */
      }
      .ssb-t2_span1 {
        width: 120px;
        font-size: 14px;
        line-height: 30px;
      }
      .ssb-t2_span2 {
        padding: 0 8px;
        font-size: 14px;
        line-height: 30px;
        color: #D84C56;
      }
      .ssb-t2_span3 {
        font-size: 14px;
        line-height: 30px;
        color: #D84C56;
      }
      .ssb-tb3-sum {
        display: inline-block;
        color: #fff;
        line-height: 42px;
        padding: 0 38px;
        font-size: 18px;
        background-color: #D84C56;
      }
    }
  }
</style>