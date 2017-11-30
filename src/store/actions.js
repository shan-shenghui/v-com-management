import * as types from './mutation-types'

export default {
  changeLoading({commit}, name) {
    commit(types.CHANGE_LODING, name)
  }
};
