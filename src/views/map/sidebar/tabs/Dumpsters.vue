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
        <b-row class="dumpstersList">
            <b-col md="12" xl="12" class="dumpstersCol">
                <b-list-group>
                    <div v-if="dumpsters.length">
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(dumpster, id) in dumpsters" :key="id" @click="getDetails(dumpster)">
                                <span class="mr-1">
                                    <font-awesome-icon icon="dumpster"/>
                                </span>
                                <span>{{ dumpster.data.TagId }}</span>
                                <b-badge class="dumpsterBadge" :variant="'light-'+ (dumpster.data.ContainerStatu == collectedStatus ? 'success' : 'danger')">
                                    <feather-icon
                                    :icon="dumpster.data.ContainerStatu == collectedStatus ? 'CheckIcon' : 'AlertTriangleIcon'"
                                    size="16"
                                    />
                                </b-badge>
                            </b-list-group-item>
                        </transition-group>
                    </div>
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
import { BRow, BCol, BCard, BAvatar, BBadge, BCardText, BCardTitle, BListGroup, BListGroupItem } from 'bootstrap-vue'
import Enums from '@/config/system.enums';

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
        BListGroupItem
    },

    data(){
        return {
            filteredType: '',
            collectedStatus: Enums.CONTAINER_FULLNESS_STATU_EMPTY,
            notCollectedStatus: Enums.CONTAINER_FULLNESS_STATU_FULL
        }
    },

    computed: {
        dumpsters: function(){
            //let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'tag');
            let markers = this.$store.getters['dashboard/getTagMarkers'];
            if (this.filteredType.length){
                return markers[this.filteredType] ? Object.values(markers[this.filteredType]) : [];
            }
            return [].concat(
                markers.collected ? Object.values(markers.collected) : [],
                markers.notCollected ? Object.values(markers.notCollected) : []
            );
        }
    },

    watch: {
        'filteredType': function(newVal, oldVal){
            let map = this.$store.state.dashboard.map;
            let collectedGroup = this.$store.getters['dashboard/getTagCollectedMarkerGroup'];
            let notCollectedGroup = this.$store.getters['dashboard/getTagNotCollectedMarkerGroup'];
            switch(newVal){
                case 'collected':
                    if (collectedGroup) map.addLayer(collectedGroup);
                    if (notCollectedGroup) map.removeLayer(notCollectedGroup);
                    break;
                case 'notCollected':
                    if (collectedGroup) map.removeLayer(collectedGroup);
                    if (notCollectedGroup) map.addLayer(notCollectedGroup);
                    break;
                default:
                    if (this.$store.state.dashboard.sidebar.currentTab == 'dumpsters'){
                        if (collectedGroup) map.addLayer(collectedGroup);
                        if (notCollectedGroup) map.addLayer(notCollectedGroup);
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
            let markerGroup = this.$store.state.dashboard.markerGroups.rfTags[type];
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
.cardCol, .dumpstersCol {
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
</style>