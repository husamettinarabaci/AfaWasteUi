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
                {{ details.status == 'active' ? 'Aktif' : 'Park Halinde' }}
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
                {{ details.daily_distance }} M
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
                {{ details.collected_container_count }}
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
                {{ details.productivity_rate }}%
            </b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="clock"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">
                Mesai Bitişi
            </h4>
            <b-card-text class="mb-0">
                {{ details.status == 'park' ? 'Mesai bitti' : $moment(details.end_of_shift).fromNow() }}
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