<template>
  <div class="menu">
    <div class="left" :class="{ develop: !isCollapse, reduce: isCollapse }">
      <div class="sidebar-fold" @click="isCollapse = !isCollapse">
        <i class="el-icon-d-arrow-right wrapi" v-if="!isCollapse"></i>
        <i class="el-icon-d-arrow-left wrapi" v-if="isCollapse"></i>
      </div>

      <div class="listTree" :class="{ develop: !isCollapse, reduce: isCollapse }">

        <div class="panel-group" id="accordion">

          <div class="panel" v-for="(item,index) in list" :key="index">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a :href="'#item'+ index"  data-toggle="collapse" data-parent="#accordion">
                  <i class="icon-user wrapi2"></i>
                  <span class="title">
                          {{item.name}}
                      </span>
                </a>
              </h4>
            </div>
            <div :id="'item'+ index" class="panel-collapse collapse">
              <div class="panel-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="(item2,index2) in item.children" :key="index2"
                      @click="$goRoute(item2.path)">
                    <i class="icon-tasks wrapi2"></i>
                    <a>{{item2.name}}</a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right" :class="{ develop2: !isCollapse, reduce2: isCollapse }">
      <router-view></router-view>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  @import './menu.scss';

</style>

<script>

  export default {
    data() {
      return {
        develop: true,
        reduce: false,
        isCollapse: false
      }
    },
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>
