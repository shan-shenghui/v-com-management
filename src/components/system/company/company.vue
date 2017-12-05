<template>
  <div class="company">
    <!-- 为ECharts准备一个具备大小（宽高）的Dom 。 动态初始化多个echarts -->
    <draggable>
      <transition-group>
        <div v-for="item in myArray" :key="item" class="eDom" :id="item">
        </div>
      </transition-group>
    </draggable>
  </div>

</template>
<style scoped lang="scss">
  @import "company.scss";

</style>

<script>
  import echarts from 'echarts'
  import draggable from 'vuedraggable'


  export  default {
    data (){
      return {
        optionDatas: [],
        myArray: []
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
            _this.optionDatas = response.data;

            //初始化多个dom
            _this.optionDatas.forEach(function (item, index) {
              _this.myArray.push(item.id);  //e_0 e_1 ...

            })

          } else {
            console.log('数据返回为空');
          }
        }).then(function () {

          //dom初始化后 初始化echarts
          if (_this.optionDatas.length) {
            _this.optionDatas.forEach(function (item) {
              var dom = document.getElementById(item.id);
              var myChart = echarts.init(dom);
              myChart.setOption(item.option);
            })
          } else {
            console.log('数据返回为空');
          }

        }).catch(function (error) {
          console.log(error);
        })
      },

    },
    components: {
      draggable
    }

  }

</script>
