export default {
    namespaced: true,
    state: {
        map: null,
        markers: [],
        sidebar: {
            currentTab: '',
            object: null
        }
    },
    getters: {
        getMap: state => {
            return state.map
        },

        //getSidebarObject: state => {
        //    return state.sidebar.object;
        //}
    },
    mutations: {
        setMap: (state, map) => {
            state.map = map;
        },

        addMarker: (state, marker) => {
            state.markers.push(marker);
        },

        setCurrentTab: (state, tab) => {
            state.sidebar.currentTab = tab; 
        },

        setSidebarObject: (state, object) => {
            state.sidebar.object = object; 
        }
    },
    actions: {},
}
