<template>
    <div>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="info-circle"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">
                Durum
            </h4>
            <b-card-text class="mb-0">
                Aktif / Park Halinde
            </b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="road"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">
                Günlük Mesafe
            </h4>
            <b-card-text class="mb-0">
                38 KM
            </b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="chart-pie"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">
                Günlük Toplanılan Konteyner Sayısı
            </h4>
            <b-card-text class="mb-0">
                284
            </b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="tachometer-alt"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">
                Verimlilik Oranı
            </h4>
            <b-card-text class="mb-0">
                32%
            </b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="clock"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">
                Mesai Kalan Süresi
            </h4>
            <b-card-text class="mb-0">
                7 Saat
            </b-card-text>
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
    }
}
</script>

<style scoped>
</style>