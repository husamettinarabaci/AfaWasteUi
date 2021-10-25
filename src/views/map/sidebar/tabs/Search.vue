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
                    <div v-if="results.length">
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(result, id) in results" :key="id" @click="getDetails(result)">
                                <span class="mr-1">
                                    <feather-icon
                                    :icon="result.icon"
                                    size="16"
                                    />
                                </span>
                                <span>{{ displayTitle(result) }}</span>
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
            </div>
        </b-col>
    </b-row>
</template>

<script>
import {BRow, BCol, BInputGroup, BFormInput, BInputGroupPrepend, BListGroup, BListGroupItem} from 'bootstrap-vue'
export default {
    components: {
        BRow,
        BCol,
        BInputGroup,
        BFormInput,
        BInputGroupPrepend,
        BListGroup,
        BListGroupItem
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
        search(){
            let markers = this.$store.state.dashboard.markers;
            let self = this;
            this.results = markers.filter(marker => {
                let addResult = false;
                marker.searchableFields.forEach(field => {
                    if (typeof marker.data[field] == 'string'){
                        if (marker.data[field].toLocaleLowerCase().includes(self.query.toLocaleLowerCase())) addResult = true;
                    }
                    else {
                        if (marker.data[field] == self.query) addResult = true;
                    }
                })
                return addResult ? marker : false;
            })
            this.showResults = true;
        },
        
        displayTitle: function(result){
            let t = ''
            result.searchableFields.forEach(field => {
                t += result.data[field]
            })
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
</style>