import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from "./info"
import category from "./category"
import record from "./record"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error){
      state.error = error
    },
    clearError(state){
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      // const key = process.env.VUE_APP_FIXER;
      // const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB,KZT`);
      const res = {
        "success": true,
        "timestamp": 1596884345,
        "base": "EUR",
        "date": "2020-08-08",
        "rates": {
          "USD": 1.178885,
          "EUR": 1,
          "RUB": 86.899201,
          "KZT": 494.981628
        }
      }
      // return await res.json()
      return res
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})
