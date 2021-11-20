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

        getMarkerGroups: state => {
            let g = {}
            Object.keys(state.markers).forEach(key => {
                if (state.markers[key] != null) {
                    g[key] = state.markers[key].markerGroup
                }
            })
            return g;
        },

        getSpecificMarkers: state => type => {
            let g = {}
            let markers = state.markers[type] ? state.markers[type].markers : [];
            Object.keys(markers).forEach(key => {
                if (markers[key] != null) {
                    g = {
                        ...g,
                        ...markers[key]
                    }
                }
            })
            return g;
        },

        getTagMarkers: state => {
            return state.markers.tags ? state.markers.tags.markers : [];
        },

        getTagMarkerGroup: state => {
            return state.markers.tags ? state.markers.tags.markerGroup : null;
        },

        getRfidMarkers: state => {
            return state.markers.rfid ? state.markers.rfid.markers : [];
        },

        getRfidMarkerGroup: state => {
            return state.markers.rfid ? state.markers.rfid.markerGroup : [];
        },

        getUltMarkers: state => {
            return state.markers.ult ? state.markers.ult.markers : [];
        },

        getUltMarkerGroup: state => {
            return state.markers.ult ? state.markers.ult.markerGroup : [];
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
