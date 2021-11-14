export default {
    namespaced: true,
    state: {
        map: null,
        sidebar: {
            currentTab: '',
            object: null
        },
        info: {
            current: '', // If blank, the info card is hidden 
            data: '' // Current card's data
        },
        markers: [],
        markerGroups: {
            rfTags: {
                collected: null,
                notCollected: null
            },
            trucks: {
                truck: null,
                winch: null
            },
            ults: {
                empty: null,
                little: null,
                medium: null,
                full: null,
            },
            recycles: null
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

        setCurrentTab: (state, tab) => {
            state.sidebar.currentTab = tab; 
        },

        setSidebarObject: (state, object) => {
            state.sidebar.object = object; 
        },

        setInfoCurrent: (state, current) => {
            state.info.current = current;
        },

        setInfoData: (state, data) => {
            state.info.data = data;
        },

        addMarker: (state, marker) => {
            state.markers.push(marker);
        },

        addMarkerGroup: (state, {type, markerGroup}) => {
            state.markerGroups[type] = markerGroup
        },
    },
    actions: {},
}
