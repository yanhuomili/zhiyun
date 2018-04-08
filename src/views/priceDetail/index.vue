<template>
  <div class="priceDetail" id="priceDetail">
    <div class="main-box">
      <div class="fcl-price-box clearfix">
        <div class="fpb-left fl">
          <!-- <div class="range">航程18天</div>
          <div class="service-icon-box">
            <div class="service-icon-item f0">
              <div class="service-ii-img customer"></div>
              <div class="service-ii-text">报关</div>
            </div>
            <div class="service-icon-item f0">
              <div class="service-ii-img sea-transport"></div>
              <div class="service-ii-text">海运</div>
            </div>
            <div class="service-icon-item f0">
              <div class="service-ii-img trailer"></div>
              <div class="service-ii-text">拖车</div>
            </div>
            <div class="service-icon-item f0">
              <div class="service-ii-img insurance"></div>
              <div class="service-ii-text">保险</div>
            </div>
            <div class="service-icon-item f0">
              <div class="service-ii-img certificate"></div>
              <div class="service-ii-text">证书</div>
            </div>
            <div class="service-icon-item f0">
              <div class="service-ii-img storage"></div>
              <div class="service-ii-text">仓储</div>
            </div>
          </div> -->
          <div class="fpb-left-top">
            <div class="clearfix">
              <!-- <div class="h1">NINGBO 宁波ST.PETERSBURG圣彼得堡</div> -->
              <div class="h1" v-if="queryData.selectedService.indexOf(0)>-1">{{quoteData.startPortName}}→{{quoteData.endPortName}}</div>

              <div class="fpb-lt-text-box fl">
                <div v-if="queryData.selectedService.indexOf(0)>-1">
                  <div>
                    <span class="fpb-ltb-span">承运人：{{quoteData.shipCompany}}</span>
                    <span class="fpb-ltb-span">中转方式：中转{{quoteData.transitPort}}</span>
                  </div>
                  <div>
                    <span class="fpb-ltb-span">预计开船日期：2017-11-29</span>
                    <span class="fpb-ltb-span">航名/航次：EDITHMAERSK/748W</span>
                  </div>
                  <div>
                    <span class="fpb-ltb-span">航线：*AE7</span>
                  </div>
                </div>
                <div v-if="queryData.selectedService.indexOf(1)>-1">
                  <span class="fpb-ltb-span">装船码头：{{queryData.trailerStartPort}}</span>
                  <span class="fpb-ltb-span">工厂地址：{{queryData.trailerDistrict+queryData.trailerLoadingPlace}}</span>
                </div>
                <div v-if="queryData.selectedService.indexOf(2)>-1">
                  <span class="fpb-ltb-span">报关地：{{queryData.declarePlace}}</span>
                  <span class="fpb-ltb-span">品名数量：{{queryData.productQuantity}}</span>
                </div>
                <div v-if="queryData.selectedService.indexOf(3)>-1">
                  <span class="fpb-ltb-span">仓储港口：{{queryData.storageStartPort}}</span>
                  <!-- <span class="fpb-ltb-span">品名数量：{{queryData.productQuantity}}</span> -->
                </div>
                <div v-if="queryData.selectedService.indexOf(4)>-1">
                  <span class="fpb-ltb-span">证书类型：{{queryData.certificateType}}</span>
                </div>
                <div v-if="queryData.selectedService.indexOf(5)>-1">
                  <span class="fpb-ltb-span">保险发票全额：{{queryData.insurancePrice}}</span>
                </div>
              </div>
            </div>
            <div class="hr"></div>
            <el-form v-if="queryData.selectedService.indexOf(0)>-1">
              <el-form-item label="提单要求 :">
                <el-radio-group v-model="searchData.radio2">
                  <el-radio :label="3">正本</el-radio>
                  <el-radio :label="6">电放</el-radio>
                  <el-radio :label="9">SWB</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
            <!-- <div class="fpb-lt-text-box">
            </div> -->
            <div class="set-price-box mar-t20 clearfix">
              <div class="setpb-item fl" v-if="queryData.shippingContainerType.indexOf(item.titleDesc)>-1" v-for="item in selectContainerNum">
                <div class="setpb-i-left">
                  <p class="set-price-num">{{item.title}}</p>
                  <p class="set-price-price">${{item.price}}</p>
                </div>
                <div class="setpb-i-right">
                  <div class="setpb-input-box mid3 el-form">
                    <el-select v-model="item.num" placeholder="请选择" class="setpb-ib-sl">
                      <el-option v-for="item1 in 10" :key="item1" :label="item1" :value="item1">
                      </el-option>
                    </el-select>
                    <el-input v-model="item.num" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                  </div>
                </div>
              </div>
              <!-- <div class="setpb-item fl" v-show="queryData.shippingContainerType.indexOf('40GP')>-1">
                <div class="setpb-i-left">
                  <p class="set-price-num">40'GP</p>
                  <p class="set-price-price">$550</p>
                </div>
                <div class="setpb-i-right">
                  <div class="setpb-input-box mid3 el-form">
                    <el-select v-model="setPriceData.price1" placeholder="请选择" class="setpb-ib-sl">
                      <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                      </el-option>
                    </el-select>
                    <el-input v-model="setPriceData.price1" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                  </div>
                </div>
              </div>
              <div class="setpb-item fl" v-show="queryData.shippingContainerType.indexOf('40HQ')>-1">
                <div class="setpb-i-left">
                  <p class="set-price-num">40'HQ</p>
                  <p class="set-price-price">$550</p>
                </div>
                <div class="setpb-i-right">
                  <div class="setpb-input-box mid3 el-form">
                    <el-select v-model="setPriceData.price1" placeholder="请选择" class="setpb-ib-sl">
                      <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                      </el-option>
                    </el-select>
                    <el-input v-model="setPriceData.price1" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                  </div>
                </div>
              </div>
              <div class="setpb-item fl" v-show="queryData.shippingContainerType.indexOf('45HQ')>-1">
                <div class="setpb-i-left">
                  <p class="set-price-num">45'HQ</p>
                  <p class="set-price-price">$550</p>
                </div>
                <div class="setpb-i-right">
                  <div class="setpb-input-box mid3 el-form">
                    <el-select v-model="setPriceData.price1" placeholder="请选择" class="setpb-ib-sl">
                      <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                      </el-option>
                    </el-select>
                    <el-input v-model="setPriceData.price1" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                  </div>
                </div>
              </div> -->
              <!-- <div class="setpb-item fl">
                <div class="setpb-i-left">
                  <p class="set-price-num">40'GP</p>
                  <p class="set-price-price">$550</p>
                </div>
                <div class="setpb-i-right">
                  <div class="setpb-input-box mid3 el-form">
                    <el-select v-model="setPriceData.price1" placeholder="请选择" class="setpb-ib-sl">
                      <el-option v-for="item in 10" :key="item" :label="item" :value="item">
                      </el-option>
                    </el-select>
                    <el-input v-model="setPriceData.price1" placeholder="请输入内容" class="setpb-ib-ip"></el-input>
                  </div>
                </div>
              </div> -->
            </div>

            <div class="hr"></div>
            <div class="text-center">
              <span class="calculate-price ht_btn_default" :class="{loading:isCalculateing}" @click="getQuoteShow">
                {{isCalculateing?'计算中':'计算价格'}}
              </span>
            </div>
            <!-- <el-form ref="refForm" :model="searchData" :inline="false" label-width="102px" label-position="left">
              <el-form-item label="拖柜地点">
                <district-select></district-select>
                </br>
                <el-select v-model="searchData.type" placeholder="请选择拖车详细地址" class="tuoche-juti">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="报关地" style="margin-bottom:0;">
                <el-select v-model="searchData.customsDeclarationAddress" placeholder="报关地">
                  <el-option label="整柜" :value="1"></el-option>
                </el-select>
                <span class="fi-dt">品名数量：</span>
                <el-select v-model="searchData.customsDeclarationNum" placeholder="品名数量">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form> -->
          </div>
        </div>
        <div class="fpb-right fl">
          <div class="fpb-right-top">
            <div class="h2">价格明细</div>
            <div class="fpb-right-top-mid">
              <!-- <dl class="fpb-r-dl clearfix">
                <dt class="fl">CIF订舱服务费：</dt>
                <dd class="fl">待定</dd>
              </dl>
              <dl class="fpb-r-dl clearfix">
                <dt class="fl">电子箱单费(20'GP)：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">USD 530</span>
                  <span class="fpb-rdl-span2">(530*1 箱)</span>
                </dd>
              </dl> -->
              <!-- 海运海运费用 -->
              <div>-------海运费</div>
              <dl class="fpb-r-dl clearfix" v-if="queryData.selectedService.indexOf(0)>-1&&(queryData.shippingContainerType.indexOf(item.titleDesc)>-1)"
                v-for="item in selectContainerNum">
                <dt class="fl">海运费({{item.title}})：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">{{item.currency}}{{item.price*(item.quantity||1)}}</span>
                  <span class="fpb-rdl-span2">({{item.price}}*{{item.quantity||1}} {{item.unit}})</span>
                </dd>
              </dl>
              <div>-------海运附加费</div>
              <!-- 海运附加费 -->
              <dl class="fpb-r-dl clearfix" v-for="item in quoteData.surchargeRouteServiceVOList" :key="item.englishName" v-if="(item.sign&&queryData.shippingContainerType.indexOf(item.sign)>-1)||(!item.sign)">
                <dt class="fl" v-if="!item.sign">{{item.englishName}}：</dt>
                <dt class="fl" v-else>{{item.englishName.slice(0, item.englishName.lastIndexOf('_'))}}({{item.sign.substr(0,2)+'`'+item.sign.substr(2,4)}})：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">{{item.currency}} {{item.price*(item.quantity||1)}}</span>
                  <span class="fpb-rdl-span2">({{item.price}}*{{item.quantity||1}} {{item.unit}})</span>
                </dd>
              </dl>
              <div>-------拖车费用</div>
              <!-- 拖车费用 -->
              <dl class="fpb-r-dl clearfix" v-for="item in quoteData.trailerQuoteTmpVOList" :key="item.englishName" v-if="queryData.shippingContainerType.indexOf(item.englishName)>-1">
                <dt class="fl">拖车费({{item.englishName.substr(0,2)+'`'+item.englishName.substr(2,4)}})：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">{{item.currency}} {{item.price*(item.quantity||1)}}</span>
                  <span class="fpb-rdl-span2">({{item.price}}*{{item.quantity||1}} {{item.unit}})</span>
                </dd>
              </dl>
              <div>-------报关费用</div>
              <!-- 报关费用 -->
              <dl class="fpb-r-dl clearfix" v-for="item in quoteData.customsQuoteTmpVOList" :key="item.englishName" v-if="(item.sign&&queryData.shippingContainerType.indexOf(item.sign)>-1)||(!item.sign)">
                <dt class="fl" v-if="!item.sign">{{item.englishName}}：</dt>
                <dt class="fl" v-else>{{item.englishName.slice(0, item.englishName.lastIndexOf('_'))}}({{item.sign.substr(0,2)+'`'+item.sign.substr(2,4)}})：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">{{item.currency}} {{item.price*(item.quantity||1)}}</span>
                  <span class="fpb-rdl-span2">({{item.price}}*{{item.quantity||1}} {{item.unit}})</span>
                </dd>
              </dl>
              <div>-------仓储费用</div>
              <!-- 仓储费用 -->
              <dl class="fpb-r-dl clearfix" v-for="item in quoteData.storageQuoteTmpVOList" :key="item.englishName" v-if="queryData.shippingContainerType.indexOf(item.englishName)>-1">
                <dt class="fl">仓储费({{item.englishName.substr(0,2)+'`'+item.englishName.substr(2,4)}})：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">{{item.currency}} {{item.price*(item.quantity||1)}}</span>
                  <span class="fpb-rdl-span2">({{item.price}}*{{item.quantity||1}} {{item.unit}})</span>
                </dd>
              </dl>
              <div>-------证书费用</div>
              <!-- 证书费用 -->
              <dl class="fpb-r-dl clearfix" v-if="quoteData.certificateQuoteTmpVO">
                <dt class="fl">证书费({{quoteData.certificateQuoteTmpVO.typeName}})：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">RMB {{quoteData.certificateQuoteTmpVO.price}}</span>
                  <!-- <span class="fpb-rdl-span2">({{item.price}}*1 {{item.unit}})</span> -->
                </dd>
              </dl>
              <div>-------保险费用</div>
              <!-- 证书费用 -->
              <dl class="fpb-r-dl clearfix" v-if="quoteData.insuranceTotal">
                <dt class="fl">保险费：</dt>
                <dd class="fl">
                  <span class="fpb-rdl-span1">RMB {{quoteData.insuranceTotal}}</span>
                  <!-- <span class="fpb-rdl-span2">({{item.price}}*1 {{item.unit}})</span> -->
                </dd>
              </dl>
            </div>
            <!-- <p class="zhu">注：其他未列明费用请以客服告知或平台数据为准</p> -->
          </div>
          <div class="fpb-right-remark" v-if="queryData.selectedService.indexOf(0)>-1">
            <h6>海运备注</h6>
            <p class="others">
              1，运价参照GB1598调整方案。
              <br>2，预提箱费参考标准：（特种箱，缺柜，以及春节除外）2017.12.1号更新
              <br>&nbsp;&nbsp;&nbsp;&nbsp; MSK：300元/柜；CMA：300元/柜；HMM：250元/柜；MSC：250元/柜；ZIM：250元/柜；
              <br>&nbsp;&nbsp;&nbsp;&nbsp; 其余未列明船公司 200元/柜，当日加急预提300元/柜，不分船公司。
              <br>3，洋山落箱费含二次进港20尺500元/柜，40尺600元/柜，五一，十一，春节实报实销；
              <br>4，洋山提箱费：300元/柜。
              <br>5，其它未列及费用可电讯4001556956。
            </p>
          </div>
          <div class="fpb-right-remark" v-if="queryData.selectedService.indexOf(1)>-1">
            <h6>拖车备注</h6>
            <p class="others">
              1，运价参照GB1598调整方案。
              <br>2，预提箱费参考标准：（特种箱，缺柜，以及春节除外）2017.12.1号更新
              <br>&nbsp;&nbsp;&nbsp;&nbsp; MSK：300元/柜；CMA：300元/柜；HMM：250元/柜；MSC：250元/柜；ZIM：250元/柜；
              <br>&nbsp;&nbsp;&nbsp;&nbsp; 其余未列明船公司 200元/柜，当日加急预提300元/柜，不分船公司。
              <br>3，洋山落箱费含二次进港20尺500元/柜，40尺600元/柜，五一，十一，春节实报实销；
              <br>4，洋山提箱费：300元/柜。
              <br>5，其它未列及费用可电讯4001556956。
            </p>
          </div>
          <div class="fpb-right-remark" v-if="queryData.selectedService.indexOf(2)>-1">
            <h6>报关备注</h6>
            <p class="others">
              1，运价参照GB1598调整方案。
              <br>2，预提箱费参考标准：（特种箱，缺柜，以及春节除外）2017.12.1号更新
              <br>&nbsp;&nbsp;&nbsp;&nbsp; MSK：300元/柜；CMA：300元/柜；HMM：250元/柜；MSC：250元/柜；ZIM：250元/柜；
              <br>&nbsp;&nbsp;&nbsp;&nbsp; 其余未列明船公司 200元/柜，当日加急预提300元/柜，不分船公司。
              <br>3，洋山落箱费含二次进港20尺500元/柜，40尺600元/柜，五一，十一，春节实报实销；
              <br>4，洋山提箱费：300元/柜。
              <br>5，其它未列及费用可电讯4001556956。
            </p>
          </div>
          <div class="fpb-r-count">
            <dl class="fpb-r-dl clearfix">
              <dt class="fl fpb-r-count-left">费用共计</dt>
              <dd class="fl">
                <span class="fpb-rdl-span1">USD</span>
                <span class="fpb-rdl-span2">{{quoteData.defaultUsdTotal}}</span>
              </dd>
            </dl>
            <dl class="fpb-r-dl clearfix">
              <dt class="fl fpb-r-count-left">&nbsp;</dt>
              <dd class="fl">
                <span class="fpb-rdl-span1">RMB</span>
                <span class="fpb-rdl-span2">{{quoteData.defaultRmbTotal}}</span>
              </dd>
            </dl>
          </div>

          <div class="fpb-r-sure" @click="saveAndGoToEdit">
            <span class="button-save-edit ht_btn_default" :class="{loading:isSaveAndEditing}">{{isSaveAndEditing?'保存中':'保存并编辑报价单'}}</span>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-title">订舱须知</div>
        <div class="notice-text-box">
          <ul>
            <li>1.网上显示价格均适用港到港（CY/CY）服务条款，价格对应指定港口航线/航次即时有效，随时变动，所见即所得。</li>
            <li>2.完成订舱步骤，冻结金额相当于显示运价的6% 定金后即锁定价格，船公司预计2小时内完成舱位确定。</li>
            <li>3.显示运价为普箱打包价格，包含美金基础海运费（BAS）、燃油附加费（SBF）和紧急风险附加费（ERS）, 而低硫费（LSS）、紧急风险附加费（ENS）、码头操作费（THC）及装港各项人民币费用另算；卸港THC、当地附加费、装卸港滞期费（D&D)及其他适用的附加费另收。</li>
            <li>4.订舱确认后船公司保证舱位并允许船开前七天（含船开当天）内提取空箱，客户需在规定时间内提空箱装柜提供完整订舱资料信息及截关时间内完成报关进港。</li>
            <li>5.取消及更改 （基于以下免责条款）：</li>
            <li>5.1. 订舱确认后因客户原因取消或不再出运，定金不退。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import districtSelect from '@/components/DistrictSelect'
  import { getQuoteShow, addQuote, addQuoteAlone } from '@/api/quoteAPI'
  import {
    form,
    formItem,
    input,
    radio,
    select,
    option,
    button,
    checkbox,
    radioGroup
  } from 'element-ui'
  export default {
    data() {
      return {
        searchData: {
          serviceType: [],
          type: '',
          trailerStartPort: '',
          trailerWharf: '',
          trailerCabinetType: '',
          customsDeclarationAddress: '',
          customsDeclarationNum: '',
          customsDeclarationCabinetType: '',
          storageStartPort: '',
          storageWharf: '',
          certificateType: '',
          insurance1: '',
          insurance2: '',
          radio2: 3
        },
        fuTableArr: [],
        setPriceData: {
          price1: 0,
          price2: 0,
          price3: 0
        },
        selectContainerNum: [{
          num: 1,
          title: '20`GP',
          titleDesc: '20GP',
          currency: 'USD',
          price: 0,
          unit: 'TUE',
          quantity: 1
        }, {
          num: 1,
          title: '40`GP',
          titleDesc: '40GP',
          currency: 'USD',
          price: 0,
          unit: 'TUE',
          quantity: 1
        }, {
          num: 1,
          title: '40`HQ',
          titleDesc: '40HQ',
          currency: 'USD',
          price: 0,
          unit: 'TUE',
          quantity: 1
        }, {
          num: 1,
          title: '45`HQ',
          titleDesc: '45HQ',
          currency: 'USD',
          price: 0,
          unit: 'TUE',
          quantity: 1
        }],
        // selectService: {
        //   tuoche: true,
        //   baoguan: true,
        //   cangchu: true,
        //   zhengshu: true,
        //   baoxian: true
        // },
        // options2: [],
        // allStartPortArr: [],
        // endPortByNameArr: [],
        quoteData: {},
        queryData: {
          declarePlace: "",
          impQuoteTmpId: "402881a760c3e2760160c3e2d96a0000",
          selectedService: "0,,,,,",
          shippingContainerType: "20GP,,,",
          shippingEndPort: "",
          shippingStartPort: "",
          storageStartPort: ""
        },
        isCalculateing: false,
        isSaveAndEditing: false,
        signType: window.HTCONFIG.signType
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
      'el-radio': radio,
      'el-radio-group': radioGroup,
      districtSelect
    },
    methods: {
      async getQuoteShow() {
        let postData = this.queryData
        let params = { impQuoteTmpId: this.queryData.impQuoteTmpId }
        delete this.queryData.impQuoteTmpId
        let containerInputVOList = []
        this.selectContainerNum.forEach((v, k) => {
          if (this.queryData.shippingContainerType.indexOf(v.titleDesc) > -1) {
            containerInputVOList.push({
              containerName: v.titleDesc,
              quantity: v.num
            })
          }
        })
        postData.containerInputVOList = containerInputVOList
        if (this.isCalculateing) {
          return false
        }
        this.isCalculateing = true
        try {
          // postData.startPort = this.queryData.startPort
          // postData.endPort = this.queryData.endPort
          // postData.impQuoteTmpId = this.queryData.impQuoteTmpId
          // postData.seaCabinetType = this.queryData.shippingContainerType
          // postData.serviceId = this.queryData.selectedService
          let data = (await getQuoteShow({ data: postData, params: params })).data
          if (data.returnCode === 0) {
            this.quoteData = data.data
            if (this.queryData.selectedService.indexOf(0) > -1) {
              data.data.containerTypeRouteServiceVOList.forEach((v, i) => {
                this.selectContainerNum[i].price = v.price
                this.selectContainerNum[i].currency = v.currency
                this.selectContainerNum[i].unit = v.unit
                this.selectContainerNum[i].quantity = v.quantity
              })
            } else if (this.queryData.selectedService.indexOf(1) > -1) {
              data.data.trailerQuoteTmpVOList.forEach((v, i) => {
                this.selectContainerNum[i].price = v.price
                this.selectContainerNum[i].currency = v.currency
                this.selectContainerNum[i].unit = v.unit
                this.selectContainerNum[i].quantity = v.quantity
              })
            } else if (this.queryData.selectedService.indexOf(2) > -1) {
              data.data.customsQuoteTmpVOList.forEach((v, i) => {
                this.selectContainerNum[i].price = v.price
                this.selectContainerNum[i].currency = v.currency
                this.selectContainerNum[i].unit = v.unit
                this.selectContainerNum[i].quantity = v.quantity
              })
            } else if (this.queryData.selectedService.indexOf(3) > -1) {
              data.data.storageQuoteTmpVOList.forEach((v, i) => {
                this.selectContainerNum[i].price = v.price
                this.selectContainerNum[i].currency = v.currency
                this.selectContainerNum[i].unit = v.unit
                this.selectContainerNum[i].quantity = v.quantity
              })
            }
            // this.showFu()
          }
        } catch (error) {
          throw Error(error)
        } finally {
          this.isCalculateing = false
          this.queryData.impQuoteTmpId = params.impQuoteTmpId
        }
      },
      async addQuote() {
        try {
          // postData.startPort = this.queryData.startPort
          // postData.endPort = this.queryData.endPort
          // postData.impQuoteTmpId = this.queryData.impQuoteTmpId
          // postData.seaCabinetType = this.queryData.shippingContainerType
          // postData.serviceId = this.queryData.selectedService
          let data = (await addQuote({ data: this.quoteData })).data
          if (data.returnCode === 0) {
            this.$message({ message: '新增成功', type: 'success' })
            return data.quote
          }
        } catch (error) {
          throw Error(error)
        } finally {
        }
      },
      showFu() {
        const currentItem = this.quoteData.surchargeRouteServiceVOList
        let surchargeArr = []
        let surchargeObj = {}
        currentItem.forEach((v) => {
          let name
          if (v.sign) {
            name = v.englishName.slice(0, v.englishName.lastIndexOf('_'))
          } else {
            name = v.englishName
          }
          surchargeObj[name] ? '' : surchargeObj[name] = {}, surchargeObj[name].name = name
          v.sign ? surchargeObj[name][v.sign] = v.price : surchargeObj[name]['price'] = v.price
          surchargeObj[name].currency = v.currency
          surchargeObj[name].unit = v.unit
        })
        // for (let i in surchargeObj) {
        //   surchargeArr.push(surchargeObj[i])
        // }
        this.fuTableArr = currentItem
        console.log(this.fuTableArr, 'fuTableArr')
      },
      async saveAndGoToEdit() {
        if (this.isSaveAndEditing) {
          return false
        }
        this.isSaveAndEditing = true
        try {
          const data = (await this.addQuote())
          this.$router.push({ path: '/priceEdit', query: { id: data.id } })
        } catch (error) {
          this.isSaveAndEditing = false
          throw Error(error)
        }
      }
    },
    mounted() {
      this.queryData = this.$route.query
      this.getQuoteShow()
    },
    computed: {}
  }

</script>
<style lang="scss" scoped>
  #priceDetail {
    padding: 20px 0;
    .step-box {
      .list-item-text {
        line-height: 50px;
      }
      .list-item-line {
        height: 50px;
        width: 120px;
        position: relative;
      }
      .step-box-item:first-child .list-item-line {
        width: 0;
      }
      .step-box-item.active {
        font-weight: bold;
      }
      .list-item-line:after {
        content: '';
        display: block;
        width: 80%;
        height: 2px;
        background-color: #ddd;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
      }
    }

    .fcl-price-box {
      .range {
        display: inline-block;
        background: #6297F4;
        color: #fff;
        line-height: 32px;
        font-size: 16px;
        padding: 0 17px;
        margin-top: 20px;
      }
      .service-icon-box {
        text-align: center
      }
      .service-icon-item {
        display: inline-block;
        margin-top: 8px;
      }
      .service-icon-item+.service-icon-item {
        margin-left: 30px;
      }
      .service-ii-img {
        display: inline-block;
        width: 120px;
        height: 100px;
        box-sizing: border-box;
        /* border: 1px solid #91B6F8; */
      }
      .service-ii-img.customer {
        background: url('../../assets/customer.png') no-repeat center;
        background-size: 100% 100%;
      }
      .service-ii-img.sea-transport {
        background: url('../../assets/sea-transport.png');
        background-size: 100% 100%;
      }
      .service-ii-img.trailer {
        background: url('../../assets/trailer.png');
        background-size: 100% 100%;
      }
      .service-ii-img.certificate {
        background: url('../../assets/certificate.png') no-repeat center;
        background-size: 100% 100%;
      }
      .service-ii-img.insurance {
        background: url('../../assets/insurance.png');
        background-size: 100% 100%;
      }
      .service-ii-img.storage {
        background: url('../../assets/storage.png');
        background-size: 100% 100%;
      }
      .service-ii-text {
        text-align: center;
        font-size: 18px;
        line-height: 18px;
        margin-top: 14px;
      }
      .fpb-left {
        width: 800px;
        border: 1px solid #ddd;
        /* padding: 20px; */
        box-sizing: border-box;
      }
      .fpb-left-top:before {
        content: '';
        display: block;
        position: absolute;
        height: 20px;
        left: -20px;
        top: 0;
        width: 2px;
        background-color: #6297F4;
      }
      .fi-dt {
        display: inline-block;
        padding-right: 12px;
        width: 80px;
        text-align: right;
        font-size: 14px;
        color: #999;
      }
      .tuoche-juti {
        width: 280px;
        margin-top: 16px;
      }
      .fpb-left-top {
        position: relative;
        box-sizing: border-box;
        margin: 30px 90px 0;
        /* border-bottom: 1px solid #ddd; */
        padding-bottom: 54px;
        .h1 {
          /* border-left: 2px solid #6297F4; */
          /* padding-left: 20px; */
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 16px;
        }
        .el-form /deep/ .el-form-item__label {
          font-size: 16px;
        }
        .el-form /deep/ .el-form-item__content {
          line-height: 38px;
        }
      }
      .hr {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        margin: 34px 0 30px;
      }
      .fpb-lt-text-box {
        font-size: 0;
        line-height: 16px;
        position: relative;
      }
      .fpb-ltb-span {
        font-size: 16px;
        margin-bottom: 16px;
        display: inline-block;
      }
      .fpb-ltb-span:nth-child(even) {
        margin-left: 100px;
      }
      .setpb-item {
        font-size: 20px;
        width: 281px;
        line-height: 20px;
        border: 1px solid #999;
        /* height: 86px; */
        box-sizing: border-box;
        margin-bottom: 20px;
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
      .setpb-item:nth-child(2n+0) {
        margin-left: 55px;
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
      .service-item:first-child {
        margin-left: 0;
      }
      .service-item {
        width: 100px;
        font-size: 14px;
        text-align: center;
        margin-left: 50px;
      }
      .service-item-top {
        height: 100px;
        margin-bottom: 10px;
        background-color: #ddd;
      }
      .calculate-price {
        cursor: pointer;
        color: #fff;
        font-size: 18px;
        line-height: 46px;
        display: inline-block;
        padding: 0 30px;
        background-color: #6297F4;
      }
      .fpb-right {
        width: 380px;
        margin-left: 20px;
        border: 1px solid #ddd;
        box-sizing: border-box;
        .fpb-right-top,
        .fpb-r-sure {
          background-color: #f1f1f1;
        }
        .fpb-right-top-mid {
          margin-top: 20px;
        }
        .fpb-right-remark {
          border-top: 1px solid #ddd;
          padding: 10px;
        }
        .h2 {
          padding: 30px 34px 0;
          font-size: 18px;
          line-height: 18px;
        }
        .fpb-r-dl {
          font-size: 14px;
          line-height: 1;
          margin: 0 auto;
          padding-bottom: 16px;
          /* margin-bottom: 16px; */
        }
        .zhu {
          padding-bottom: 12px;
          padding-left: 20px;
        }
        .fpb-r-count {
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          padding: 10px 0;
          .fpb-r-count-left {
            width: 140px!important;
            font-size: 24px;
          }
          .fpb-rdl-span1,
          .fpb-rdl-span2 {
            font-size: 20px;
          }
        }

        .fpb-r-sure {
          text-align: center;
          cursor: pointer;
          padding: 20px 0;
          .button-save-edit {
            color: #fff;
            font-size: 18px;
            line-height: 46px;
            display: inline-block;
            padding: 0 30px;
            background-color: #6297F4;
          }
        }
        .fpb-r-count .fpb-r-dl dt {
          text-align: center;
          width: 100px;
        }
        .fpb-r-count span {
          font-size: 16px;
        }
        .fpb-r-dl dt {
          width: 150px;
          text-align: right;
          font-size: 14px;
        }
        .fpb-r-dl dd {
          width: 210px;
          font-size: 0;
          text-align: left;
          margin-left: 0;
        }
        .fpb-rdl-span1 {
          display: inline-block;
          width: 80px;
          color: #D84C56;
          font-size: 14px;
        }
        .fpb-r-count .fpb-rdl-span2 {
          color: #D84C56;
        }
        .fpb-rdl-span2 {
          display: inline-block;
          font-size: 14px;
        }
      }
    }
    .notice {
      border: 1px solid #ddd;
      padding: 34px 40px 40px;
      margin-top: 36px;
    }
    .notice-title {
      font-size: 20px;
      padding-left: 24px;
      position: relative;
      line-height: 20px;
    }
    .notice-title:after {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 100% 100%;
      background-color: #6297F4;
      position: absolute;
      left: 0;
      top: 4px;
    }
    .notice-text-box {
      margin-left: 24px;
      margin-top: 13px;
      li {
        font-size: 14px;
        line-height: 28px;
      }
    }
  }
</style>