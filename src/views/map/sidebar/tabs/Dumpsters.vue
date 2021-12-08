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
                    <b-form-input id="filterInput" placeholder="En az 3 karakter girin" v-model="table.searchQuery"/>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row class="dumpstersList">
            <b-col md="12" xl="12" class="dumpstersCol">
                <b-table
                :items="dumpsters"
                :current-page="table.currentPage"
                :per-page="table.perPage"
                responsive
                select-mode="single"
                :fields="table.fields"
                primary-key="id"
                :sort-by.sync="table.sortBy"
                show-empty
                empty-text="No matching records found"
                :sort-desc.sync="table.isSortDirDesc"
                @row-clicked="getDetails"
                class="position-relative"
                >
                    <!-- Column: Container No -->
                    <template #cell(data.ContainerNo)="data">
                        <span v-if="table.searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                        <span v-else>{{ data.value }}</span>
                    </template>

                    <!-- Column: Last read -->
                    <template #cell(data.ReadTime)="data">
                        <b-badge pill variant="light-primary" :title="data.value">
                            {{ $moment(data.value).format('HH:mm:ss') }}
                        </b-badge>
                    </template>

                    <!-- Column: Status -->
                    <template #cell(data.ContainerStatu)="data">
                        <b-badge :variant="'light-'+ (data.value == collectedStatus ? 'success' : 'danger')">
                            <feather-icon
                            :icon="data.value == collectedStatus ? 'CheckIcon' : 'AlertTriangleIcon'"
                            size="16"
                            />
                        </b-badge>
                    </template>
                </b-table>
                <div class="mx-2 mb-2">
                    <b-row>
                        <b-col
                        cols="12"
                        sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start"
                        >
                        <span class="text-muted"></span>
                        </b-col>
                        <!-- Pagination -->
                        <b-col
                        cols="12"
                        sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-end"
                        >

                        <b-pagination
                            v-model="table.currentPage"
                            :total-rows="table.totalItems"
                            :per-page="table.perPage"
                            first-number
                            last-number
                            class="mb-0 mt-1 mt-sm-0"
                            prev-class="prev-item"
                            next-class="next-item"
                        >
                            <template #prev-text>
                            <feather-icon
                                icon="ChevronLeftIcon"
                                size="18"
                            />
                            </template>
                            <template #next-text>
                            <feather-icon
                                icon="ChevronRightIcon"
                                size="18"
                            />
                            </template>
                        </b-pagination>

                        </b-col>

                    </b-row>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { 
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
    BTable,
    BPagination
    } from 'bootstrap-vue'
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
        BListGroupItem,
        BFormGroup, 
        BFormInput,
        BTable,
        BPagination,
    },

    data(){
        return {
            filteredType: '',
            collectedStatus: Enums.CONTAINER_FULLNESS_STATU_EMPTY,
            notCollectedStatus: Enums.CONTAINER_FULLNESS_STATU_FULL,
            table: {
                currentPage: 1,
                //items: [],
                perPage: 5,
                perPageOptions: [5, 10, 15, 20, 25, 50],
                searchQuery: '',
                fields: [
                    {key: 'data.ContainerNo', label: 'Konteyner NO'},
                    {key: 'data.ReadTime', label: 'Son Okunma Saat'},
                    {key: 'data.ContainerStatu', label: 'Durum'},
                ],
                sortBy: 'ReadTime',
                isSortDirDesc: true,
                totalItems: 0
            }
        }
    },

    computed: {
        dumpsters: function(){
            let all = this.$store.getters['dashboard/getSpecificMarkers']('tags');
            let markers = this.$store.getters['dashboard/getTagMarkers'];
            let items;
            if (this.filteredType.length){
                let data = markers[this.filteredType]
                if (this.table.searchQuery >= 3) {
                    items = Object.values(data).filter(tag => {
                        return tag.data.TagId == this.table.searchQuery;
                    })
                    this.table.totalItems = items.length;
                    return items;
                }
                items = markers[this.filteredType] ? Object.values(markers[this.filteredType]) : [];
                this.table.totalItems = items.length;
                return items;
            }
            else {
                if (this.table.searchQuery >= 3) {
                    items = Object.values(all).filter(tag => {
                        return tag.data.TagId == this.table.searchQuery;
                    })
                    this.table.totalItems = items.length;
                    return items;
                }
            }
            items = Object.values(all);
            this.table.totalItems = items.length;
            return items;
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
.bg-danger, .bg-success {
    transition: all ease .2s;
}
</style>