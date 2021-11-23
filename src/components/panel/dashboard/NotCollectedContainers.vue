<template>
    <b-card no-body>
        <b-card-header>
            <div>
                <b-card-title class="mb-1">
                En Az 7 Gün Toplanmayan Konteynerlar
                </b-card-title>
            </div>
        </b-card-header>

        <!-- chart -->
        <b-card-body>
            <b-table
            small
            :fields="fields"
            :items="sortedItems"
            responsive="sm"
            >
                <!-- Column: Container No -->
                <template #cell(ContainerNo)="data">
                    <router-link :to="{name: 'containersDetails', params: {query: data.value}}">
                        {{ data.value }}
                    </router-link>
                </template>

                <!-- Column: Title -->
                <template #cell(TagId)="data">
                    {{ data.value }}
                </template>

                <!-- Column: Container No -->
                <template #cell(ReadTime)="data">
                    <b-badge pill variant="light-danger" :title="data.value">
                        {{ $moment(data.value).fromNow() }}
                    </b-badge>
                </template>
            </b-table>
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BTable, BBadge } from 'bootstrap-vue'
import rfTagsData from '@/data/rfTags.data';

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BCardBody,
        BTable,
        BBadge
    },

    data(){
        return {
            //items: rfTagsData.tags.filter(tag => tag.status == 'notCollected'),
            items: [],
            fields: [
                {key: 'ContainerNo', label: 'Konteyner NO'},
                {key: 'TagId', label: 'Title'},
                {key: 'ReadTime', label: 'Son Toplanma'}
            ],
        }
    },

    computed: {
        sortedItems: function(){
            return this.items.sort((a,b) => {
                return new Date(b.ReadTime) - new Date(a.ReadTime);
            });
        }
    },

    created(){
        this.getOlderThanDays(7);
    },

    methods: {
        getOlderThanDays(days){
            const now = this.$moment();
            let tags = this.$store.getters['panel/getTags'];
            this.items = Object.values(tags).filter(tag => {
                return now.diff(tag.ReadTime, 'days') >= days
            })
        }
    }
}
</script>

<style>

</style>