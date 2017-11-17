import * as types from './mutation-types'

export default {
  changeLoading({commit}, name) {
    commit(types.CHANGE_LODING, name)
  },
  /*模块menu数据*/
  changeClickData({commit}, val) {
      commit(types.CLICK_DATA, val)
  }
};
