<template>
    <div class="row">
        <app-timeline>
            <app-timeline-item v-for="(item, id) in items" :key="id" :variant="item.status.variant">
                <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                    <h6 :class="{'bold': id == 0}">{{ item.no }}</h6>
                    <small :class="{'bold': id == 0}" class="text-muted">{{ $moment(item.date).fromNow() }}</small>
                </div>
                <p :class="{'bold': id == 0}" class="address">{{ item.address }}</p>
            </app-timeline-item>
        </app-timeline>
    </div>
</template>

<script>
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

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
            items: [
                {
                    date: '2021-10-11T18:24:24.058Z',
                    no: 'NO1232186',
                    address: 'Test Mh. Örnek Cd. No: 1',
                    status: {status: 'Toplandı', variant: 'success'}
                },
                {
                    date: '2021-10-11T18:10:24.058Z',
                    no: 'NO1232185',
                    address: 'Örnek Mh. Test Cd. No: 2',
                    status: {status: 'Toplanmadı', variant: 'danger'}
                },
                {
                    date: '2021-10-11T15:24:24.058Z',
                    no: 'NO1232184',
                    address: 'Test Mh. Örnek Cd. No: 1',
                    status: {status: 'Toplandı', variant: 'success'}
                },
                {
                    date: '2021-10-10T21:24:24.058Z',
                    no: 'NO1232183',
                    address: 'Test Mh. Örnek Cd. No: 1',
                    status: {status: 'Toplandı', variant: 'success'}
                },
                {
                    date: '2021-10-10T18:24:24.058Z',
                    no: 'NO1232182',
                    address: 'Test Mh. Örnek Cd. No: 1',
                    status: {status: 'Toplandı', variant: 'success'}
                },
            ],
        }
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