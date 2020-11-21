import Vue from "vue";
import Vuex from "vuex"
import io from 'socket.io-client'
// import router from "./main.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // socket: io('http://localhost:3000'),
        socket: io('http://192.168.1.159:4000'),
    },

    actions: {
        updateUrl(context, url) {
            context.commit("updateUrl", url)
        },
    },

    mutations: {
        updateUrl(state, url) {
            state.socket.emit('change-url', url)
        },
    }
})