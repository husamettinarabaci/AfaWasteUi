<template>
    <div class="dumpstersContent">
        <b-row class="match-height">
            <b-col md="6" xl="6" class="cardCol">
                <b-card 
                :bg-variant="filteredType == 'notFinished' ? 'danger' : ''" 
                :text-variant="filteredType == 'notFinished' ? 'white' : ''" 
                @click="filteredType == 'notFinished' ? (filteredType = '') : (filteredType = 'notFinished')">
                    <b-avatar class="mb-1" variant="light-warning" size="45">
                        <feather-icon size="21" icon="AlertTriangleIcon"/>
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == 'notFinished'}">213</b-card-title>
                    <b-card-text>Toplanmayan</b-card-text>
                </b-card>
            </b-col>
            <b-col md="6" xl="6" class="cardCol">
                <b-card 
                :bg-variant="filteredType == 'finished' ? 'success' : ''" 
                :text-variant="filteredType == 'finished' ? 'white' : ''" 
                @click="filteredType == 'finished' ? (filteredType = '') : (filteredType = 'finished')">
                    <b-avatar class="mb-1" variant="light-primary" size="45">
                        <feather-icon size="21" icon="AwardIcon"/>
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == 'finished'}">123</b-card-title>
                    <b-card-text>Toplanan</b-card-text>
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
                                <b-badge class="dumpsterBadge" :variant="'light-'+ (dumpster.data.last_statu == 'R' ? 'danger' : 'success')">
                                    <feather-icon
                                    :icon="dumpster.data.last_statu == 'R' ? 'AlertTriangleIcon' : 'AwardIcon'"
                                    size="16"
                                    />
                                </b-badge>
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
import { BRow, BCol, BCard, BAvatar, BBadge, BCardText, BCardTitle, BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BAvatar,
        BBadge,
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
            let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'rfTag');
            if (this.filteredType.length){
                return markers.filter(marker => {
                    if (this.filteredType == 'notFinished'){
                        return marker.data.last_statu == 'R'
                    }
                    else {
                        return marker.data.last_statu != 'R'
                    }
                })
            }
            return markers;
        }
    },

    watch: {
        '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
            this.filteredType = '';            
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
.cardCol .card-body {
    text-align: center;
    cursor: pointer;
    padding: .5rem;
}
.cardCol .card-title {
    margin-bottom: .3rem;
}
.dumpsterBadge {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
}
</style>