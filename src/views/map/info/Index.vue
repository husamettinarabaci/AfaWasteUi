<template>
    <b-card class="infoContent">
        <component :is="layout" @showTrucks="$emit('showTrucks')"/>
    </b-card>
</template>

<script>
import {BCard} from 'bootstrap-vue';

import Trucks from './trucks/Index';
import TruckDetails from './trucks/Details';
import Dumpsters from './dumpsters/Index';
import DumpsterDetails from './dumpsters/Details';
import Containers from './containers/Index';
import ContainerDetails from './containers/Details';
import Recycles from './recycles/Index';
import RecycleDetails from './recycles/Details';

export default {
    components: {
        BCard,
        Trucks,
        TruckDetails,
        Dumpsters,
        DumpsterDetails,
        Containers,
        ContainerDetails,
        Recycles,
        RecycleDetails
    },

    data(){
        return {

        }
    },

    computed: {
        layout: function(){
            return this.$store.state.dashboard.info.current;
        }
    }
}
</script>

<style>
.infoContent {
    background-color: rgba(255, 255, 255, 0.95);
    /*padding: 20px;*/
    width: 350px;
    word-break: break-all;
    box-shadow: 0 1px 5px rgb(0 0 0 / 65%);
}

 .b-avatar-custom svg {
    font-size: 18px;
 }
 .media {
     margin-bottom: 10px;
 }
.media-heading {
    margin-bottom: -5px;
    font-size: 1.1rem;
}
</style>