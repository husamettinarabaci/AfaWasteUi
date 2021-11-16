<template>
    <div class="row">
        <app-timeline>
            <app-timeline-item v-for="(item, id) in items" :key="id" :variant="item.status.variant">
                <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                    <h6 :class="{'bold': id == 0}">{{ item.no }}</h6>
                    <!--
                    <small :class="{'bold': id == 0}" class="text-muted">{{ $moment(item.date).fromNow() }}</small>
                    -->
                </div>
                <p :class="{'bold': id == 0}" class="address">{{ item.status.status }}</p>
            </app-timeline-item>
        </app-timeline>
    </div>
</template>

<script>
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import Enums from '@/config/system.enums';

export default {
    components: {
        AppTimeline,
        AppTimelineItem,
    },

    data(){
        return {
            fields: [
                {key: 'date', label: 'Tarih'},
                {key: 'no', label: 'Numara'},
                {key: 'address', label: 'Adres'},
                {key: 'status', label: 'Durum'}
            ],
            items: [],
        }
    },

    computed: {
        socket: function(){
            return this.$store.getters['socket/getSocket'];
        }
    },

    created(){
        let self = this;
        this.socket.addEventListener('message', function(event){
            let data = JSON.parse(event.data);
            if (data.Result === Enums.DATATYPE_TAG_STATU){
                let value = JSON.parse(data.Retval);
                self.items.unshift({
                    date: value.CheckTime,
                    no: value.TagId,
                    status: {
                        status: value.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'Toplandı' : 'Toplanmadı', 
                        variant: value.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'success' : 'danger'
                    }
                })
            }
        })
    }
}
</script>

<style scoped>
 .messagesCard {
    width: 100%
 }
 ul.app-timeline {
    width: 100%;
    padding: 20px 5px;
 }
 li.timeline-item.timeline-variant-success, li.timeline-item.timeline-variant-danger {
    padding-bottom: 1.2rem;
    padding-left: 1.5rem;
 }
 .address {
    margin-top: -5px;
    margin-bottom: 0;
 }
 .bold {
    font-weight: bold;
 }
 h6 {
    margin-top: -3px;
 }
</style>