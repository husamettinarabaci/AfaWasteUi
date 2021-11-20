<template>
    <b-row>
        <b-col xl="12" md="12" class="searchCol">
            <div class="search">
                <b-input-group class="input-group-merge">
                    <b-input-group-prepend is-text>
                        <feather-icon icon="SearchIcon" />
                    </b-input-group-prepend>
                    <b-form-input v-model="query" class="searchInput" placeholder="Kamyon ve konteyner bilgisi için en az 3 karakter girmelisiniz" />
                </b-input-group>
                <b-list-group v-if="showResults">
                    <vue-perfect-scrollbar
                        v-if="results.length"
                        class="search-list search-list-main scroll-area overflow-hidden allList"
                        :class="{'show': showResults}"
                        tagname="ul"
                    >
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(result, id) in results" :key="id" @click="getDetails(result)">
                                <span class="mr-1">
                                    <feather-icon
                                    icon="SearchIcon"
                                    size="16"
                                    />
                                </span>
                                <span v-html="$options.filters.highlight(displayTitle(result), query)"></span>
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
            </div>
        </b-col>
    </b-row>
</template>

<script>
import {BRow, BCol, BInputGroup, BFormInput, BInputGroupPrepend, BListGroup, BListGroupItem} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    components: {
        BRow,
        BCol,
        BInputGroup,
        BFormInput,
        BInputGroupPrepend,
        BListGroup,
        BListGroupItem,
        VuePerfectScrollbar
    },

    data(){
        return {
            query: '',
            showResults: false,
            results: []
        }
    },

    watch: {
        'query': function(newVal, oldVal){
            if (newVal.length >= 3){
                this.search();
            }
            else {
                this.showResults = false;
            }
        },

        '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
            this.query = '';
            this.results = [];
            this.showResults = false;
        }
    },

    methods: {
        getSearchableFields(type){
            let searchableFields = [];
            switch(type){
                case 'tags':
                    searchableFields = ['ContainerNo', 'TagId'];
                    break;
                case 'rfid':
                    searchableFields = ['DeviceDetail.PlateNo'];
                    break;
                case 'ult':
                    searchableFields = ['DeviceId'];
                    break;
            }
            return searchableFields;
        },

        search(){
            let markers = {
                tags: this.$store.getters['dashboard/getSpecificMarkers']('tags'),
                rfid: this.$store.getters['dashboard/getSpecificMarkers']('rfid'),
                ult: this.$store.getters['dashboard/getSpecificMarkers']('ult'),
                recy: this.$store.getters['dashboard/getSpecificMarkers']('recy'),
            }
            let self = this;
            let results = [];
            Object.keys(markers).forEach(key => {
                let data = markers[key]
                let searchableFields = this.getSearchableFields(key);
                searchableFields.forEach(field => {
                    let filtered = Object.values(data).filter(d => {
                        let f;
                        if (field.includes('.')){
                            f = field.split('.');
                            f = d.data[f[0]][f[1]];
                        }
                        else {
                            f = d.data[field];
                        }
                        if (typeof f == 'string'){
                            return f.toLocaleLowerCase().includes(self.query.toLocaleLowerCase()) ? true : false;
                        }
                        else {
                            return (f == self.query) ? true : false;
                        }
                    })
                    if (filtered.length) {
                        filtered.forEach(f => {
                            results.push({
                                ...f,
                                type: key
                            })
                        })
                    }
                })
            })
            this.results = results;
            /*
            this.results = markers.filter(marker => {
                let addResult = false;
                let searchableFields = this.getSearchableFields(marker.type);
                searchableFields.forEach(field => {
                    let f;
                    if (field.includes('.')){
                        f = field.split('.');
                        f = marker.data[f[0]][f[1]];
                    }
                    else {
                        f = marker.data[field];
                    }
                    if (typeof f == 'string'){
                        if (f.toLocaleLowerCase().includes(self.query.toLocaleLowerCase())) addResult = true;
                    }
                    else {
                        if (f == self.query) addResult = true;
                    }
                })
                return addResult ? marker : false;
            })
            */
            this.showResults = true;
        },
        
        displayTitle: function(result){
            let t = '';
            let displayField = '';
            switch(result.type){
                case 'tags':
                    displayField = 'TagId';
                    break;
                case 'rfid':
                    displayField = 'DeviceDetail.PlateNo';
                    break;
                case 'ult':
                    displayField = 'DeviceId';
                    break;
                case 'recy':
                    displayField = 'DeviceId';
                    break;
            }
            let f;
            if (displayField.includes('.')){
                f = displayField.split('.');
                t += result.data[f[0]][f[1]] ? result.data[f[0]][f[1]] : '-';
            }
            else {
                t += result.data[displayField] ? result.data[displayField] : '-';
            }
            return t;
        },

        getDetails(row){
            row.marker.fireEvent('click');
        }
    }
}
</script>

<style scoped>
    .search {
        padding: 20px 0;
    }
    .searchCol {
        padding: 0 5px;
    }
    .searchInput {
        font-size: 11px;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .allList {
        max-height: calc(100vh - 150px);
        overflow: auto;
        padding: 0;
        margin:0;
    }
</style>