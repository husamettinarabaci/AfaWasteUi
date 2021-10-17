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
        title="Detay Bilgi"
        hide-footer
        >
            <p>Content goes here..</p>
        </b-modal>
    </div>
</template>

<script>
import { BCardText, BMediaBody, BMedia, BMediaAside, BAvatar, BModal } from 'bootstrap-vue'

export default {
    components: {
        BCardText,
        BMediaBody,
        BMedia,
        BMediaAside,
        BAvatar,
        BModal
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