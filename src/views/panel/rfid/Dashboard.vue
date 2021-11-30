<template>
    <div>
        <b-row>
            <b-col lg="12" cols="12">
                <general-summary/>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col lg="4">
                <b-row>
                    <b-col lg="12">
                        <daily-container-status/>
                    </b-col>
                </b-row>
                <!--
                <b-row>
                    <b-col lg="12">
                        <weekly-container-status/>
                    </b-col>
                </b-row>
                -->
            </b-col>
            <b-col lg="8">
                <not-collected-containers/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import GeneralSummary from '@/components/panel/dashboard/GeneralSummary.vue';
import DailyContainerStatus from '@/components/panel/dashboard/DailyContainerStatus.vue';
import WeeklyContainerStatus from '@/components/panel/dashboard/WeeklyContainerStatus.vue';
import NotCollectedContainers from '@/components/panel/dashboard/NotCollectedContainers.vue';
import WebApi from '@/services/webapi.service';
import Enums from '@/config/system.enums';

export default {
    components: {
        BRow,
        BCol,
        GeneralSummary,
        DailyContainerStatus,
        WeeklyContainerStatus,
        NotCollectedContainers
    },

    data() {
        return {
            
        }
    },

    created(){
        /*
        WebApi.getCustomer().then(response => {
            let res = ResultType.from(response.data);
            if (res.Result == Enums.RESULT_OK){
                this.$store.commit('panel/setCustomer', JSON.parse(res.Retval));
            }
        })

        WebApi.getDevices(Enums.DEVICETYPE_RFID).then(response => {
            let res = ResultType.from(response.data);
            if (res.Result == Enums.RESULT_OK){
                let d = CustomerRfidDevicesListType.from(JSON.parse(res.Retval));
                this.$store.commit('panel/setRfidDevices', d.Devices);
            }
        })

        WebApi.getDevices(Enums.DEVICETYPE_RECY).then(response => {
            let res = ResultType.from(response.data);
            if (res.Result == Enums.RESULT_OK){
                let d = CustomerRecyDevicesListType.from(JSON.parse(res.Retval));
                this.$store.commit('panel/setRecyDevices', d.Devices);
            }
        })

        WebApi.getDevices(Enums.DEVICETYPE_ULT).then(response => {
            let res = ResultType.from(response.data);
            if (res.Result == Enums.RESULT_OK){
                let d = CustomerUltDevicesListType.from(JSON.parse(res.Retval));
                this.$store.commit('panel/setUltDevices', d.Devices);
            }
        })
        */
        //WebApi.getTags().then(response => {
        //    let tags = response.Tags;
        //    //console.log('tags: ', tags);
        //    this.$store.commit('panel/setTags', tags);
        //})

        
    }
}

</script>

<style>

</style>