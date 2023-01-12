import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
    }
  },
  getters: {
    getUser: (state) => {
      return state.user
    }
  },
  mutations: {
    saveUser: function (state, data) {
      state.user = data
    }
  },
  actions: {
    saveUser: ({ commit }, data) => {
      commit('saveUser', data)
    }
  },
  modules: {
  }
})
