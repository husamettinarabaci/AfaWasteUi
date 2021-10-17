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
                        <feather-icon size="21" icon="AwardIcon"/>
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
                                    <feather-icon
                                    :icon="dumpster.icon"
                                    size="16"
                                    />
                                </span>
                                <span>{{ dumpster.data.rftag_title }}</span>
                                <b-badge class="dumpsterBadge" :variant="'light-'+ (dumpster.data.status == 'collected' ? 'success' : 'danger')">
                                    <feather-icon
                                    :icon="dumpster.data.status == 'collected' ? 'AwardIcon' : 'AlertTriangleIcon'"
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
            filteredType: ''
        }
    },

    computed: {
        dumpsters: function(){
            let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'rfTag');
            if (this.filteredType.length){
                return markers.filter(marker => marker.data.status == this.filteredType);
            }
            return markers;
        }
    },

    watch: {
        'filteredType': function(newVal, oldVal){
            let map = this.$store.state.dashboard.map;
            switch(newVal){
                case 'collected':
                    map.addLayer(this.$store.state.dashboard.markerGroups.rfTags.collected);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.rfTags.notCollected);
                    break;
                case 'notCollected':
                    map.removeLayer(this.$store.state.dashboard.markerGroups.rfTags.collected);
                    map.addLayer(this.$store.state.dashboard.markerGroups.rfTags.notCollected);
                    break;
                default:
                    if (this.$store.state.dashboard.sidebar.currentTab == 'dumpsters'){
                        map.addLayer(this.$store.state.dashboard.markerGroups.rfTags.collected);
                        map.addLayer(this.$store.state.dashboard.markerGroups.rfTags.notCollected);
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
            dumpster.marker.fireEvent('click');
        },

        getCount(type){
            let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'rfTag');
            if (type == 'collected'){
                return markers.filter(dumpster => dumpster.data.status == 'collected').length
            }
            else {
                return markers.filter(dumpster => dumpster.data.status == 'notCollected').length
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