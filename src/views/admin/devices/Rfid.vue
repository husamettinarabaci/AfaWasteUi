<template>
    <b-card no-body>
        <b-card-body>
            <b-row>
                <b-col lg="12">
                    <b-form-input
                    id="floating-label1"
                    placeholder="Label Placeholder"
                    v-model="table.searchQuery"
                    />

                    <b-table
                    :items="filteredDevices"
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
                        <!-- Column: Device ID -->
                        <template #cell(DeviceId)="data">
                            <span>{{ data.value }}</span>
                        </template>

                        <!-- Column: Customer ID -->
                        <template #cell(CustomerId)="data">
                            <span>{{ data.value }}</span>
                        </template>

                        <!-- Column: Customer Name -->
                        <template #cell(CustomerName)="data">
                            <span v-if="table.searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                            <span v-else>{{ data.value }}</span>
                        </template>

                        <!-- Column: Serial Number -->
                        <template #cell(SerialNumber)="data">
                            <b-badge pill variant="light-primary" :title="data.value">
                                {{ data.value }}
                            </b-badge>
                        </template>

                        <template #cell(actions)>
                            <b-button
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
import { BCard, BCardBody, BRow, BCol, BTable, BPagination, BFormInput, BBadge, BButton} from 'bootstrap-vue';
import AdminApi from '@/services/adminapi.service';
import Enums from '@/config/system.enums';

export default {
    components: {
        BCard,
        BCardBody,
        BRow,
        BCol,
        BTable,
        BPagination,
        BFormInput,
        BBadge,
        BButton
    },  

    data(){
        return {
            devices: [],
            table: {
                currentPage: 1,
                perPage: 5,
                perPageOptions: [5, 10, 15, 20, 25, 50],
                searchQuery: '',
                fields: [
                    {key: 'DeviceId', label: 'Device ID'},
                    {key: 'CustomerId', label: 'Customer ID'},
                    {key: 'CustomerName', label: 'Customer Name'},
                    {key: 'SerialNumber', label: 'Serial Number'},
                    {key: 'actions', label: 'Edit'},
                ],
                sortBy: 'DeviceId',
                isSortDirDesc: true,
                totalItems: 0
            },
        }
    },

    computed: {
        filteredDevices: function(){
            return this.devices.filter(device => device.CustomerName.toLocaleLowerCase().includes(this.table.searchQuery.toLocaleLowerCase()));
        }
    },
    
    mounted(){
        this.getDevices()
    },

    methods: {
        getDevices(){
            AdminApi.getDevices(Enums.DEVICETYPE_RFID).then(response => {
                console.log('geldi: ', response)
                this.devices = Object.values(response.Devices)
                this.table.totalItems = this.devices.length;
            })
        }
    }
}
</script>

<style>

</style>