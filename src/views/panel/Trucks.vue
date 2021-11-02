<template>
    <b-row class="match-height">
        <b-col lg="12">
            <truck-list :trucks="trucks"></truck-list>
        </b-col>
    </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';
import TruckList from '@/components/panel/devices/trucks/TruckList.vue';
import trucksData from '@/data/trucks.data';

export default {
    components: {
        BRow,
        BCol,
        TruckList
    },

    data(){
        return {
            trucks: trucksData
        }
    }
}
</script>

<style>

</style>