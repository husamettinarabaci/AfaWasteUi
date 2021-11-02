<template>
    <div>
        <b-row v-if="truck">
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        Plaka No: {{ truck.plate_no }}
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row v-if="truck">
            <b-col lg="4" v-for="(property, id) in properties" :key="id">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title>
                            {{ property.value }}
                        </b-card-title>
                    </b-card-header>
                    <b-card-body>
                        {{ property.title }}
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow, BCol, BCard, BCardHeader, BCardTitle, BCardBody } from 'bootstrap-vue';

export default {
    props: ['truck'],

    components: {
        BRow,
        BCol,
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody
    },

    data(){
        return {
            properties: [
                {
                    title: 'Bugün Toplanan',
                    value: '25'
                },
                {
                    title: 'Dün Toplanan',
                    value: '30'
                },
                {
                    title: '1 Haftalık Toplanan',
                    value: '196'
                },
                {
                    title: 'Haftanın Ortalaması',
                    value: '28'
                },
                {
                    title: 'Ayın Ortalaması',
                    value: '29,6'
                },
                {
                    title: 'Ortalama Günlük KM',
                    value: '75 KM'
                },
            ]
        }
    }
}
</script>

<style>

</style>