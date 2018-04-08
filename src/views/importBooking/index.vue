<template>
  <div id="importBooking">
    <div class="main-box">
      <div class="booking-info customsDeclaration trailer-info upload-file">
        <div class="mar-t20">
          <el-form ref="refForm" :model="searchData" :inline="false" label-width="120px" label-position="right" class="booking-information-form">
            <el-form-item label="委托填写方式:">
              <el-radio-group v-model="searchData.type">
                <el-radio :label="1">文件导入</el-radio>
                <el-radio :label="2">代客户填写</el-radio>
              </el-radio-group>
            </el-form-item>
            <div class="button-upload-box table w100b">
              <div v-show="searchData.type==1">
                <div class="title">请上传相关文件</div>
                <div class="button-box button-box1">
                  <p class="attention">客户委托书(仅支持Excel格式)</p>
                  <div class="button-up">
                    <div class="jia"></div>
                    <p>上传文件</p>
                  </div>
                </div>
              </div>
              <div v-show="searchData.type==2">
                <div class="title">代客户填写</div>
                <div class="button-box button-box2">
                  <div class="el-form">
                    <el-form-item label="原因:" label-width="60px">
                      <el-radio-group v-model="searchData.radio">
                        <el-radio :label="1">客户外出</el-radio>
                        <el-radio :label="2">客户无我司订仓格式</el-radio>
                        <el-radio :label="3">其它</el-radio>
                      </el-radio-group>
                      <el-input type="textarea" v-model="searchData.desc" v-show="searchData.radio==3" placeholder="请填写原因"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div class="main-box authorization-box text-center">
      <div class="ab-top">
        <el-checkbox></el-checkbox>
        <span style="margin-left:10px">我已经阅读并同意《智运国际物流服务合同》</span>
      </div>
      <div class="ab-button ht_btn_default" @click="submitDelegate">{{searchData.type==1?'提交委托':'前去填写'}}</div>
    </div>
  </div>
</template>

<script>
  import districtSelect from '@/components/DistrictSelect'
  import orderSteps from '@/components/OrderDetailFillSteps/steps'
  import orderStep from '@/components/OrderDetailFillSteps/step'
  import {
    form,
    formItem,
    input,
    checkboxGroup,
    checkbox,
    select,
    option,
    radioGroup,
    datePicker,
    radio,
  } from 'element-ui'
  export default {
    data() {
      return {
        searchData: {
          type: 1,
          value: '',
          radio: 3,
          desc: '',
          checkList: []
        },
        orderStep: 1,
        orderStepInfoArr: [{
          title: '已选择服务',
          info: '已选择：拖车+报关+海运订舱'
        }, {
          title: '填写详细信息',
          info: ''
        }, {
          title: '完成',
          info: ''
        }]
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
      'el-checkbox': checkbox,
      'el-select': select,
      'el-option': option,
      'el-checkbox-group': checkboxGroup,
      'el-radio': radio, 'el-date-picker': datePicker,
      'el-radio-group': radioGroup,
      districtSelect,
      orderStep,
      orderSteps
    },
    methods: {
      submitDelegate() {
        if (this.searchData.type === 1) {
          this.$router.push({ path: '/booking' })
        } else {
          this.$router.push({ path: '/orderPrepareDetailFillin', query: { id: this.$route.query.id } })
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  #importBooking {

    .booking-info {
      box-sizing: border-box;
      padding: 30px;
      position: relative;
      border: 1px solid #ddd;
      .el-form /deep/ .el-form-item__label {
        line-height: 36px;
        font-size: 16px;
      }
      .el-form /deep/ .el-radio__label {
        line-height: 36px;
        font-size: 16px;
      }
      .el-form .el-form-item {
        color: #666;
      }
      .el-form /deep/ .el-form-item__label {
        color: #666;
      }
      .el-form .label-right /deep/ .el-form-item__label {
        text-align: right;
      }
      .el-form-item {
        margin-bottom: 14px;
      }
      .booking-information-form.el-form .el-form-item /deep/ .el-form-item__content {
        width: auto;
        .el-input {
          width: 240px;
        }
      }
      .el-form-item /deep/ .el-form-item__content {
        /* .el-input {
          width: 240px;
        } */
        width: 240px;
        line-height: 36px;
        .el-input__inner {
          height: 36px;
          line-height: 36px;
        }
        textarea {
          width: 320px;
          height: 100px;
        }
      }
      .tips {
        line-height: 36px;
        color: #fff;
        text-align: center;
        background-color: #D84C56;
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 20px;
      }
      .title {
        font-size: 24px;
        line-height: 24px;
      }
      .left {
        box-sizing: border-box;
        border-right: 1px solid #ddd;
        padding-left: 40px;
        padding-top: 16px;
      }
      .right {
        box-sizing: border-box;
        padding-left: 70px;
        padding-top: 16px;
      }
      .h36 {
        line-height: 36px;
      }
      .button-upload-box {
        padding-left: 50px;
      }
    }
    .trailer-info {
      margin-top: 46px;
      .title {
        font-size: 18px;
      }
      .form-box {
        box-sizing: border-box;
        padding-left: 40px;
        padding-top: 12px;
      }
      .tuoche-juti {
        width: 260px;
        margin-left: 14px;
      }
      .el-form-item.dif /deep/ .el-form-item__content {
        width: auto;
      }
      .el-form-item /deep/ .el-form-item__content {
        .el-date-editor {
          width: 180px;
        }
        width: 180px;
      }
    }
    .customsDeclaration {
      .el-form-item /deep/ .el-form-item__content {
        width: 240px;
      }
      .el-form .el-select {
        width: 240px;
      }
    }
    .customsDeclaration.upload-file {
      .el-form-item /deep/ .el-form-item__content .el-date-editor {
        width: 100%;
      }
    }
    .upload-file {
      .button-up {
        width: 160px;
        height: 160px;
        border: 2px solid #6297F4;
        text-align: center;
        margin: 30px 0 20px;
        cursor: pointer;
        font-size: 18px;
        color: #999;
      }
      .button-box {
        padding: 10px 80px;
        /* padding-top: 10px; */
        /* padding-bottom: 10px; */
      }
      .button-box1 {
        border-right: 1px solid #ddd;
        box-sizing: border-box;
      }
      .jia {
        width: 50px;
        height: 50px;
        position: relative;
        margin: 36px auto 24px;
      }
      .button-box1 {
        margin: 0 auto;
      }
      .jia:before {
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        height: 2px;
        background-color: #6297F4;
        top: 50%;
        margin-top: -2px;
      }
      .jia:after {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 2px;
        background-color: #6297F4;
        left: 50%;
        margin-left: -2px;
      }
      .attention {
        font-size: 14px;
        color: #666;
      }
    }
    .relation-info {
      margin-top: 46px;
      .title {
        font-size: 18px;
      }
    }
    .authorization-box {
      margin-top: 60px;
      .ab-top {}
      .ab-button {
        cursor: pointer;
        display: inline-block;
        margin: 22px auto 140px;
        padding: 0 34px;
        color: #fff;
        font-size: 18px;
        line-height: 42px;
        background-color: #6297F4;
      }
    }
  }
</style>