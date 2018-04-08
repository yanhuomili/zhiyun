<template>
  <div id="orderDetailFillin">
    <div class="main-box">
      <div class="top">
        <order-steps v-model="orderStep">
          <order-step v-for="item in orderStepInfoArr" :key="item.title">
            <span slot="title">{{item.title}}</span>
            <span slot="info">{{item.info}}</span>
          </order-step>
        </order-steps>
        <!-- <div class="od-step" v-for="item in 3">
          <div class="od-step-top">
            <div class="od-num-box">
              1
            </div>
            <div class="od-main-text">已选择服务</div>
            <div class="od-line"></div>
          </div>
          <div class="od-step-bottom">
            已选择：拖车+报关+海运订舱
          </div>
        </div> -->
      </div>
    </div>
    <div class="full-line">
    </div>
    <div class="main-box">
      <div class="booking-info" v-if="serviceId.indexOf(allServiceObj.shipping)>-1">
        <div class="tips">请填写准确信息</div>
        <div class="title">订舱信息</div>
        <el-form ref="refForm" :model="dataObj.orderBookingVOList[0]" :inline="false" label-width="120px" label-position="left" class="booking-information-form">
          <div class="detail-info-box table w100b">
            <div class="left w50b table-cell">
              <el-form-item label="起运港">
                <span class="h36 inline-block">
                  {{dataObj.orderBookingVOList[0].loadingPort}}
                </span>
              </el-form-item>
              <el-form-item label="目的港">
                <span class="h36 inline-block">
                  {{dataObj.orderBookingVOList[0].destinationPort}}</span>
              </el-form-item>
              <el-form-item label="船公司">
                <span class="h36 inline-block">
                  {{dataObj.orderBookingVOList[0].shippingCompany}}</span>
              </el-form-item>
              <el-form-item label="船名">
                <span class="h36 inline-block">
                  {{dataObj.orderBookingVOList[0].vessel}}</span>
              </el-form-item>
              <el-form-item label="航次">
                <span class="h36 inline-block">
                  {{dataObj.orderBookingVOList[0].voyage}}</span>
              </el-form-item>
              <el-form-item label="开航日期">
                <span class="h36 inline-block">
                  {{(new Date(dataObj.orderBookingVOList[0].sailingDate)).Format('yyyy-MM-dd hh:mm')}}
                  <!-- {{dataObj.orderBookingVOList[0].sailingDate}} -->
                </span>
              </el-form-item>
              <el-form-item label="箱货详情">
                <p v-for="item in dataObj.orderBookingVOList[0].bookingDetailVOList" :key="item.id">{{item.quantity}}*{{item.containerTypeName}}</p>
              </el-form-item>
              <el-form-item label="发货人">
                <el-input v-model="dataObj.orderBookingVOList[0].shipper"></el-input>
              </el-form-item>
              <el-form-item label="收货人">
                <el-input v-model="dataObj.orderBookingVOList[0].consignee"></el-input>
              </el-form-item>
              <el-form-item label="通知人">
                <el-input v-model="dataObj.orderBookingVOList[0].notifier"></el-input>
              </el-form-item>
            </div>
            <div class="right w50b table-cell">
              <el-form-item label="货名">
                <el-input v-model="dataObj.orderBookingVOList[0].articleName"></el-input>
              </el-form-item>
              <el-form-item label="唛头和标记">
                <el-input v-model="dataObj.orderBookingVOList[0].articleName"></el-input>
              </el-form-item>
              <el-form-item label="重量" class="dif">
                <el-input v-model="dataObj.orderBookingVOList[0].weight" style="width:110px;display:inline-block;"></el-input>
                <span class="mar-l20">KGS</span>
              </el-form-item>
              <el-form-item label="尺寸" class="dif">
                <el-input v-model="dataObj.orderBookingVOList[0].size" style="width:110px;display:inline-block;"></el-input>
                <span class="mar-l20">CBM</span>
              </el-form-item>
              <el-form-item label="提单要求">
                <el-radio-group v-model="dataObj.orderBookingVOList[0].billLadingType">
                  <el-radio label="masterBill">HB/L 正本</el-radio>
                  <el-radio label="surrenderedBill">TXL 电放</el-radio>
                  <el-radio label="swb">Seaway B/L</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="贸易方式">
                <el-radio-group v-model="dataObj.orderBookingVOList[0].transactionType">
                  <el-radio label="CIF">CIF</el-radio>
                  <el-radio label="CandF">C&F</el-radio>
                  <el-radio label="FOB">FOB</el-radio>
                  <el-radio label="Other">other</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="付款方式">
                <el-radio-group v-model="dataObj.orderBookingVOList[0].paymentType">
                  <el-radio label="prePaid">Prepaid 预付</el-radio>
                  <el-radio label="collect">Collect 到付</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="发票类型">
                <el-radio-group v-model="dataObj.orderBookingVOList[0].invoiceType">
                  <el-radio label="special">专票</el-radio>
                  <el-radio label="general">普票</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="特殊要求">
                <el-input type="textarea" v-model="dataObj.orderBookingVOList[0].remark"></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <div class="trailer-info booking-info upload-file" v-if="serviceId.indexOf(allServiceObj.trailer)>-1">
        <div class="title">拖车信息</div>
        <div class="form-box">
          <el-form ref="trailerForm" :model="dataObj.orderTrailerVOList[0]" :inline="true" label-width="120px" label-position="left">
            <div>
              <el-form-item label="起运港">
                {{dataObj.orderTrailerVOList[0].loadingPort}}
              </el-form-item>
            </div>
            <!-- <div>
              <el-form-item label="码头">
                <el-select v-model="dataObj.orderTrailerVOList[0].type" placeholder="码头">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <el-form-item label="拖车地点" class="dif">
              <district-select></district-select>
              <el-select v-model="dataObj.orderTrailerVOList[0].type" placeholder="请选择拖车详细地址" class="tuoche-juti">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item> -->
            <div>
              <el-form-item label="预计装货时间:">
                <el-date-picker v-model="dataObj.orderTrailerVOList[0].expectedLoadingTime" type="datetime" placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="联系姓名">
                <el-input v-model="dataObj.orderTrailerVOList[0].contactName"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" label-width="110px" class="label-right">
                <el-input v-model="dataObj.orderTrailerVOList[0].contactPhone"></el-input>
              </el-form-item>
              <el-form-item label="拖柜地址单位名称" label-width="174px" class="label-right">
                <el-input v-model="dataObj.orderTrailerVOList[0].factoryName"></el-input>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="特殊要求">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="dataObj.orderTrailerVOList[0].remark"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="mar-t20">
          <div class="title">请上传相关文件</div>
          <div class="button-upload-box table w100b">
            <div class="w50b table-cell">
              <div class="button-box">
                <p class="attention">S/O(仅支持Excel格式)</p>
                <div class="button-up-box">
                  <el-upload class="w100b" :action="baseUrl+'/file/upload?orderId='+orderId+'&serviceType=1'" :show-file-list="false" :on-success="uploadTrailerFileSuccess"
                    :before-upload="beforeExcelUpload">
                    <div class="button-up">
                      <div class="jia"></div>
                      <p>上传文件</p>
                    </div>
                  </el-upload>
                </div>
              </div>
              <el-table :data="dataObj.orderTrailerVOList[0].orderUploadFileVOList" border>
                <el-table-column align="center" label="文件名称">
                  <template slot-scope="scope">
                    <a :href="fileAddress+scope.row.name" :download="scope.row.name">{{scope.row.fileName}}</a>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                  <template slot-scope="scope">
                    <span class="btn-del" @click="deleteTrailerFile(scope.$index,scope.row)">删除</span>
                  </template>
                </el-table-column>
              </el-table>

            </div>
            <div class="w50b table-cell">
            </div>
          </div>
        </div>
      </div>
      <div class="booking-info customsDeclaration trailer-info upload-file" v-if="serviceId.indexOf(allServiceObj.customs)>-1">
        <div class="title">报关信息</div>
        <div class="form-box">
          <el-form ref="trailerForm" :model="dataObj.orderCustomsVOList[0]" :inline="true" label-width="120px" label-position="left">
            <el-form-item label="报关地">
              {{dataObj.orderCustomsVOList[0].customsPlace}}

            </el-form-item>
            <div>
              <el-form-item label="品名数量">
                {{dataObj.orderCustomsVOList[0].productQuantity}}
              </el-form-item>
            </div>
            <div>
              <el-form-item label="预计报关时间:">
                <el-date-picker v-model="dataObj.orderCustomsVOList[0].expectedTime" type="datetime" placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="mar-t20">
          <div class="title">请上传相关文件</div>
          <div class="button-upload-box table w100b">
            <div class="w50b table-cell">
              <div class="button-box button-box1">
                <p class="attention">报关单(仅支持Excel格式)</p>
                <div class="button-up-box">
                  <el-upload class="w100b" :action="baseUrl+'/file/upload?orderId='+orderId+'&serviceType=2'" :show-file-list="false" :on-success="uploadCustomsFileSuccess"
                    :before-upload="beforeExcelUpload">
                    <div class="button-up">
                      <div class="jia"></div>
                      <p>上传文件</p>
                    </div>
                  </el-upload>
                </div>
              </div>
            </div>
            <div class="w50b table-cell">
              <div class="button-box button-box2">
                <p class="attention">装箱单、发票、合同等其他资料(支持png、jpg、gif小于200kb以内)</p>
                <div class="button-up-box">
                  <el-upload class="w100b" :action="baseUrl+'/file/upload?orderId='+orderId+'&serviceType=2'" :show-file-list="false" :on-success="uploadCustomsFileSuccess"
                    :before-upload="beforeImageUpload">
                    <div class="button-up">
                      <div class="jia"></div>
                      <p>上传文件</p>
                    </div>
                  </el-upload>
                </div>
              </div>
            </div>
          </div>
          <el-table :data="dataObj.orderCustomsVOList[0].orderUploadFileVOList" border class="mar-t20">
            <el-table-column align="center" label="文件名称">
              <template slot-scope="scope">
                <a :href="fileAddress+scope.row.name" :download="scope.row.name">{{scope.row.fileName}}</a>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <span class="btn-del" @click="deleteCustomsFile(scope.$index,scope.row)">删除</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- <div class="booking-info trailer-info upload-file">
        <div class="title">请上传相关文件</div>
        <div class="button-upload-box table w100b">
          <div class="w50b table-cell">
            <div class="button-box button-box1">
              <p class="attention">报关单(仅支持Excel格式)</p>
              <div class="button-up">
                <div class="jia"></div>
                <p>上传文件</p>
              </div>
            </div>
          </div>
          <div class="w50b table-cell">
            <div class="button-box button-box2">
              <p class="attention">装箱单、发票、合同等其他资料(支持png、jpg、gif小于200kb以内)</p>
              <div class="button-up">
                <div class="jia"></div>
                <p>上传文件</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="booking-info trailer-info" v-if="serviceId.indexOf(allServiceObj.insurance)>-1">
        <div class="title">保险信息</div>
        <div class="form-box">
          <el-form ref="refForm" :model="dataObj.orderInsuranceVOList[0]" :inline="false" label-width="100px" label-position="left">
            <el-form-item label="发票全额">
              {{dataObj.orderInsuranceVOList[0].insuranceOrderDetailVOList[0].invoiceAmount}}
            </el-form-item>
            <el-form-item label="币种">
              RMB
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="booking-info trailer-info" v-if="serviceId.indexOf(allServiceObj.storage)>-1">
        <div class="title">仓储</div>
        <div class="form-box">
          <el-form ref="refForm" :model="dataObj.orderStorageVOList[0]" :inline="false" label-width="100px" label-position="left">
            <el-form-item label="码头">
              {{dataObj.orderStorageVOList[0].loadingPort}}
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="booking-info trailer-info" v-if="serviceId.indexOf(allServiceObj.certificate)>-1">
        <div class="title">证书</div>
        <div class="form-box">
          <el-form ref="refForm" :model="dataObj" :inline="false" label-width="100px" label-position="left">
            <el-form-item label="类型">
              {{dataObj.orderCertificateVOList[0].certificateOrderDetailVOList[0].name}}
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="booking-info relation-info">
        <div class="title">请确认您的联系信息</div>
        <el-form ref="refForm" :model="dataObj" :inline="false" label-width="100px" label-position="left">
          <div class="detail-info-box table w100b">
            <div class="left w50b table-cell">
              <el-form-item label="公司名称">
                <el-input v-model="dataObj.companyName"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="dataObj.telephone"></el-input>
              </el-form-item>
              <el-form-item label="QQ">
                <el-input v-model="dataObj.qqNumber"></el-input>
              </el-form-item>
            </div>
            <div class="right w50b table-cell">
              <el-form-item label="联系人">
                <el-input v-model="dataObj.contact"></el-input>
              </el-form-item>
              <el-form-item label="手机号码">
                <el-input v-model="dataObj.mobile"></el-input>
              </el-form-item>
              <el-form-item label="贸易订单号">
                <el-input v-model="dataObj.tradeOrderNum"></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <div class="booking-info trailer-info charge-info upload-file">
        <div class="title">费用信息</div>
        <div class="button-upload-box table w100b">
          <div class="edit-box">
            <div class="edit-input-box el-form">
              <!-- 海运 -->
              <template v-if="dataObj.orderBookingVOList&&dataObj.orderBookingVOList[0]">
                <dl class="edit-box-dl clearfix" v-for="item in dataObj.orderBookingVOList[0].bookingDetailVOList">
                  <dt class="edit-box-dt fl">海运费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">USD {{item.quantity*item.actualPrice}}</div>
                    <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                  </dd>
                </dl>
              </template>
              <!-- 海运附加费 -->
              <dl class="edit-box-dl clearfix" v-for="item in dataObj.orderSurchargeVOList">
                <dt class="edit-box-dt fl">{{formatTitle(item.name)}}：</dt>
                <dd class="edit-box-dd fl">
                  <div class="edit-bd-unit fl">{{item.currency}} {{item.quantity*item.actualPrice}}</div>
                  <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} {{item.unit}})</div>
                </dd>
              </dl>
              <!-- 拖车 -->
              <template v-if="dataObj.orderTrailerVOList&&dataObj.orderTrailerVOList[0]">
                <dl class="edit-box-dl clearfix" v-for="item in dataObj.orderTrailerVOList[0].trailerOrderDetailVOList">
                  <dt class="edit-box-dt fl">拖车费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">RMB {{item.quantity*item.actualPrice}}</div>
                    <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                  </dd>
                </dl>
              </template>
              <!-- 报关 -->
              <template v-if="dataObj.orderCustomsVOList&&dataObj.orderCustomsVOList[0]">
                <dl class="edit-box-dl clearfix" v-for="item in dataObj.orderCustomsVOList[0].customsOrderDetailVOList">
                  <dt class="edit-box-dt fl">{{formatTitle(item.name)}}：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">RMB {{item.quantity*item.actualPrice}}</div>
                    <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                  </dd>
                </dl>
              </template>
              <!-- 仓储 -->
              <template v-if="dataObj.orderStorageVOList&&dataObj.orderStorageVOList[0]">
                <dl class="edit-box-dl clearfix" v-for="item in dataObj.orderStorageVOList[0].storageOrderDetailVOList">
                  <dt class="edit-box-dt fl">仓储费({{item.containerTypeName.substr(0,2)+'`'+item.containerTypeName.substr(2,4)}})：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">RMB {{item.quantity*item.actualPrice}}</div>
                    <div class="edit-bd-hh fl">({{item.actualPrice}}*{{item.quantity}} 箱)</div>
                  </dd>
                </dl>
              </template>
              <!-- 证书 -->
              <template v-if="dataObj.orderCertificateVOList&&dataObj.orderCertificateVOList[0]">
                <dl class="edit-box-dl clearfix" v-for="item in dataObj.orderCertificateVOList[0].certificateOrderDetailVOList">
                  <dt class="edit-box-dt fl">证书费({{item.name}})：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">RMB {{item.actualPrice}}</div>
                    <div class="edit-bd-hh fl">({{item.actualPrice}}/票)</div>
                  </dd>
                </dl>
              </template>
              <!-- 保险 -->
              <template v-if="dataObj.orderInsuranceVOList&&dataObj.orderInsuranceVOList[0]">
                <dl class="edit-box-dl clearfix" v-for="item in dataObj.orderInsuranceVOList[0].insuranceOrderDetailVOList">
                  <dt class="edit-box-dt fl">保险费：</dt>
                  <dd class="edit-box-dd fl">
                    <div class="edit-bd-unit fl">RMB {{item.amount}}</div>
                    <div class="edit-bd-hh fl">({{item.amount}}/票)</div>
                  </dd>
                </dl>
              </template>
            </div>
            <div class="edit-box-count clearfix">
              <div class="fl edit-box-left">
                费用合计
              </div>
              <div class="edit-box-right">
                <div class="pp">
                  <span>USD</span>
                  <span>{{dataObj.usdTotal||0}}</span>
                </div>
                <div class="pp">
                  <span>RMB</span>
                  <span>{{dataObj.rmbTotal||0}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="w50b table-cell">
            <div class="button-box button-box1">
              <div class="dl clearfix">
                <div class="dt">CIF订舱服务费：</div>
                <div class="dd">
                  <span class="dd_span1">待定</span>
                  <span class="dd_span2"></span>
                </div>
              </div>
              <div class="dl clearfix">
                <div class="dt">海运费(20'GP)：</div>
                <div class="dd">
                  <span class="dd_span1">USD 65</span>
                  <span class="dd_span2">(65*1箱)</span>
                </div>
              </div>
              <div class="dl clearfix">
                <div class="dt">海运费(20'GP)：</div>
                <div class="dd">
                  <span class="dd_span1">USD 65</span>
                  <span class="dd_span2">(65*1箱)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w50b table-cell">
            <div class="button-box button-box2">
              <div class="dl clearfix">
                <div class="dt">CIF订舱服务费：</div>
                <div class="dd">
                  <span class="dd_span1">待定</span>
                  <span class="dd_span2"></span>
                </div>
              </div>
              <div class="dl clearfix">
                <div class="dt">电子箱单费(20'GP)：</div>
                <div class="dd">
                  <span class="dd_span1">CNY 10</span>
                  <span class="dd_span2">(10*1票)</span>
                </div>
              </div>
              <div class="dl clearfix">
                <div class="dt">海运费(20'GP)：</div>
                <div class="dd">
                  <span class="dd_span1">USD 65</span>
                  <span class="dd_span2">(65*1箱)</span>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <!-- <div class="all-recharge-box clearfix">
          <div class="arb-left">总价</div>
          <div class="arb-right">
            <div class="arb-top">
              <span class="arb-right_span1">USD</span>
              <span class="arb-right_span2">879</span>
            </div>
            <div class="arb-bottom">
              <span class="arb-right_span1">CNY</span>
              <span class="arb-right_span2">2879</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="main-box authorization-box text-center">
      <!-- <div class="ab-top">
        <el-checkbox></el-checkbox>
        <span style="margin-left:10px">我已经阅读并同意《智运国际物流服务合同》</span>
      </div> -->
      <div class="ab-button ht_btn_default" @click="submitDelegate">保存</div>
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
    radioGroup, datePicker,
    radio,
    table,
    tableColumn,
    upload
  } from 'element-ui'
  import { getOrderDetail, updateOrder } from '@/api/orderAPI'
  import { deleteFile } from '@/api/fileAPI'
  export default {
    data() {
      return {
        // dataObj: {
        //   type: '',
        //   value: '',
        //   radio: 3,
        //   desc: '',
        //   checkList: []
        // },
        orderStep: 1,
        baseUrl: process.env.BASE_API,
        surchargeType: window.HTCONFIG.surchargeType,
        allServiceObj: window.HTCONFIG.allServiceObj,
        serviceId: '',
        fileAddress: window.HTCONFIG.fileAddress,
        orderId: this.$route.query.id,
        dataObj: { orderCustomsVOList: [{ orderUploadFileVOList: [] }], orderTrailerVOList: [{ orderUploadFileVOList: [] }] },
        orderStepInfoArr: [{
          title: '已选择服务',
          info: '已选择：拖车+报关+海运订舱'
        }, {
          title: '补料',
          info: ''
        }, {
          title: '完成',
          info: ''
        }]
      }
    },
    mounted() {
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
      'el-radio': radio, 'el-date-picker': datePicker,
      'el-radio-group': radioGroup,
      'el-table': table,
      'el-table-column': tableColumn,
      'el-upload': upload,
      districtSelect,
      orderStep,
      orderSteps
    },
    methods: {
      async submitDelegate() {
        this.updateOrder()
      },
      async getOrderDetail(id) {
        try {
          let data = (await getOrderDetail({ params: { id: id } })).data
          if (data.returnCode === 0) {
            this.dataObj = data.order
            this.$nextTick().then(() => {
              this.serviceId = this.dataObj.serviceId
              // DOM 更新
            })
            // this.serviceId = this.dataObj.serviceId
            this.hasChooseServiceStr(this.dataObj.serviceId)
            console.log(data, 'getQuoteById')
          }
        } catch (error) {
          throw Error(error)
        }
      },
      async updateOrder(id) {
        try {
          let data = (await updateOrder({ data: this.dataObj })).data
          if (data.returnCode === 0) {
            console.log(data.quote, 'updateOrder')
            this.$message({ message: '更新成功', type: 'success' })
            return true
          }
        } catch (error) {
          throw Error(error)
        }
      },
      async deleteFile(fileName) {
        try {
          let data = (await deleteFile({ params: { name: fileName } })).data
          if (data.returnCode === 0) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            return true
          } else {
            return false
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
      hasChooseServiceStr(serviceId) {
        let str = ''
        let serviceArr = serviceId.split(',')
        serviceArr.forEach((v, i) => {
          if (i != (serviceArr.length - 1)) {
            str += this.surchargeType[v].label + '+'
          } else {
            str += this.surchargeType[v].label
          }
        })
        this.orderStepInfoArr[0].info = '已选择：' + str
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      async deleteTrailerFile(index, rowData) {
        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const isSuccess = await this.deleteFile(rowData.name)
          if (isSuccess) {
            this.dataObj.orderTrailerVOList[0].orderUploadFileVOList.splice(index, 1)
          }
        })
      },
      async deleteCustomsFile(index, rowData) {
        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const isSuccess = await this.deleteFile(rowData.name)
          if (isSuccess) {
            this.dataObj.orderCustomsVOList[0].orderUploadFileVOList.splice(index, 1)
          }
        })
      },
      uploadCustomsFileSuccess(file) {
        this.$message({
          type: 'success',
          message: '上传成功'
        })
        if (!this.dataObj.orderCustomsVOList[0].orderUploadFileVOList) {
          this.dataObj.orderCustomsVOList[0].orderUploadFileVOList = []
        }
        delete file.returnCode
        delete file.returnMsg
        this.dataObj.orderCustomsVOList[0].orderUploadFileVOList.push(file)
      },
      uploadTrailerFileSuccess(file) {
        this.$message({
          type: 'success',
          message: '上传成功'
        })
        if (!this.dataObj.orderTrailerVOList[0].orderUploadFileVOList) {
          this.dataObj.orderTrailerVOList[0].orderUploadFileVOList = []
        }
        delete file.returnCode
        delete file.returnMsg
        this.dataObj.orderTrailerVOList[0].orderUploadFileVOList.push(file)
      },
      beforeImageUpload(file) {
        const isIMG = ['image/jpeg', 'image/jpg', 'image/gif', 'image/png'].indexOf(file.type) > -1
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isIMG) {
          this.$message.error('不支持的文件格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传文件大小不能超过 2MB!')
        }
        return isIMG && isLt2M
      },
      beforeExcelUpload(file) {
        const isEXCEL = file.type.indexOf('application/vnd') > -1
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isEXCEL) {
          this.$message.error('不支持的文件格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传文件大小不能超过 2MB!')
        }
        return isEXCEL && isLt2M
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg'
        // const isLt2M = file.size / 1024 / 1024 < 2

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!')
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!')
        // }
        // return isJPG && isLt2M
      }
    }
  }

</script>

<style lang="scss" scoped>
  #orderDetailFillin {
    .top {
      padding: 24px 0 10px;
    }
    /* .od-step {
      font-size: 0;
      color: #666;
      display: inline-block;
      .od-num-box {
        vertical-align: top;
        width: 22px;
        height: 30px;
        box-sizing: border-box;
        text-align: center;
        line-height: 24px;
        font-size: 16px;
        color: #666;
        display: inline-block;
        position: relative;
        background: url('../../assets/icon-od-step.png') no-repeat center;
        background-size: 100% 100%;
      }
      .od-step-top {
        padding-left: 20px;
      }
      .od-main-text {
        color: #666;
        font-size: 20px;
        line-height: 30px;
        padding: 0 20px 0 10px;
        display: inline-block;
        vertical-align: middle;
      }
      .od-line {
        display: inline-block;
        width: 140px;
        height: 2px;
        background-color: #666;
      }
      .od-step-bottom {
        font-size: 12px;
        margin-top: 12px;
      }
    }
    .od-step.active {
      .od-main-text {
        color: #6297F4;
      }
      .od-line {
        background-color: #6297F4;
      }
      .od-num-box {
        color: #6297F4;
        background: url('../../assets/icon-od-step-active.png') no-repeat center;
        background-size: 100% 100%;
      }
    }
    .od-step:last-child {
      .od-line {
        display: none;
      }
    } */
    .full-line {
      width: 100%;
      height: 27px;
      margin: 20px auto 30px;
      background: url('../../assets/line-bg.png') repeat-x center;
    }
    .booking-info {
      box-sizing: border-box;
      padding: 30px;
      position: relative;
      border: 1px solid #ddd;
      .el-form /deep/ .el-form-item__label {
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
      .button-up-box {
        width: 165px;
        height: 165px;
        margin: 30px auto 20px;
      }
      .button-up {
        width: 160px;
        height: 160px;
        border: 2px solid #6297F4;
        text-align: center;
        /* margin: 30px auto 20px; */
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #999;
      }
      .button-box {
        padding-top: 10px;
        padding-bottom: 10px;
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
        text-align: center;
        font-size: 14px;
        color: #666;
      }
      .btn-del {
        background-color: #D84C56;
        color: #fff;
        display: inline-block;
        padding: 5px 20px;
        cursor: pointer;
      }
    }
    .relation-info {
      margin-top: 46px;
      .title {
        font-size: 18px;
      }
    }
    .charge-info {
      .dl:first-child {
        margin-top: 12px;
      }
      .dl {
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 18px;
      }
      .dt {
        float: left;
        width: 180px;
        text-align: right;
        padding-right: 8px;
        vertical-align: top;
      }
      .dd {
        float: left;
      }
      .dd_span1 {
        display: inline-block;
        width: 120px;
      }
      .dd_span2 {
        display: inline-block;
      }
      .table-cell {
        vertical-align: top;
      }
      .all-recharge-box {
        padding: 26px;
        width: 440px;
        margin: 34px auto 24px;
        box-sizing: border-box;
        background-color: rgba(98, 151, 244, 0.30);
        border: 1px solid rgba(98, 151, 244, 0.60);
        .arb-left {
          font-size: 28px;
          line-height: 28px;
          float: left;
          width: 150px;
          text-align: center;
        }
        .arb-right {
          font-size: 24px;
          line-height: 24px;
          padding-top: 4px;
          float: left;
          .arb-right_span1 {
            display: inline-block;
            width: 100px;
          }
          .arb-right_span2 {
            display: inline-block;
          }
        }
        .arb-bottom {
          margin-top: 18px;
        }
      }
      .edit-box {
        width: 520px;
        margin-left: 60px;
        margin-top: 10px;
        /* margin: 20px auto; */
      }
      .edit-input-box {
        border-bottom: 1px solid #ddd;
        font-size: 14px;
      }
      .edit-box-dl {
        margin: 0;
        color: #666;
        margin-bottom: 8px;
      }
      .edit-box-dt {
        width: 180px;
        text-align: right;
      }
      .edit-box-dd {
        margin-left: 5px;
      }
      .edit-bd-unit {
        width: 104px;
        padding-right: 16px;
        text-align: left;
        color: #D84C56;
      }
      .edit-box-count {
        width: 380px;
        /* height: 120px; */
        margin: 10px 50px 0;
        box-sizing: border-box;
        padding: 10px 30px;
        background-color: #fff;
        .edit-box-left {
          width: 136px;
          font-size: 20px;
        }
        .edit-box-right {
          float: left;
          color: #D84C56;
          font-size: 16px;
          line-height: 16px;
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