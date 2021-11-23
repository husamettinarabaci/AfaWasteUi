<template>
    <b-row class="match-height">
        <b-col lg="6">
            <informations :truck="truck"/>
        </b-col>
        <b-col lg="6">
            <drivers :truck="truck"/>
        </b-col>
    </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';
import Informations from '@/components/panel/details/trucks/Informations';
import Drivers from '@/components/panel/details/trucks/Drivers';

export default {
    components: {
        BRow,
        BCol,
        Informations,
        Drivers
    },

    data(){
        return {
            truck: null
        }
    },

    created(){
        this.truck = this.$route.params.truck;
    }
}
</script>

<style>

</style>