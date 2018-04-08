<template>
  <div id="bankStatement">
    <div class="main-box search-box">
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
                <el-form-item label="客户名:">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
                <el-form-item label="订舱号:" label-width="80px">
                  <el-input v-model="searchData.name" placeholder="请选择柜型">
                  </el-input>
                </el-form-item>
                <el-form-item label="柜号:" label-width="80px">
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
    <!-- <div class="main-box table-list">
      <div class="table-head">
        <div class="column column1">下单日期</div>
        <div class="column column2">客户名</div>
        <div class="column column3">订单号</div>
        <div class="column column4">柜号</div>
        <div class="column column5">起运港</div>
        <div class="column column6">目的港</div>
        <div class="column column7">应收</div>
        <div class="column column8">费用确认</div>
        <div class="column column9">应付</div>
        <div class="column column10">费用确认</div>
        <div class="column column11">详情</div>
      </div>
      <div class="table-body">
        <div class="table-item" v-for="item in 5">
          <div class="column column1">2017-12-11</div>
          <div class="column column2">张小二</div>
          <div class="column column3">20178899</div>
          <div class="column column4">333115</div>
          <div class="column column5">上海</div>
          <div class="column column6">圣彼得堡</div>
          <div class="column column7">￥6800</div>
          <div class="column column8">未确认</div>
          <div class="column column9">￥6000</div>
          <div class="column column10">已确认</div>
          <div class="column column11">
            <router-link to="/bankStatement/detail" class="hrb-item">
              详情
            </router-link>
          </div>
        </div>
      </div>
    </div> -->
    <div class="main-box mar-t20">
      <el-table :data="tableData" fit highlight-current-row style="width: 100%;border:1px solid #ddd;border-bottom:none;" :header-row-style="tableHeadStyle">
        <!-- <el-table-column align="center" label="ID" width="80">
          <template slot-scope="scope">
            <span>{{scope.row.id}}</span>
          </template>
        </el-table-column> -->
        <el-table-column align="center" label="下单日期" prop="orderDate">
        </el-table-column>
        <el-table-column align="center" label="客户名" prop="name">
        </el-table-column>
        <el-table-column align="center" label="订单号" prop="orderNum">
        </el-table-column>
        <el-table-column align="center" label="柜号" prop="guihao">
        </el-table-column>
        <el-table-column align="center" label="起运港" prop="startPort">
        </el-table-column>
        <el-table-column align="center" label="目的港" prop="endPort">
        </el-table-column>
        <el-table-column align="center" label="应收" prop="receivable">
        </el-table-column>
        <el-table-column align="center" label="费用确认" prop="receivableConfirm">
        </el-table-column>
        <el-table-column align="center" label="应付" prop="cope">
        </el-table-column>
        <el-table-column align="center" label="费用确认" prop="copeConfirm">
        </el-table-column>
        <el-table-column align="center" label="利润" prop="profit">
        </el-table-column>
        <el-table-column align="center" label="详情">
          <template slot-scope="scope">
            <router-link to="/bankStatement/detail" class="hrb-item">
              详情
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import Pannel from '@/components/Pannel'
  import {
    form,
    formItem,
    input,
    datePicker,
    pagination,
    table,
    tableColumn
  } from 'element-ui'
  export default {
    data() {
      return {
        searchData: {
          value1: '',
          name: ''
        },
        isTableLoading: false,
        tableHeadStyle: {
          color: '#333',
          'background-color': '#F1F1F1',
          'font-size': '16px',
          'font-weight': 'bold',
        },
        tableData: [{
          orderDate: '2017-12-11',
          name: '张小二',
          orderNum: '订单号',
          guihao: '333315',
          startPort: '上海',
          endPort: '圣彼得堡',
          receivable: '123',
          receivableConfirm: 0,
          cope: '200',
          copeConfirm: 1,
          profit: 555,
        }, {
          orderDate: '2017-12-11',
          name: '张小二',
          orderNum: '订单号',
          guihao: '333315',
          startPort: '上海',
          endPort: '圣彼得堡',
          receivable: '123',
          receivableConfirm: 0,
          cope: '200',
          copeConfirm: 1,
          profit: 555,
        }, {
          orderDate: '2017-12-11',
          name: '张小二',
          orderNum: '订单号',
          guihao: '333315',
          startPort: '上海',
          endPort: '圣彼得堡',
          receivable: '123',
          receivableConfirm: 0,
          cope: '200',
          copeConfirm: 1,
          profit: 555,
        },]
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
      'el-table': table,
      'el-table-column': tableColumn,
      Pannel
    },
    methods: {

    }
  }

</script>

<style lang="scss" scoped>
  #bankStatement {
    padding-top: 40px;
    padding-bottom: 150px;
    .search-box {
      .content-box {
        padding: 38px 20px;
        font-size: 16px;
        position: relative;
      }
      .content-box /deep/ .el-form .el-form-item__label {
        font-size: 16px;
        color: #666;
      }
      .content-box /deep/ .el-form .el-input {
        width: 180px;
      }
      .button-search {
        width: 140px;
        line-height: 48px;
        color: #fff;
        font-size: 24px;
        text-align: center;
        position: absolute;
        right: 64px;
        bottom: 38px;
        background-color: #D84C56;
        cursor: pointer;
      }
    }
    .table-head {
      line-height: 48px;
      border-bottom: 1px solid #ddd;
      font-size: 16px;
      font-weight: bold;
      background-color: #F1F1F1;
    }
    .table-list {
      border: 1px solid #ddd;
      text-align: center;
      margin-top: 48px;
      .table-head {
        line-height: 48px;
        border-bottom: 1px solid #ddd;
        font-size: 16px;
        font-weight: bold;
        background-color: #F1F1F1;
      }
      .table-body {
        line-height: 48px;
        font-size: 14px;
        color: #666;
      }
      .table-body .column11 {
        color: #6297F4;
        a {
          color: #6297F4;
        }
      }
      .table-item+.table-item {
        border-top: 1px solid #ddd;
      }
      .column {
        display: table-cell;
      }
      .column1 {
        width: 100px;
      }
      .column2 {
        width: 100px;
      }
      .column3 {
        width: 100px;
      }
      .column4 {
        width: 100px;
      }
      .column5 {
        width: 140px;
      }
      .column6 {
        width: 158px;
      }
      .column7 {
        width: 100px;
      }
      .column8 {
        width: 100px;
      }
      .column9 {
        width: 100px;
      }
      .column10 {
        width: 100px;
      }
      .column11 {
        width: 100px;
      }
    }
  }
</style>