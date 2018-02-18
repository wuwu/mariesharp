import Vuex from 'vuex'

// Mutation Types
export const types = {
  TOGGLE_MENU: 'TOGGLE_MENU'

}

const store = () => new Vuex.Store({
  state: {
    loading: false,
    showMenu: false,
    isAdmin: process.env.IS_ADMIN,
    debug: process.env.debug
  },
  actions: {

  },
  mutations: {
    [types.TOGGLE_MENU] (state, payload) {
      state.showMenu = payload
    }
  },
  actions: {
    toggleMenu ({commit, state}, payload) {
      commit(types.TOGGLE_MENU, payload)
    },
  },
  getters: {
    getPosts(state) {
      return state.post
    },
    browserHistory(state) {
      return state.route.from.path
    },
    showMenu(state) {
      return state.showMenu
    }
  }
})

export default store
