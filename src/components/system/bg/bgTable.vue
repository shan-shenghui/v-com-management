<template>
  <div class="table_bg">
    <el-table
      :data="tableData"
      v-loading="loading"
      height="500"
      border
      style="width: 100%">
      <el-table-column
        prop="index"
        label="序号"
        width="40">
      </el-table-column>

      <el-table-column
        prop="code"
        label="实体编号"
        width="150">
      </el-table-column>

      <el-table-column
        prop="name"
        label="实体名称">
      </el-table-column>

      <el-table-column
        prop="role"
        label="供应链角色">
      </el-table-column>

      <el-table-column
        prop="country"
        label="国家">
      </el-table-column>

      <el-table-column
        prop="address"
        label="地区">
      </el-table-column>

      <el-table-column
        prop="city"
        label="城市">
      </el-table-column>

      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
  .table_bg {
    padding: 15px 5px;
    min-height:500px;
  }

</style>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      tableData: {
        type: Array,
        required: true
      },
      loading :{
        type: Boolean,
        required: true
      }

    },
    computed: {
      datas(){

      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
