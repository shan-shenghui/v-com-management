import * as types from './mutation-types'

export default {
  changeLoading({commit}, name) {
    commit(types.CHANGE_LODING, name)
  },

  changePageMenuList({commit}, val) {
    commit(types.CHANGE_PAGE_MENU_LIST, val)
  }
};
