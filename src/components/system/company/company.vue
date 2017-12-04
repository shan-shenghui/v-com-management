<template>
  <div class="company">
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div class="eDom" ref="main_0"></div>
    <div class="eDom" ref="main_1"></div>
    <div class="eDom" ref="main_2"></div>
    <div class="eDom" ref="main_3"></div>
  </div>
</template>
<style scoped lang="scss">
  @import "company.scss";

</style>

<script>
  import echarts from 'echarts';


  export  default {
    data (){
      return {
        datas: []
      }
    },
    mounted (){
      this.initEcharts();
    },
    methods: {
      initEcharts (){
        const _this = this;
        this.$http.get('http://localhost:8080/static/echarts.json').then(function (response) {
          if (response.data.length) {
            _this.datas = response.data;

            //初始化多个实例

            _this.datas.forEach(function (item, index) {
              var dom = _this.$refs['main_' + index];
              var myChart = echarts.init(dom);
              myChart.setOption(item);
            })

          } else {
            _this.datas = [];
          }


        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }

</script>
