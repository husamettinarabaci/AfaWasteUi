<template>
    <div class="ultsContent">
        <!-- Stats Card Vertical -->
        <b-row class="match-height">
            <b-col
                v-for="(data,index) in types"
                :key="index"
                md="6"
                xl="3"
                class="cardCol"
            >
                <b-card
                :bg-variant="data.bg"
                text-variant="white"
                @click="filterList(data)"
                >
                <b-card-title class="text-white">
                    {{ data.title }}
                </b-card-title>
                <b-card-text>{{ data.text }}</b-card-text>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="ultsList">
            <b-col xl="12" md="12" class="ultsCol">
                <b-list-group>
                    <div v-if="ults.length">
                        <transition-group name="fade" tag="div">
                            <b-list-group-item class="d-flex cursor-pointer" v-for="(ult, id) in ults" :key="id" @click="getDetails(ult)">
                                <span class="mr-1">
                                    <feather-icon
                                    :icon="ult.icon"
                                    size="16"
                                    />
                                </span>
                                <span>{{ ult.data.ult_id }}</span>
                                <b-progress
                                    :key="computeVariant(ult.data.solidity_ratio)"
                                    animated
                                    :value="ult.data.solidity_ratio"
                                    :variant="computeVariant(ult.data.solidity_ratio)"
                                    :class="'progressBar progress-bar-' + computeVariant(ult.data.solidity_ratio)"
                                />
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
import { BRow, BCol, BCard, BCardText, BCardTitle, BListGroup, BListGroupItem, BProgress } from 'bootstrap-vue'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardText,
        BCardTitle,
        BListGroup,
        BListGroupItem,
        BProgress
    },

    data(){
        return {
            filteredType: '',
            types: [
                { bg: 'success', title: '0% - 25%', text: 'Boş', type: 'empty'},
                { bg: 'info', title: '25% - 50%', text: 'Az Dolu', type: 'little'},
                { bg: 'warning', title: '50% - 75%', text: 'Orta Dolu', type: 'medium'},
                { bg: 'danger', title: '75% - 100%', text: 'Dolu', type: 'full'}
            ],
        }
    },

    computed: {
        ults: function(){
            let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'ult');
            switch(this.filteredType){
                case 'empty':
                    return all.filter(ult => {return ult.data.solidity_ratio < 25})
                    break;
                case 'little':
                    return all.filter(ult => {return (ult.data.solidity_ratio >= 25) && (ult.data.solidity_ratio < 50)})
                    break;
                case 'medium':
                    return all.filter(ult => {return (ult.data.solidity_ratio >= 50) && (ult.data.solidity_ratio < 75)})
                    break;
                case 'full':
                    return all.filter(ult => {return (ult.data.solidity_ratio >= 75) && (ult.data.solidity_ratio < 100)})
                    break;
                default:
                    return all;
            }
            return all;
        }
    },

    methods: {
        computeVariant(percent){
            if (percent < 25) return 'success';
            else if ((percent >= 25) && (percent < 50)) return 'info';
            else if ((percent >= 50) && (percent < 75)) return 'warning';
            else if ((percent >= 75) && (percent <= 100)) return 'danger';
        },

        filterList(ult){
            //console.log('filtering: ', type)
            if (this.filteredType == ult.type){
                this.filteredType = '';
            }
            else {
                this.filteredType = ult.type
            }
        },

        getDetails(ult){
            ult.marker.fireEvent('click');
        }
    }
}
</script>

<style scoped>
    .ultsContent {
        padding: 20px 0;
    }
    .cardCol {
        padding: 0 5px;
    }
    .cardCol .card-body {
        padding: .5rem;
        text-align: center;
        cursor: pointer;
    }
    .cardCol .card-title {
        font-size: 1rem;
        margin-bottom: .35rem;
    }
    .ultsList {
        padding: 0 5px;
    }
    .ultsList .ultsCol {
        padding: 0;
    }
    .progressBar {
        width: 100px;
        height: 8px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
    }
</style>