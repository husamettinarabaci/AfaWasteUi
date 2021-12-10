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
                        <template #cell(DeviceMain.CustomerId)="data">
                            <span>{{  data.value }}</span>
                        </template>

                        <!-- Column: Customer Name -->
                        <template #cell(CustomerName)="data">
                            <span v-if="table.searchQuery.length >= 3" v-html="$options.filters.highlight(customerDetails(data.item.CustomerId).CustomerName, table.searchQuery)"></span>
                            <span v-else>{{ customerDetails(data.item.DeviceMain.CustomerId) ? customerDetails(data.item.DeviceMain.CustomerId).CustomerName : '' }}</span>
                        </template>

                        <!-- Column: Serial Number -->
                        <template #cell(DeviceMain.SerialNumber)="data">
                            <b-badge pill variant="light-primary" :title="data.value">
                                {{ data.value }}
                            </b-badge>
                        </template>

                        <!-- Column: Device Type -->
                        <template #cell(DeviceMain.DeviceType)="data">
                            <b-badge pill variant="light-primary" :title="data.value">
                                {{ data.value }}
                            </b-badge>
                        </template>

                        <!-- Column: Active -->
                        <template #cell(DeviceMain.Active)="data">
                            <b-badge pill variant="light-primary" :title="data.value">
                                {{ data.value }}
                            </b-badge>
                        </template>

                        <template #cell(actions)="data">
                            <b-button
                            variant="warning"
                            class="btn-icon rounded-circle"
                            @click="showModal(data.item)"
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
        <b-modal
        id="modal-device"
        ref="deviceModal"
        cancel-variant="outline-secondary"
        ok-title="Save"
        @ok="saveDevice"
        cancel-title="Close"
        centered
        title="Set Config"
        >
            <b-form @submit.prevent>
                <b-row>
                    <b-col cols="12">
                        <b-form-group
                        label="Active"
                        label-for="h-active"
                        label-cols-md="4"
                        >
                            <b-form-checkbox
                                id="h-active"
                                :checked="currentDevice.Active == Enums.STATU_ACTIVE"
                                class="custom-control-primary"
                                name="check-button"
                                v-model="currentDevice.Active"
                                switch
                            />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="Choose customer"
                        label-for="h-customer"
                        label-cols-md="4"
                        >
                            <v-select
                                id="h-customer"
                                v-model="currentDevice.CustomerId"
                                :options="customerOptions"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="Longitude"
                        label-for="h-longitude"
                        label-cols-md="4"
                        >
                            <b-form-input
                                id="h-longitude"
                                v-model.number="currentDevice.Longitude"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="Latitude"
                        label-for="h-latitude"
                        label-cols-md="4"
                        >
                            <b-form-input
                                id="h-latitude"
                                v-model.number="currentDevice.Latitude"
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-form>
        </b-modal>
    </b-card>
</template>

<script>
import { BCard, BCardBody, BRow, BCol, BTable, BPagination, BForm, BFormGroup, BFormCheckbox, BFormInput, BBadge, BButton} from 'bootstrap-vue';
import vSelect from 'vue-select'
import AfatekApi from '@/services/afatekapi.service';
import Enums from '@/config/system.enums';

export default {
    components: {
        BCard,
        BCardBody,
        BRow,
        BCol,
        BTable,
        BPagination,
        BForm, 
        BFormGroup, 
        BFormCheckbox,
        BFormInput,
        BBadge,
        BButton,
        vSelect
    },  

    data(){
        return {
            Enums,
            devices: [],
            currentDevice: {},
            table: {
                currentPage: 1,
                perPage: 5,
                perPageOptions: [5, 10, 15, 20, 25, 50],
                searchQuery: '',
                fields: [
                    {key: 'DeviceId', label: 'Device ID'},
                    {key: 'CustomerName', label: 'Customer Name'},
                    {key: 'DeviceMain.SerialNumber', label: 'Serial Number'},
                    {key: 'DeviceMain.Latitude', label: 'Latitude'},
                    {key: 'DeviceMain.Longitude', label: 'Longitude'},
                    {key: 'DeviceMain.DeviceType', label: 'Device Type'},
                    {key: 'DeviceMain.Active', label: 'Active'},
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
            return this.devices;
            return this.devices.filter(device => device.CustomerName.toLocaleLowerCase().includes(this.table.searchQuery.toLocaleLowerCase()));
        },

        customers: function(){
            return this.$store.getters['afatek/getCustomers'];
        },

        customerOptions: function(){
            return this.customers.map(customer => {
                return {
                    id: customer.CustomerId,
                    label: customer.CustomerName
                }
            })
        },
    },
    
    async mounted(){
        if (!this.customers.length){
            await AfatekApi.getCustomers().then(response => {
                this.$store.commit('afatek/setCustomers', Object.values(response.Customers));
            })
        }
        this.getDevices()
    },

    methods: {
        getDevices(){
            AfatekApi.getDevices(Enums.DEVICETYPE_ULT).then(response => {
                console.log('response', response)
                this.devices = Object.values(response.Devices)
                this.table.totalItems = this.devices.length;
            })
        },

        customerDetails(id){
            return this.customers.find(customer => customer.CustomerId === id)
        },

        showModal(item){
            this.currentDevice = {
                ...item.DeviceMain
            }
            this.currentDevice.CustomerId = {
                id: item.DeviceMain.CustomerId,
                label: this.customerDetails(item.DeviceMain.CustomerId).CustomerName
            }
            this.currentDevice.Active = this.currentDevice.Active == Enums.STATU_ACTIVE ? true : false
            this.$refs.deviceModal.show()
        },

        saveDevice(){
            let device = {
                ...this.currentDevice
            }
            device.CustomerId = this.currentDevice.CustomerId.id
            device.Active = this.currentDevice.Active ? Enums.STATU_ACTIVE : Enums.STATU_PASSIVE

            AfatekApi.setDevice(Enums.DEVICETYPE_ULT, device).then(response => {
                console.log('device: ', response)
            })
        },
    }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
