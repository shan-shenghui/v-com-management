import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);


const state = {
  loadding: true,

  loginMess: {    //登陆验证信息
    phoneNum: '111',
    pass: '111',
    checkCode: ''
  },

  loginTime: {time: new Date().toLocaleString()},   //登陆时间
  assignData: {data: ['帮助文档', '问题反馈', '联系我们']},
  headerData: [
    {
      "name": "系统",
      "path": "/system"
    }, {
      "name": "基础",
      "path": "/base"
    }, {
      "name": "采购",
      "path": "/sale"
    }, {
      "name": "客服",
      "path": "/buy"
    },
    {
      "name": "库存",
      "path": "/cts"
    },
    {
      "name": "仓库",
      "path": "/iwm"
    },
    {
      "name": "销售",
      "path": "/repository"
    }],  //header 数据

  pageMenuList: []   //当前路由下的menu data

};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
