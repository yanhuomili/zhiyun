<template>
  <div class="PC-header" id="PC-header">
    <div class="nav">
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
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        banner: {
        }
      }
    },
    mounted() {

    },
    components: {
    },
    computed: {
    }
  }

</script>

<style lang="scss" scoped>
  #PC-header {
    .nav {
      width: 100%;
      background-color: #6297F4;
      font-size: 0;
      .nav-box {}
      .nb-item {
        font-size: 20px;
        line-height: 20px;
        display: inline-block;
        padding: 13px 30px;
        color: #333;
        text-decoration: none!important;
      }
      .nb-item.router-link-active {
        color: #fff;
        background-color: #4D7ED1;
      }
    }
  }
</style>