import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedMoudle:{},
        selectedMenu:''
    },
    mutations: {
        changeSelectedMoudle(state,payload){
            state.selectedMoudle = payload
        },
        changeSelectdMenu(state,payload){
            state.selectedMenu = payload
        }
    },
    actions: {
    },
    modules: {
    }
})
