<template>
    <div>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="dumpster-fire"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Isı Oranı</h4>
            <b-card-text class="mb-0">35%</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="dumpster"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Konteyner Tipi</h4>
            <b-card-text class="mb-0">Yer Üstü / 3750</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="trash-restore"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Dolma Hızı Puanı</h4>
            <b-card-text class="mb-0">6</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="map-marked-alt"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Konum</h4>
            <b-card-text class="mb-0">Detay Konum Cd.</b-card-text>
        </b-media>
        <b-media vertical-align="center">
            <template #aside>
                <b-avatar rounded size="42" variant="light-primary">
                    <font-awesome-icon icon="calendar-check"/>
                </b-avatar>
            </template>
            <h4 class="media-heading">Geçmiş Doluluk Oranları</h4>
            <b-card-text class="mb-0">
                <span class="clickForStatistics" @click="showModal">Grafik için tıkayın</span>
            </b-card-text>
        </b-media>
        <b-modal
        id="containersInfoModal"
        centered
        size="lg"
        title="Geçmiş Doluluk Oranları"
        hide-footer
        >
            <app-echart-line :option-data="option" />
        </b-modal>
    </div>
</template>

<script>
import { BCardText, BMediaBody, BMedia, BMediaAside, BAvatar, BModal } from 'bootstrap-vue';
import AppEchartLine from '@core/components/charts/echart/AppEchartLine.vue'

export default {
    components: {
        BCardText,
        BMediaBody,
        BMedia,
        BMediaAside,
        BAvatar,
        BModal,
        AppEchartLine
    },

    data(){
        return {
            option: {
                xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
                series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],
            },
        }
    },

    computed: {
        details: function(){
            return this.$store.state.dashboard.info.data;
        }
    },

    methods: {
        showModal(){
            this.$bvModal.show('containersInfoModal')
        }
    }
}
</script>

<style scoped>
.clickForStatistics {
    cursor:pointer;
}
</style>