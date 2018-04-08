<template>
  <div class="trailer">
    <div class="title">
      证书费包含
    </div>
    <div class="proce-box">
      <div class="dl clearfix">
        <div class="dt fl">证书费({{certificateDataObj.certificateQuoteTmpVO&&certificateDataObj.certificateQuoteTmpVO.typeName}}):</div>
        <div class="dd fl">
          <div class="dd-child1 fl">CNY{{certificateDataObj.certificateQuoteTmpVO&&certificateDataObj.certificateQuoteTmpVO.price}}</div>
        </div>
      </div>
      <!-- <div class="dl clearfix">
        <div class="dt fl">证书服务费费:</div>
        <div class="dd fl">
          <div class="dd-child1 fl">CNY70
            <span class="ques">?</span>
          </div>
        </div>
      </div> -->
    </div>
    <div class="all-box">
      <span class="all-text">费用共计</span>
      <span class="all-usd">CNY</span>
      <span class="all-num">{{certificateDataObj.certificateQuoteTmpVO&&certificateDataObj.certificateQuoteTmpVO.price}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['certificateDataObj'],
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
  .trailer {
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
      position: relative;
    }
    .ques {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid #6297F4;
      color: #6297F4;
      box-sizing: border-box;
      position: absolute;
      top: -8px;
      font-size: 12px;
      line-height: 14px;
      border-radius: 100% 100%;
      text-align: center;
      /* font-weight: bold; */
      margin-left: 4px;
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