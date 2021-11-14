<template>
    <div>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="map-marked-alt"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Konum</h4>
            <b-card-text class="mb-0">{{ `${details.TagGps.Latitude}, ${details.TagGps.Longitude}` }}</b-card-text>
        </b-media>
        <!--
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="chart-line"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Toplanma Sıklığı</h4>
            <b-card-text class="mb-0">{{ details.TagId }}</b-card-text>
        </b-media>
        -->
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="exclamation-triangle"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Uyarı</h4>
            <b-card-text class="mb-0">{{ details.warning ? details.warning : 'Yok' }}</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="truck"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Kamyon</h4>
            <b-card-text class="mb-0">
                <b-badge variant="light-info" v-if="truck" @click="showTruck(truck.DeviceId)">
                    <feather-icon
                        icon="TruckIcon"
                        class="mr-25"
                    />
                    <span>{{ truck.DeviceDetail.PlateNo }}</span>
                </b-badge>
                <div v-else>
                    Bulunamadı
                </div>
            </b-card-text>
        </b-media>
    </div>
</template>

<script>
import {BCardText, BMediaBody, BMedia, BMediaAside, BAvatar, BBadge} from 'bootstrap-vue';

export default {
    components: {
        BCardText,
        BMediaBody,
        BMedia,
        BMediaAside,
        BAvatar,
        BBadge
    },

    data(){
        return {

        }
    },

    computed: {
        details: function(){
            return this.$store.state.dashboard.info.data;
        },

        truck: function(){
            let filtered = this.$store.state.dashboard.markers.filter(marker => marker.type === 'truck' && marker.data.DeviceId === this.details.TagMain.DeviceId);
            return filtered.length ? filtered[0].data : '';
        }
    },

    methods: {
        showTruck(id){
            let filtered = this.$store.state.dashboard.markers.filter(marker => marker.type == 'truck' && marker.data.DeviceId == id);
            if (filtered.length){
                this.$emit('showTrucks');
                filtered[0].marker.fireEvent('click');
            }
            else {
                console.log('bulunamadı')
            }
        }
    }
}
</script>

<style scoped>
    .badge.badge-light-info {
        margin-top: 5px;
        cursor: pointer;
    }
</style>