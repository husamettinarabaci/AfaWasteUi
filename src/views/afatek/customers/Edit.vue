<template>
    <div>
        <b-row v-if="showSelectCustomer">
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-form-select
                        v-model="selectedCustomer"
                        :options="customerList"
                        />
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col lg="3">
                <b-card no-body>
                    <b-card-body>
                        TAGS
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card no-body>
                    <b-card-body>
                        RFID
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card no-body>
                    <b-card-body>
                        ULT
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card no-body>
                    <b-card-body>
                        RECY
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BCard, BCardBody, BRow, BCol, BFormSelect } from 'bootstrap-vue';
import AfatekApi from '@/services/afatekapi.service';

export default {
    components: {
        BCard,
        BCardBody,
        BRow,
        BCol,
        BFormSelect
    },

    data(){
        return {
            showSelectCustomer: true,
            selectedCustomer: null,
            customerList: [],
            customerList: []
        }
    },

    watch: {
        'selectedCustomer': function(newVal){
            console.log('customer changed to: ', newVal)
        }
    },

    mounted(){
        let customer = this.$route.params.customer;
        if (customer){
            this.showSelectCustomer = false;
        }
        else {
            AfatekApi.getCustomers().then(response => {
                this.customerList = [{ value: null, text: 'Please select some item' }]
                this.customerList.concat(Object.values(response.Customers).map(customer => {
                    return {
                        value: customer.CustomerId,
                        text: customer.CustomerName
                    }
                }))
            })
        }
    }

}
</script>

<style>

</style>