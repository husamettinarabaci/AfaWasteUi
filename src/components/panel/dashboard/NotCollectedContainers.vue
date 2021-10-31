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
                <template #cell(container_no)="data">
                    <router-link :to="{name: 'containersDetails', params: {query: data.value}}">
                        {{ data.value }}
                    </router-link>
                </template>

                <!-- Column: Title -->
                <template #cell(rftag_title)="data">
                    {{ data.value }}
                </template>

                <!-- Column: Container No -->
                <template #cell(last_event)="data">
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
            items: rfTagsData.tags.filter(tag => tag.status == 'notCollected'),
            fields: [
                {key: 'container_no', label: 'Konteyner NO'},
                {key: 'rftag_title', label: 'Title'},
                {key: 'last_event', label: 'Son Toplanma'}
            ],
        }
    },

    computed: {
        sortedItems: function(){
            return this.items.sort((a,b) => {
                return new Date(a.last_event) - new Date(b.last_event);
            });
        }
    }
}
</script>

<style>

</style>