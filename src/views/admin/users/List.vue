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
                    :items="filteredUsers"
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
                        <!-- Column: First Name -->
                        <template #cell(FirstName)="data">
                            <span v-if="table.searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                            <span v-else>{{ data.value }}</span>
                        </template>

                        <!-- Column: Last Name -->
                        <template #cell(LastName)="data">
                            <span v-if="table.searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                            <span v-else>{{ data.value }}</span>
                        </template>

                        <!-- Column: Email -->
                        <template #cell(Email)="data">
                            <span v-if="table.searchQuery.length >= 3" v-html="$options.filters.highlight(data.value, table.searchQuery)"></span>
                            <span v-else>{{ data.value }}</span>
                        </template>

                        <!-- Column: Role -->
                        <template #cell(UserRole)="data">
                            <b-badge variant="light-primary">{{ data.value }}</b-badge>
                        </template>

                        <template #cell(actions)="data">
                            <b-button
                            variant="warning"
                            class="btn-icon rounded-circle"
                            @click="editUser(data.item)"
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
        ref="userModal"
        cancel-variant="outline-secondary"
        ok-title="Save"
        @ok="updateUser"
        cancel-title="Close"
        centered
        title="Update User"
        >
            <b-form @submit.prevent>
                <b-row>
                    <b-col cols="12">
                        <b-form-group
                        label="Role"
                        label-for="h-customer"
                        label-cols-md="4"
                        >
                            <v-select
                                id="h-customer"
                                v-model="currentUser.UserRole"
                                :options="roles"
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-form>
        </b-modal>
    </b-card>
</template>

<script>
import { BCard, BCardBody, BRow, BCol, BTable, BModal, BFormCheckbox, BForm, BFormGroup, BPagination, BFormInput, BBadge, BButton} from 'bootstrap-vue';
import AdminApi from '@/services/adminapi.service';
import vSelect from 'vue-select'
import Enums from '@/config/system.enums';

export default {
    components: {
        BCard,
        BCardBody,
        BRow,
        BCol,
        BTable,
        BModal,
        BFormCheckbox, 
        BForm, 
        BFormGroup,
        BPagination,
        BFormInput,
        BBadge,
        BButton,
        vSelect
    },  

    data(){
        return {
            users: [],
            currentUser: {},
            table: {
                currentPage: 1,
                perPage: 5,
                perPageOptions: [5, 10, 15, 20, 25, 50],
                searchQuery: '',
                fields: [
                    {key: 'FirstName', label: 'İsim'},
                    {key: 'LastName', label: 'Soyisim'},
                    {key: 'Email', label: 'Email'},
                    {key: 'UserRole', label: 'Rol'},
                    {key: 'actions', label: 'Edit'},
                ],
                sortBy: 'DeviceId',
                isSortDirDesc: true,
                totalItems: 0
            },
            roles: [
                {id: Enums.USER_ROLE_GUEST, label: 'Guest'},
                {id: Enums.USER_ROLE_REPORT, label: 'Report'},
                {id: Enums.USER_ROLE_ADMIN, label: 'Admin'},
                
            ]
        }
    },

    computed: {
        filteredUsers: function(){
            if (this.table.searchQuery.length >= 3){
                return this.users.filter(user => 
                user.FirstName.toLocaleLowerCase().includes(this.table.searchQuery.toLocaleLowerCase())
                || user.LastName.toLocaleLowerCase().includes(this.table.searchQuery.toLocaleLowerCase())
                || user.Email.toLocaleLowerCase().includes(this.table.searchQuery.toLocaleLowerCase())
                )
            }
            return this.users;
        }
    },
    
    mounted(){
        this.getUsers()
    },

    methods: {
        getUsers(){
            AdminApi.getUsers().then(response => {
                this.users = Object.values(response.Users)
            })
        },

        editUser(user){
            this.currentUser = {
                ...user
            };
            this.$refs.userModal.show();
        },

        updateUser(){
            console.log('update user: ', this.currentUser)
            let u = {
                ...this.currentUser
            }
            u.UserRole = u.UserRole.id
            AdminApi.setUser(u).then(response => {
                console.log('response for user: ', response)
            })
        }
    }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>