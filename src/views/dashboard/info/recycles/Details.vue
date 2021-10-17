<template>
    <div>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="wine-bottle"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Plastik Sayısı</h4>
            <b-card-text class="mb-0">{{ details.plastic_count }}</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="wine-bottle"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Cam Sayısı</h4>
            <b-card-text class="mb-0">{{ details.glass_count }}</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="wine-bottle"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Metal Sayısı</h4>
            <b-card-text class="mb-0">{{ details.metal_count }}</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="map-marked-alt"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Konum</h4>
            <b-card-text class="mb-0">{{ details.location }}</b-card-text>
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

<style>

</style>