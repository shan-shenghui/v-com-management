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
  clickData: '',  //点击header的数据

  treeListData: {
    system: [
      {
        name: '组织结构',
        children: [{name: '集团管理', path: '/system/bg'},
          {name: '公司管理', path: '/system/company'},
          {name: '客户管理', path: '/system/customer'},
          {name: '供应商', path: '/system/supplier'},
          {name: '企业关系组', path: '/system/list'},
          {name: '企业关系列表', path: '/system/prcode'}]
      },
      {name: '用户权限', children: [{name: '客户用户管理', path: '/system/customerUserManage'}]},
      {
        name: '导入导出', children: [{name: '货单导出', path: '/system/exporten'}]
      }
    ],
    base: [
      {
        name: '产品目录',
        children: [{name: '目录管理', path: 'catalog'},
          {name: '标准产品  ', path: 'stdItem'},
          {name: '属性产品', path: 'item'},
          {name: '目录组管理', path: 'catalogGroupAdmin'},
          {name: '目录组分类', path: 'cataloggroupClass'},
          {name: '目录组授权', path: 'categoryGroupAuth'},
          {name: '产品线管理', path: 'productline'}]
      }
    ],
    sale: [
      {
        name: '产品目录',
        children: [{name: '目录管理', path: 'catalog'},
          {name: '标准产品  ', path: 'stdItem'},
          {name: '属性产品', path: 'item'},
          {name: '目录组管理', path: 'catalogGroupAdmin'},
          {name: '目录组分类', path: 'cataloggroupClass'},
          {name: '目录组授权', path: 'categoryGroupAuth'},
          {name: '产品线管理', path: 'productline'}]
      }
    ],
    buy: [
      {
        name: '产品目录',
        children: [{name: '目录管理', path: 'catalog'},
          {name: '标准产品  ', path: 'stdItem'},
          {name: '属性产品', path: 'item'},
          {name: '目录组管理', path: 'catalogGroupAdmin'},
          {name: '目录组分类', path: 'cataloggroupClass'},
          {name: '目录组授权', path: 'categoryGroupAuth'},
          {name: '产品线管理', path: 'productline'}]
      }
    ],
    cts: [
      {
        name: '产品目录',
        children: [{name: '目录管理', path: 'catalog'},
          {name: '标准产品  ', path: 'stdItem'},
          {name: '属性产品', path: 'item'},
          {name: '目录组管理', path: 'catalogGroupAdmin'},
          {name: '目录组分类', path: 'cataloggroupClass'},
          {name: '目录组授权', path: 'categoryGroupAuth'},
          {name: '产品线管理', path: 'productline'}]
      }
    ],
    iwm: [
      {
        name: '产品目录',
        children: [{name: '目录管理', path: 'catalog'},
          {name: '标准产品  ', path: 'stdItem'},
          {name: '属性产品', path: 'item'},
          {name: '目录组管理', path: 'catalogGroupAdmin'},
          {name: '目录组分类', path: 'cataloggroupClass'},
          {name: '目录组授权', path: 'categoryGroupAuth'},
          {name: '产品线管理', path: 'productline'}]
      }
    ],
    repository: [
      {
        name: '产品目录',
        children: [{name: '目录管理', path: 'catalog'},
          {name: '标准产品  ', path: 'stdItem'},
          {name: '属性产品', path: 'item'},
          {name: '目录组管理', path: 'catalogGroupAdmin'},
          {name: '目录组分类', path: 'cataloggroupClass'},
          {name: '目录组授权', path: 'categoryGroupAuth'},
          {name: '产品线管理', path: 'productline'}]
      }
    ],
  }  //列表数据

};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
