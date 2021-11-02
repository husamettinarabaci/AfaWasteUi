<template>
    <b-card no-body>
        <b-card-header>
            <b-card-title>
                Kullanan Şoförler
            </b-card-title>
        </b-card-header>
        <b-card-body>
            İçerik
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardBody } from 'bootstrap-vue';

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody
    },

    props: ['truck'],

    data(){
        return {

        }
    }
}
</script>

<style>

</style>