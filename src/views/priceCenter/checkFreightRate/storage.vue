<template>
  <div class="storage">
    <div class="title">
      仓储费包含
    </div>
    <div class="proce-box">
      <div class="dl clearfix" v-for="item in storageDataObj.storageQuoteTmpVOList">
        <div class="dt fl text-over">{{item.englishName}}:</div>
        <div class="dd fl">
          <div class="dd-child1 fl">CNY {{item.price}}</div>
          <div class="dd-child2 fl">({{item.unit}})</div>
        </div>
      </div>
      <!-- <div class="dl clearfix">
        <div class="dt fl">仓储费(20'GP):</div>
        <div class="dd fl">
          <div class="dd-child1 fl">CNY150</div>
          <div class="dd-child2 fl">(150*1车)</div>
        </div>
      </div>
      <div class="dl clearfix">
        <div class="dt fl">码头费:</div>
        <div class="dd fl">
          <div class="dd-child1 fl">CNY70</div>
          <div class="dd-child2 fl">(70*1箱)</div>
        </div>
      </div> -->
    </div>
    <div class="all-box">
      <span class="all-text">费用共计</span>
      <span class="all-usd">CNY</span>
      <span class="all-num">{{storageDataObj.storageTotal}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: [
      'storageDataObj'
    ],
    mounted() {

    },
    components: {

    },
    computed: {
    },
    methods: {
    }
  }

</script>

<style lang="scss" scoped>
  .storage {
    padding: 20px 60px 78px;
    background-color: #F1F1F1;
    .title {
      font-size: 24px;
      line-height: 24px;
    }
    .proce-box {
      margin-left: 80px;
      line-height: 16px;
      font-size: 16px;
      margin-top: 32px;
      color: #666;
    }
    .dl+.dl {
      margin-top: 18px;
    }
    .dt {
      width: 120px;
      text-align: right;
    }
    .dd-child1 {
      width: 135px;
      color: #D84C56;
      padding-left: 10px;
    }
    .all-box {
      width: 380px;
      font-size: 0;
      margin: 48px auto 0;
      background-color: #fff;
    }
    .all-text {
      display: inline-block;
      font-size: 24px;
      padding-left: 71px;
      padding-right: 21px;
      line-height: 80px;
    }
    .all-usd {
      display: inline-block;
      font-size: 20px;
      padding-left: 21px;
      padding-right: 44px;
      color: #D84C56;
      line-height: 80px;
    }
    .all-num {
      display: inline-block;
      font-size: 20px;
      color: #D84C56;
      line-height: 80px;
    }
  }
</style>