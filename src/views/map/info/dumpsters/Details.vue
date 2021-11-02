<template>
    <div>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="map-marked-alt"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Konum</h4>
            <b-card-text class="mb-0">{{ details.location }}</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="chart-line"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Toplanma Sıklığı</h4>
            <b-card-text class="mb-0">{{ details.collection_frequency }}</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="exclamation-triangle"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Uyarı</h4>
            <b-card-text class="mb-0">{{ details.warning.length ? details.warning : 'Yok' }}</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="truck"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Kamyon</h4>
            <b-card-text class="mb-0">
                <b-badge variant="light-info" @click="showTruck">
                    <feather-icon
                        icon="TruckIcon"
                        class="mr-25"
                    />
                    <span>{{ details.truck_plate_no }}</span>
                </b-badge>
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
        }
    },

    methods: {
        showTruck(){
            let trucks = this.$store.state.dashboard.markers.filter(marker => marker.type == 'truck');
            let filtered = trucks.filter(truck => truck.data.plate_no == this.details.truck_plate_no);
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