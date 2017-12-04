import * as types from './mutation-types'

export default {
  //路由页面加载进度条
  [types.CHANGE_LODING](state, name) {
    state.loadding = name
  },


  [types.CHANGE_PAGE_MENU_LIST](state, val) {
    state.pageMenuList = val
  }
};
