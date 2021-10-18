<template>
    <div class="recyclesContent">
        <b-row class="match-height">
            <b-col md="4" xl="4" class="cardCol">
                <b-card 
                :bg-variant="filteredType == 'plastic' ? 'warning' : ''" 
                :text-variant="filteredType == 'plastic' ? 'white' : ''" 
                @click="filteredType == 'plastic' ? (filteredType = '') : (filteredType = 'plastic')">
                    <b-avatar class="mb-1" variant="light-primary" size="45">
                        <img :src="filteredType == 'plastic' ? icons.plasticWhite : icons.plastic" alt="">
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == 'plastic'}">{{ getCount('plastic') }}</b-card-title>
                    <b-card-text>Plastik</b-card-text>
                </b-card>
            </b-col>
            <b-col md="4" xl="4" class="cardCol">
                <b-card 
                :bg-variant="filteredType == 'glass' ? 'success' : ''" 
                :text-variant="filteredType == 'glass' ? 'white' : ''" 
                @click="filteredType == 'glass' ? (filteredType = '') : (filteredType = 'glass')">
                    <b-avatar class="mb-1" variant="light-primary" size="45">
                        <img :src="filteredType == 'glass' ? icons.glassWhite : icons.glass" alt="">
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == 'glass'}">{{ getCount('glass') }}</b-card-title>
                    <b-card-text>Cam</b-card-text>
                </b-card>
            </b-col>
            <b-col md="4" xl="4" class="cardCol">
                <b-card 
                :bg-variant="filteredType == 'metal' ? 'info' : ''" 
                :text-variant="filteredType == 'metal' ? 'white' : ''" 
                @click="filteredType == 'metal' ? (filteredType = '') : (filteredType = 'metal')">
                    <b-avatar class="mb-1" variant="light-primary" size="45">
                        <img :src="filteredType == 'metal' ? icons.metalWhite : icons.metal" alt="">
                    </b-avatar>
                    <b-card-title :class="{'text-white': filteredType == 'metal'}">{{ getCount('metal') }}</b-card-title>
                    <b-card-text>Metal</b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="12" md="12" class="recyclesCol">
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
        <b-row>
            <b-col md="12" xl="12" class="cardCol infoCol">
                <b-card bg-variant="success" text-variant="white">
                    <b-avatar class="mb-1 treeIcon" size="45" variant="light-dark">
                        <font-awesome-icon icon="tree"/>
                    </b-avatar>
                    <b-card-title class="text-white">123</b-card-title>
                    <b-card-text>Kurtarılan ağaç sayısı</b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow, BCol, BCard, BAvatar, BCardText, BCardTitle, BListGroup, BListGroupItem } from 'bootstrap-vue'

// Icons
import PlasticIcon from '../../../../assets/images/icon/afatek-icon-12.png';
import GlassIcon from '../../../../assets/images/icon/afatek-icon-10.png';
import MetalIcon from '../../../../assets/images/icon/afatek-icon-11.png';
import PlasticIconWhite from '../../../../assets/images/icon/afatek-icon-03.png';
import GlassIconWhite from '../../../../assets/images/icon/afatek-icon-01.png';
import MetalIconWhite from '../../../../assets/images/icon/afatek-icon-02.png';

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
            icons: {
                plastic: PlasticIcon,
                plasticWhite: PlasticIconWhite,
                glass: GlassIcon,
                glassWhite: GlassIconWhite,
                metal: MetalIcon,
                metalWhite: MetalIconWhite
            },
            filteredType: ''
        }
    },

    computed: {
        recycles: function(){
            let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'recycle');
            if (this.filteredType.length){
                return markers.filter(marker => parseInt(marker.data[`${this.filteredType}_count`]) > 0);
            }
            return markers;
        }
    },

    methods: {
        getDetails(ult){
            ult.marker.enablePermanentHighlight();
            ult.marker.fireEvent('click');
            setTimeout(function(){
                ult.marker.disablePermanentHighlight();
            }, 5000)
        },

        getCount(type){
            let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'recycle');
            return all.filter(marker => parseInt(marker.data[`${type}_count`]) > 0).length;
            //var count = 0;
            //all.forEach(recycle => {
            //    switch(type){
            //        case 'plastic':
            //            count += parseInt(recycle.data.plastic_count);
            //            break;
            //        case 'glass':
            //            count += parseInt(recycle.data.glass_count);
            //            break;
            //        case 'metal':
            //            count += parseInt(recycle.data.metal_count);
            //            break;
            //    }
            //});
            //return count;
        }
    }
}
</script>

<style scoped>
.recyclesContent {
    padding: 20px 0;
}
.cardCol, .recyclesCol {
    padding: 0 5px;
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
.infoCol {
    margin-top: 15px;
}
.treeIcon {
    color: #fff;
}
.b-avatar-custom img {
  width: 40px;
  height: 40px;
}

</style>