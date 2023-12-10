import { reqCartList } from "@/api"

const state = {

}

const mutations = {
  GETCARTLIST () {

  }
}

const actions = {
  async getCartList ({ commit }) {
    let result = await reqCartList()
    if (result.data == 200) {
      commit('GETCARTLIST', result.data)
    }
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}