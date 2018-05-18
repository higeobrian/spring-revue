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
    homes: [],
    jobs: []
  },

  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    setHomes(state, homes) {
      state.homes = homes
    },
    setJobs(state, jobs){
      state.jobs = jobs
    }
  },

  actions: {
    getCars({ dispatch, commit }) {
      api.get('cars')
        .then(res => {
          commit('setCars', res.data.data)
        })
    },
    addCar({ dispatch, commit }, car) {
      api.post('cars', car)
        .then(res => {
          dispatch('getCars')
        })
    },
    editCar({ dispatch, commit }, car) {
      api.put('cars/' + car._id, car)
        .then(res => {
          dispatch('getCars')
        })
    },
    deleteCar({ dispatch, commit }, car) {
      api.delete('cars/' + car._id)
        .then(res => {
          dispatch('getCars')
        })
    },

    getHomes({ dispatch, commit }) {
      api.get('houses')
        .then(res => {
          console.log(res)
          commit('setHomes', res.data.data)
        })
    },
    addHome({ dispatch, commit }, home) {
      api.post('houses', home)
        .then(res => {
          dispatch('getHomes')
        })
    },
    editHome({ dispatch, commit }, home) {
      api.put('houses/' + home._id, home)
        .then(res => {
          dispatch('getHomes')
        })
    },
    deleteHome({ dispatch, commit }, home) {
      api.delete('houses/' + home._id)
        .then(res => {
          dispatch('getHomes')
        })
    },

    getJobs({ dispatch, commit }) {
      api.get('jobs')
        .then(res => {
          console.log(res)
          commit('setJobs', res.data.data)
        })
    },
    addJob({ dispatch, commit }, job) {
      api.post('jobs', job)
        .then(res => {
          dispatch('getJobs')
        })
    },
    editJob({ dispatch, commit }, job) {
      api.put('jobs/' + job._id, job)
        .then(res => {
          dispatch('getJobs')
        })
    },
    deleteJob({ dispatch, commit }, job) {
      api.delete('jobs/' + job._id)
        .then(res => {
          dispatch('getJobs')
        })
    }

  }
})