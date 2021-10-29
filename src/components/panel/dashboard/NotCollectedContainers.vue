<template>
    <b-card no-body>
        <b-card-header>
            <div>
                <b-card-title class="mb-1">
                Son 7 Günde Toplanmayan Konteynerlar
                </b-card-title>
            </div>
        </b-card-header>

        <!-- chart -->
        <b-card-body>
            <b-table
                small
                :fields="fields"
                :items="items"
                responsive="sm"
                >
                <!-- A virtual column -->
                <template #cell(index)="data">
                    {{ data.index + 1 }}
                </template>

                <!-- A custom formatted column -->
                <template #cell(name)="data">
                    {{ data.value.first+' - '+ data.value.last }}
                </template>

                <template #cell(order_status)="data">
                    <b-badge
                    pill
                    :variant="data.value.variant"
                    >
                    {{ data.value.status }}
                    </b-badge>
                </template>

                <!-- A virtual composite column -->
                <template #cell(price)="data">
                    {{ '$'+data.value }}
                </template>

                <!-- Optional default data cell scoped slot -->
                <template #cell()="data">
                    {{ data.value }}
                </template>
            </b-table>
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BTable, BBadge } from 'bootstrap-vue'

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

            fields: [
                // A virtual column that doesn't exist in items
                'index',
                // A column that needs custom formatting
                { key: 'name', label: 'Name' },
                'Category',
                // A regular column
                { key: 'order_status', label: 'Order Status' },
                // A virtual column made up from two fields
                { key: 'price', label: 'Price' },
            ],
            items: [
                {
                name: { first: 'Fitbit', last: 'Activity Tracker' },
                Category: 'Fitness',
                order_status: { status: 'Delivered', variant: 'light-success' },
                price: 99.99,
                },
                {
                name: { first: 'Fitbit ', last: 'Flex Wireless Activity' },
                Category: 'Fitness',
                order_status: { status: 'Pending', variant: 'light-primary' },
                price: 89.85,
                },
                {
                name: { first: 'Fitbit', last: 'Sleep Tracker Wristband' },
                Category: 'Fitness',
                order_status: { status: 'Delivered', variant: 'light-success' },
                price: 65.25,
                },
                {
                name: { first: 'Fitbit', last: 'Sleep Wristband' },
                Category: 'Fitness',
                order_status: { status: 'On Hold', variant: 'light-warning' },
                price: 75.55,
                },
                {
                name: { first: 'Fitbit', last: 'Clip for Zip Wireless Activity Trackers' },
                Category: 'Fitness',
                order_status: { status: 'Canceled', variant: 'light-danger' },
                price: 105.55,
                },
            ],
        }
    }
}
</script>

<style>

</style>