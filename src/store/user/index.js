import { reqGetCode, reqUserRegister } from "@/api"
const state = {
  code: ''
}

const mutations = {
  GETCODE (state, code) {
    state.code = code
  }
}

const actions = {
  async getCode ({ commit }, phone) {
    let result = await reqGetCode(phone)
    if (result.code == 200) {
      commit('GETCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error("fail"))
    }
  },
  async userRegister ({ commit }, user) {
    let result = await reqUserRegister(user)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail...'))
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}