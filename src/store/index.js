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
    cars: [],
    username: ''
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
    },
    addCar({dispatch, commit}, car){
      api.post('cars', car)
      .then(res =>{
        dispatch('getCars')
      })
    },
    editCar({dispatch, commit}, car){
      api.put('cars/' + car._id, car)
      .then(res=>{
        dispatch('getCars')
      })
    },
    deleteCar({dispatch, commit}, car){
      api.delete('cars/' + car._id)
      .then(res => {
        dispatch('getCars')
      })
    }
  }
})