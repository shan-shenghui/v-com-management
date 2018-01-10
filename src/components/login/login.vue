<template>
  <transition name="fade">

    <div class="login">
      <div class="row borderBottom">
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 lineH">
          <img src="../../assets/imgs/icon-p.png">
        </div>

        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 lineH">
          <div class="center">
            <a href="http://www.manystar.com/">鲜速送 ｜</a>
            <a href="http://www.xsusong.com/">众萃冷链鲜速送</a>
          </div>
        </div>
      </div>

      <div class="row paddingT borderBottom">
        <div
          class="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-2
          col-md-offset-2 col-sm-offset-2 col-xs-offset-2">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <img src="../../assets/imgs/icon-t.png" alt="T"
                   style="width: 100%;min-width: 100%;">
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <el-form :label-position="labelPosition" :model="formLabelAlign"
                       style="border: 2px solid grey; padding:10px 40px;
                       border-radius: 5px;max-height: 340px;">
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
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <input class="codeCheckInput" type="text" @keyup.enter="login" placeholder="验证码"
                             v-model="formLabelAlign.checkCode"/>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <canvas id="myCanvas" width="70px" height="37px"
                                  style="vertical-align: middle;margin-bottom: -5px;" @click="createCodes"></canvas>

                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <a size="small" class="changeBtn" @click="createCodes">换一张</a>
                    </div>

                  </div>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" style="width: 100%;" @click="login">提交</el-button>
                </el-form-item>
                <el-form-item>
                  <el-checkbox v-model="formLabelAlign.autoLogin">一周内自动登陆</el-checkbox>
                </el-form-item>

              </el-form>
            </div>
          </div>

        </div>

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
  import {
    createCode
  } from '../../assets/js/createCode'

  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          pass: '',
          checkCode: '',
          autoLogin: false
        }
      }
    },
    mounted() {
      this.compareTimeRange();
      createCode(this);
    },
    methods: {
      createCodes() {
        createCode(this);
      },
      compareTimeRange() {
        let now = new Date().getTime();
        let loginTime = localStorage.getItem('loginTime');
        if (loginTime != null && localStorage.getItem('userName')) {
          let range = now - loginTime;
          let day = range / (24 * 60 * 60 * 1000);
          if (day > 7) {
            localStorage.removeItem('loginTime');
            localStorage.removeItem('userName');
          } else {
            this.$router.push({
              path: '/system'
            });
          }

        } else {
          this.$router.push({
            path: '/login'
          });
        }
      },
      loginCheck() {
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

          //

          return true;
        }
      },
      login() {

        if (this.loginCheck()) {
          //验证通过

          if (this.formLabelAlign.autoLogin) { //保存 date  user信息到localStorage
            localStorage.setItem('loginTime', new Date().getTime());
            localStorage.setItem('userName', "单胜辉");
          } else {
            localStorage.removeItem('userName');
            localStorage.removeItem('loginTime');

            sessionStorage.setItem('userName', '单胜辉'); //user信息到sessionStorage
          }


          this.getMenuList(); //


        }

      },
      getMenuList() {
        const _this = this;

        this.$http.get('http://localhost:8080/static/data.json')
          .then(function (response) {
            console.log(response.data);
            if (response.data.length) {

              console.log(JSON.stringify(response.data[0]));

              if (_this.formLabelAlign.autoLogin) {
                localStorage.setItem('allMenuList', JSON.stringify(response.data[0]));
              } else {
                sessionStorage.setItem('allMenuList', JSON.stringify(response.data[0]));
              }

              _this.$router.replace({
                path: '/system'
              });
            }

          })
          .catch(function (err) {
            console.log(err);
            _this.$router.replace({
              path: '/login'
            });
          });

      }
    }

  }
</script>
