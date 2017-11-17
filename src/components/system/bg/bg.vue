<!--集团管理-->

<template>
  <div class="bg">
    <bg-header @addrefleshcover="addrefleshcover"></bg-header>
    <bg-table :table-data="tableData" :loading="loading"></bg-table>
    <pagination :total="total" :page-sizes="pageSizes"></pagination>
  </div>
</template>
<style lang="scss" scoped>
  @import './bg.scss';
</style>

<script>
  import bgHeader from './bgHeader.vue'

  import bgTable from './bgTable.vue'

  import pagination from '../../common/pagination.vue'

  export default {
    data() {
      return {
        tableData: [
          {
            index: '1',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '2',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '3',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '4',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '5',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '6',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '7',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '8',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '9',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '10',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '11',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '12',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '13',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '14',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          }, {
            index: '15',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '16',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '17',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          },
          {
            index: '18',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          }, {
            index: '19',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          }, {
            index: '20',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          }, {
            index: '21',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          }, {
            index: '22',
            code: '100011000006',
            name: '众萃集团',
            role: '集团总部',
            country: '中国',
            address: '上海市',
            city: '市辖区',
            state: '有效'
          }],
        loading: false
      }
    },
    components: {
      bgHeader,
      bgTable,
      pagination
    },
    computed: {
      total (){
        return this.tableData.length || 0;
      },
      pageSizes (){
        return [10, 20, 30, 50];
      }
    },
    methods: {
      addrefleshcover(){
        this.loading = true;
        setTimeout(() => {
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

