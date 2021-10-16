<template>
    <div class="recyclesContent">
        <b-row class="match-height">
            <b-col md="6" xl="6" class="cardCol">
                <b-card bg-variant="primary" text-variant="white">
                    <b-avatar class="mb-1" variant="light-warning" size="45">
                        <feather-icon size="21" icon="AwardIcon"/>
                    </b-avatar>
                    <b-card-title class="text-white">213</b-card-title>
                    <b-card-text>Toplanan Şişe Sayısı</b-card-text>
                </b-card>
            </b-col>
            <b-col md="6" xl="6" class="cardCol">
                <b-card bg-variant="success" text-variant="white">
                    <b-avatar class="mb-1" variant="light-primary" size="45">
                        <feather-icon size="21" icon="AwardIcon"/>
                    </b-avatar>
                    <b-card-title class="text-white">123</b-card-title>
                    <b-card-text>Kurtarılan ağaç sayısı</b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="12" md="12">
                <b-list-group class="recycleList">
                    <div v-if="recycles.length">
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(recycle, id) in recycles" :key="id" @click="getDetails(recycle)">
                                <span class="mr-1">
                                    <feather-icon
                                    :icon="recycle.icon"
                                    size="16"
                                    />
                                </span>
                                <span>{{ recycle.data.recycle_title }}</span>
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
import { BRow, BCol, BCard, BAvatar, BCardText, BCardTitle, BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BAvatar,
        BCardText,
        BCardTitle,
        BListGroup,
        BListGroupItem
    },

    data(){
        return {
        }
    },

    computed: {
        recycles: function(){
            return this.$store.state.dashboard.markers.filter(marker => marker.type == 'recycle')
        }
    },

    methods: {
        getDetails(ult){
            ult.marker.enablePermanentHighlight();
            ult.marker.fireEvent('click');
            setTimeout(function(){
                ult.marker.disablePermanentHighlight();
            }, 5000)
        }
    }
}
</script>

<style scoped>
.recyclesContent {
    padding: 20px 0;
}
.quoteCol {
    padding: 3px 5px 10px;
    font-size: 10px;
    font-style: italic;
}
.cardCol .card-body {
    text-align: center;
    cursor: pointer;
    padding: .5rem;
}
.cardCol .card-title {
    margin-bottom: .3rem;
}

</style>