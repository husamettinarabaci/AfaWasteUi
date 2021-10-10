<template>
    <div class="row">
        <div class="card myCard messagesCard">
            <div class="messages table-responsive">
                <b-table
                small
                :fields="fields"
                :items="items"
                >
                    <!-- Optional default data cell scoped slot -->
                    <template #cell(date)="data">
                        {{ data.value }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(no)="data">
                        {{ data.value }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(address)="data">
                        {{ data.value }}
                    </template>

                    <template #cell(status)="data">
                        <b-badge
                        pill
                        :variant="'light-' + data.value.variant"
                        >
                        {{ data.value.status }}
                        </b-badge>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import { BTable, BBadge } from 'bootstrap-vue'

export default {
    components: {
        BTable,
        BBadge,
    },
    data(){
        return {
            fields: [
                {key: 'date', label: 'Tarih'},
                {key: 'no', label: 'Numara'},
                {key: 'address', label: 'Adres'},
                {key: 'status', label: 'Durum'}
            ],
            items: [
                {
                    date: '10/12/2022 10:30:10',
                    no: 'NO1232183',
                    address: 'Mahalle',
                    status: {status: 'Toplandı', variant: 'success'}
                },
                {
                    date: '10/12/2022 10:30:10',
                    no: 'NO1232183',
                    address: 'Mahalle',
                    status: {status: 'Toplanmadı', variant: 'danger'}
                }
            ],
        }
    }
}
</script>

<style>

</style>