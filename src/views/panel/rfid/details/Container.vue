<template>
    <div>
        <b-row class="match-height">
            <b-col lg="8">
                <container-information :container="container"/>
            </b-col>
            <b-col lg="4">
                <container-video :container="container"/>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col lg="6">
                <container-collect-history :container="container"/>
            </b-col>
            <b-col lg="6">
                <container-history-map :container="container"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow,BCol } from 'bootstrap-vue';
import rfTagData from '@/data/rfTagDetails.data';
import ContainerInformation from '@/components/panel/details/containers/Informations';
import ContainerVideo from '@/components/panel/details/containers/Video';
import ContainerCollectHistory from '@/components/panel/details/containers/CollectHistory';
import ContainerHistoryMap from '@/components/panel/details/containers/HistoryMap';

export default {
    components: {
        BRow,
        BCol,
        ContainerInformation,
        ContainerVideo,
        ContainerCollectHistory,
        ContainerHistoryMap
    },

    data(){
        return {
            container: {}
        }
    },

    created(){
        this.container = rfTagData;
        //if (this.$route.params.query){
        //    this.performSearch(this.$route.params.query);
        //}
        //else {
        //    this.$router.push({name: 'dashboard'})
        //}
    },

    methods: {
        performSearch(query){
            let filtered = rfTagData.tags.filter(tag => tag.container_no == query);
            if (filtered.length){
                this.container = filtered[0];
            }
            else {
                console.log('Aramada bir hata ile karşılaşıldı!')
            }
        }
    }
}
</script>

<style>

</style>