import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routeData:[],
        selectedMoudle:{},
    },
    mutations: {
        routeDataInit(state,payload){
            state.routeData = payload
        },
        changeSelectedMoudle(state,payload){
            state.selectedMoudle = payload
        },
    },
    actions: {
    },
    modules: {
    }
})
