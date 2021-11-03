<template>
    <b-card no-body>
        <div class="m-2">
            <!-- Table Top -->
            <b-row>
                <!-- Per Page -->
                <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                    <label>Göster</label>
                    <v-select
                        v-model="perPage"
                        :options="perPageOptions"
                        :clearable="false"
                        class="per-page-selector d-inline-block ml-50 mr-1"
                    />
                </b-col>

                <!-- Search -->
                <b-col cols="12" md="6">
                    <div class="d-flex align-items-center justify-content-end">
                        <b-form-input
                        v-model="searchQuery"
                        class="d-inline-block mr-1"
                        placeholder="Ara..."
                        />
                    </div>
                </b-col>
            </b-row>

        </div>

        <b-table
        :items="filteredItems"
        responsive
        :fields="fields"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        class="position-relative"
        >
            <!-- Column: Container No -->
            <template #cell(container_no)="data">
                {{ data.value }}
            </template>

            <!-- Column: Location -->
            <template #cell(location)="data">
                {{ data.value }}
            </template>

            <!-- Column: Collection Frequency -->
            <template #cell(collection_frequency)="data">
                {{ data.value }}
            </template>

            <!-- Column: Last Event -->
            <template #cell(last_event)="data">
                {{ data.value }}
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
                    v-model="currentPage"
                    :total-rows="totalItems"
                    :per-page="perPage"
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
    </b-card>
</template>

<script>
import { BCard, BRow, BCol, BFormInput, BTable, BBadge, BPagination } from 'bootstrap-vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    props: ['devices'],

    components: {
        BCard,
        BRow,
        BCol,
        BFormInput,
        BTable,
        BBadge,
        BPagination,
        vSelect,
    },

    data(){
        return {
            currentPage: 1,
            items: [],
            perPage: 10,
            perPageOptions: [5, 10, 15, 20, 25, 50],
            searchQuery: '',
            fields: [
                {key: 'container_no', label: 'Konteyner NO'},
                {key: 'location', label: 'Adres'},
                {key: 'collection_frequency', label: 'Toplanma Sıklığı'},
                {key: 'last_event', label: 'Son Toplanma'}
            ],
            sortBy: 'rftag_title',
            isSortDirDesc: true,
            totalItems: 0
        }
    },

    computed: {
        filteredItems: function(){
            if (this.searchQuery){
                return this.items.filter(item => item.container_no.includes(this.searchQuery))
            }
            return this.items;
        }
    },

    watch: {
        'devices': function(newVal, oldVal){
            this.items = newVal;
            this.totalItems = newVal.length;
        }
    },

    created(){
        this.items = this.devices;
        this.totalItems = this.devices.length;
    }
}
</script>

<style>

</style>