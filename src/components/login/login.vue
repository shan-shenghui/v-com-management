<template>
  <transition name="fade">

    <div class="login">
      <div class="row borderBottom">
        <div class="col-md-2 lineH">
        </div>
        <div class="col-md-7 lineH">
          <img src="../../assets/imgs/icon-p.png">
        </div>

        <div class="col-md-3 lineH">
          <div class="center">
            <a href="http://www.manystar.com/">鲜速送 ｜</a>
            <a href="http://www.xsusong.com/">众萃冷链鲜速送</a>
          </div>
        </div>
      </div>

      <div class="row paddingT borderBottom">
        <div class="col-md-2 ">
        </div>
        <div class="col-md-8 hight">
          <div class="row">
            <div class="col-md-6"><img src="../../assets/imgs/icon-t.png" alt="T" style="width: 100%;min-width: 300px;">
            </div>
            <div class="col-md-6">
              <el-form :label-position="labelPosition" :model="formLabelAlign"
                       style="border: 2px solid grey; padding:10px 40px; border-radius: 5px;">
                <el-form-item>
                  <el-input v-model="formLabelAlign.name" autofocus placeholder="用户名"
                            suffix-icon="glyphicon glyphicon-user">

                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="formLabelAlign.pass" placeholder="密码"
                            suffix-icon="glyphicon glyphicon-lock"></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="row">
                    <div class="col-md-6">
                      <el-input v-model="formLabelAlign.checkCode" @keyup.enter="login" size="small"
                                placeholder="验证码"></el-input>
                    </div>
                    <div class="col-md-6">
                    <span><canvas id="myCanvas" width="70px" height="37px"
                                  style="vertical-align: middle;margin-bottom: -5px;" @click="createCodes"></canvas>
                     </span>
                      <a size="small" @click="createCodes">换一张</a>
                    </div>
                  </div>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" style="width: 100%;" @click="login">提交</el-button>
                </el-form-item>
                <el-form-item>
                  <el-checkbox v-model="formLabelAlign.checked">一周内自动登陆</el-checkbox>
                </el-form-item>

                <div class="divide"></div>

              </el-form>
            </div>
          </div>

        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <p class="ebiz-login__copy lineH">
        <span>
        © 2016-2017&nbsp;&nbsp;<a href="http://www.xsusong.com/" target="_blank">鲜速送 www.xsusong.com</a>&nbsp;&nbsp;版权所有&nbsp;&nbsp;沪ICP备10024634号-1
      </span>
        </p>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  @import "login.scss";
</style>

<script>
  import {createCode} from '../../assets/js/createCode'

  export  default {
    data(){
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          pass: '',
          checkCode: '',
          checked: false
        }
      }
    },
    mounted(){
      this.compareTimeRange();
      createCode(this);
    },
    methods: {
      createCodes (){
        createCode(this);
      },
      compareTimeRange (){
        let now = new Date().getTime();
        let loginTime = localStorage.getItem('loginTime');
        if (loginTime != null && localStorage.getItem('userName')) {
          let range = now - loginTime;
          let day = range / (24 * 60 * 60 * 1000);
          if (day > 7) {
            localStorage.removeItem('loginTime');
          } else {
            this.$router.push({
              path: '/System'
            });
          }

        } else {
          this.$router.push({
            path: '/login'
          });
        }
      },
      loginCheck (){
        if (!this.formLabelAlign.name) {
          this.$notify({
            title: '警告',
            message: '用户名不能为空',
            duration: 1500,
            type: 'warning'
          });

          return false;
        } else if (!this.formLabelAlign.pass) {
          this.$notify({
            title: '警告',
            message: '密码不能为空',
            duration: 1500,
            type: 'warning'
          });
          return false;
        } else if (!this.formLabelAlign.checkCode) {
          this.$notify({
            title: '警告',
            message: '验证码不能为空',
            duration: 1500,
            type: 'warning'
          });
          return false;
        } else if (this.formLabelAlign.name && this.formLabelAlign.name != this.$store.state.loginMess.phoneNum) {
          this.$notify({
            title: '警告',
            message: '用户名不匹配,请重新输入!',
            duration: 1500,
            type: 'warning'
          });
          this.createCodes();
          return false;
        } else if (this.formLabelAlign.pass && this.formLabelAlign.pass != this.$store.state.loginMess.pass) {
          this.$notify({
            title: '警告',
            message: '密码输入错误,请重新输入!',
            duration: 1500,
            type: 'warning'
          });
          this.createCodes();
          return false;
        } else if (this.formLabelAlign.checkCode.toLowerCase() && this.formLabelAlign.checkCode != this.$store.state.loginMess.checkCode) {
          this.$notify({
            title: '警告',
            message: '验证码输入错误,请重新输入!',
            duration: 1500,
            type: 'warning'
          });
          this.createCodes();
          return false;
        } else {
          return true;
        }
      },
      login(){
        if (this.loginCheck()) {
          //验证通过

          if (this.formLabelAlign.checked) {   //保存 date  user信息到localStorage
            localStorage.setItem('loginTime', new Date().getTime());
            localStorage.setItem('userName', "单胜辉");
          } else {
            localStorage.removeItem('userName');
            localStorage.removeItem('loginTime');

            sessionStorage.setItem('userName', '单胜辉');    //user信息到sessionStorage
          }


          if (this.getMenuList()) {
            this.$router.replace({
              path: '/System'
            });
          } else {
            this.$router.replace({
              path: '/login'
            });
          }

        }


      },
      getMenuList (){
        this.$http({
          method: 'post',
          url: '../../../data.json',
          data: {}
        }).then(function (response) {
          console.log(response);
          sessionStorage.setItem('menuList', response);
          return true;

        }).catch(function (error) {
          console.log('返回menuList 错误：' + error);
          return false;
        });

      }
    }

  }

</script>
