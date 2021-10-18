<template>
    <div class="ultsContent">
        <b-row class="match-height">
            <b-col
                v-for="(data,index) in types"
                :key="index"
                md="6"
                xl="3"
                class="cardCol"
            >
                <b-card
                :bg-variant="filteredType == data.type ? data.bg : ''"
                :text-variant="filteredType == data.type ? 'white' : ''"
                @click="filterList(data)"
                >
                    <b-avatar
                    class="mb-1"
                    :variant="`light-${data.bg}`"
                    size="45"
                    >
                        <div class="battery-wrapper1">
                            <div :class="`battery-part-big level-${data.type} ${filteredType == data.type ? 'active' : ''}`">
                                <div class="battery-power battery-power-1"></div>
                                <div class="battery-power battery-power-2"></div>
                                <div class="battery-power battery-power-3"></div>
                                <div class="battery-power battery-power-4"></div>
                            </div>
                        </div>
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == data.type}">{{ getCount(data.type) }}</b-card-title>
                    <b-card-text :class="{'text-white': filteredType == data.type}">
                        <b-badge :variant="filteredType == data.type ? 'light-dark' : `light-${data.bg}`">{{ data.text }}</b-badge>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="12" md="12" class="quoteCol">
                <strong>* Belirli doluluk oranları aralığındaki toplam konteyner sayısını gösterir.</strong>
            </b-col>
        </b-row>

        <b-row class="ultsList">
            <b-col xl="12" md="12" class="ultsCol">
                <b-list-group>
                    <div v-if="ults.length">
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(ult, id) in ults" :key="id" @click="getDetails(ult)">
                                <span class="mr-1">
                                    <feather-icon
                                    :icon="ult.icon"
                                    size="16"
                                    />
                                </span>
                                <span>{{ ult.data.ult_title }}</span>
                                <b-progress
                                    :title="`${ult.data.filled_rate}%`"
                                    :key="computeVariant(ult.data.filled_rate)"
                                    animated
                                    :value="ult.data.filled_rate"
                                    :variant="computeVariant(ult.data.filled_rate)"
                                    :class="'progressBar progress-bar-' + computeVariant(ult.data.filled_rate)"
                                />
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
import { BRow, BCol, BCard, BAvatar, BBadge, BCardText, BCardTitle, BListGroup, BListGroupItem, BProgress } from 'bootstrap-vue'

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
        BProgress
    },

    data(){
        return {
            filteredType: '',
            types: [
                { bg: 'success', text: '0% - 25%', alt: 'Boş', type: 'empty'},
                { bg: 'info', text: '25% - 50%', alt: 'Az Dolu', type: 'little'},
                { bg: 'warning', text: '50% - 75%', alt: 'Orta Dolu', type: 'medium'},
                { bg: 'danger', text: '75% - 100%', alt: 'Dolu', type: 'full'}
            ],
        }
    },

    computed: {
        ults: function(){
            let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'ult');
            switch(this.filteredType){
                case 'empty':
                    return all.filter(ult => {return ult.data.filled_rate < 25})
                case 'little':
                    return all.filter(ult => {return (ult.data.filled_rate >= 25) && (ult.data.filled_rate < 50)})
                case 'medium':
                    return all.filter(ult => {return (ult.data.filled_rate >= 50) && (ult.data.filled_rate < 75)})
                case 'full':
                    return all.filter(ult => {return (ult.data.filled_rate >= 75) && (ult.data.filled_rate < 100)})
                default:
                    return all;
            }
        }
    },

    watch: {
        'filteredType': function(newVal, oldVal){
            let map = this.$store.state.dashboard.map;
            switch(newVal){
                case 'empty':
                    map.addLayer(this.$store.state.dashboard.markerGroups.ults.empty);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.little);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.medium);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.full);
                    break;
                case 'little':
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.empty);
                    map.addLayer(this.$store.state.dashboard.markerGroups.ults.little);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.medium);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.full);
                    break;
                case 'medium':
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.empty);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.little);
                    map.addLayer(this.$store.state.dashboard.markerGroups.ults.medium);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.full);
                    break;
                case 'full':
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.empty);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.little);
                    map.removeLayer(this.$store.state.dashboard.markerGroups.ults.medium);
                    map.addLayer(this.$store.state.dashboard.markerGroups.ults.full);
                    break;
                default:
                    if (this.$store.state.dashboard.sidebar.currentTab == 'containers'){
                        map.addLayer(this.$store.state.dashboard.markerGroups.ults.empty);
                        map.addLayer(this.$store.state.dashboard.markerGroups.ults.little);
                        map.addLayer(this.$store.state.dashboard.markerGroups.ults.medium);
                        map.addLayer(this.$store.state.dashboard.markerGroups.ults.full);
                    }
                    break;
            }
        },

        '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
            this.filteredType = '';            
        }
    },

    methods: {
        computeVariant(percent){
            if (percent < 25) return 'success';
            else if ((percent >= 25) && (percent < 50)) return 'info';
            else if ((percent >= 50) && (percent < 75)) return 'warning';
            else if ((percent >= 75) && (percent <= 100)) return 'danger';
        },

        filterList(ult){
            //console.log('filtering: ', type)
            if (this.filteredType == ult.type){
                this.filteredType = '';
            }
            else {
                this.filteredType = ult.type
            }
        },

        getDetails(ult){
            ult.marker.enablePermanentHighlight();
            ult.marker.fireEvent('click');
            setTimeout(function(){
                ult.marker.disablePermanentHighlight();
            }, 5000)
        },

        getCount(type){
            let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'ult');
            switch (type){
                case 'empty':
                    return all.filter(ult => (ult.data.filled_rate < 25)).length
                case 'little':
                    return all.filter(ult => ((ult.data.filled_rate >= 25) && (ult.data.filled_rate < 50))).length
                case 'medium':
                    return all.filter(ult => ((ult.data.filled_rate >= 50) && (ult.data.filled_rate < 75))).length
                case 'full':
                    return all.filter(ult => ((ult.data.filled_rate >= 75) && (ult.data.filled_rate <= 100))).length
            }
        }
    }
}
</script>

<style scoped>
    .ultsContent {
        padding: 20px 0;
    }
    .cardCol {
        padding: 0 5px;
    }
    .cardCol .card {
        margin-bottom: 0;
    }
    .cardCol .card-body {
        padding: .5rem;
        text-align: center;
        cursor: pointer;
    }
    .cardCol .card-title {
        font-size: 1rem;
        margin-bottom: .35rem;
    }
    .ultsList {
        max-height: calc(100vh - 18.25rem);
        overflow-y: auto;
        padding: 0 5px;
    }
    .ultsList .ultsCol {
        padding: 0;
    }
    .progressBar {
        width: 100px;
        height: 8px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
    }
    .quoteCol {
        padding: 3px 5px 10px;
        font-size: 10px;
        font-style: italic;
    }
    .text-white .badge {
        color: #fff !important;
    }


    /*Battery*/
    .battery-wrapper1{
        /*margin:50px auto 0;*/
        width:30px;
        height:15px;
        display:grid;
        grid-template-columns:repeat(2, 1fr);
    }
    .battery-part-big{
        width:30px;
        height:15px;
        border:1px solid #ccc;
        /*background:#5E5E5E;*/
        background: transparent;
        border-radius:3px;
    }
    .battery-part-big.active {
        border-color: #fff;
    }
    .battery-power{
        width: 6px;
        height:11px;
        /*margin:5px 0 0 5px;*/
        margin: 1px 0 0 1px;
        display:inline-block;
    }
    .level-empty .battery-power-1 {
        background: rgba(82,177,82);
    }
    .level-empty .battery-power-2, .level-empty .battery-power-3, .level-empty .battery-power-4 {
        opacity: 0;
    }
    .level-little .battery-power-1, .level-little .battery-power-2 {
        background:rgb(145,232,66);
        border-radius:3px 0 0 3px;
    }
    .level-little .battery-power-3, .level-little .battery-power-4 {
        opacity: 0;
    }
    .level-medium .battery-power-1, .level-medium .battery-power-2, .level-medium .battery-power-3 {
        background: rgb(255,103,15);
    }
    .level-medium .battery-power-4 {
        opacity: 0;
    }
    .level-full .battery-power-1, .level-full .battery-power-2, .level-full .battery-power-3, .level-full .battery-power-4 {
        background: rgb(255,5,5);
    }
    .battery-power-1{
        /*background: rgb(255,5,5);*/
        border-radius:3px 0 0 3px;
        /*animation:battery-power-1 2s 0s infinite;*/
    }
    .battery-power-4{
        /*background: rgba(82,177,82);*/
        /*animation:battery-power-4 2s 0s infinite;*/
        border-radius:0 3px 3px 0;
    }
    .bg-success, .bg-info, .bg-warning, .bg-danger {
        transition: all ease .2s; 
    }
</style>