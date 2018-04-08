<template>
  <div class="PC-checkFreightRate" id="PC-checkFreightRate">
    <pc-header></pc-header>
    <!-- <div class="nav">
      <div class="main-box">
        <div class="nav-box">
          <router-link to="/priceCenter/checkFreightRate" class="nb-item">
            查运价
          </router-link>
          <router-link to="/priceCenter/myQuotation" class="nb-item">
            我的报价单
          </router-link>
        </div>

      </div>
    </div> -->
    <div class="main-box">
      <div class="search-box">
        <el-form ref="refForm" :model="searchData" :inline="false" label-width="102px" label-position="left">
          <el-form-item label="" class="checkbox-group">
            <el-checkbox-group v-model="searchData.serviceType" @change="serviceTypeChange">
              <el-checkbox label="海运" name="sea" :checked="true"></el-checkbox>
              <el-checkbox label="拖车" name="trailer" @change="selectTrailer"></el-checkbox>
              <el-checkbox label="报关" name="customsDeclaration"></el-checkbox>
              <el-checkbox label="仓储" name="storage" @change="selectStorage"></el-checkbox>
              <el-checkbox label="证书" name="certificate"></el-checkbox>
              <el-checkbox label="保险" name="insurance"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <transition name="slide-fade">
            <el-form-item label="海运" v-show="searchData.serviceType.indexOf('海运')>-1">
              <span class="fi-dt">类型：</span>
              <el-select v-model="searchData.seaType" placeholder="海运类型" disabled>
                <el-option label="整柜" :value="1"></el-option>
              </el-select>
              <span class="fi-dt">起运港：</span>
              <el-select v-model="searchData.shippingStartPort" placeholder="起运港" @blur="blurSeaStartPort" filterable>
                <el-option :label="item" :value="item" :key="item" v-for="item in allStartPortArr"></el-option>
              </el-select>
              <span class="fi-dt">目的港：</span>
              <el-select class="" v-model="searchData.shippingEndPort" placeholder="目的港" filterable @blur="blurshippingEndPort">
                <el-option :label="item" :value="item" :key="item" v-for="item in endPortByNameArr"></el-option>
              </el-select>
              </br>
              <span class="fi-dt mar-t20">柜型：</span>
              <el-popover ref="seaCabinetTypeREF" placement="bottom" width="335" trigger="click">
                <el-form-item label="" class="checkbox-group" style="margin-bottom:0;">
                  <el-checkbox-group v-model="searchData.seaCabinetType" @change="seaCabinetTypeChange">
                    <el-checkbox :label="item.label" :key="item.value" :name="item.value" v-for="item in signType"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-popover>
              <el-input v-model="searchData.seaCabinetTypeInput" placeholder="柜型" class="cabinet-type-select mar-t20" :disabled="true" v-popover:seaCabinetTypeREF>
              </el-input>
            </el-form-item>
          </transition>
          <transition name="slide-fade">
            <el-form-item label="拖车" v-show="searchData.serviceType.indexOf('拖车')>-1">
              <div>
                <span class="fi-dt ">港口：</span>
                <el-select class="" v-model="searchData.shippingStartPort" placeholder="港口" @change="changeTrailerStartPort">
                  <el-option :label="item" :value="item" :key="item" v-for="item in allTrailerPortArr"></el-option>
                </el-select>
                <span class="fi-dt ">拖车区域：</span>
                <el-select class="" v-model="searchData.trailerDistrict" placeholder="拖车区域" @change="changeTrailerDistrict">
                  <el-option :label="item" :value="item" :key="item" v-for="item in trailerDistrictArr"></el-option>
                </el-select>
                <span class="fi-dt ">拖车地址：</span>
                <el-select class="" v-model="searchData.trailerLoadingPlace" placeholder="拖车地址" @change="changeTrailerLoadingPlace">
                  <el-option :label="item" :value="item" :key="item" v-for="item in trailerLoadingPlaceArr"></el-option>
                </el-select>
              </div>
              <!-- <span class="fi-dt">装船码头：</span>
              <el-select v-model="searchData.shippingStartPort" placeholder="装船码头">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              </br> -->
              <!-- <span class="fi-dt">工厂地址：</span>
              <district-select></district-select>
              <el-select v-model="searchData.type" placeholder="拖车详细地址" class="tuoche-juti">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> -->
              <!-- </br> -->
              <div v-show="searchData.serviceType.indexOf('海运')<0" class="mar-t20">
                <span class="fi-dt">柜型：</span>
                <el-popover ref="trailerCabinetTypeREF" placement="bottom" width="335" trigger="click">
                  <el-form-item label="" class="checkbox-group" style="margin-bottom:0;">
                    <el-checkbox-group v-model="searchData.seaCabinetType" @change="seaCabinetTypeChange">
                      <el-checkbox :label="item.label" :key="item.value" :name="item.value" v-for="item in signType"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-popover>
                <el-input v-model="searchData.seaCabinetTypeInput" placeholder="柜型" class="cabinet-type-select" :disabled="true" v-popover:trailerCabinetTypeREF>
                </el-input>
              </div>
              <!-- <span class="fi-dt mar-t20">码头：</span>
              <el-select v-model="searchData.trailerWharf" placeholder="码头" class="mar-t20">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              <span class="fi-dt mar-t20">柜型：</span>
              <el-select v-model="searchData.trailerCabinetType" placeholder="柜型" class="mar-t20">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> -->
            </el-form-item>
          </transition>
          <transition name="slide-fade">
            <el-form-item label="报关" v-show="searchData.serviceType.indexOf('报关')>-1">
              <span class="fi-dt" v-show="searchData.serviceType.indexOf('海运')<0">报关地：</span>
              <el-select v-model="searchData.shippingStartPort" placeholder="起运港" v-show="searchData.serviceType.indexOf('海运')<0">
                <el-option :label="item" :value="item" :key="item" v-for="item in allStartPortArr"></el-option>
              </el-select>
              <span class="fi-dt" v-show="searchData.serviceType.indexOf('海运')<0">柜型：</span>
              <el-popover ref="customsCabinetTypeREF" placement="bottom" width="335" trigger="click">
                <el-form-item label="" class="checkbox-group" style="margin-bottom:0;">
                  <el-checkbox-group v-model="searchData.seaCabinetType" @change="seaCabinetTypeChange">
                    <el-checkbox :label="item.label" :key="item.value" :name="item.value" v-for="item in signType"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-popover>
              <el-input v-show="searchData.serviceType.indexOf('海运')<0" v-model="searchData.seaCabinetTypeInput" placeholder="柜型" class="cabinet-type-select"
                :disabled="true" v-popover:customsCabinetTypeREF>
              </el-input>
              <span class="fi-dt">品名数量：</span>
              <el-input v-model="searchData.productQuantity" placeholder="品名数量" class="insurance-input">
              </el-input>
              <!-- <span class="fi-dt">柜型：</span>
              <el-select v-model="searchData.customsDeclarationCabinetType" placeholder="柜型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> -->
            </el-form-item>
          </transition>
          <transition name="slide-fade">
            <el-form-item label="仓储" v-show="searchData.serviceType.indexOf('仓储')>-1">
              <span class="fi-dt">起运港：</span>
              <el-select v-model="searchData.shippingStartPort" placeholder="起运港">
                <el-option :label="item" :value="item" :key="item" v-for="item in allStartPortArr"></el-option>
              </el-select>
              <span class="fi-dt" v-show="searchData.serviceType.indexOf('海运')<0">柜型：</span>
              <el-popover ref="storageCabinetTypeREF" placement="bottom" width="335" trigger="click">
                <el-form-item label="" class="checkbox-group" style="margin-bottom:0;">
                  <el-checkbox-group v-model="searchData.seaCabinetType" @change="seaCabinetTypeChange">
                    <el-checkbox :label="item.label" :key="item.value" :name="item.value" v-for="item in signType"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-popover>
              <el-input v-show="searchData.serviceType.indexOf('海运')<0" v-model="searchData.seaCabinetTypeInput" placeholder="柜型" class="cabinet-type-select"
                :disabled="true" v-popover:storageCabinetTypeREF>
              </el-input>
              <!-- <el-select v-model="searchData.storageWharf" placeholder="装船码头">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> -->
            </el-form-item>
          </transition>
          <transition name="slide-fade">
            <el-form-item label="证书" v-show="searchData.serviceType.indexOf('证书')>-1">
              <span class="fi-dt">类型：</span>
              <el-select v-model="searchData.certificateType" placeholder="类型">
                <el-option :label="item" :value="item" v-for="item in certificateTypeArr" :key="item"></el-option>
              </el-select>
            </el-form-item>
          </transition>
          <transition name="slide-fade">
            <el-form-item label="保险" v-show="searchData.serviceType.indexOf('保险')>-1">
              <span class="fi-dt">发票全额：</span>
              <el-input v-model="searchData.insurancePrice" placeholder="发票全额" class="insurance-input">
                <!-- <el-option label="整柜" :value="1"></el-option> -->
              </el-input>
              <!-- <el-select v-model="searchData.insurance2" placeholder="">
                <el-option label="整柜" :value="1"></el-option>
              </el-select> -->
            </el-form-item>
          </transition>
          <!-- <div style="text-align:right"> -->
          <span class="search-button ht_btn_danger" @click="search">
            查
            <span>&nbsp;&nbsp;</span>询
          </span>
          <!-- </div> -->
        </el-form>
      </div>
    </div>
    <div class="main-box content-box">
      <div class="sea-box" v-if="resultServiceType.indexOf('海运')>-1">
        <sea :scheduleBaseInfoList="scheduleBaseInfoList" :chooseCondition="chooseCondition"></sea>
        <div class="text-center" v-show="scheduleBaseInfoList.length==0" style="font-size:20px;margin:20px auto">暂无数据</div>
        <div class="seafreight-footer">
          <div class="sf-el-pagination">
            <el-pagination layout="prev, pager, next" :current-page.sync="pagination.page" :total="pagination.totalSize" :page-size="pagination.pageSize"
              @current-change="handleCurrentChange">
            </el-pagination>
          </div>
        </div>
      </div>
      <div v-if="resultServiceType.indexOf('海运')<0" class="service-only">
        <!-- <div class="box-num" v-if="resultServiceType.indexOf('拖车')>-1||resultServiceType.indexOf('报关')>-1||resultServiceType.indexOf('仓储')>-1">
          <div class="title">箱型数量</div>
          <div class="choose-num-box clearfix">
            <div class="setpb-item fl  mar-t20">
              <div class="setpb-i-left">
                <p class="set-price-num">20'GP</p>
                <p class="set-price-price">$550</p>
              </div>
              <div class="setpb-i-right">
                <div class="setpb-input-box mid3 el-form">
                  <el-select v-model="searchData.boxNum" placeholder="请选择" class="setpb-ib-sl">
                    <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                    </el-option>
                  </el-select>
                  <el-input v-model="searchData.boxNum" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                </div>
              </div>
            </div>
            <div class="setpb-item fl  mar-t20">
              <div class="setpb-i-left">
                <p class="set-price-num">40'GP</p>
                <p class="set-price-price">$550</p>
              </div>
              <div class="setpb-i-right">
                <div class="setpb-input-box mid3 el-form">
                  <el-select v-model="searchData.boxNum" placeholder="请选择" class="setpb-ib-sl">
                    <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                    </el-option>
                  </el-select>
                  <el-input v-model="searchData.boxNum" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                </div>
              </div>
            </div>
            <div class="setpb-item fl  mar-t20">
              <div class="setpb-i-left">
                <p class="set-price-num">40'HQ</p>
                <p class="set-price-price">$550</p>
              </div>
              <div class="setpb-i-right">
                <div class="setpb-input-box mid3 el-form">
                  <el-select v-model="searchData.boxNum" placeholder="请选择" class="setpb-ib-sl">
                    <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                    </el-option>
                  </el-select>
                  <el-input v-model="searchData.boxNum" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                </div>
              </div>
            </div>
            <div class="setpb-item fl  mar-t20">
              <div class="setpb-i-left">
                <p class="set-price-num">45'HQ</p>
                <p class="set-price-price">$550</p>
              </div>
              <div class="setpb-i-right">
                <div class="setpb-input-box mid3 el-form">
                  <el-select v-model="searchData.boxNum" placeholder="请选择" class="setpb-ib-sl">
                    <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                    </el-option>
                  </el-select>
                  <el-input v-model="searchData.boxNum" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="ex-sea trailer-box" v-if="resultServiceType.indexOf('拖车')>-1">
          <trailer></trailer>
        </div>
        <div class="ex-sea customsDeclaration-box" v-if="resultServiceType.indexOf('报关')>-1">
          <customs-declaration :customsDataObj="customsDataObj"></customs-declaration>
        </div>
        <div class="ex-sea storage-box" v-if="resultServiceType.indexOf('仓储')>-1">
          <storage :storageDataObj="storageDataObj"></storage>
        </div>
        <div class="ex-sea certificate-box" v-if="resultServiceType.indexOf('证书')>-1">
          <certificate :certificateDataObj="certificateDataObj"></certificate>
        </div>
        <div class="ex-sea insurance-box" v-if="resultServiceType.indexOf('保险')>-1">
          <insurance :insuranceDataObj="insuranceDataObj"></insurance>
        </div>
        <div class="text-center">
          <span class="button-save-and-edit" @click="gotoOrders">
            保存并编辑报价单
          </span>
        </div>

        <!-- <div class="trailer-box">
          <trailer></trailer>
        </div> -->
      </div>
    </div>

  </div>
</template>
<script>
  import { getAllStartPort, getEndPortByName, getScheduleBaseInfoQuery, getAllCertificateType, getAllTrailerPort, getTrailerDistrict, getTrailerLoadingPlace } from '@/api/checkFreightRateAPI'
  import { getQuoteShow, addQuote, addQuoteAlone } from '@/api/quoteAPI'
  import { baidutongji } from '@/utils/tools'
  import header from '../components/header'
  import districtSelect from '@/components/DistrictSelect'
  import customsDeclaration from './customsDeclaration'
  import certificate from './certificate'
  import insurance from './insurance'
  import storage from './storage'
  import trailer from './trailer'
  import sea from './sea'
  import {
    form,
    formItem,
    input,
    datePicker,
    autocomplete,
    button,
    pagination,
    checkboxGroup,
    checkbox,
    select,
    option,
    radio,
    popover,
    table,
    tableColumn
  } from 'element-ui'
  export default {
    data() {
      baidutongji('135b4363cd107a6064eb2c390d56e10e')
      return {
        //搜索内容
        searchData: {
          serviceType: [],
          type: '',
          seaType: 1,
          seaCabinetTypeInput: '20GP',
          seaCabinetType: ['20GP'],
          shippingStartPort: '',
          shippingEndPort: '',
          trailerStartPort: '',
          trailerDistrict: '',
          trailerLoadingPlace: '',
          trailerWharf: '',
          trailerCabinetTypeInput: '20GP',
          trailerCabinetType: ['20GP'],
          customsDeclarationAddress: '',
          productQuantity: '',
          customsDeclarationCabinetType: '',
          storageWharf: '',
          certificateType: '',
          insurancePrice: '',
          insurance2: '',
          boxNum: 1,
        },
        allServiceTypeArr: [
          '海运', '拖车', '报关', '仓储', '证书', '保险'
        ],
        oldServiceType: [],
        resultServiceType: ['海运'],
        visible2: true,
        allStartPortArr: [],
        allTrailerPortArr: [],
        trailerDistrictArr: [],
        trailerDistrictObj: {},
        trailerLoadingPlaceArr: [],
        trailerLoadingPlaceObj: {},
        endPortByNameArr: [],
        scheduleBaseInfoList: [],
        quoteVO: {},
        certificateTypeArr: [],
        // 传到子组件中的obj
        customsDataObj: {
          customsQuoteTmpVOList: null,
          customsTotal: '',
        },
        certificateDataObj: {
          certificateQuoteTmpVO: null,
          certificateTotal: '',
        },
        trailerDataObj: {
          trailerQuoteTmpVOList: null,
          trailerTotal: '',
        },
        storageDataObj: {
          storageQuoteTmpVOList: null,
          storageTotal: '',
        },
        insuranceDataObj: {
          insuranceQuoteTmpVOList: null,
          insuranceTotal: '',
        },
        pagination: {
          page: 1,
          pageSize: 10,
          totalSize: 10
        },
        page: 1,//页数
        // 选择的条件，用来传给下一页
        chooseCondition: {},
        signType: window.HTCONFIG.signType
      }
    },
    mounted() {
      this.recoverMemorySelectCondition() //后退后恢复查询历史
      this.oldServiceType = this.$deepClone(this.searchData.serviceType)
      this.getAllStartPort()
      this.getEndPortByName('')
      this.getAllTrailerPort()
      this.getAllCertificateType()
      this.getScheduleBaseInfoList()
    },
    components: {
      'el-form': form,
      'el-form-item': formItem,
      'el-input': input,
      'el-date-picker': datePicker,
      'el-autocomplete': autocomplete,
      'el-button': button,
      'el-pagination': pagination,
      'el-checkbox': checkbox,
      'el-select': select,
      'el-option': option,
      'el-checkbox-group': checkboxGroup,
      'el-radio': radio,
      'el-popover': popover,
      'el-table': table,
      'el-table-column': tableColumn,
      'pc-header': header,
      districtSelect,
      customsDeclaration,
      certificate,
      insurance,
      sea,
      storage,
      trailer
    },
    computed: {
    },
    watch:{
'searchData.shippingStartPort':function(val){
  if(val){
    this.changeTrailerStartPort(val)
  }
}
    },
    methods: {
      search() {
        if (this.searchData.serviceType.length === 0) {
          this.$alert('请选择服务')
          return false
        }
        // 判断是否有字段没有填写完毕
        if (this.isBlankBeforeSearch()) {
          return false
        }
        this.getScheduleBaseInfoList()
        // 单独报关或者拖车则直接跳转
        if (this.searchData.serviceType.indexOf('海运') < 0) {
          if ((this.searchData.serviceType.indexOf('拖车') > -1) || (this.searchData.serviceType.indexOf('报关') > -1) || (this.searchData.serviceType.indexOf('仓储') > -1)) {
            this.$router.push({ 'path': '/priceDetail', query: this.chooseCondition })
          } else {
            this.getQuoteShow()
          }
        }
        // else {
        //   this.getScheduleBaseInfoList()
        // }
      },
      // 请求后台获取数据获取海运列表
      async getScheduleBaseInfoList() {
        let postData = {}
        postData.selectedService = this.commpareSelectedService()
        //  海运参数
        postData.shippingContainerType = this.searchData.seaCabinetTypeInput// 海运的柜型
        postData.shippingStartPort = this.searchData.shippingStartPort
        postData.shippingEndPort = this.searchData.shippingEndPort
        postData.shippingContainerType ? postData.shippingContainerType : postData.shippingContainerType = '20GP'
        // 拖车
        postData.trailerStartPort = this.searchData.shippingStartPort// 拖车起运港
        postData.trailerDistrict = this.searchData.trailerDistrict// 拖车点区域
        postData.trailerLoadingPlace = this.searchData.trailerLoadingPlace// 拖车装卸地点
        postData.trailerContainerType = postData.shippingContainerType// 拖车的柜型

        // 报关
        postData.declarePlace = this.searchData.shippingStartPort// 报关地
        postData.productQuantity = this.searchData.productQuantity// 品名数量
        postData.declareContainerType = postData.shippingContainerType// 报关的柜型
        // 仓储
        postData.storageStartPort = this.searchData.shippingStartPort// 仓储的起运港
        postData.storageContainerType = postData.shippingContainerType
        // 证书
        postData.certificateType = this.searchData.certificateType// 证书类型

        // 保险
        postData.insurancePrice = this.searchData.insurancePrice// 保险金额

        // for (let i = 0; i < 4 - this.searchData.seaCabinetType.length; i++) {
        //   postData.shippingContainerType += ','
        // }
        this.$router.push({path:'/priceCenter/checkFreightRate',query:postData})
        this.chooseCondition = postData
        try {
          const data = (await getScheduleBaseInfoQuery({ data: postData, params: { page: this.pagination.page } })).data
          if (data.returnCode == 0) {
            this.resultServiceType = JSON.parse(JSON.stringify(this.searchData.serviceType))
            this.scheduleBaseInfoList = data.data.dataList||[]
            this.pagination = {
              page: data.data.currentPage,
              pageSize: data.data.pageSize,
              totalSize: data.data.totalSize||1
            }
            // if (data.data[0]) {
            //   this.customsDataObj.customsQuoteTmpVOList = data.data[0].customsQuoteTmpVOList
            //   this.customsDataObj.customsTotal = data.data[0].customsTotal
            //   this.certificateDataObj.certificateQuoteTmpVOList = data.data[0].certificateQuoteTmpVOList
            //   this.certificateDataObj.certificateTotal = data.data[0].certificateTotal
            //   this.trailerDataObj.trailerQuoteTmpVOList = data.data[0].trailerQuoteTmpVOList
            //   this.trailerDataObj.trailerTotal = data.data[0].trailerTotal
            //   this.storageDataObj.storageQuoteTmpVOList = data.data[0].storageQuoteTmpVOList
            //   this.storageDataObj.storageTotal = data.data[0].storageTotal
            //   this.insuranceDataObj.insuranceTotal = data.data[0].insuranceTotal
            // }
          }
        } catch (err) {
          throw Error(err, '请求出错')
        }
      },
      // 获取单独的仓储、证书、保险
      async getQuoteShow() {
        let postData = {}
        postData.selectedService = this.commpareSelectedService()
        postData.shippingContainerType = this.searchData.seaCabinetTypeInput// 海运的柜型
        postData.shippingContainerType ? postData.shippingContainerType : postData.shippingContainerType = '20GP'
        // 仓储
        postData.storageStartPort = this.searchData.shippingStartPort// 仓储的起运港
        postData.storageContainerType = postData.shippingContainerType
        // 证书
        postData.certificateType = this.searchData.certificateType// 证书类型

        // 保险
        postData.insurancePrice = this.searchData.insurancePrice// 保险金额
        try {
          let data = (await getQuoteShow({ data: postData })).data
          if (data.returnCode === 0) {
            this.resultServiceType = JSON.parse(JSON.stringify(this.searchData.serviceType))
            this.quoteVO = data.data
            this.certificateDataObj.certificateQuoteTmpVO = data.data.certificateQuoteTmpVO
            this.storageDataObj.storageQuoteTmpVOList = data.data.storageQuoteTmpVOList
            this.insuranceDataObj.insuranceTotal = data.data.insuranceTotal
            console.log(data.data, 'getQuoteShow')
          }
        } catch (error) {
          throw Error(error)
        }
      },
      async addQuote() {
        try {
          let data = (await addQuote({ data: this.quoteVO })).data
          if (data.returnCode === 0) {
            console.log(data.quote, 'addQuote')
            this.$alert('新增成功')
            return data.quote
          }
        } catch (error) {
          throw Error(error)
        }
      },
      // 列表页码发生变化
      handleCurrentChange(val) {
        this.getScheduleBaseInfoList()
      },
      // 获得所有起运港
      async getAllStartPort() {
        try {
          const data = (await getAllStartPort()).data
          if (data.returnCode == 0) {
            this.allStartPortArr = data.data
          }
        } catch (err) {
          throw Error(err, '请求出错')
        }
      },
      // 获取证书
      async getAllCertificateType() {
        try {
          const data = (await getAllCertificateType()).data
          if (data.returnCode == 0) {
            this.certificateTypeArr = data.data
            // this.allStartPortArr = data.data
          }
        } catch (err) {
          throw Error(err, '请求出错')
        }
      },
      // 获取所有终点港口
      async getEndPortByName(val) {
        try {
          let data = (await getEndPortByName({ params: { endPort: val } })).data
          if (data.returnCode == 0) {
            this.endPortByNameArr = data.data
          }
        } catch (err) {
          throw Error(err, '请求出错')
        }
      },
      //  获取拖车所有港口
      async getAllTrailerPort() {
        try {
          let data = (await getAllTrailerPort()).data
          if (data.returnCode == 0) {
            this.allTrailerPortArr = data.data
            // console.log(this.allTrailerPortArr, 'allTrailerPortArr')
          }
        } catch (err) {
          throw Error(err, '请求出错')
        }
      },
      //  根据拖车港口获取区域
      async getTrailerDistrict(portName) {
        try {
          let data = (await getTrailerDistrict({ params: { portName: portName } })).data
          if (data.returnCode == 0) {
            this.trailerDistrictObj[portName] = data.data
            this.trailerDistrictArr = data.data
            // console.log(this.trailerDistrictObj[portName], 'this.trailerDistrictObj[portName]')
          }
        } catch (err) {
          throw Error(err, '请求出错')
        }
      },
      //  根据拖车区域获取loadingplace
      async getTrailerLoadingPlace(portName, district) {
        try {
          let data = (await getTrailerLoadingPlace({ params: { portName: portName, district: district } })).data
          if (data.returnCode == 0) {
            this.trailerLoadingPlaceObj[portName+district] = data.data
            this.trailerLoadingPlaceArr = data.data
          }
        } catch (err) {
          throw Error(err, '请求出错')
        }
      },
      // 查询过后刷新后者点击后退的时候从query中获取选择的条件
      async recoverMemorySelectCondition(){
        if(JSON.stringify(this.$route.query)==='{}'){
          return false
        }
        this.searchData.serviceType=this.commpareSelectedServiceReserve(this.$route.query.selectedService)
        this.searchData.seaCabinetTypeInput=this.$route.query.shippingContainerType
        this.searchData.seaCabinetType=this.$route.query.shippingContainerType.split(',')
        for(let i in this.$route.query){
          if(this.searchData.hasOwnProperty(i)){
            this.searchData[i]=this.$route.query[i]
          }
        }
        if ((this.searchData.serviceType.indexOf('拖车') > -1)){
          await Promise.all([
            this.getTrailerDistrict(this.searchData.shippingStartPort),
            this.getTrailerLoadingPlace(this.searchData.shippingStartPort,this.searchData.trailerDistrict)
          ])
          this.searchData.trailerDistrict = this.$route.query.trailerDistrict
          this.searchData.trailerLoadingPlace = this.$route.query.trailerLoadingPlace
          // await this.getTrailerDistrict(this.searchData.shippingStartPort)
          // await this.getTrailerLoadingPlace(this.searchData.shippingStartPort,this.searchData.trailerDistrict)

        }
      },
      changeTrailerStartPort(val) {
        console.log(val)
        if (!this.trailerDistrictObj[val]) {
          this.getTrailerDistrict(val)
        } else {
          this.trailerDistrictArr = this.trailerDistrictObj[val]
        }
        this.searchData.trailerDistrict = ''
        this.searchData.trailerLoadingPlace = ''
        this.trailerLoadingPlaceArr = []
      },
      changeTrailerDistrict(val) {
        if (!this.trailerLoadingPlaceObj[this.searchData.shippingStartPort + val]) {
          this.getTrailerLoadingPlace(this.searchData.shippingStartPort, val)
        } else {
          this.trailerLoadingPlaceArr = this.trailerLoadingPlaceObj[this.searchData.shippingStartPort + val]
        }
        this.searchData.trailerLoadingPlace = ''
      },
      changeTrailerLoadingPlace(val) {
        // console.log(val)
      },
      isBlankBeforeSearch() {
        if (!this.searchData.shippingStartPort) {
          if (this.searchData.serviceType.indexOf('报关') > -1 || this.searchData.serviceType.indexOf('仓储') > -1) {
            this.$alert('起运港不能为空')
            return true
          }
        }
        if (!this.searchData.seaCabinetTypeInput) {
          if (this.searchData.serviceType.indexOf('海运') > -1 || this.searchData.serviceType.indexOf('报关') > -1 || this.searchData.serviceType.indexOf('拖车') > -1 || this.searchData.serviceType.indexOf('仓储') > -1) {
            this.$alert('柜型不能为空')
            return true
          }
        }
        if (!this.searchData.productQuantity) {
          if (this.searchData.serviceType.indexOf('报关') > -1) {
            this.$alert('品名数量不能为空')
            return true
          }
        }
        if (!this.searchData.certificateType) {
          if (this.searchData.serviceType.indexOf('证书') > -1) {
            this.$alert('证书类型不能为空')
            return true
          }
        }
        if (!this.searchData.insurancePrice) {
          if (this.searchData.serviceType.indexOf('保险') > -1) {
            this.$alert('发票全额不能为空')
            return true
          }
        }
        if (this.searchData.serviceType.indexOf('拖车') > -1) {
          if (!this.searchData.trailerLoadingPlace) {
            this.$alert('拖车地址不能为空')
            return true
          }
        }
      },
      // 对比选择的服务类型
      commpareSelectedService() {
        console.log(this.searchData.serviceType)
        let midArr = []
        this.allServiceTypeArr.forEach((v, i) => {
          if (this.searchData.serviceType.indexOf(v) > -1) {
            midArr.push(i)
          }
        })
        return midArr.join(',')
      },
      commpareSelectedServiceReserve(selectedService) {
        let midArr = []
        selectedService.split(',').forEach((v, i) => {
            midArr.push(this.allServiceTypeArr[v])
        })
        return midArr
      },
      compareAndChooseDifService(bigger, less) {
        let dif = ''
        bigger.forEach((v) => {
          if (less.indexOf(v) < 0) {
            dif = v
          }
        })
        return dif
      },
      // 服务类型改变的时候触发的
      serviceTypeChange(val, val1) {
        let dif = ''
        let isAdd = true
        if (this.oldServiceType.length > this.searchData.serviceType.length) {
          isAdd = false
          dif = this.compareAndChooseDifService(this.oldServiceType, this.searchData.serviceType)
        } else {
          dif = this.compareAndChooseDifService(this.searchData.serviceType, this.oldServiceType)
        }
        if (dif != '海运') {
          if (this.searchData.serviceType.indexOf('海运') < 0) {
            this.searchData.serviceType.splice(0, this.searchData.serviceType.length)
            this.searchData.serviceType.push(dif)
          }
        } else {
          if (!isAdd && this.searchData.serviceType.length > 1) {
            this.searchData.serviceType.splice(0, this.searchData.serviceType.length - 1)
          }
        }
        this.oldServiceType = this.$deepClone(this.searchData.serviceType)
      },
      // 下面的都是各种触发事件
      trailerCabinetTypeChange(val) {
        this.searchData.trailerCabinetTypeInput = val.join(',')
      },
      seaCabinetTypeChange(val) {
        this.searchData.seaCabinetTypeInput = val.join(',')
        console.log(this.searchData.seaCabinetTypeInput,val, 'this.searchData.seaCabinetTypeInput')
      },
      selectTrailer(val) {
        if (val) {
          if (this.searchData.serviceType.indexOf('仓储') > -1) {
            this.searchData.serviceType.splice(this.searchData.serviceType.indexOf('仓储'), 1)
          }
        }
      },
      selectStorage(val) {
        if (val) {
          if (this.searchData.serviceType.indexOf('拖车') > -1) {
            this.searchData.serviceType.splice(this.searchData.serviceType.indexOf('拖车'), 1)
          }
        }
      },
      change(val) {
      },
      blurSeaStartPort(e) {
        if (e.target.value != this.searchData.shippingStartPort) {
          this.searchData.shippingStartPort = ''
        }
      },
      blurshippingEndPort(e) {
        if (e.target.value != this.searchData.shippingEndPort) {
          this.searchData.shippingEndPort = ''
        }
      },
      async gotoOrders() {
        const data = (await this.addQuote())
        console.log(data, 'afterData')
        this.$router.push({ path: '/priceEdit', query: { id: data.id } })
        // this.$router.push({ path: '/priceEdit', query: this.chooseCondition })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .PC-checkFreightRate {
    .search-box {
      position: relative;
      .slide-fade-enter-active {
        transition: all .3s ease;
      }
      .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-enter,
      .slide-fade-leave-to
      /* .slide-fade-leave-active 在低于 2.1.8 版本中 */
        {
        transform: translateX(10px);
        opacity: 0;
      }
      .checkbox-group {
        margin-top: 22px;
        padding-left: 108px;
      }
      .fi-dt {
        display: inline-block;
        padding-right: 12px;
        width: 80px;
        text-align: right;
        font-size: 14px;
        color: #999;
      }
      .insurance-input {
        width: 140px;
      }
      .cabinet-type-select {
        width: 240px;
        /* margin-left: 14px; */
      }
      .cabinet-type-select /deep/ .el-input__inner {
        background-color: #fff;
        cursor: pointer;
      }
      .tuoche-juti {
        width: 340px;
        margin-left: 14px;
      }
      .search-button {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 160px;
        /* padding: 0 50px; */
        text-align: center;
        font-size: 24px;
        line-height: 48px;
        box-sizing: border-box;
        cursor: pointer;
        color: #fff;
        display: inline-block;
        margin-right: 40px;
        background-color: #D84C56;
      }
    }
    .box-num {
      border: 1px solid #ddd;
      padding: 30px 60px;
      margin: 0 auto 30px;
      .title {
        font-size: 24px;
      }
      .choose-num-box {
        padding: 0 100px;
      }
      .setpb-item:nth-child(even) {
        margin-left: 159px;
      }
      .setpb-item {
        font-size: 20px;
        width: 280px;
        line-height: 20px;
        border: 1px solid #999;
        /* height: 86px; */
        box-sizing: border-box;
      }
      .setpb-i-left {
        background-color: #f1f1f1;
        box-sizing: border-box;
        width: 139px;
        height: 100%;
        border-right: 1px solid #999;
        padding: 18px 0;
        text-align: center;
        float: left;
      }
      .setpb-i-right {
        width: 139px;
        height: 86px;
        float: left;
        position: relative;
      }
      .setpb-item:nth-child(3n+0) {
        margin-right: 0;
      }
      .setpb-input-box .setpb-ib-ip /deep/ input {
        border-right: 0;
        /* border-radius: 4px 0 0 4px; */
        line-height: 30px;
        height: 30px;
        font-size: 20px;
      }
      .setpb-input-box .setpb-ib-sl /deep/ input {
        line-height: 30px;
        height: 30px;
        font-size: 20px;
      }
      .setpb-input-box .setpb-ib-ip /deep/ input:focus {
        border-color: #999;
      }
      .setpb-input-box .setpb-ib-sl /deep/ input:focus,
      .setpb-input-box .setpb-ib-sl /deep/ input:hover {
        border-color: #999;
      }
      .set-price-num {}
      .set-price-price {
        color: #de4c5f;
        margin-top: 10px;
      }
      .setpb-input-box {
        position: relative;
        width: 84px;
        /* margin: 0 auto; */
        float: left;
        text-align: left;
        .setpb-ib-ip {
          width: 54px;
        }
        .setpb-ib-sl {
          width: 84px;
          position: absolute;
          left: 0;
        }
      }
    }
    .content-box {
      margin: 46px auto;
      .ex-sea+.ex-sea {
        margin-top: 20px;
      }
      .service-only {
        border: 1px solid #ddd;
        padding-bottom: 80px;
      }
      .button-save-and-edit {
        padding: 0 30px;
        display: inline-block;
        line-height: 42px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        background-color: #6297F4;
        margin: 48px auto 0;
        cursor: pointer;
      }
    }
    .seafreight-footer {
      text-align: right;
      padding: 40px 0;
      .sf-el-pagination /deep/ .el-pagination {
        .btn-next,
        .btn-prev,
        li {
          font-size: 20px;
          color: #666;
          background-color: inherit;
          width: auto;
          padding: 0 14px;
          font-weight: normal;
        }
        li.active {
          color: #409EFF;
        }
        li:hover,
        .btn-prev:not(.disabled):hover,
        .btn-next:not(.disabled):hover {
          color: #409EFF;
        }
        .btn-next i,
        .btn-prev i {
          font-size: 20px;
          font-weight: normal;
        }
      }
    }
  }
</style>