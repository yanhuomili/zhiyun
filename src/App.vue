<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'APP',
    mounted() {
      // this.$alert('<span class="icon-error"></span>请正确填写信息！', '', {
      //   dangerouslyUseHTMLString: true
      // })
    }
  }

</script>

<style lang="scss">
  /* @import '~normalize.css/normalize.css'; // normalize.css 样式格式化 */

  @import './styles/style.scss'; // 全局自定义样式
</style>