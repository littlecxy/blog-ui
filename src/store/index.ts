import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 0代表未登录,1代表登录
    status: ''
  },
  mutations: {
    setUserInfo(state,status) {
      sessionStorage.setItem('status',status);
        state.status = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
