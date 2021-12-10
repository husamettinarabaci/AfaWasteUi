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

                        <template #cell(actions)="data">
                            <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="warning"
                            class="btn-icon rounded-circle"
                            @click="getConfig(data.item)"
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
        id="modal-configs"
        ref="configModal"
        cancel-variant="outline-secondary"
        ok-title="Save"
        @ok="saveConfig"
        cancel-title="Close"
        centered
        title="Set Config"
        >
            <b-form @submit.prevent>
                <b-row>
                    <b-col cols="12">
                        <b-form-group
                        label="Arvento App"
                        label-for="h-arvento-app"
                        label-cols-md="4"
                        >
                            <b-form-checkbox
                                id="h-arvento-app"
                                :checked="config.ArventoApp == Enums.STATU_ACTIVE"
                                class="custom-control-primary"
                                name="check-button"
                                v-model="config.ArventoApp"
                                switch
                            />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="Arvento User Name"
                        label-for="h-arvento-user-name"
                        label-cols-md="4"
                        >
                        <b-form-input
                            id="h-arvento-user-name"
                            placeholder="Arvento User Name"
                            v-model="config.ArventoUserName"
                        />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="Arvento Pin 1"
                        label-for="h-arvento-pin-1"
                        label-cols-md="4"
                        >
                        <b-form-input
                            id="h-arvento-pin-1"
                            placeholder="Arvento Pin 1"
                            v-model="config.ArventoPin1"
                        />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="Arvento Pin 2"
                        label-for="h-arvento-pin-2"
                        label-cols-md="4"
                        >
                        <b-form-input
                            id="h-arvento-pin-2"
                            placeholder="Arvento Pin 2"
                            v-model="config.ArventoPin2"
                        />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="System Problem"
                        label-for="h-system-problem"
                        label-cols-md="4"
                        >
                            <b-form-checkbox
                                id="h-system-problem"
                                :checked="config.SystemProblem == Enums.STATU_ACTIVE"
                                class="custom-control-primary"
                                name="check-button"
                                v-model="config.SystemProblem"
                                switch
                            />
                        </b-form-group>
                    </b-col>

                    <b-col cols="12">
                        <b-form-group
                        label="Truck Stop Trace"
                        label-for="h-truck-stop-trace"
                        label-cols-md="4"
                        >
                            <b-form-checkbox
                                id="h-truck-stop-trace"
                                :checked="config.TruckStopTrace == Enums.STATU_ACTIVE"
                                class="custom-control-primary"
                                name="check-button"
                                v-model="config.TruckStopTrace"
                                switch
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-form>
        </b-modal>
    </b-card>
</template>

<script>
import { BCard, BCardBody, BRow, BCol, BTable, BPagination, BBadge, BFormCheckbox, BButton, BForm, BFormGroup, BFormInput } from 'bootstrap-vue';
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
        BFormCheckbox,
        BButton,
        BForm, 
        BFormGroup, 
        BFormInput
    },  

    directives: {
        Ripple,
    },

    data(){
        return {
            items: [],
            config: {},
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
            this.table.totalItems = this.items.length;
            this.$store.commit('afatek/setCustomers', this.items);
        })
    },

    methods: {
        getConfig(item){
            let d = {
                CustomerId: item.CustomerId
            }
            this.$refs.configModal.show();
            AfatekApi.getConfig(d).then(response => {
                console.log('response: ', response);
                this.config = {
                    ...response,
                    ArventoApp: response.ArventoApp == Enums.STATU_ACTIVE ? true : false,
                    SystemProblem: response.SystemProblem == Enums.STATU_ACTIVE ? true : false,
                    TruckStopTrace: response.TruckStopTrace == Enums.STATU_ACTIVE ? true : false
                };
            })
        },

        saveConfig(){
            let config = {
                ...this.config
            }
            config.ArventoApp = this.config.ArventoApp == true ? Enums.STATU_ACTIVE : Enums.STATU_PASSIVE;
            config.SystemProblem = this.config.SystemProblem == true ? Enums.STATU_ACTIVE : Enums.STATU_PASSIVE;
            config.TruckStopTrace = this.config.TruckStopTrace == true ? Enums.STATU_ACTIVE : Enums.STATU_PASSIVE;
            
            AfatekApi.setConfig(config).then(response => {
                console.log('response: ', response)
            })
        }
    }
}
</script>

<style>

</style>