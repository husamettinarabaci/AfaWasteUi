<template>
    <b-card no-body>
        <b-card-body>
            <b-row>
                <b-col lg="12">
                    <b-table
                    :items="customers"
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
                    class="position-relative"
                    >
                        <!-- Column: Customer Name -->
                        <template #cell(CustomerName)="data">
                            <span v-if="table.searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                            <span v-else>{{ data.value }}</span>
                        </template>

                        <!-- Column: Customer Link -->
                        <template #cell(CustomerLink)="data">
                            <b-badge pill variant="light-primary" :title="data.value">
                                {{ data.value }}
                            </b-badge>
                        </template>

                        <!-- Column: Apps -->
                        <template #cell(Apps)="data">
                            <b-badge variant="light-primary" v-if="data.item[Enums.WEB_APP_TYPE_RFID] === Enums.STATU_ACTIVE">RFID</b-badge>
                            <b-badge variant="light-info" v-if="data.item[Enums.WEB_APP_TYPE_ULT] === Enums.STATU_ACTIVE">ULT</b-badge>
                            <b-badge variant="light-warning" v-if="data.item[Enums.WEB_APP_TYPE_RECY] === Enums.STATU_ACTIVE">RECY</b-badge>                            
                        </template>

                        <template #cell(actions)>
                            <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon rounded-circle"
                            >
                                <feather-icon icon="ArchiveIcon" />
                            </b-button>
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
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardBody, BRow, BCol, BTable, BPagination, BBadge, BButton} from 'bootstrap-vue';
import AfatekApi from '@/services/afatekapi.service';
import Enums from '@/config/system.enums'
import Ripple from 'vue-ripple-directive'


export default {
    components: {
        BCard,
        BCardBody,
        BRow,
        BCol,
        BTable,
        BPagination,
        BBadge,
        BButton
    },  

    directives: {
        Ripple,
    },

    data(){
        return {
            items: [],
            table: {
                currentPage: 1,
                perPage: 5,
                perPageOptions: [5, 10, 15, 20, 25, 50],
                searchQuery: '',
                fields: [
                    {key: 'CustomerName', label: 'Müşteri'},
                    {key: 'CustomerLink', label: 'Link'},
                    {key: 'Apps', label: 'Uygulamalar'},
                    {key: 'actions', label: 'Düzenle'},
                ],
                sortBy: 'ReadTime',
                isSortDirDesc: true,
                totalItems: 0
            },
            Enums
        }
    },

    computed: {
        customers: function(){
            return this.items
        }
    },

    mounted(){
        AfatekApi.getCustomers().then(response => {
            this.items = Object.values(response.Customers);
        })
    }
}
</script>

<style>

</style>