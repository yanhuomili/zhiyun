<template>
  <div id="supplementData">
    <div class="main-box">
      <div class="content-table">
        <table class="w100b" cellspacing="0" cellpadding="0">
          <thead class="ct-thead">
            <tr>
              <th>下单日期</th>
              <th>客户名</th>
              <th>订单号</th>
              <th>提单号</th>
              <th>起运港</th>
              <th>目的港</th>
              <th>截关时间</th>
              <th>海运</th>
              <th>拖车</th>
              <th>报关</th>
              <th>仓储</th>
              <th>证书</th>
              <th>保险</th>
            </tr>
          </thead>
          <tbody class="ct-tbody">
            <tr v-for="item in listData" class="ct-tb-item">
              <td>{{(new Date(item.createDate)).Format('yyyy-MM-dd hh:mm')}}</td>
              <td>{{item.company}}</td>
              <td>{{item.id}}</td>
              <td>3333213</td>
              <td>{{item.loadingPort}}</td>
              <td>{{item.destinationPort}}</td>
              <td>2017-12-12</td>
              <td class="ct-tb8">
                <span class="ct-tb-edit-btn ht_btn_default_empty" @click="gotoSupplementData(item.id)">编辑</span>
                <p class="ct-tb8-time">2017-12-16止</p>
              </td>
              <td>已完成</td>
              <td>已完成</td>
              <td>已完成</td>
              <td>已完成</td>
              <td>已完成</td>
            </tr>
          </tbody>
        </table>
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
  import { listOrder } from '@/api/orderAPI'
  export default {
    data() {
      return {
        listData: []
      }
    },
    mounted() {
      this.listOrder()
    },
    computed: {
    },
    components: {
    },
    watch: {
    },
    methods: {
      gotoSupplementData(id) {
        this.$router.push({ path: '/orderDetailFillin', query: { id: id } })
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
    }
  }

</script>

<style lang="scss" scoped>
  #supplementData {
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
      .ct-tbody td {
        padding: 8px 0;
      }
      .ct-th {
        display: table-cell;
        vertical-align: middle;
      }
      .ct-th1 {
        width: 90px;
      }
      .ct-th2 {
        width: 150px;
      }
      .ct-th3 {
        width: 80px;
      }
      .ct-th4 {
        width: 80px;
      }
      .ct-th5 {
        width: 90px;
      }
      .ct-th6 {
        width: 90px;
      }
      .ct-th7 {
        width: 90px;
      }
      .ct-th8 {
        width: 90px;
      }
      .ct-th9 {
        width: 90px;
      }
      .ct-th10 {
        width: 90px;
      }
      .ct-th11 {
        width: 90px;
      }
      .ct-th12 {
        width: 90px;
      }
      .ct-tb-item td {
        border-top: 1px solid #ddd;
      }
      .ct-tbody {
        font-size: 14px;
        color: #666;
        .ct-tb8 {
          color: #6297F4;
        }
        .ct-tb-edit-btn {
          font-size: 12px;
          padding: 0 8px;
          border: 1px solid #6297F4;
          line-height: 20px;
          display: inline-block;
          cursor: pointer;
        }
        .ct-tb8-time {
          font-size: 10px;
          line-height: 10px;
          margin-top: 4px;
        }
      }
    }
  }
</style>