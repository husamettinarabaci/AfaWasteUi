<template>
    <div>
        <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
            </b-input-group-prepend>
            <b-form-input v-model="query" placeholder="Ara" />
        </b-input-group>
        <b-list-group v-if="showResults">
            <b-list-group-item class="d-flex" v-for="(result, id) in results" :key="id" @click="getDetails(result)">
                <span class="mr-1">
                    <feather-icon
                    :icon="result.icon"
                    size="16"
                    />
                </span>
                <span>{{ result.title }}</span>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import {BInputGroup, BFormInput, BInputGroupPrepend, BListGroup, BListGroupItem} from 'bootstrap-vue'
export default {
    components: {
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
        }
    },

    methods: {
        search(){
            this.results = [
                {
                    title: 'truck1', 
                    type: 'Truck',
                    icon: 'TruckIcon'
                },
                {
                    title: 'truck2',
                    type: 'Truck',
                    icon: 'TruckIcon'
                },
                {
                    title: 'rftag1',
                    type: 'Tag',
                    icon: 'ArchiveIcon'
                }
            ]
            this.showResults = true;
        },

        getDetails(row){
            console.log(row)
        }
    }
}
</script>

<style>

</style>