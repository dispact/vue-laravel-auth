import axios from 'axios'
import router from '../../router'

const state = {
   loggingIn: false,
   loginSuccess: false,
   errorMessage: '',
   registering: false,
   token: localStorage.getItem('token') || '',
   user: localStorage.getItem('user') || {}
}

const getters = {
   isLoggedIn: state => !!state.token,
   getErrorMessage: state => state.errorMessage,
   getUser: state => state.user
}

const actions = {
   login({ commit }, creds) {
      return new Promise((resolve, reject) => {
         commit('loginStart')
         axios.post('http://127.0.0.1:8000/api/session', 
            { email: creds.email, password: creds.password }
         )
         .then(response => {
            const token = 'Bearer ' + response.data.access_token
            const user = response.data.user
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            commit('loginSuccess', [token, user])
            router.push('/')
            resolve(response)
         })
         .catch(err => {
            commit('loginError', err.response.data.message)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            reject(err)
         });
      })
   },
   logout({ commit }) {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete axios.defaults.headers.common['Authorization']
   },
   register({commit, dispatch}, user) {
      return new Promise((resolve, reject) => {
         commit('registerStart')
         axios.post(
            'http://127.0.0.1:8000/api/users', 
            { name: user.name, email: user.email, password: user.password, 
               password_confirmation: user.password_confirmation
            })
         .then(response => {
            commit('registerSuccess')
            dispatch('login', {email: user.email, password: user.password})
            resolve(response)
         })
         .catch(err => {
            commit('registerError', err.response.data.message)
            reject(err)
         })
      })
   }
}

const mutations = {
   loginStart: (state) => state.loggingIn = true,
   loginSuccess: (state, payload) => {
      state.loginSuccess = true
      state.token = payload[0]
      state.user = payload[1],
      state.loggingIn = false,
      state.errorMessage = ''
   },
   loginError: (state, errorMessage) => {
      state.errorMessage = errorMessage,
      state.loggingIn = false
   },
   logout: (state) => state.token = '',
   registerStart: (state) => state.registering = true,
   registerSuccess: (state) => {
      state.registering = false,
      state.errorMessage = ''
   },
   registerError: (state, errorMessage) => {
      state.errorMessage = errorMessage,
      state.registering = false
   },
}

export default {
   state, 
   getters,
   actions,
   mutations
}