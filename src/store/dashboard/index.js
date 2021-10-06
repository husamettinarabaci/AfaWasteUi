export default {
    namespaced: true,
    state: {
        map: null
    },
    getters: {
        getMap: state => {
            return state.map
        }
    },
    mutations: {
        setMap: (state, map) => {
            state.map = map;
        }
    },
    actions: {},
}
