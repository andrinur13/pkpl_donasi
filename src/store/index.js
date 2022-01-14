import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: null,
      email: null,
    },
    login: false
  },
  mutations: {
    storeLogin(state, data) {
      state.login = true;
      state.user.name = data.name;
      state.user.email = data.email;
    }
  },
  actions: {
  },
  modules: {
  }
})
