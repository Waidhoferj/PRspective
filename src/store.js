import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
axios.defaults.baseURL = "#"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displaySearchError: true,
    mainImage: "../assets/fillerImg.jpg"
  },
  mutations: {

  },
  actions: {
    search(context, text) {
      return axios.post("url", {searchText: text})
    }
  }
})
