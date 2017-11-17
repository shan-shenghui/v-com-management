<template>
  <div class="row">
    <div class="col-md-3">
      <input class="form-control" type="text" placeholder="集团名称">

    </div>
    <div class="col-md-1">
      <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
    </div>
    <div class="col-md-8">
      <div class="pull-right">

        <el-button type="primary" size="small" icon="el-icon-document">新增</el-button>
        <el-button type="default" size="small" icon="el-icon-refresh" @click="reflesh()">刷新</el-button>

        <el-tooltip content="自定义列表项" placement="top" effect="light">
          <el-button type="default" size="small" icon="el-icon-setting"></el-button>
        </el-tooltip>

      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data (){
      return {}
    },
    methods: {
      reflesh(){
          this.$emit('addrefleshcover');

      }
    }
  }

</script>
