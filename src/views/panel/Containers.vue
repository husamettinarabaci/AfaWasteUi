<template>
    <div>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col lg="6">
                                Toplanan Konteynerlar - {{ $moment(currentDate).format('Do MMMM dddd') }}
                            </b-col>
                            <b-col lg="6">
                                <b-row>
                                    <b-col lg="6">
                                        <b-form-datepicker
                                        id="datepicker"
                                        v-model="currentDate"
                                        />
                                    </b-col>
                                    <b-col lg="6">
                                        <b-button-group>
                                            <b-button @click="filteredStatus = 'collected'" :variant="filteredStatus == 'collected' ? 'success' : 'outline-success'">
                                            Toplanan
                                            </b-button>
                                            <b-button @click="filteredStatus = 'notCollected'" :variant="filteredStatus == 'notCollected' ? 'danger' : 'outline-danger'">
                                            Toplanmayan
                                            </b-button>
                                        </b-button-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <list/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {BRow, BCol, BCard, BCardBody, BFormDatepicker, BButtonGroup, BButton} from 'bootstrap-vue';
import List from '@/components/panel/containers/List.vue';

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BFormDatepicker,
        BButtonGroup, 
        BButton,
        List
    },

    data(){
        return {
            currentDate: new Date().toISOString(),
            filteredStatus: 'collected'
        }
    },

    computed: {

    },

    watch: {
        'currentDate': function(newVal, oldVal){
            let date = new Date(newVal);
            console.log('currentDate: ', date.toISOString())
        }
    }
}
</script>

<style scoped>
</style>