import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter (state) {
      return state.counter
    }
  },
  mutations: {
    addCounter (state, payload) {
      return state.counter++
    },
    subtractCounter (state, payload) {
      return state.counter--
    }
  },
  actions: {}
});
