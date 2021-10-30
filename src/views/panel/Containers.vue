<template>
    <div>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-row>
                            <b-col lg="6">
                                <strong>{{ filteredStatus == 'collected' ? 'Toplanan' : 'Toplanmayan'}}</strong>
                                Konteynerlar - {{ $moment(currentDate).format('Do MMMM dddd') }}
                            </b-col>
                            <b-col lg="6">
                                <b-row>
                                    <b-col lg="6">
                                        <b-form-datepicker
                                        id="datepicker"
                                        v-model="currentDate"
                                        />
                                    </b-col>
                                    <b-col lg="6">
                                        <b-button-group>
                                            <b-button @click="filteredStatus = 'collected'" :variant="filteredStatus == 'collected' ? 'success' : 'outline-success'">
                                            Toplanan
                                            </b-button>
                                            <b-button @click="filteredStatus = 'notCollected'" :variant="filteredStatus == 'notCollected' ? 'danger' : 'outline-danger'">
                                            Toplanmayan
                                            </b-button>
                                        </b-button-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col lg="6">
                <container-list :devices="filteredContainers"/>
            </b-col>
            <b-col lg="6">
                <container-map :devices="filteredContainers"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {BRow, BCol, BCard, BCardBody, BFormDatepicker, BButtonGroup, BButton} from 'bootstrap-vue';
import ContainerList from '@/components/panel/devices/containers/ContainerList.vue';
import ContainerMap from '@/components/panel/devices/containers/ContainerMap.vue';
import rfTagsData from '@/data/rfTags.data';

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardBody,
        BFormDatepicker,
        BButtonGroup, 
        BButton,
        ContainerList,
        ContainerMap
    },

    data(){
        return {
            currentDate: new Date().toISOString(),
            filteredStatus: 'collected'
        }
    },

    computed: {
        filteredContainers: function(){
            return rfTagsData.tags.filter(tag => tag.status == this.filteredStatus);
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
    }
}
</script>

<style scoped>
.dropdown-menu.show {
    z-index: 999;
}
</style>