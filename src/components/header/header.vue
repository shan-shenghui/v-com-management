<template>
  <div v-show="username">
    <header class="header">
      <el-row class="grid-content bg-purple-dark">
        <el-col :span="1">
          <div class="titleS">
            <span><i class="glyphicon glyphicon-leaf"></i></span>
          </div>
        </el-col>

        <el-col :span="1" v-for="(item, key) in headerData" :key="key">
          <div class="titleS">
            <a @click="$goRoute(item.path);putStoreClickData(item.path)"><span>{{item.name}}</span></a>
          </div>
        </el-col>

        <el-col :span="10">
          <div>.</div>
        </el-col>

        <el-col :span="1">
          <div class="titleS" v-popover:popover1>
            <el-popover
              ref="popover1"
              placement="bottom"
              title=""
              width="200"
              trigger="hover"
              content="当前没有后台任务正在运行">
            </el-popover>
            <span><i class="el-icon-circle-check-outline"></i> </span>
          </div>
        </el-col>

        <el-col :span="1">
          <div class="titleS" v-popover:popovsser2>
            <el-popover
              ref="popovsser2"
              placement="bottom"
              title="最近一次访问时间"
              width="200"
              trigger="hover"
              :content="loginTime">
            </el-popover>
            <span><i class="el-icon-time"></i></span>
          </div>
        </el-col>

        <el-col :span="2">
          <div class="titleS assign">
            <el-dropdown style="display: block;">
         <span class="el-dropdown-link">
              支持<i class="el-icon-arrow-down el-icon--right"></i>
               </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in assignData" :key="index" @click="">{{item}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>
        </el-col>

        <el-col :span="2">
          <div class="titleS">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
               欢迎您,{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
               </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="changePass">修改密码</el-dropdown-item>
                <el-dropdown-item command="loginOut">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>
        </el-col>

      </el-row>

    </header>
  </div>
</template>

<style lang="scss" scoped>
  @import './header.scss';
</style>

<script>

  export default {
    name: 'index',
    data() {
      return {
        defaultActive1: 'name1',
        defaultActive2: 'name2',
        visible2: '',
        visible3: '',
        userMess :{
          passR:'',
          newPass:'',
          newPassC:''
        }
      }
    },
    computed: {
      headerData() {
        return this.$store.state.headerData;
      },
      loginTime(){
        return '本地时间:' + this.$store.state.loginTime.time;
      },
      assignData (){
        return this.$store.state.assignData.data;
      },
      username (){
        let userName = sessionStorage.getItem('userName');
        if (userName) {
          return userName;
        } else {
          return localStorage.getItem('userName');
        }
      }
    },
    methods: {
      putStoreClickData(path){

        this.$store.dispatch('changeClickData', path.substr(1))
      },
      handleCommand(command){
        if (command == 'loginOut') {
          this.$confirm('您确定要退出该系统嘛?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            localStorage.removeItem('userName');
          localStorage.removeItem('loginTime');
          sessionStorage.removeItem('userName');

          this.$router.push({
            path: '/login'
          });


        }).
          catch(() => {
            this.$notify.info({
            title: '提示',
            duration: 1000,
            message: '已取消退出'
          });
        });
        } else {
          //changePass
          this.$alert(` <div class="container">
                  <div class="row">
                    <label>原始密码: </label>
                      <input type="text" class="form-control"  style="width:350px" v-model="userMess.passR">
                   </div>

                  <div class="row">
                    <label>请输入新密码：</label>
                    <input type="text" class="form-control"  style="width:350px" v-model="userMess.newPass">
                  </div>
                  <div class="row">
                    <label>请再次输入新密码：</label>
                    <input type="text" class="form-control"  style="width:350px" v-model="userMess.newPassC">
                  </div>
                </div>`, '修改密码', {
            dangerouslyUseHTMLString: true
          });
        }
      }
    }
  }
</script>


