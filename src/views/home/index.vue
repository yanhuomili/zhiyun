<template>
  <div class="index" id="index">
    <div class="banner">
      <div class="swiper-container  swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="value in banner">
            <a href="#" class="img-wh100 slide-a" :style="{'background-image':'url('+value+')'}">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <!-- <div class="searchBox">
        <div class="mid3 searchBox-content">
          <input type="text" class="input-serch" placeholder="起运港">
          <span class="h-line"></span>
          <input type="text" class="input-serch" placeholder="目的港">
          <a href="javascript:;" class="search">搜索</a href="javascript:;">
        </div>
      </div> -->
    </div>
    <div class="speedy">
      <div class="speed-info-box">
        <div class="speed-title text-center">一站式便捷物流</div>
        <p class="mar-t20 text-center">定船、拖车、报关、仓储、证书、货运险.......我们帮您搞定。</p>
      </div>
      <div class="speedy-items">
        <ul class="text-center">
          <li class="speedy-item speedy-item1">
            <img src="../../assets/index-sea.png" alt="图片" class="img-wh100">
            <div class="mid3">
              <div class="h3">海运</div>
              <div class="info">
                <p>舱位保障</p>
                <p>价格优势</p>
              </div>
            </div>
          </li>
          <li class="speedy-item speedy-item2">
            <img src="../../assets/index-trailer.png" alt="图片" class="img-wh100">
            <div class="mid3">
              <div class="h3">拖车</div>
              <div class="info">
                <p>高运力</p>
                <p>低延误</p>
              </div>
            </div>
          </li>
          <li class="speedy-item speedy-item3">
            <img src="../../assets/index-customer.png" alt="图片" class="img-wh100">
            <div class="mid3">
              <div class="h3">报关</div>
              <div class="info">
                <p>A类报关资质</p>
                <p>让您更放心</p>
              </div>
            </div>
          </li>
          <li class="speedy-item speedy-item4">
            <img src="../../assets/index-storage.png" alt="图片" class="img-wh100">
            <div class="mid3">
              <div class="h3">仓储</div>
              <div class="info">
                <p>更便捷</p>
                <p>安全出行</p>
              </div>
            </div>
          </li>
          <li class="speedy-item speedy-item5">
            <img src="../../assets/index-certificate.png" alt="图片" class="img-wh100">
            <div class="mid3">
              <div class="h3">证书</div>
              <div class="info">
                <p>各种类型</p>
                <p>安全保障</p>
              </div>
            </div>
          </li>
          <li class="speedy-item speedy-item6">
            <img src="../../assets/index-insurance.png" alt="图片" class="img-wh100">
            <div class="mid3">
              <div class="h3">保险</div>
              <div class="info">
                <p>闪电出单</p>
                <p>费率低</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="logistic-visual">
    </div>
    <div class="partner main-box">
      <div class="partner-title">
        合作伙伴
      </div>
      <div class="partner-logo-box">
        <div class="partner-logo-item" v-for="item in linkImgArr">
          <img :src="item" alt="友情链接">
        </div>
        <!-- <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div>
        <div class="partner-logo-item"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper-copy'
  export default {
    data() {
      return {
        banner: {
        },
        linkImgArr: [],
      }
    },
    mounted() {
      //  banner图相关
      for (let i = 0; i < 5; i++) {
        this.$set(this.banner, 'banner' + (i + 1), require('@/assets/banner' + (i + 1) + '.jpg'))
        // this.banner['banner' + (i + 1)] = require('../../assets/banner' + (i + 1) + '.jpg')
      }
      for (let j = 0; j < 10; j++) {
        this.linkImgArr[j] = require('@/assets/index-link' + (j + 1) + '.png')
      }
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          autoplay: 5000,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 1,
          paginationClickable: true,
          // spaceBetween: 30,
          loop: true
        })
      })
    },
    components: {
    },
    computed: {
    }
  }

</script>
<style lang="scss">
  @import "./scss/swiper.scss";
  #index {
    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      box-sizing: border-box;
      background-color: #999;
      /* border: 1px solid #979797; */
      border-radius: 0;
      opacity: 1;
      border-radius: 100% 100%;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #769CDE;
    }
    .swiper-pagination {
      height: 20px;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets {
      bottom: 24px;
    }
  }
</style>
<style lang="scss" scoped>
  .index {
    .banner {
      width: 100%;
      height: 580px;
      position: relative;
    }
    .slide-a {
      background-position: center;
      background-size: cover;
    }

    .speedy {
      margin: 60px 0;
    }
    .speed-info-box {
      font-size: 14px;
      width: 500px;
      margin: 60px auto;
    }
    .speed-title {
      font-size: 36px;
    }
    .speedy-items {
      width: 1060px;
      margin: 0 auto;
      height: 590px;
      position: relative;
      .speedy-item {
        position: absolute;
        color: #fff;
        background-color: #333;
        overflow: hidden;
        .h3 {
          font-size: 28px;
          line-height: 28px;
        }
        .info {
          margin-top: 24px;
          line-height: 36px;
          font-size: 18px;
        }
        img {
          transition: all .5s ease;
        }
      }
      .speedy-item:hover img {
        transform: scale(1.2);
      }
      .speedy-item1 {
        width: 340px;
        height: 280px;
        left: 0;
        top: 0;
        /* background: url('../../assets/index-sea.png') no-repeat center; */
        /* background-size: 100% 100%; */
      }
      .speedy-item2 {
        width: 340px;
        height: 280px;
        left: 370px;
        top: 0;
        /* background: url('../../assets/index-trailer.png') no-repeat center;
        background-size: 100% 100%; */
      }
      .speedy-item3 {
        width: 320px;
        height: 320px;
        right: 0;
        top: 0;
        /* background: url('../../assets/index-storage.png') no-repeat center;
        background-size: 100% 100%; */
      }
      .speedy-item4 {
        width: 280px;
        height: 280px;
        left: 0;
        top: 310px;
        /* background: url('../../assets/index-customer.png') no-repeat center;
        background-size: 100% 100%; */
      }
      .speedy-item5 {
        width: 400px;
        height: 280px;
        left: 310px;
        top: 310px;
        /* background: url('../../assets/index-insurance.png') no-repeat center;
        background-size: 100% 100%; */
      }
      .speedy-item6 {
        width: 320px;
        height: 240px;
        right: 0;
        top: 350px;
        /* background: url('../../assets/index-certificate.png') no-repeat center;
        background-size: 100% 100%; */
      }
    }
    .logistic-visual {
      width: 100%;
      background: url('../../assets/logistic-visual.png') no-repeat center;
      background-size: cover;
      margin-top: 106px;
      height: 520px;
    }
    .partner {
      margin-top: 80px;
      margin-bottom: 140px;
      text-align: center;
      .partner-title {
        line-height: 36px;
        font-size: 36px;
        position: relative;
        padding: 0 40px;
        display: inline-block;
      }
      .partner-title::before {
        content: '';
        display: block;
        position: absolute;
        width: 200px;
        height: 2px;
        background-color: #6297F4;
        left: -200px;
        top: 19px
      }
      .partner-title::after {
        content: '';
        display: block;
        position: absolute;
        width: 200px;
        height: 2px;
        background-color: #6297F4;
        right: -200px;
        top: 19px
      }
      .partner-logo-box {
        width: 920px;
        font-size: 0;
        margin: 0 auto;
        margin-top: 64px;
        .partner-logo-item {
          display: inline-block;
          width: 160px;
          height: 80px;
          margin-bottom: 30px;
          margin-right: 30px;
          background-color: #333;
        }
        .partner-logo-item:nth-child(5n) {
          margin-right: 0;
        }
      }
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>