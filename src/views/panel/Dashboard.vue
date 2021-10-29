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
                <b-row>
                    <b-col lg="12">
                        <weekly-container-status/>
                    </b-col>
                </b-row>
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
}
</script>

<style>

</style>