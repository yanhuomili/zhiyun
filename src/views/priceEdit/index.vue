<template>
  <div class="priceEdit" id="priceEdit">
    <div class="main-box">
      <div class="to-someone mar-t20 el-form f0">
        <span class="to-someone_span">TO</span>
        <el-select v-model="receive" placeholder="请选择" style="width:300px;vertical-align:middle">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="main-box">
      <div class="ship-line-info">
        <div class="h3" v-if="quoteVO.serviceId.indexOf(0)>-1">
          <span>{{quoteVO.startPortName}}→{{quoteVO.endPortName}}</span>
        </div>
        <div>
          <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(0)>-1">
            <span>承运人：张小二</span>
            <span>中转方式：中转BREMRHAVEN</span>
            <span>预计开船日期：2017-11-29</span>
          </p>
          <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(0)>-1">
            <span>承航名/航次：EDITHMAERSK/748W</span>
            <span>航线：*AE7</span>
          </p>
          <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(1)>-1">
            <span>拖柜地点：{{quoteVO.trailerQuoteVOList[0].address}}</span>
            <!-- <i>上海市</i>
            <i>民兴趣</i>
            <i>上市路平安大道七号</i> -->
          </p>
          <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(3)>-1">
            <span>仓储港口：{{quoteVO.storageQuoteVOList[0].startPort}}</span>
          </p>
          <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(2)>-1">
            <span>报关地：{{quoteVO.customsQuoteVOList[0].declarePlace}}</span>
            <span>名品数量：{{quoteVO.customsQuoteVOList[0].productQuantity}}</span>
          </p>
          <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(4)>-1">
            <span>证书类型：{{quoteVO.certificateQuoteVOList[0].certificateQuoteDetailVOList[0].name}}</span>
          </p>
          <p class="ship-li-p" v-if="quoteVO.serviceId.indexOf(5)>-1">
            <span>保险发票全额：{{quoteVO.insuranceQuoteVOList[0].insuranceQuoteDetailVOList[0].invoiceAmount}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="main-box">
      <div class="fcl-price-detail">
        <div id="toPdfBox">
          <div class="h3">
            <span>费用包含</span>
          </div>
          <div class="edit-box">
            <div class="edit-input-box">
              <el-form :model="quoteVO" ref="dynamicValidateForm" id="el-form">
                <!-- <dl class="edit-box-dl clearfix">
                <dt class="edit-box-dt fl">CIF订舱服务费：</dt>
                <dd class="edit-box-dd fl">
                  <div class="edit-bd-unit fl">待定</div>
                </dd>
              </dl> -->
                <!-- 海运 -->
                <template v-if="quoteVO.shippingQuoteVOList&&quoteVO.shippingQuoteVOList[0]&&quoteVO.shippingQuoteVOList[0].shippingQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.shippingQuoteVOList[0].shippingQuoteDetailVOList">
                    <dt class="edit-box-dt fl">海运费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">USD</div>
                      <div class="edit-bd-input fl">
                        <el-input type="number" v-model.number="item.actualPrice" style="width:90px;height:26px;"></el-input>
                      </div>
                      <span class="fl edit-bd-dd-unit">*{{item.quantity}}&nbsp;箱</span>
                      <div class="edit-bd-hh fl" :hh="item.actualAmount=item.quantity*item.actualPrice">{{item.actualAmount}}</div>
                    </dd>
                  </dl>
                </template>
                <!-- 海运附加费 -->
                <dl class="edit-box-dl clearfix" v-for="item in quoteVO.surchargeQuoteDetailVOList">
                  <dt class="edit-box-dt fl">{{formatTitle(item.name)}}：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">{{item.currency}}</div>
                    <div class="edit-bd-input fl">
                      <el-input type="number" v-model.number="item.actualPrice" style="width:90px;height:26px;"></el-input>
                    </div>
                    <span class="fl edit-bd-dd-unit">*{{item.quantity}}&nbsp;{{item.unit}}</span>
                    <div class="edit-bd-hh fl" :hh="item.actualAmount=item.quantity*item.actualPrice">{{item.actualAmount}}</div>
                  </dd>
                </dl>
                <!-- 拖车 -->
                <template v-if="quoteVO.trailerQuoteVOList&&quoteVO.trailerQuoteVOList[0]&&quoteVO.trailerQuoteVOList[0].trailerQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.trailerQuoteVOList[0].trailerQuoteDetailVOList">
                    <dt class="edit-box-dt fl">拖车费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB</div>
                      <div class="edit-bd-input fl">
                        <el-input type="number" v-model.number="item.actualPrice" style="width:90px;height:26px;"></el-input>
                      </div>
                      <span class="fl edit-bd-dd-unit">*{{item.quantity}}&nbsp;箱</span>
                      <div class="edit-bd-hh fl" :hh="item.actualAmount=item.quantity*item.actualPrice">{{item.actualAmount}}</div>
                    </dd>
                  </dl>
                </template>
                <!-- 报关 -->
                <template v-if="quoteVO.customsQuoteVOList&&quoteVO.customsQuoteVOList[0]&&quoteVO.customsQuoteVOList[0].customsQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.customsQuoteVOList[0].customsQuoteDetailVOList">
                    <dt class="edit-box-dt fl">{{formatTitle(item.name)}}：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB</div>
                      <div class="edit-bd-input fl">
                        <el-input type="number" v-model.number="item.actualPrice" style="width:90px;height:26px;"></el-input>
                      </div>
                      <span class="fl edit-bd-dd-unit">*{{item.quantity}}&nbsp;箱</span>
                      <div class="edit-bd-hh fl" :hh="item.actualAmount=item.quantity*item.actualPrice">{{item.actualAmount}}</div>
                    </dd>
                  </dl>
                </template>
                <!-- 仓储 -->
                <template v-if="quoteVO.storageQuoteVOList&&quoteVO.storageQuoteVOList[0]&&quoteVO.storageQuoteVOList[0].storageQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.storageQuoteVOList[0].storageQuoteDetailVOList">
                    <dt class="edit-box-dt fl">仓储费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB</div>
                      <div class="edit-bd-input fl">
                        <el-input type="number" v-model.number="item.actualPrice" style="width:90px;height:26px;"></el-input>
                      </div>
                      <span class="fl edit-bd-dd-unit">*{{item.quantity}}&nbsp;箱</span>
                      <div class="edit-bd-hh fl" :hh="item.actualAmount=item.quantity*item.actualPrice">{{item.actualAmount}}</div>
                    </dd>
                  </dl>
                </template>
                <!-- 证书 -->
                <template v-if="quoteVO.certificateQuoteVOList&&quoteVO.certificateQuoteVOList[0]&&quoteVO.certificateQuoteVOList[0].certificateQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.certificateQuoteVOList[0].certificateQuoteDetailVOList">
                    <dt class="edit-box-dt fl">证书费({{item.name}})：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB</div>
                      <div class="edit-bd-input fl">
                        <el-input type="number" v-model.number="item.actualPrice" style="width:90px;height:26px;"></el-input>
                      </div>
                      <span class="fl edit-bd-dd-unit">*1&nbsp;票</span>
                      <div class="edit-bd-hh fl">{{item.actualPrice}}</div>
                    </dd>
                  </dl>
                </template>
                <!-- 保险 -->
                <template v-if="quoteVO.insuranceQuoteVOList&&quoteVO.insuranceQuoteVOList[0]&&quoteVO.insuranceQuoteVOList[0].insuranceQuoteDetailVOList">
                  <dl class="edit-box-dl clearfix" v-for="item in quoteVO.insuranceQuoteVOList[0].insuranceQuoteDetailVOList">
                    <dt class="edit-box-dt fl">保险费：</dt>
                    <dd class="edit-box-dd fl">
                      <div class="edit-bd-unit fl">RMB</div>
                      <div class="edit-bd-input fl">
                        <el-input type="number" v-model.number="item.amount" style="width:90px;height:26px;"></el-input>
                      </div>
                      <span class="fl edit-bd-dd-unit">*1&nbsp;票</span>
                      <div class="edit-bd-hh fl">{{item.amount}}</div>
                    </dd>
                  </dl>
                </template>
                <div class="carefull">
                  <table class="w100b">
                    <tbody>
                      <tr class="pad-b20" v-if="quoteVO.shippingQuoteVOList&&quoteVO.shippingQuoteVOList[0]">
                        <td class="td-left">海运备注</td>
                        <td>
                          <!-- <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="quoteVO.shippingQuoteVOList[0].remark" id="shippingTextarea"></el-input> -->
                          <div id="shippingTextarea">
                            <div v-html="quoteVO.shippingQuoteVOList[0].remark">
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="quoteVO.trailerQuoteVOList&&quoteVO.trailerQuoteVOList[0]">
                        <td class="td-left">拖车备注</td>
                        <td>
                          <div id="trailerTextarea">
                            <div v-html="quoteVO.trailerQuoteVOList[0].remark">
                            </div>
                          </div>
                          <!-- <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="quoteVO.trailerQuoteVOList[0].remark"></el-input> -->
                        </td>
                      </tr>
                      <tr v-if="quoteVO.customsQuoteVOList&&quoteVO.customsQuoteVOList[0]">
                        <td class="td-left">报关备注</td>
                        <td>
                          <div id="customsTextarea">
                            <div v-html="quoteVO.customsQuoteVOList[0].remark">
                            </div>
                          </div>
                          <!-- <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="quoteVO.customsQuoteVOList[0].remark"></el-input> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <span>注：</span>
                其他未列明费用请以客服告知或平台数据为准。 -->
                </div>
              </el-form>
            </div>
            <div class="edit-box-count">
              <div class="fl left">
                费用合计
              </div>
              <div class="right">
                <div class="pp">
                  <span>USD</span>
                  <span>{{quoteVO.actualUsdTotal||quoteVO.defaultUsdTotal}}</span>
                </div>
                <div class="pp">
                  <span>RMB</span>
                  <span>{{quoteVO.actualRmbTotal||quoteVO.defaultRmbTotal}}</span>
                </div>
              </div>
            </div>
            <span class="edit-bc-calculate ht_btn_default" :class="{loading:isCalculateing}" @click="calculateQuote">{{isCalculateing?'计算中':'计算价格'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="button-save-and-edit ht_btn_default" :class="{loading:isSaveAndEdit}" @click="saveAndEdit">{{isSaveAndEdit?'预览中':'预览'}}</div>
  </div>
</template>
<script>
  import {
    form,
    formItem,
    input,
    select,
    option,
    button,
    checkbox,
    tag
  } from 'element-ui'
  import Quill from 'quill'
  import { updateQuote, getQuoteById, calculateQuote } from '@/api/quoteAPI'
  export default {
    data() {
      return {
        receive: '',
        num: 2,
        options: [{
          value: '选项1',
          label: '张三'
        }, {
          value: '选项2',
          label: '李四'
        }, {
          value: '选项3',
          label: '张小二'
        }, {
          value: '选项4',
          label: '翠花'
        }, {
          value: '选项5',
          label: '龙五'
        }],
        isCalculateing: false,
        isSaveAndEdit: false,
        quoteVO: {
          serviceId: ''
        }
      }
    },
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
      'el-button': button,
      'el-select': select,
      'el-option': option,
      'el-checkbox': checkbox,
      'el-tag': tag
    },
    methods: {
      async updateQuote() {
        this.isSaveAndEdit = true
        try {
          const data = (await updateQuote({ data: this.quoteVO })).data
          if (data.returnCode === 0) {
            this.$message({ message: '更新成功', type: 'success' })
            return data.quote
          }
        } catch (error) {
          this.isSaveAndEdit = false
          throw Error(error)
        }
      },
      async getQuoteById(id) {
        try {
          const data = (await getQuoteById({ params: { id: id } })).data
          if (data.returnCode === 0) {
            this.quoteVO = data.data
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
      checkInputNumber() {
        let hasEmpty = false
        const allInputEle = document.querySelectorAll('#el-form .el-input__inner');
        [].slice.call(allInputEle).filter((v, k) => {
          if (!v.value) {
            hasEmpty = true
          } else if (isNaN(v.value)) {
            hasEmpty = true
          }
        })
        if (hasEmpty) {
          this.$alert('所改价格非数字或为空')
          return false
        }
        return true
      },
      async calculateQuote() {
        if ((!this.checkInputNumber()) || this.isCalculateing) {
          return false
        }
        this.isCalculateing = true
        try {
          const data = (await calculateQuote({ data: this.quoteVO })).data
          if (data.returnCode === 0) {
            this.quoteVO = data.quote
          }
        } catch (error) {
          throw Error(error)
        } finally {
          this.isCalculateing = false
        }
      },
      saveAndEdit() {
        if ((!this.checkInputNumber()) || this.isSaveAndEdit) {
          return false
        }
        if (document.getElementById('shippingTextarea')) {
          this.quoteVO.shippingQuoteVOList[0].remark = document.querySelector('#shippingTextarea .ql-editor').innerHTML
        }
        if (document.getElementById('trailerTextarea')) {
          this.quoteVO.trailerQuoteVOList[0].remark = document.querySelector('#trailerTextarea .ql-editor').innerHTML
        }
        if (document.getElementById('customsTextarea')) {
          this.quoteVO.customsQuoteVOList[0].remark = document.querySelector('#customsTextarea .ql-editor').innerHTML
        }
        this.updateQuote()
        this.$router.push({ name: 'quotation', params: { quoteVO: this.quoteVO }, query: { id: this.$route.query.id } })
      }
    },
    mounted() {
      setTimeout(() => {
        if (document.getElementById('shippingTextarea')) {
          this.shippingTextarea = new Quill('#shippingTextarea', {
            theme: 'snow'
          })
        }
        if (document.getElementById('trailerTextarea')) {
          this.trailerTextarea = new Quill('#trailerTextarea', {
            theme: 'snow'
          })
        }
        if (document.getElementById('customsTextarea')) {
          this.customsTextarea = new Quill('#customsTextarea', {
            theme: 'snow'
          })
        }
      }, 300)
    },
    created() {
      // if (this.$route.params) {
      //   localStorage.setItem('quoteVO', JSON.stringify(this.$route.params))
      // } else {
      //   this.quoteVO = JSON.parse(localStorage.getItem('quoteVO'))
      // }
      this.getQuoteById(this.$route.query.id)
      // let doc = new jsPDF
    },
    computed: {}
  }

</script>
<style lang="scss">
  @import "./equillCore.scss"
</style>
<style lang="scss" scoped>
  #priceEdit {
    .h3 {
      position: relative;
      font-size: 20px;
      line-height: 20px;
    }
    .h3:before {
      content: '';
      display: block;
      width: 2px;
      background-color: #6297F4;
      height: 100%;
      top: 0;
      left: -16px;
      position: absolute;
    }

    .ship-li-p {
      font-size: 16px;
      margin-top: 18px;
      line-height: 16px;
      color: #666;
      span {
        margin-left: 100px;
        display: inline-block;
      }
      i {
        display: inline-block;
        font-style: normal;
        margin-left: 22px;
      }
    }
    .ship-li-p span:first-child {
      margin-left: 0;
    }
    .to-someone_span {
      display: inline-block;
      line-height: 38px;
      font-size: 28px;
      padding-right: 16px;
      vertical-align: middle;
    }
    .ship-line-info {
      margin-top: 28px;
      padding: 30px 50px;
      border: 1px solid #ddd;
    }
    .fcl-price-detail {
      background: #F1F1F1;
      margin-top: 28px;
      padding: 30px 50px;
      border: 1px solid #ddd;
      /* padding: 30 52px;
      border: 1px solid #ddd; */
    }
    .edit-box {
      width: 520px;
      margin-left: 60px;
      margin-top: 24px;
      /* margin: 20px auto; */
    }
    .edit-input-box {
      border-bottom: 1px solid #ddd;
      font-size: 16px;
    }
    .edit-box-dl {
      margin: 0;
      color: #666;
    }
    .edit-box-dl+.edit-box-dl {
      margin-top: 22px;
    }
    .edit-box-dt {
      width: 180px;
      text-align: right;
    }
    .edit-box-dd {
      margin-left: 5px;
    }
    .edit-bd-unit {
      width: 34px;
      padding-right: 16px;
      text-align: left;
      color: #D84C56;
    }
    .edit-input-box /deep/ .el-input__inner {
      height: 26px;
      line-height: 26px;
    }
    .edit-bd-input {
      width: 90px;
      text-align: left;
    }
    .edit-bd-dd-unit {
      width: 60px;
    }
    .carefull {
      font-size: 12px;
      line-height: 12px;
      margin: 22px 0 12px 36px;
      .td-left {
        width: 80px;
        text-align: center;
      }
      td {
        padding-bottom: 20px;
      }
    }
    .edit-bd-hh {
      width: 120px;
      text-align: right;
    }
    .edit-box-count {
      width: 380px;
      height: 120px;
      margin: 20px 100px;
      box-sizing: border-box;
      padding: 30px;
      background-color: #fff;
      .left {
        width: 136px;
        font-size: 24px;
      }
      .right {
        float: left;
        color: #D84C56;
        font-size: 20px;
        line-height: 20px;
        .pp+.pp {
          margin-top: 18px;
        }
        span {
          display: inline-block;
        }
        .pp span:first-child {
          display: inline-block;
          width: 88px;
        }
      }
      /* span {
        display: inline-block;
        width: 100px;
        font-size: 20px;
      } */
    }
    .edit-bc-calculate {
      display: inline-block;
      padding: 0 50px;
      line-height: 44px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      background-color: #6297F4;
      margin: 10px auto;
      margin-left: 100px;
      cursor: pointer;
    }
    .button-save-and-edit {
      width: 200px;
      line-height: 46px;
      text-align: center;
      color: #fff;
      font-size: 18px;
      background-color: #6297F4;
      margin: 48px auto 160px;
      cursor: pointer;
    }
  }
</style>