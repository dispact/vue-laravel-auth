import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import createPersistedState from "vuex-persistedstate";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: [createPersistedState()]
});