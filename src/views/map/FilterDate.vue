<template>
    <b-card class="infoContent">
        <datetime 
        v-model="date"
        :phrases="{ok: 'Seç', cancel: 'Vazgeç'}"
        :min-datetime="minDate"
        :max-datetime="maxDate"
        >
        </datetime>
    </b-card>
</template>

<script>
import {BCard} from 'bootstrap-vue';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import { Settings } from 'luxon'
Settings.defaultLocale = 'tr'

export default {
    components: {
        BCard,
        Datetime
    },

    data(){
        return {
            date: '',
            minDate: '',
            maxDate: '',
        }
    },

    created(){
        this.minDate = this.$moment.utc().subtract(1, 'month').format('YYYY-MM-DD');
        this.maxDate = this.$moment.utc().format('YYYY-MM-DD');
    }
}
</script>

<style>

</style>