<template>
    <div>
        <b-row class="match-height">
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col lg="6">
                                Kamyonlar - {{ $moment(currentDate).format('Do MMMM dddd') }}
                            </b-col>
                            <b-col lg="6">
                                <b-row class="filterCards">
                                    <b-col lg="8">
                                        <b-form-datepicker
                                        id="datepicker"
                                        v-model="currentDate"
                                        :min="new Date()"
                                        :max="new Date()"
                                        />
                                    </b-col>
                                    <b-col lg="4">
                                        <b-card no-body>
                                            <b-card-body>
                                                <b-avatar class="mb-1" variant="light-warning" size="45">
                                                    <feather-icon size="21" icon="TruckIcon"/>
                                                </b-avatar>
                                                <b-card-title>{{ truckCount }}</b-card-title>
                                                <b-card-text>Toplam</b-card-text>
                                            </b-card-body>
                                        </b-card>    
                                    </b-col>   
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col lg="4">
                <truck-list @showTruck="showTruck"></truck-list>
            </b-col>
            <b-col lg="8">
                <truck-map :show="showOnMap"></truck-map>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {BRow, BCol, BCard, BCardBody, BFormDatepicker, BButtonGroup, BButton, BAvatar, BBadge, BCardText, BCardTitle} from 'bootstrap-vue';
import TruckList from '@/components/panel/devices/trucks/TruckList.vue';
import TruckMap from '@/components/panel/devices/trucks/TruckMap.vue';
import trucksData from '@/data/trucks.data';

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BFormDatepicker,
        BButtonGroup, 
        BButton,
        BAvatar, 
        BBadge, 
        BCardText, 
        BCardTitle,
        TruckList,
        TruckMap
    },

    data(){
        return {
            //trucks: trucksData,
            currentDate: new Date().toISOString(),
            showOnMap: 0,
            truckCount: 0,
        }
    },

    watch: {
        'currentDate': function(newVal, oldVal){
            let date = new Date(newVal);
            console.log('date changing to: ', date.toISOString())
        }
    },

    created(){
        let trucks = this.$store.getters['panel/getRfidDevices'];
        this.truckCount = Object.keys(trucks).length;
    },

    methods: {
        showTruck(deviceId){
            this.showOnMap = deviceId
        }
    }
}
</script>

<style scoped>
.filterCards .card {
    text-align: center;
}
.cardCol {
    cursor: pointer;
}
</style>