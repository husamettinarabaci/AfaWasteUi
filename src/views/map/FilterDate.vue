<template>
    <b-card class="infoContent">
        <datetime v-model="date"></datetime>
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
            date: ''
        }
    }
}
</script>

<style>

</style>