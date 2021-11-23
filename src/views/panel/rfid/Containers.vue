<template>
    <div>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col lg="4">
                                <strong>{{ filteredStatus == 'collected' ? 'Toplanan' : 'Toplanmayan'}}</strong>
                                Konteynerlar - {{ $moment(currentDate).format('Do MMMM dddd') }}
                            </b-col>
                            <b-col lg="8">
                                <b-row class="filterCards">
                                    <b-col lg="5">
                                        <b-form-datepicker
                                        id="datepicker"
                                        v-model="currentDate"
                                        :min="new Date()"
                                        :max="new Date()"
                                        />
                                    </b-col>
                                    <b-col lg="7">
                                        <b-row class="match-height">
                                            <b-col md="6" xl="6" class="cardCol">
                                                <b-card 
                                                :bg-variant="filteredStatus == 'notCollected' ? 'danger' : ''" 
                                                :text-variant="filteredStatus == 'notCollected' ? 'white' : ''" 
                                                @click="filteredStatus == 'notCollected' ? (filteredStatus = '') : (filteredStatus = 'notCollected')">
                                                    <b-avatar class="mb-1" variant="light-warning" size="45">
                                                        <feather-icon size="21" icon="AlertTriangleIcon"/>
                                                    </b-avatar>
                                                    <b-card-title :class="{'text-white': filteredStatus == 'notCollected'}">{{ getCount('notCollected') }}</b-card-title>
                                                    <b-card-text>Toplanmayan</b-card-text>
                                                </b-card>
                                            </b-col>
                                            <b-col md="6" xl="6" class="cardCol">
                                                <b-card 
                                                :bg-variant="filteredStatus == 'collected' ? 'success' : ''" 
                                                :text-variant="filteredStatus == 'collected' ? 'white' : ''" 
                                                @click="filteredStatus == 'collected' ? (filteredStatus = '') : (filteredStatus = 'collected')">
                                                    <b-avatar class="mb-1" variant="light-primary" size="45">
                                                        <feather-icon size="21" icon="CheckIcon"/>
                                                    </b-avatar>
                                                    <b-card-title :class="{'text-white': filteredStatus == 'collected'}">{{ getCount('collected') }}</b-card-title>
                                                    <b-card-text>Toplanan</b-card-text>
                                                </b-card>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col lg="4">
                <container-list @showDetails="showDetailsOnMap" :filteredStatus="filteredStatus" :devices="filteredContainers"/>
            </b-col>
            <b-col lg="8">
                <container-map :show="showOnMap" :filteredStatus="filteredStatus" :devices="filteredContainers"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {BRow, BCol, BCard, BCardBody, BFormDatepicker, BButtonGroup, BButton, BAvatar, BBadge, BCardText, BCardTitle} from 'bootstrap-vue';
import ContainerList from '@/components/panel/devices/containers/ContainerList.vue';
import ContainerMap from '@/components/panel/devices/containers/ContainerMap.vue';
import rfTagsData from '@/data/rfTags.data';

import Enums from '@/config/system.enums';

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BFormDatepicker,
        BButtonGroup, 
        BButton,
        BAvatar, 
        BBadge, 
        BCardText, 
        BCardTitle,
        ContainerList,
        ContainerMap
    },

    data(){
        return {
            currentDate: new Date().toISOString(),
            showOnMap: 0,
            filteredStatus: 'collected'
        }
    },

    computed: {
        filteredContainers: function(){
            let tags = this.$store.getters['panel/getTags'];
            let status = ''
            switch(this.filteredStatus){
                case 'collected':
                    status = Enums.CONTAINER_FULLNESS_STATU_EMPTY;
                    break;
                case 'notCollected':
                    status = Enums.CONTAINER_FULLNESS_STATU_FULL;
                    break;
            }
            return Object.values(tags).filter(tag => tag.ContainerStatu == status);
        }
    },

    watch: {
        'currentDate': function(newVal, oldVal){
            let date = new Date(newVal);
            console.log('date changing to: ', date.toISOString())
        }
    },

    created(){
        if (this.$route.params.status){
            this.filteredStatus = this.$route.params.status;
        }
    },

    methods: {
        showDetailsOnMap(tagId){
            this.showOnMap = tagId;
        },


        getCount(type){
            //let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'tag');
            let tags = this.$store.getters['panel/getTags'];
            let collected = Object.values(tags).filter(tag => tag.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY).length;
            let notCollected = Object.values(tags).filter(tag => tag.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_FULL).length;
            if (type == 'collected'){
                return collected;
            }
            else if (type == 'notCollected'){
                return notCollected;
            }
        }
    }
}
</script>

<style scoped>
.dropdown-menu.show {
    z-index: 999;
}
.filterCards .card-body {
    text-align: center;
}
.cardCol {
    cursor: pointer;
}
</style>