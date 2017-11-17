<template>
  <div class="loading" v-show="show">
    <div class="preloader">
      <div class="status">
        <p class="center-text"><span>拼命加载中···</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'loading',
    props: {
      show: {
        type: Boolean
      }
    }
  }
</script>
<style lang="scss" scoped="scoped">
  @import "./loading.scss";
</style>
