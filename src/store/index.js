import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    // jia (state, payload) {
    //   state.count += payload
    // }
    // 只写同步代码
    jia (state, payload) {
      // setTimeout(() => {
      state.count = payload
      // }, payload.delay)
    }
  },
  actions: {
    // 写异步代码
    jiaHandle (context, payload) {
      setTimeout(() => {
        // context 与 store 功能完全相同
        context.commit('jia', payload.count)
      }, payload.delay)
    }
  },
  modules: {
  }
})
