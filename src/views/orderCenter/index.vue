<template>
  <div id="orderCenter">
    <div class="main-box clearfix" style="padding-bottom:150px;">
      <div class="left">
        <ul>
          <li class="oc-item">
            <router-link to="/orderCenter/orderAll" class="oc-link">
              全部订单
            </router-link>
          </li>
          <li class="oc-item">
            <router-link to="/orderCenter/orderFinish" class="oc-link">
              已完成订单
            </router-link>
          </li>
          <li class="oc-item">
            <router-link to="/orderCenter/orderUnfinished" class="oc-link">
              未完成订单
            </router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
    },
    computed: {
    },
    components: {

    },
    props: {
      value: {
        default: 0
      }
    },
    watch: {
    },
    methods: {

    }
  }

</script>

<style lang="scss" scoped>
  #orderCenter {
    padding-top: 40px;
    .left {
      float: left;
      width: 140px;
      font-size: 18px;
      .oc-item {
        height: 46px;
        text-align: left;
        line-height: 18px;
      }
      .oc-link {
        font-size: 18px;
        line-height: 18px;
        display: inline-block;
        color: #333;
      }
      .oc-link.router-link-active {
        color: #6297F4;
      }
    }
    .right {
      width: 1060px;
      float: left;
    }
  }
</style>