<template>
    <b-card no-body>
        <div class="m-2">
            <!-- Table Top -->
            <b-row>
                <!-- Per Page -->
                <!--
                <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                    <label>Göster</label>
                    <v-select
                        v-model="perPage"
                        :options="perPageOptions"
                        :clearable="false"
                        class="per-page-selector d-inline-block ml-50 mr-1"
                    />
                </b-col>
                -->

                <!-- Search -->
                <b-col cols="12" md="12">
                    <div class="d-flex align-items-center justify-content-end">
                        <b-form-input
                        v-model="searchQuery"
                        class="d-inline-block mr-1"
                        placeholder="Aramak için en az 3 karakter girin..."
                        />
                    </div>
                </b-col>
            </b-row>

        </div>

        <b-table
        :items="filteredItems"
        :current-page="currentPage"
        :per-page="perPage"
        responsive
        selectable
        select-mode="single"
        :fields="fields"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        @row-selected="rowClicked"
        class="position-relative"
        >
            <!-- Column: Container No -->
            <template #cell(DeviceDetail)="data">
                <span v-if="searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, searchQuery)"></span>
                <span v-else>{{ data.value }}</span>
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
import { BCard, BCardHeader, BCardTitle, BCardBody, BRow, BCol, BFormInput, BTable, BBadge, BPagination } from 'bootstrap-vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody,
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
                {key: 'DeviceDetail.PlateNo', label: 'Plaka No'},
            ],
            sortBy: 'plate_no',
            isSortDirDesc: true,
            totalItems: 0
        }
    },

    computed: {
        filteredItems: function(){
            if (this.searchQuery.length >= 3){
                let filtered = this.items.filter(item => item.DeviceDetail.PlateNo.toLowerCase().includes(this.searchQuery.toLowerCase()))
                this.totalItems = filtered.length;
                this.currentPage = 1;
                return filtered;
            }
            return this.items;
        }
    },

    created(){
        let trucks = this.$store.getters['panel/getRfidDevices'];
        this.items = Object.values(trucks);
        this.totalItems = Object.keys(trucks).length;
    },

    methods: {
        goDetails(truck){
            this.$router.push({name: 'trucksDetails', params: {truck}});
        },

        rowClicked(row){
            if (row.length){
                this.$emit('showTruck', row[0].DeviceId);
            }
        }
    }
}
</script>

<style>

</style>