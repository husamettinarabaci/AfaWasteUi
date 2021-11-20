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
                        <img :src="filteredType == data.type ? data.imgWhite : data.img" alt="">
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

        <b-row>
            <b-col xl="12" md="12" class="filterCol">
                <b-form-group label-for="filterInput">
                    <b-form-input id="filterInput" placeholder="Device Id" v-model="filterQuery"/>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row class="ultsList">
            <b-col xl="12" md="12" class="ultsCol">
                <b-list-group>
                    <vue-perfect-scrollbar
                        v-if="ults.length"
                        class="search-list search-list-main scroll-area overflow-hidden allList show"
                        tagname="ul"
                    >
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(ult, id) in ults" :key="id" @click="getDetails(ult)">
                                <span class="mr-1">
                                    <feather-icon
                                    icon="ArchiveIcon"
                                    size="16"
                                    />
                                </span>
                                <span v-if="filterQuery" v-html="$options.filters.highlight(ult.data.DeviceId, filterQuery)"></span>
                                <span v-else>{{ ult.data.DeviceId }}</span>
                                <b-progress
                                    :title="`${parseInt(ult.data.SensPercent)}% => ${ult.data.ContainerStatu}`"
                                    :key="computeVariant(ult.data.ContainerStatu)"
                                    animated
                                    :value="parseInt(ult.data.SensPercent)"
                                    :variant="computeVariant(ult.data.ContainerStatu)"
                                    :class="'progressBar progress-bar-' + computeVariant(ult.data.ContainerStatu)"
                                />
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
import { BRow, BCol, BCard, BAvatar, BBadge, BCardText, BCardTitle, BListGroup, BListGroupItem, BProgress, BFormGroup, BFormInput } from 'bootstrap-vue'
import Enums from '@/config/system.enums'
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

// Icons
import EmptyIcon from '../../../../assets/images/icon/afatek-icon-15.png';
import LittleIcon from '../../../../assets/images/icon/afatek-icon-16.png';
import MediumIcon from '../../../../assets/images/icon/afatek-icon-17.png';
import FullIcon from '../../../../assets/images/icon/afatek-icon-18.png';
import EmptyIconWhite from '../../../../assets/images/icon/afatek-icon-06.png';
import LittleIconWhite from '../../../../assets/images/icon/afatek-icon-07.png';
import MediumIconWhite from '../../../../assets/images/icon/afatek-icon-08.png';
import FullIconWhite from '../../../../assets/images/icon/afatek-icon-09.png';

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
        BProgress,
        BFormGroup, 
        BFormInput,
        VuePerfectScrollbar
    },

    data(){
        return {
            filteredType: '',
            filterQuery: '',
            types: [
                { 
                    bg: 'success', 
                    text: '0% - 25%', 
                    alt: 'Boş', 
                    type: 'empty',
                    img: EmptyIcon,
                    imgWhite: EmptyIconWhite
                },
                { 
                    bg: 'info', 
                    text: '25% - 50%', 
                    alt: 'Az Dolu', 
                    type: 'little',
                    img: LittleIcon,
                    imgWhite: LittleIconWhite
                },
                { 
                    bg: 'warning', 
                    text: '50% - 75%', 
                    alt: 'Orta Dolu', 
                    type: 'medium',
                    img: MediumIcon,
                    imgWhite: MediumIconWhite
                },
                { 
                    bg: 'danger', 
                    text: '75% - 100%', 
                    alt: 'Dolu', 
                    type: 'full',
                    img: FullIcon,
                    imgWhite: FullIconWhite
                }
            ],
        }
    },

    computed: {
        ults: function(){
            let all = this.$store.getters['dashboard/getSpecificMarkers']('ult');
            let markers = this.$store.getters['dashboard/getUltMarkers'];
            if (this.filteredType.length) {
                //let type 
                /*
                switch(this.filteredType){
                    case 'empty':
                        type = Enums.CONTAINER_FULLNESS_STATU_EMPTY;
                        break;
                    case 'little':
                        type = Enums.CONTAINER_FULLNESS_STATU_LITTLE;
                        break;
                    case 'medium':
                        type = Enums.CONTAINER_FULLNESS_STATU_MEDIUM;
                        break;
                    case 'full':
                        type = Enums.CONTAINER_FULLNESS_STATU_FULL;
                        break;
                    default:
                        type = '';
                        break;
                }
                */
                let data = markers[this.filteredType]
                if (this.filterQuery) {
                    return Object.values(data).filter(device => {
                        return device.data.DeviceId == this.filterQuery;
                    })
                }
                return Object.values(data)
            } 
            else {
                if (this.filterQuery) {
                    return Object.values(all).filter(device => {
                        return device.data.DeviceId == this.filterQuery;
                    })
                }
            }
            return Object.values(all);
        }
    },

    watch: {
        'filteredType': function(newVal, oldVal){
            let map = this.$store.state.dashboard.map;
            let markerGroups = this.$store.getters['dashboard/getUltMarkerGroup'];
            switch(newVal){
                case 'empty':
                    if (markerGroups.empty) map.addLayer(markerGroups.empty);
                    if (markerGroups.little) map.removeLayer(markerGroups.little);
                    if (markerGroups.medium) map.removeLayer(markerGroups.medium);
                    if (markerGroups.full) map.removeLayer(markerGroups.full);
                    break;
                case 'little':
                    if (markerGroups.empty) map.removeLayer(markerGroups.empty);
                    if (markerGroups.little) map.addLayer(markerGroups.little);
                    if (markerGroups.medium) map.removeLayer(markerGroups.medium);
                    if (markerGroups.full) map.removeLayer(markerGroups.full);
                    break;
                case 'medium':
                    if (markerGroups.empty) map.removeLayer(markerGroups.empty);
                    if (markerGroups.little) map.removeLayer(markerGroups.little);
                    if (markerGroups.medium) map.addLayer(markerGroups.medium);
                    if (markerGroups.full) map.removeLayer(markerGroups.full);
                    break;
                case 'full':
                    if (markerGroups.empty) map.removeLayer(markerGroups.empty);
                    if (markerGroups.little) map.removeLayer(markerGroups.little);
                    if (markerGroups.medium) map.removeLayer(markerGroups.medium);
                    if (markerGroups.full) map.addLayer(markerGroups.full);
                    break;
                default:
                    if (this.$store.state.dashboard.sidebar.currentTab == 'containers'){
                        if (markerGroups.empty) map.addLayer(markerGroups.empty);
                        if (markerGroups.little) map.addLayer(markerGroups.little);
                        if (markerGroups.medium) map.addLayer(markerGroups.medium);
                        if (markerGroups.full) map.addLayer(markerGroups.full);
                    }
                    break;
            }
        },

        '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
            this.filteredType = '';            
        }
    },

    methods: {
        computeVariant(status){
            switch(status){
                case Enums.CONTAINER_FULLNESS_STATU_EMPTY:
                    return 'success';
                case Enums.CONTAINER_FULLNESS_STATU_LITTLE:
                    return 'info';
                case Enums.CONTAINER_FULLNESS_STATU_MEDIUM:
                    return 'warning';
                case Enums.CONTAINER_FULLNESS_STATU_FULL:
                    return 'danger';
                default:
                    return 'empty';
            }
            
            //if (percent < 25) return 'success';
            //else if ((percent >= 25) && (percent < 50)) return 'info';
            //else if ((percent >= 50) && (percent < 75)) return 'warning';
            //else if ((percent >= 75) && (percent <= 100)) return 'danger';
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
            ult.marker.fireEvent('click');
            //ult.marker.enablePermanentHighlight();
            //setTimeout(function(){
            //    ult.marker.disablePermanentHighlight();
            //}, 5000)
        },

        getCount(type){
            let markers = this.$store.getters['dashboard/getUltMarkers'];
            switch(type){
                case 'empty':
                    return markers.empty ? Object.keys(markers.empty).length : 0;
                case 'little':
                    return markers.little ? Object.keys(markers.little).length : 0;
                case 'medium':
                    return markers.medium ? Object.keys(markers.medium).length : 0;
                case 'full':
                    return markers.full ? Object.keys(markers.full).length : 0;
            }
        }
    }
}
</script>

<style scoped>
    .ultsContent {
        padding: 20px 0;
    }
    .cardCol, .filterCol {
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
    .b-avatar-custom img {
        width: 40px;
        height: 40px;
    }

    .bg-success, .bg-info, .bg-warning, .bg-danger {
        transition: all ease .2s; 
    }
    .allList {
        max-height: calc(100vh - 21.8rem);
        overflow-y: auto;
        padding: 0;
        margin: 0;
    }
</style>