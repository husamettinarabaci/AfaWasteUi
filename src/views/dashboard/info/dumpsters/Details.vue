<template>
    <div>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="map-marked-alt"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Konum</h4>
            <b-card-text class="mb-0">Detay Konum Mh.</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="chart-line"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Toplanma Sıklığı</h4>
            <b-card-text class="mb-0">38 KM</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="exclamation-triangle"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Uyarı</h4>
            <b-card-text class="mb-0">2 Gündür toplanmıyor / Yok</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="truck"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Kamyon</h4>
            <b-card-text class="mb-0">07 asd 123</b-card-text>
        </b-media>
    </div>
</template>

<script>
import {BCardText, BMediaBody, BMedia, BMediaAside, BAvatar} from 'bootstrap-vue';

export default {
    components: {
        BCardText,
        BMediaBody,
        BMedia,
        BMediaAside,
        BAvatar
    },

    data(){
        return {

        }
    },

    computed: {
        details: function(){
            return this.$store.state.dashboard.info.data;
        }
    },

    methods: {
        showTruck(){
            console.log('going to truck')
        }
    }
}
</script>

<style>

</style>