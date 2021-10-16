<template>
    <div class="infoContent">
        <component :is="layout"/>
    </div>
</template>

<script>
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

<style scoped>
.infoContent {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 100px;
    box-shadow: 0 1px 5px rgb(0 0 0 / 65%);
}
</style>