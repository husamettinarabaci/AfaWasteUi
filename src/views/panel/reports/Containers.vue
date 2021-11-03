<template>
    <b-row class="match-height">
        <b-col lg="7">
            <containers :devices="devices"/>
        </b-col>
        <b-col lg="5">
            <containers-map/>
        </b-col>
    </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';
import Containers from '@/components/panel/reports/all/Containers';
import ContainersMap from '@/components/panel/reports/all/ContainersMap';
import rfTagsData from '@/data/rfTags.data';

export default {
    components: {
        BRow,
        BCol,
        Containers,
        ContainersMap
    },

    data(){
        return {
            devices: rfTagsData.tags
        }
    }
}
</script>

<style>

</style>