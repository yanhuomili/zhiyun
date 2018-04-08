<template>
  <div id="bankStatement-detail">
    <div class="main-box">
      <div class="content-table">
        <el-form ref="refForm" :model="searchData" :inline="true" label-width="102px" label-position="left">
          <table class="w100b" cellspacing="0" cellpadding="0">
            <colgroup>
              <col name="el-table_1_column_37" width="109">
              <col name="el-table_1_column_38" width="99">
              <col name="el-table_1_column_39" width="99">
              <col name="el-table_1_column_40" width="99">
              <col name="el-table_1_column_41" width="99">
              <col name="el-table_1_column_42" width="99">
              <col name="el-table_1_column_43" width="99">
              <col name="el-table_1_column_44" width="99">
              <col name="el-table_1_column_45" width="99">
              <col name="el-table_1_column_46" width="99">
              <col name="el-table_1_column_47" width="99">
              <col name="el-table_1_column_48" width="99">
            </colgroup>
            <thead class="ct-thead">
              <tr>
                <th>下单日期</th>
                <th>客户名</th>
                <th>订单号</th>
                <th>柜号</th>
                <th>起运港</th>
                <th>目的港</th>
                <th>费用名称</th>
                <th>应收</th>
                <th>费用确认</th>
                <th>费用名称</th>
                <th>应付</th>
                <th>费用确认</th>
              </tr>
            </thead>
            <tbody class="ct-tbody">
              <tr v-for="item in tableDataList" class="ct-tb-item">
                <td>{{item.orderDate}}</td>
                <td>{{item.name}}</td>
                <td>{{item.orderNum}}</td>
                <td>{{item.guihao}}</td>
                <td>{{item.startPort}}</td>
                <td class="endport">{{item.endPort}}</td>
                <td colspan="6" class="ct-tb-column5">
                  <table class="ctt-table-right" cellspacing="0" cellpadding="0">
                    <colgroup>
                      <!-- <col name="el-table_1_column_37" width="109">
                      <col name="el-table_1_column_38" width="99">
                      <col name="el-table_1_column_39" width="99">
                      <col name="el-table_1_column_40" width="99">
                      <col name="el-table_1_column_41" width="99">
                      <col name="el-table_1_column_42" width="99"> -->
                      <col name="el-table_1_column_43" width="99">
                      <col name="el-table_1_column_44" width="99">
                      <col name="el-table_1_column_45" width="99">
                      <col name="el-table_1_column_46" width="99">
                      <col name="el-table_1_column_47" width="99">
                      <col name="el-table_1_column_48" width="99">
                    </colgroup>
                    <tbody>
                      <tr v-for="item1 in item.detailList" class="ctt-item">
                        <td>
                          <div v-show="!item1.editName">
                            <span>{{item1.receivableName}}</span>
                            <span style="color:#6297F4">
                              <i class="el-icon-edit" @click="item1.editName=true"></i>
                            </span>
                          </div>
                          <div v-show="item1.editName">
                            <input v-model="item1.receivableName" style="width:60%"></input>
                            <i class="el-icon-check" @click="item1.editName=false" style="color:#67c23a"></i>
                          </div>
                        </td>
                        <td>
                          <div v-show="!item1.editPrice">
                            <span>${{item1.receivablePrice}}</span>
                            <span style="color:#6297F4">
                              <i class="el-icon-edit" @click="item1.editPrice=true"></i>
                            </span>
                          </div>
                          <div v-show="item1.editPrice">
                            <span>¥</span>
                            <input v-model="item1.receivablePrice" style="width:60%"></input>
                            <i class="el-icon-check" @click="item1.editPrice=false" style="color:#67c23a"></i>
                          </div>
                        </td>
                        <td>
                          <span class="ctt-btn-sure">确认</span>
                        </td>
                        <td>
                          <span>{{item1.copeName}}</span>
                        </td>
                        <td>
                          ${{item1.copePrice}}
                        </td>
                        <td>
                          <span class="ctt-btn-sure">确认</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="profitAll">总利润:¥5000</div>
                </td>
                <!-- <td>已完成</td>
              <td>已完成</td>
              <td>已完成</td>
              <td>已完成</td> -->
              </tr>
            </tbody>
          </table>
        </el-form>
        <!-- <div class="ct-thead table w100b">
          <div class="ct-th ct-th1">下单日期</div>
          <div class="ct-th ct-th2">客户名</div>
          <div class="ct-th ct-th3">订单号</div>
          <div class="ct-th ct-th4">提单号</div>
          <div class="ct-th ct-th5">起运港</div>
          <div class="ct-th ct-th6">目的港</div>
          <div class="ct-th ct-th7">截关时间</div>
          <div class="ct-th ct-th8">海运</div>
          <div class="ct-th ct-th9">拖车</div>
          <div class="ct-th ct-th10">报关</div>
          <div class="ct-th ct-th11">仓储</div>
          <div class="ct-th ct-th12">证书</div>
          <div class="ct-th ct-th13">保险</div>
        </div>
        <div class="ct-tbody">
          <div class="ct-tb-item table w100b" v-for="item in 6">
            <div class="ct-th ct-th1">2017-12-11</div>
            <div class="ct-th ct-th2">统合科技有限公司</div>
            <div class="ct-th ct-th3">20170102</div>
            <div class="ct-th ct-th4">3333213</div>
            <div class="ct-th ct-th5">上海</div>
            <div class="ct-th ct-th6">圣彼得堡</div>
            <div class="ct-th ct-th7">2017-12-12</div>
            <div class="ct-th ct-th8 ct-tb8" v-for="item in 6"><span class="ct-tb-edit-btn">编辑</span>
              <p class="ct-tb8-time">2017-12-16止</p>
            </div>
            <div class="ct-th ct-th9">已完成</div>
            <div class="ct-th ct-th10">已完成</div>
            <div class="ct-th ct-th11">已完成</div>
            <div class="ct-th ct-th12">已完成</div>
            <div class="ct-th ct-th13">已完成</div>
          </div>
        </div> -->
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
        searchData: {},
        tableDataList: [
          {
            orderDate: '2017-11-12',
            name: '张小二',
            orderNum: '201566545',
            guihao: '265656556',
            startPort: '上海',
            endPort: '目的港',
            detailList: [{
              receivableName: '海运费(20\'GP)',
              receivablePrice: '4000',
              editName: false,
              editPrice: false,
              receivableConfirm: 0,
              copeName: '海运费(20\'GP)',
              copePrice: '4000',
              copeConfirm: 0
            }, {
              receivableName: '海运费(20\'GP)',
              receivablePrice: '4000',
              editName: false,
              editPrice: false,
              receivableConfirm: 0,
              copeName: '海运费(20\'GP)',
              copePrice: '4000',
              copeConfirm: 0
            }, {
              receivableName: '海运费(40\'GP)',
              receivablePrice: '40',
              editName: false,
              editPrice: false,
              receivableConfirm: 0,
              copeName: '海运费(20\'GP)',
              copePrice: '4000',
              copeConfirm: 0
            }]
          }, {
            orderDate: '2017-11-12',
            name: '张小二',
            orderNum: '201566545',
            guihao: '265656556',
            startPort: '上海',
            endPort: '目的港',
            detailList: [{
              receivableName: '海运费(20\'GP)',
              receivablePrice: '4000',
              editName: false,
              editPrice: false,
              receivableConfirm: 0,
              copeName: '海运费(20\'GP)',
              copePrice: '4000',
              copeConfirm: 0
            }, {
              receivableName: '海运费(20\'GP)',
              receivablePrice: '4000',
              editName: false,
              editPrice: false,
              receivableConfirm: 0,
              copeName: '海运费(20\'GP)',
              copePrice: '4000',
              copeConfirm: 0
            }, {
              receivableName: '海运费(40\'GP)',
              receivablePrice: '40',
              editName: false,
              editPrice: false,
              receivableConfirm: 0,
              copeName: '海运费(20\'GP)',
              copePrice: '4000',
              copeConfirm: 0
            }]
          }
        ]
      }
    },
    mounted() {
    },
    computed: {
    },
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input
    },
    watch: {
    },
    methods: {

    }
  }

</script>

<style lang="scss" scoped>
  #bankStatement-detail {
    td {
      min-width: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
    }
    .content-table {
      border: 1px solid #ddd;
      margin-top: 40px;
      text-align: center;
      margin-bottom: 120px;
      .ct-thead {
        background-color: #f1f1f1;
        line-height: 48px;
        color: #333;
        font-size: 16px;
      }
      .ct-tb-item td {
        padding: 11px 0;
      }
      .ct-tb-item>td {
        border-top: 1px solid #ddd;
      }
      .endport {
        border-right: 1px solid #ddd;
      }
      .ctt-item+.ctt-item td {
        border-top: 1px solid #ddd;
      }
      .ct-tbody {
        font-size: 14px;
        line-height: 14px;
        color: #666;
        .ct-tb8 {
          color: #6297F4;
        }
        .profitAll {
          border-top: 1px solid #ddd;
          line-height: 50px;
          color: #EC3C51;
          font-size: 16px
        }
        .ct-tb-edit-btn {
          font-size: 12px;
          padding: 0 8px;
          border: 1px solid #6297F4;
          display: inline-block;
        }
        .ct-tb8-time {
          font-size: 10px;
          line-height: 10px;
          margin-top: 4px;
        }
      }
      .ct-tb-item>.ct-tb-column5 {
        padding: 0;
      }
      .ctt-table-right {
        width: 98%;
        margin: 0 auto;
        /* .ctt-item>td:nth-child(1) {
          width: 130px
        }
        .ctt-item>td:nth-child(2) {
          width: 90px
        } */
        .ctt-btn-sure {
          padding: 0 10px;
          line-height: 18px;
          border: 1px solid #6297F4;
          color: #6297F4;
          display: inline-block;
          cursor: pointer;
        }
      }
    }

  }
</style>