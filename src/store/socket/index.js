export default {
    namespaced: true,

    state: {
        socket: null
    },

    getters: {
        getSocket: state => state.socket
    },

    mutations: {
        setSocket(state, socket) {
            state.socket = socket
        }
    },

    actions: {

    },
}
