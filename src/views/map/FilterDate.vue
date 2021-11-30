<template>
    <b-card class="infoContent">
        <b-row>
            <b-col lg="9">
                <datetime 
                v-model="date"
                class="dt form-control"
                :phrases="{ok: 'Seç', cancel: 'Vazgeç'}"
                :min-datetime="minDate"
                :max-datetime="maxDate"
                >
                </datetime>
            </b-col>
            <b-col lg="3">
                <b-badge class="activeBadge" :variant="`light-${$moment(date).format('L') == $moment().format('L') ? 'success' : 'warning'}`">
                    {{ $moment(date).format('L') == $moment().format('L') ? 'Today' : $moment(date).fromNow() }}
                </b-badge>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import {BRow, BCol, BCard, BBadge} from 'bootstrap-vue';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import { Settings } from 'luxon'
Settings.defaultLocale = 'tr'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BBadge,
        Datetime
    },

    data(){
        return {
            date: new Date().toISOString(),
            minDate: '',
            maxDate: '',
        }
    },

    watch: {
        'date': function(newValue){

            this.$emit('dateChanged', newValue)
        }
    },

    created(){
        this.minDate = this.$moment.utc().subtract(1, 'month').format('YYYY-MM-DD');
        this.maxDate = this.$moment.utc().format('YYYY-MM-DD');
    }
}
</script>

<style>
.dt.form-control input {
    width: 100%;
    border: none;
}
.activeBadge {
    padding: 1rem;
}
</style>