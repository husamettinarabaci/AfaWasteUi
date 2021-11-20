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
        markers: {
            tags: null,
            rfid: null,
            ult: null,
            recy: null
        },
    },
    getters: {
        getMap: state => {
            return state.map
        },

        //getSidebarObject: state => {
        //    return state.sidebar.object;
        //},

        getTagMarkers: state => {
            return state.markers.tags ? state.markers.tags.markers : [];
        },

        getRfidMarkers: state => {
            return state.markers.rfid ? state.markers.rfid.markers : [];
        },

        getUltMarkers: state => {
            return state.markers.ult ? state.markers.ult.markers : [];
        },

        getRecyMarkers: state => {
            return state.markers.recy ? state.markers.recy.markers : [];
        }
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

        addMarkers: (state, marker) => {
            state.markers[marker.type] = {
                icon: marker.icon,
                markers: marker.markers,
                markerGroup: marker.markerGroup
            }
        },

        //addMarkerGroup: (state, {type, markerGroup}) => {
        //    state.markerGroups[type] = markerGroup
        //},
    },
    actions: {},
}
