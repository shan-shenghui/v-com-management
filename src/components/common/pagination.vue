<!--分页-->
<template>
  <div class="block pull-right">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageNo: 1,
        pageSize: 10
      }
    },
    props: {
      total: {
        type: Number,
        required: true
      },
      pageSizes: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleSizeChange(val) {
        // 每页显示条数
        this.pageSize = val;
        this.change();
      },
      handleCurrentChange(val) {

        // 当前页

        this.pageNo = val;

        this.change();

      },
      change (){
        let obj = {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
//        this.$emit('changetabledata', obj);
        this.changetabledata(obj)
      },

      changetabledata(val){
        var obj = {
          pageNo: 1,
          pageSize: 10
        }
        if (val && val.pageNo) {
          this.PaginationTableData(val);
        } else {
          this.PaginationTableData(obj);
        }

      },
      PaginationTableData(val){
        /* 分页数据查询 前端分页*/
        var pageNo = val.pageNo;
        var pageSize = val.pageSize;
        var dataLength = this.tableData.length;
        if (pageNo * pageSize < dataLength) {
//          this.tableData.slice((pageNo - 1) * pageSize, pageNo * pageSize);
        } else {
//          this.tableData;
        }

      }
    },
    computed: {}
  }
</script>
