<template>
  <div class="company">
    <draggable>
      <transition-group>
        <div v-for="item in eArray" :key="item" class="eDom" :id="item">
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
        eArray: [],
        screenWidth:0
      }
    },
    mounted (){
      this.getEchartsData();
    },
    methods: {
      getEchartsData (){
        const _this = this;
        this.$http.get('http://localhost:8080/static/echarts.json').then(function (response) {
          if (response.data.length) {
            _this.optionDatas = response.data;

            //初始化多个dom
            _this.optionDatas.forEach(function (item, index) {
              _this.eArray.push(item.id);
            })

          } else {
            console.log('数据返回为空');
          }
        }).then(function () {

          _this.initEcharts(); //初始化echarts

        }).catch(function (error) {
          console.log(error);
        });

      },
      initEcharts(){
        if (this.optionDatas.length) {
          this.optionDatas.forEach(function (item) {
            var dom = document.getElementById(item.id);
            var myChart = echarts.init(dom);
            myChart.setOption(item.option);
          })
        } else {
          console.log('数据返回为空');
        }
      },

    },
    components: {
      draggable
    }

  }

</script>
