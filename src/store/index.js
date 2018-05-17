import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/',
  timeout: 3000
  // withCredentials: true
})


vue.use(vuex)


export default new vuex.Store({
  state: {
    cars: []
  },
  mutations: {
    setCars(state, cars){
      state.cars = cars
    }
  },
  actions: {
    getCars({dispatch, commit}){
      api.get('cars')
        .then(res=>{
          commit('setCars', res.data.data)
        })
    }
  }
})