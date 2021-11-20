<template>
    <div class="dumpstersContent">
        <b-row class="match-height">
            <b-col md="6" xl="6" class="cardCol">
                <b-card 
                :bg-variant="filteredType == 'notCollected' ? 'danger' : ''" 
                :text-variant="filteredType == 'notCollected' ? 'white' : ''" 
                @click="filteredType == 'notCollected' ? (filteredType = '') : (filteredType = 'notCollected')">
                    <b-avatar class="mb-1" variant="light-warning" size="45">
                        <feather-icon size="21" icon="AlertTriangleIcon"/>
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == 'notCollected'}">{{ getCount('notCollected') }}</b-card-title>
                    <b-card-text>Toplanmayan</b-card-text>
                </b-card>
            </b-col>
            <b-col md="6" xl="6" class="cardCol">
                <b-card 
                :bg-variant="filteredType == 'collected' ? 'success' : ''" 
                :text-variant="filteredType == 'collected' ? 'white' : ''" 
                @click="filteredType == 'collected' ? (filteredType = '') : (filteredType = 'collected')">
                    <b-avatar class="mb-1" variant="light-primary" size="45">
                        <feather-icon size="21" icon="CheckIcon"/>
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == 'collected'}">{{ getCount('collected') }}</b-card-title>
                    <b-card-text>Toplanan</b-card-text>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="12" md="12" class="filterCol">
                <b-form-group label-for="filterInput">
                    <b-form-input id="filterInput" placeholder="Device Id" v-model="filterQuery"/>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row class="dumpstersList">
            <b-col md="12" xl="12" class="dumpstersCol">
                <b-list-group>
                    <vue-perfect-scrollbar
                        v-if="dumpsters.length"
                        class="search-list search-list-main scroll-area overflow-hidden allList show"
                        tagname="ul"
                    >
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(dumpster, id) in dumpsters" :key="id" @click="getDetails(dumpster)">
                                <span class="mr-1">
                                    <font-awesome-icon icon="dumpster"/>
                                </span>
                                <span v-if="filterQuery" v-html="$options.filters.highlight(dumpster.data.TagId, filterQuery)"></span>
                                <span v-else>{{ dumpster.data.TagId }}</span>
                                <b-badge class="dumpsterBadge" :variant="'light-'+ (dumpster.data.ContainerStatu == collectedStatus ? 'success' : 'danger')">
                                    <feather-icon
                                    :icon="dumpster.data.ContainerStatu == collectedStatus ? 'CheckIcon' : 'AlertTriangleIcon'"
                                    size="16"
                                    />
                                </b-badge>
                            </b-list-group-item>
                        </transition-group>
                    </vue-perfect-scrollbar>
                    <transition v-else name="fade">
                        <b-list-group-item class="d-flex">
                            <span class="mr-1">
                                <feather-icon
                                icon="AlertOctagonIcon"
                                size="16"
                                />
                            </span>
                            <span>Sonuç bulunamadı!</span>
                        </b-list-group-item>
                    </transition>
                </b-list-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow, BCol, BCard, BAvatar, BBadge, BCardText, BCardTitle, BListGroup, BListGroupItem, BFormGroup, BFormInput } from 'bootstrap-vue'
import Enums from '@/config/system.enums';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BAvatar,
        BBadge,
        BCardText,
        BCardTitle,
        BListGroup,
        BListGroupItem,
        BFormGroup, 
        BFormInput,
        VuePerfectScrollbar
    },

    data(){
        return {
            filteredType: '',
            filterQuery: '',
            collectedStatus: Enums.CONTAINER_FULLNESS_STATU_EMPTY,
            notCollectedStatus: Enums.CONTAINER_FULLNESS_STATU_FULL
        }
    },

    computed: {
        dumpsters: function(){
            let all = this.$store.getters['dashboard/getSpecificMarkers']('tags');
            let markers = this.$store.getters['dashboard/getTagMarkers'];
            if (this.filteredType.length){
                let data = markers[this.filteredType]
                if (this.filterQuery) {
                    return Object.values(data).filter(tag => {
                        return tag.data.TagId == this.filterQuery;
                    })
                }
                return markers[this.filteredType] ? Object.values(markers[this.filteredType]) : [];
            }
            else {
                if (this.filterQuery) {
                    return Object.values(all).filter(tag => {
                        return tag.data.TagId == this.filterQuery;
                    })
                }
            }
            return Object.values(all);
        }
    },

    watch: {
        'filteredType': function(newVal, oldVal){
            let map = this.$store.state.dashboard.map;
            let markerGroup = this.$store.getters['dashboard/getTagMarkerGroup'];
            switch(newVal){
                case 'collected':
                    if (markerGroup.collected) map.addLayer(markerGroup.collected);
                    if (markerGroup.notCollected) map.removeLayer(markerGroup.notCollected);
                    break;
                case 'notCollected':
                    if (markerGroup.collected) map.removeLayer(markerGroup.collected);
                    if (markerGroup.notCollected) map.addLayer(markerGroup.notCollected);
                    break;
                default:
                    if (this.$store.state.dashboard.sidebar.currentTab == 'dumpsters'){
                        if (markerGroup.collected) map.addLayer(markerGroup.collected);
                        if (markerGroup.notCollected) map.addLayer(markerGroup.notCollected);
                    }
                    break;
            }
        },

        '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
            this.filteredType = '';        
        }
    },

    methods: {
        getDetails(dumpster){
            let marker = dumpster.marker;
            let type = dumpster.data.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'collected' : 'notCollected';
            let markerGroup = this.$store.getters['dashboard/getTagMarkerGroup'][type];
            let visibleLayer = markerGroup.getVisibleParent(marker);
            if (visibleLayer instanceof L.MarkerCluster){
                markerGroup.fire('click', {
                    layer: visibleLayer,
                    latlng: marker.getLatLng()
                });
            }
            else {
                marker.fire('click');
            }
            //dumpster.marker.fireEvent('click');
        },

        getCount(type){
            //let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'tag');
            let markers = this.$store.getters['dashboard/getTagMarkers'];
            if (type == 'collected'){
                return markers.collected ? Object.keys(markers.collected).length : 0
            }
            else {
                return markers.notCollected ? Object.keys(markers.notCollected).length : 0
            }
        }
    }
}
</script>

<style scoped>
.dumpstersContent {
    padding: 20px 0;
}
.cardCol, .dumpstersCol, .filterCol {
    padding: 0 5px;
}
.cardCol .card-body {
    text-align: center;
    cursor: pointer;
    padding: .5rem;
}
.cardCol .card-title {
    margin-bottom: .3rem;
}
.dumpsterBadge {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
}
.bg-danger, .bg-success {
    transition: all ease .2s;
}
.allList {
    max-height: calc(100vh - 22.5rem);
    overflow-y: auto;
    padding: 0;
    margin: 0;
}
</style>