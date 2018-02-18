import Vuex from 'vuex'

// Mutation Types
export const types = {
  SITE_DATA_UPDATE: 'SITE_DATA_UPDATE'

}

const store = () => new Vuex.Store({
  state: {
    post: "wuwu",
    category: null,
    history: [],
    meta: {
      description: '',
      name: ''
    },
    loading: false,
    isAdmin: true
  },
  actions: {

  },
  mutations: {
    [types.SITE_DATA_UPDATE] (state, payload) {
      state.site_data = { ...payload }
    }
  },
  getters: {
    getPosts(state) {
      return state.post
    },
    browserHistory(state) {
      return state.route.from.path
    }
  }
})

export default store
