import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from "@/api"
import { setToken, getToken } from "@/utils/token"
const state = {
  code: '',
  token: getToken(),
  userInfo: {}
}

const mutations = {
  GETCODE (state, code) {
    state.code = code
  },
  USERLOGIN (state, token) {
    state.token = token
  },
  GETUSERINFO (state, userInfo) {
    state.userInfo = userInfo
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
  },
  async userLogin ({ commit }, data) {
    let result = await reqUserLogin(data)
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token)
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  async getUserInfo ({ commit }) {
    let result = await reqUserInfo()
    commit('GETUSERINFO', result.data)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}