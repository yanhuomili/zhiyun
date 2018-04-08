<template>
  <div class="main-box seafreight">
    <div class="table seafreight-head">
      <div class="table-cell startEndPort">
        起运港(码头)/目的港(码头)
      </div>
      <div class="table-cell GP20">
        20GP
      </div>
      <div class="table-cell GP40">
        40GP
      </div>
      <div class="table-cell HQ40">
        40HQ
      </div>
      <div class="table-cell HQ45">
        45HQ
      </div>
      <div class="table-cell surcharge">
        附加费
      </div>
      <div class="table-cell effective-date">
        有效日期
      </div>
      <div class="table-cell shipping-date">
        船期
      </div>
      <div class="table-cell total-prices">
        总价
      </div>
      <div class="table-cell operation">
        操作
      </div>
    </div>
    <div class="table seafreight-content">
      <div v-for="item in scheduleBaseInfoList" class="seafreight-content-item" v-show="scheduleBaseInfoList.length>0">
        <div class="sc-left table-cell">
          <div class="table sc-left-top">
            <div class="table-cell startEndPort">
              <div class="w100b sc-sep-box clearfix">
                <div class="sc-sep-box-icon">
                  <div class="first-cicle"></div>
                  <div class="line"></div>
                  <div class="second-cicle"></div>
                  <div class="line"></div>
                  <div class="three-cicle"></div>
                </div>
                <div class="sc-sep-content">
                  <div class="sc-sepc-add" v-if="item.firstStartPort">{{item.firstStartPort}}({{item.firstWharfRemark}})</div>
                  <div class="sc-sepc-add" v-else>{{item.secondStartPort}}</div>
                  <div class="sc-sepc-add" v-if="item.firstStartPort">中转·{{item.secondStartPort}}</div>
                  <div class="sc-sepc-add" v-else>直达</div>
                  <div class="sc-sepc-add">{{item.secondEndPort}}</div>
                </div>
              </div>
            </div>
            <div class="table-cell GP20">
              <span v-show="item.containerTypeName.indexOf('20GP')>-1" v-for="item in item.containerTypeRouteServiceVOList" :key="item.containerTypeName">${{item.price}}</span>
            </div>
            <div class="table-cell GP40">
              <span v-show="item.containerTypeName.indexOf('40GP')>-1" v-for="item in item.containerTypeRouteServiceVOList" :key="item.containerTypeName">${{item.price}}</span>
            </div>
            <div class="table-cell HQ40">
              <span v-show="item.containerTypeName.indexOf('40HQ')>-1" v-for="item in item.containerTypeRouteServiceVOList" :key="item.containerTypeName">${{item.price}}</span>
            </div>
            <div class="table-cell HQ45">
              <span v-show="item.containerTypeName.indexOf('45HQ')>-1" v-for="item in item.containerTypeRouteServiceVOList" :key="item.containerTypeName">${{item.price}}</span>
            </div>
            <div class="table-cell surcharge">
              <el-popover placement="bottom" title="" width="650" trigger="hover" @show="showFu(item.id)">
                <div>
                  <el-table ref="multipleTable" id="J_table_address" height="300" stripe border :data="fuTableArr" tooltip-effect="dark" size="mini"
                    style="width: 100%">
                    <el-table-column type="index" width="50">
                    </el-table-column>
                    <el-table-column prop="name" label="附加费名称" width="100">
                    </el-table-column>
                    <el-table-column label="币种" prop="currency" width="50">
                      <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                    </el-table-column>

                    <el-table-column prop="20GP" label="20GP" width="70">
                    </el-table-column>
                    <el-table-column prop="40GP" label="40GP" width="70">
                    </el-table-column>
                    <el-table-column prop="40HQ" label="40HQ" width="70">
                    </el-table-column>
                    <el-table-column prop="45HQ" label="45HQ" width="70">
                    </el-table-column>
                    <el-table-column prop="price" label="价格" width="70">
                    </el-table-column>
                    <el-table-column prop="unit" label="单位">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="surcharge-ico" slot="reference">
                  <span>附</span>
                </div>
              </el-popover>
              <!-- <div class="surcharge-ico"  slot="reference">
                    <span>附</span>
                  </div> -->
            </div>
            <div class="table-cell effective-date">
              <div>{{(new Date(item.effectiveDate)).Format("yyyy-MM-dd")}}</div>
              <div>{{(new Date(item.expiryDate)).Format("yyyy-MM-dd")}}</div>
            </div>
            <div class="table-cell shipping-date">
              <div>周一</div>
              <div>一截二开</div>
            </div>
          </div>
          <div class="ship-company">
            <div class="ship-company-e">
              {{item.shipCompany}}</div>
            <div>
              <div class="trailer" v-if="item.trailerTotal">
                <span class="sc-trailer-text">拖车</span>
                <span class="sc-trailer-text">￥{{item.trailerTotal}}</span>
              </div>
              <div class="trailer" v-if="item.customsTotal">
                <span class="sc-trailer-text">报关</span>
                <span class="sc-trailer-text">￥{{item.customsTotal}}</span>
              </div>
              <div class="trailer" v-if="item.storageTotal">
                <span class="sc-trailer-text">仓储</span>
                <span class="sc-trailer-text">￥{{item.storageTotal}}</span>
              </div>
              <div class="trailer" v-if="item.certificateTotal">
                <span class="sc-trailer-text">证书</span>
                <span class="sc-trailer-text">￥{{item.certificateTotal}}</span>
              </div>
              <div class="trailer" v-if="item.insuranceTotal">
                <span class="sc-trailer-text">保险</span>
                <span class="sc-trailer-text">￥{{item.insuranceTotal}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="table-cell total-prices">
          <span>¥{{item.rmbTotal||0}}</span>
          </br>
          <span>${{item.usdTotal||0}}</span>
        </div>
        <div class="table-cell operation">
          <span @click="gotoShowPrice(item.id,item.firstStartPort,item.secondEndPort)" class="button-choose ht_btn_default">
            选择
          </span>
          <!-- <span class="button-choose"></span> -->
          <!-- <div class="concern">
            <el-radio v-model="searchData.type" label="2">关注</el-radio>
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    radio,
    popover,
    table,
    tableColumn
  } from 'element-ui'
  export default {
    props: {
      scheduleBaseInfoList: {
        type: Array,
        default: () => {
          return []
        }
      },
      chooseCondition: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        searchData: {
          type: ''
        },
        fuTableArr: [],
        // scheduleBaseInfoList: [],
      }
    },
    mounted() {
      console.log(this.scheduleBaseInfoList, 'scheduleBaseInfoList')
    },
    components: {
      'el-radio': radio,
      'el-popover': popover,
      'el-table': table,
      'el-table-column': tableColumn
    },
    computed: {
    },
    methods: {
      gotoShowPrice(impQuoteTmpId, startPort, endPort) {
        this.chooseCondition.impQuoteTmpId = impQuoteTmpId
        this.chooseCondition.shippingStartPort = startPort
        this.chooseCondition.shippingEndPort = endPort
        this.$router.push({ 'path': '/priceDetail', query: this.chooseCondition })
      },
      showFu(id) {
        const currentItem = this.scheduleBaseInfoList.filter((v) => {
          return v.id == id
        })[0]
        let surchargeArr = []
        let surchargeObj = {}
        currentItem.surchargeRouteServiceVOList.forEach((v) => {
          let name
          if (v.sign) {
            name = v.englishName.slice(0, v.englishName.lastIndexOf('_'))
          } else {
            name = v.englishName
          }
          surchargeObj[name] ? '' : surchargeObj[name] = {}, surchargeObj[name].name = name
          v.sign ? surchargeObj[name][v.sign] = v.price : surchargeObj[name]['price'] = v.price
          surchargeObj[name].currency = v.currency
          surchargeObj[name].unit = v.unit
        })
        for (let i in surchargeObj) {
          // let localObj = surchargeObj[i]
          surchargeArr.push(surchargeObj[i])
        }
        this.fuTableArr = surchargeArr
      }
    }
  }

</script>

<style lang="scss" scoped>
  .seafreight {
    /* margin: 46px auto 46px; */
    background-color: rgba(241, 241, 241, 0.9);
    text-align: center;
    .seafreight-head {
      border-bottom: 1px solid #999999;
      font-size: 16px;
      line-height: 50px;
      padding: 0 20px;
      .startEndPort {
        text-align: left;
        text-indent: 10px;
      }
    }
    .startEndPort {
      width: 280px;
    }
    .GP20,
    .GP40,
    .HQ40,
    .HQ45 {
      width: 70px;
    }
    .surcharge {
      width: 90px;
    }
    .effective-date {
      width: 130px;
    }
    .shipping-date {
      width: 100px
    }
    .total-prices {
      width: 130px;
    }
    .operation {
      width: 150px
    }
    .seafreight-content {
      font-size: 14px;
      /* border-bottom: 1px solid #999999; */
      .seafreight-content-item {
        padding: 0 20px;
        border-bottom: 1px solid #999999;
      }
      .seafreight-content-item:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, .2);
        background-color: #fff;
      }
      .surcharge-ico {
        display: inline-block;
        border: 1px solid #D84C56;
        color: #D84C56;
        border-radius: 100% 100%;
        font-size: 18px;
        line-height: 24px;
        height: 24px;
        width: 24px;
      }
      .effective-date,
      .shipping-date {
        font-size: 16px;
      }
      .total-prices {
        font-size: 28px;
        color: #EC3C51;
      }
      .button-choose {
        display: inline-block;
        width: 84px;
        box-sizing: border-box;
        line-height: 36px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        background-color: #6297F4;
      }
      .effective-date div,
      .shipping-date div {
        font-size: 16px;
        line-height: 16px
      }
      .effective-date div+div,
      .shipping-date div+div {
        margin-top: 14px;
      }
      .ship-company {
        text-align: left;
        padding-left: 50px;
        .trailer {
          display: inline-block;
          padding-right: 30px;
          font-size: 16px;
          line-height: 16px;
          margin: 10px 0 14px;
        }
        .sc-trailer-text {
          margin-left: 10px;
        }
        .trailer+.trailer {
          padding-left: 30px;
          border-left: 2px solid #979797;
        }
      }
      .ship-company-e {
        line-height: 32px;
        font-size: 14px;
        background-color: #C5D5F1;
        padding: 0 25px;
        display: inline-block;
      }
    }
    .sc-left {
      width: 880px;
    }
    .sc-left-top {
      border-bottom: 1px solid #999;
    }
    .sc-sep-box {
      padding: 14px 0;
    }
    .sc-sep-box-icon {
      width: 16px;
      height: 66px;
      float: left;
      position: relative;
      .first-cicle {
        width: 10px;
        height: 10px;
        background-color: #6297F4;
        border-radius: 100% 100%;
        margin: 0 auto;
      }
      .line {
        width: 3px;
        margin-top: -2px;
        background-color: #6297F4;
        height: 17px;
        position: relative;
        left: 6.5px;
      }
      .second-cicle {
        width: 16px;
        height: 16px;
        box-sizing: border-box;
        border: 2px solid #6297F4;
        border-radius: 100% 100%;
        position: relative;
        margin-top: 14px;
        margin-top: -2px
      }
      .second-cicle:after {
        content: '';
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        top: 3px;
        left: 3px;
        background-color: #6297F4;
        border-radius: 100% 100%;
      }
      .three-cicle {
        width: 10px;
        height: 10px;
        border-radius: 100% 100%;
        background-color: #6297F4;
        margin: 0 auto;
      }
    }
    .sc-sep-content {
      width: 1000px;
      text-align: left;
      padding-left: 10px;
      display: table-cell;
    }
    .sc-sepc-add {
      /* font-size: 18px; */
      line-height: 14px;
    }
    .sc-sepc-add+.sc-sepc-add {
      margin-top: 12px;
    }
    .concern {
      line-height: 16px;
      margin-top: 16px;
    }
    .concern /deep/ .el-radio__inner {
      width: 16px;
      height: 16px;
    }
    .concern /deep/ .el-radio__label {
      font-size: 16px;
    }
  }
</style>