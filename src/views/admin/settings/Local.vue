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
                    :items="filteredConfigs"
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
                        <!-- Column: key -->
                        <template #cell(key)="data">
                            <span v-if="table.searchQuery.length" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                            <span v-else>{{ data.value }}</span>
                        </template>

                        <!-- Column: value -->
                        <template #cell(value)="data">
                            <span v-if="table.searchQuery.length" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                            <b-form-input v-else v-model="data.value"></b-form-input>
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
            configs: [],
            table: {
                currentPage: 1,
                perPage: 5,
                perPageOptions: [5, 10, 15, 20, 25, 50],
                searchQuery: '',
                fields: [
                    {key: 'key', label: 'İsim'},
                    {key: 'value', label: 'Değer'},
                ],
                sortBy: 'key',
                isSortDirDesc: true,
                totalItems: 0
            },
        }
    },

    computed: {
        filteredConfigs: function(){
            if (this.table.searchQuery.length){
                let items = this.configs.filter(c => 
                c.key.toLocaleLowerCase().includes(this.table.searchQuery.toLocaleLowerCase())
                || c.value.toLocaleLowerCase().includes(this.table.searchQuery.toLocaleLowerCase()))
                this.table.totalItems = items.length;
                return items;
            }
            return this.configs;
        }
    },

    mounted(){
        this.getLocalConfig()
    },

    methods: {
        getLocalConfig(){
            AdminApi.getConfig(Enums.DATATYPE_LOCALCONFIG).then(response => {
                this.configs = [];
                Object.keys(response.Locs).forEach(key => {
                    this.configs.push({
                        key: key,
                        value: response.Locs[key]
                    })
                })
                this.table.totalItems = this.configs.length;
            }).catch(e => {
                console.log('error: ', e)
            })
        }
    }
}
</script>

<style>

</style>