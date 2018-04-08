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
            <div class="button-search ht_btn_danger">搜索</div>
          </div>
        </div>
      </pannel>
    </div>
    <div v-for="item in listData" :key="item.id">
      <!-- 海运 -->
      <div class="order-item" v-if="item.serviceId">
        <div class="order-item-head f0">
          <div class="order-th-s order-th-s1">进行中</div>
          <div class="order-th-s order-th-s2">
            <span>{{item.id}}</span>
            <span class="shu">|</span>
            <span style="margin-right:10px;" v-if="item.serviceId.indexOf('0')>-1">海运</span>
            <span style="margin-right:10px;" v-else>{{serviceNameArr[Number(item.serviceId)].label}}</span>{{(new Date(item.createDate)).Format('yyyy-MM-dd hh:mm')}}</div>
        </div>
        <div class="order-item-content">
          <!-- 海运 -->
          <div class="order-ic-item order-ic-item1" v-if="item.serviceId&&item.serviceId.indexOf('0')>-1">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                <div class="fl order-ici-left">
                  <p>NINGBO</p>
                  <p>{{item.loadingPort}}</p>
                </div>
                <div class="fl order-ici-mid">
                  →
                </div>
                <div class="fl order-ici-left">
                  <p>PETERSBURG</p>
                  <p>{{item.destinationPort}}</p>
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
                <p>客户名：{{item.name}}</p>
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

          <!-- 拖车 -->
          <div class="order-ic-item order-ic-item1" v-if="item.serviceId=='1'">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                <div class="fl order-ici-left">
                  宿州市
                </div>
                <div class="fl order-ici-mid">
                  →
                </div>
                <div class="fl order-ici-left">
                  上海吴淞码头
                </div>
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/trailer.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：{{item.name}}</p>
                <p>柜型：20'GP</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>

          <!-- 报关 -->
          <div class="order-ic-item order-ic-item1" v-if="item.serviceId=='2'">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                报关地：上海吴淞码头
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/customer.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：{{item.name}}</p>
                <p>柜型：20'GP</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>

          <!-- 仓储 -->
          <div class="order-ic-item order-ic-item1" v-if="item.serviceId=='3'">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                起运港：上海
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/storage.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：{{item.name}}</p>
                <p>装船码头：吴淞码头</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>

          <!-- 证书 -->
          <div class="order-ic-item order-ic-item1" v-if="item.serviceId=='4'">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                证书类型：C/O
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/certificate.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：{{item.name}}</p>
              </div>
            </div>
          </div>

          <!-- 保险 -->
          <div class="order-ic-item order-ic-item1" v-if="item.serviceId=='5'">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                发票全额：CNY 188800
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/insurance.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：长记性</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>
          <div class="order-ic-item order-ic-item2">
            <div style="display:inline-block;text-align:left;">
              <template v-if="item.serviceId">
                <p v-for="(item1,index) in item.serviceId.split(',')" v-if="serviceNameArr[item1]">{{index+1}}.{{serviceNameArr[item1]['label']}}</p>
              </template>
            </div>
          </div>
          <div class="order-ic-item order-ic-item3">
            <div style="display:inline-block;text-align:left;">
              <p style="color:#999">货车运输中</p>
              <p @click="gotoOrderTrace(item.serviceId)">
                <a href="javascript:;" class="order-ici-go">订单追踪</a>
              </p>
              <p>
                <router-link :to="{ path: '/orderCreate', query: { id: item.id }}" class="order-ici-go">订单详情</router-link>
                <!-- <a href="javascript:;" class="order-ici-go">订单详情</a> -->
              </p>
              <p @click="gotoSupplementData">
                <a href="javascript:;" class="order-ici-go">补充资料</a>
              </p>
            </div>
          </div>
          <div class="order-ic-item order-ic-item4">
            <div>${{item.usdTotal||0}}</div>
            <div>¥{{item.rmbTotal||0}}</div>
          </div>
          <div class="order-ic-item order-ic-item5">
            <span class="button-sure ht_btn_default_empty">
              确认完成
            </span>
          </div>
        </div>
        <!-- <div class="order-item-bottom">
          <div class="ordertb-s ordertb-s1">承运人：张小二</div>
          <div class="ordertb-s">航名/航次:EDITHGMBKDNJ/748W</div>
        </div> -->
      </div>

      <!-- 拖车 -->
      <!-- <div class="order-item" v-if="item.serviceId=='1'">
        <div class="order-item-head f0">
          <div class="order-th-s order-th-s1">进行中</div>
          <div class="order-th-s order-th-s2">
            <span>123123123</span>
            <span class="shu">|</span>
            <span style="margin-right:10px;">拖车</span>2017-08-23 8:23</div>
        </div>
        <div class="order-item-content">
          <div class="order-ic-item order-ic-item1">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                <div class="fl order-ici-left">
                  宿州市
                </div>
                <div class="fl order-ici-mid">
                  →
                </div>
                <div class="fl order-ici-left">
                  上海吴淞码头
                </div>
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/sea-transport.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：长记性</p>
                <p>柜型：20'GP</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>
          <div class="order-ic-item order-ic-item2">
            <div style="display:inline-block;text-align:left;">
              <p>1.拖车</p>
            </div>
          </div>
          <div class="order-ic-item order-ic-item3">
            <div style="display:inline-block;text-align:left;">
              <p style="color:#999">审单中</p>
              <p @click="gotoOrderTrace">
                <a href="javascript:;" class="order-ici-go">订单追踪</a>
              </p>
              <p @click="gotoOrderDetail">
                <a href="javascript:;" class="order-ici-go">订单详情</a>
              </p>
              <p @click="gotoSupplementData">
                <a href="javascript:;" class="order-ici-go">补充资料</a>
              </p>
            </div>
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
      </div> -->

      <!-- 报关 -->
      <!-- <div class="order-item" v-if="item.serviceId=='2'">
        <div class="order-item-head f0">
          <div class="order-th-s order-th-s1">进行中</div>
          <div class="order-th-s order-th-s2">
            <span>123123123</span>
            <span class="shu">|</span>
            <span style="margin-right:10px;">报关</span>2017-08-23 8:23</div>
        </div>
        <div class="order-item-content">
          <div class="order-ic-item order-ic-item1">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                报关地：上海吴淞码头
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/sea-transport.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：长记性</p>
                <p>柜型：20'GP</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>
          <div class="order-ic-item order-ic-item2">
            <div style="display:inline-block;text-align:left;">
              <p>1.报关</p>
            </div>
          </div>
          <div class="order-ic-item order-ic-item3">
            <div style="display:inline-block;text-align:left;">
              <p style="color:#999">审单中</p>
              <p @click="gotoOrderTrace">
                <a href="javascript:;" class="order-ici-go">订单追踪</a>
              </p>
              <p @click="gotoOrderDetail">
                <a href="javascript:;" class="order-ici-go">订单详情</a>
              </p>
              <p @click="gotoSupplementData">
                <a href="javascript:;" class="order-ici-go">补充资料</a>
              </p>
            </div>
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
      </div> -->

      <!-- 仓储 -->
      <!-- <div class="order-item" v-if="item.serviceId=='3'">
        <div class="order-item-head f0">
          <div class="order-th-s order-th-s1">进行中</div>
          <div class="order-th-s order-th-s2">
            <span>123123123</span>
            <span class="shu">|</span>
            <span style="margin-right:10px;">仓储</span>2017-08-23 8:23</div>
        </div>
        <div class="order-item-content">
          <div class="order-ic-item order-ic-item1">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                起运港：上海
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/sea-transport.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：长记性</p>
                <p>装船码头：吴淞码头</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>
          <div class="order-ic-item order-ic-item2">
            <div style="display:inline-block;text-align:left;">
              <p>1.仓储</p>
            </div>
          </div>
          <div class="order-ic-item order-ic-item3">
            <div style="display:inline-block;text-align:left;">
              <p style="color:#999">审单中</p>
              <p @click="gotoOrderTrace">
                <a href="javascript:;" class="order-ici-go">订单追踪</a>
              </p>
              <p @click="gotoOrderDetail">
                <a href="javascript:;" class="order-ici-go">订单详情</a>
              </p>
              <p @click="gotoSupplementData">
                <a href="javascript:;" class="order-ici-go">补充资料</a>
              </p>
            </div>
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
      </div> -->

      <!-- 证书 -->
      <!-- <div class="order-item" v-if="item.serviceId=='4'">
        <div class="order-item-head f0">
          <div class="order-th-s order-th-s1">进行中</div>
          <div class="order-th-s order-th-s2">
            <span>123123123</span>
            <span class="shu">|</span>
            <span style="margin-right:10px;">证书</span>2017-08-23 8:23</div>
        </div>
        <div class="order-item-content">
          <div class="order-ic-item order-ic-item1">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                证书类型：C/O
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/sea-transport.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：长记性</p>
              </div>
            </div>
          </div>
          <div class="order-ic-item order-ic-item2">
            <div style="display:inline-block;text-align:left;">
              <p>1.证书</p>
            </div>
          </div>
          <div class="order-ic-item order-ic-item3">
            <div style="display:inline-block;text-align:left;">
              <p style="color:#999">审单中</p>
              <p @click="gotoOrderTrace">
                <a href="javascript:;" class="order-ici-go">订单追踪</a>
              </p>
              <p @click="gotoOrderDetail">
                <a href="javascript:;" class="order-ici-go">订单详情</a>
              </p>
              <p @click="gotoSupplementData">
                <a href="javascript:;" class="order-ici-go">补充资料</a>
              </p>
            </div>
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
      </div> -->

      <!-- 保险 -->
      <!-- <div class="order-item" v-if="item.serviceId=='5'">
        <div class="order-item-head f0">
          <div class="order-th-s order-th-s1">进行中</div>
          <div class="order-th-s order-th-s2">
            <span>123123123</span>
            <span class="shu">|</span>
            <span style="margin-right:10px;">保险</span>2017-08-23 8:23</div>
        </div>
        <div class="order-item-content">
          <div class="order-ic-item order-ic-item1">
            <div class="w100b table order-ici1-box">
              <div class="table-cell order-ici-adress clearfix">
                发票全额：CNY 188800
              </div>
            </div>
            <div class="w100b table order-ici1-box order-ici2-box">
              <div class="order-ici2-img fl">
                <img src="../../../assets/sea-transport.png" alt="" class="img-wh100">
              </div>
              <div class="order-ici2-mid">
                <p>客户名：长记性</p>
                <p>数量：1</p>
              </div>
            </div>
          </div>
          <div class="order-ic-item order-ic-item2">
            <div style="display:inline-block;text-align:left;">
              <p>1.保险</p>
            </div>
          </div>
          <div class="order-ic-item order-ic-item3">
            <div style="display:inline-block;text-align:left;">
              <p style="color:#999">审单中</p>
              <p @click="gotoOrderTrace">
                <a href="javascript:;" class="order-ici-go">订单追踪</a>
              </p>
              <p @click="gotoOrderDetail">
                <a href="javascript:;" class="order-ici-go">订单详情</a>
              </p>
              <p @click="gotoSupplementData">
                <a href="javascript:;" class="order-ici-go">补充资料</a>
              </p>
            </div>
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
      </div> -->

    </div>
  </div>
</template>

<script>
  import pannel from '@/components/Pannel'
  import { listOrder } from '@/api/orderAPI'
  import { headerLogisticsTraceMap } from '@/router'
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
        },
        listData: [],
        nextRouterArr: [],
        orderStatus: window.HTCONFIG.orderStatus,
        serviceNameArr: window.HTCONFIG.surchargeType
      }
    },
    mounted() {
      this.listOrder()
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
      gotoOrderTrace(serviceId) {
        if (!serviceId) {
          return false
        }
        var childrenArr = []
        serviceId.split(',').forEach((v, k) => {
          childrenArr.push(headerLogisticsTraceMap[0].children[v])
        })
        this.$store.commit('SET_LOGISTICS_TRACE_HEADER', [{
          path: '/logisticsTrace',
          meta: { title: '订单追踪' },
          children: childrenArr
        }])
        this.$router.push({ path: '/logisticsTrace/' + childrenArr[0].path })
      },
      async listOrder() {
        try {
          let data = (await listOrder()).data
          if (data.returnCode === 0) {
            this.listData = data.order
          }
        } catch (error) {
          throw Error(error)
        }
      },
      gotoOrderDetail() {
        // this.$router.push({ path: '/orderCreate' })
      },
      gotoSupplementData() {
        this.$router.push({ path: '/supplementData' })
      }
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
    .order-item-content {
      color: #666;
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
        line-height: 38px;
        font-size: 16px;
        text-align: left
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
        line-height: 38px;
        font-size: 16px;
        text-align: center;
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
      .order-ici-go {
        color: #000;
      }
      .button-sure {
        cursor: pointer;
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