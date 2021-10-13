<template>
    <div class="dumpstersContent">
        <b-row class="match-height">
            <b-col md="6" xl="6" class="cardCol">
                <b-card
                    bg-variant="success"
                    text-variant="white"
                    :class="{'activeCol': filteredType == ''}"
                    @click="filterList()"
                    >
                    <b-card-title class="text-white">Toplanan</b-card-title>
                    <b-card-text>text</b-card-text>
                </b-card>
            </b-col>
            <b-col md="6" xl="6" class="cardCol">
                <b-card
                    bg-variant="danger"
                    text-variant="white"
                    :class="{'activeCol': filteredType == ''}"
                    @click="filterList()"
                    >
                    <b-card-title class="text-white">Toplanmayan</b-card-title>
                    <b-card-text>text</b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="dumpstersList">
            <b-col md="12" xl="12" class="dumpstersCol">
                <b-list-group>
                    <div v-if="dumpsters.length">
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(dumpster, id) in dumpsters" :key="id" @click="getDetails(dumpster)">
                                <span class="mr-1">
                                    <feather-icon
                                    :icon="dumpster.icon"
                                    size="16"
                                    />
                                </span>
                                <span>{{ dumpster.data.container_no }}</span>
                            </b-list-group-item>
                        </transition-group>
                    </div>
                    <transition v-else name="fade">
                        <b-list-group-item class="d-flex">
                            <span class="mr-1">
                                <feather-icon
                                icon="AlertOctagonIcon"
                                size="16"
                                />
                            </span>
                            <span>Sonuç bulunamadı!</span>
                        </b-list-group-item>
                    </transition>
                </b-list-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow, BCol, BCard, BCardText, BCardTitle, BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardText,
        BCardTitle,
        BListGroup,
        BListGroupItem
    },

    data(){
        return {
            filteredType: ''
        }
    },

    computed: {
        dumpsters: function(){
            return this.$store.state.dashboard.markers.filter(marker => marker.type == 'rfTag')
        }
    },

    methods: {
        getDetails(dumpster){
            dumpster.marker.fireEvent('click');
        }
    }
}
</script>

<style scoped>
    .dumpstersContent {
        padding: 20px 0;
    }
    .cardCol, .dumpstersCol {
        padding: 0 5px;
    }
</style>