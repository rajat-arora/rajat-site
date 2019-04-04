import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: 'RAJAT ARORA',
    imageHeader: 'https://images.unsplash.com/photo-1504985954001-5737b2af529e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80'
  },
  mutations: {
    setPageTitle(state, payload){
      state.pageTitle = payload;
    },
    setImageHeader(state, payload){
      state.imageHeader = payload;
    },
  },
  actions: {
    setPageTitle ({ commit }, payload) {
      commit('setPageTitle', payload)
    },
    setImageHeader({ commit }, payload) {
      commit('setImageHeader', payload)
    }
  },
  getters:{
    getPageTitle: state => {
      return state.pageTitle;
    },
    getimageHeader: state => {
      return state.imageHeader;
    }
  }
})
