<template>
    <b-row class="match-height">
        <b-col lg="6">
            <last-days-summary/>
        </b-col>
        <b-col lg="6">
            <last-days-collecteds/>
        </b-col>
    </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';
import LastDaysSummary from '@/components/panel/reports/daily/LastDaysSummary';
import LastDaysCollecteds from '@/components/panel/reports/daily/LastDaysCollecteds';

export default {
    components: {
        BRow,
        BCol,
        LastDaysSummary,
        LastDaysCollecteds
    }
}
</script>

<style>

</style>