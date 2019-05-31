import StoreDefineLogin from '@/define/store/login/login'
import { Store, Commit, Dispatch } from 'vuex'

export interface State {
  loginState: boolean
}

const state: State = {
  loginState: false
}

const getters = {
  [StoreDefineLogin.GET_LOGIN_STATE] (state: State) {
    return state.loginState
  }
}

const mutations = {
  [StoreDefineLogin.SET_LOGIN_STATE] (state: State, newState: boolean) {
    state.loginState = newState
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
