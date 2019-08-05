import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        listJosn:[]
    },
    getters:{
        getlist(state){
            return state.listJosn
        }
    },
    mutations:{
        getlistJson(state,obj){
           state.listJosn=obj
           console.log(state.listJosn)
        }
    },
    actions:{
        getAction({commit}){
            axios.get("/api/getdata").then(({data})=>{
                commit("getlistJson",data)
            })
        }   
    }
})