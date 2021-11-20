<template>
    <div @click="hideSidebar">
        <h4 class="card-title">Günlük Toplanma Oranı</h4>
        <div class="pie-text text-center">
            <h2 class="font-weight-bolder">
                {{ tagsCount }}
            </h2>
            <span class="font-weight-bold">Toplam</span>
        </div>
        <app-echart-doughnut :series="series" />
    </div>
</template>

<script>
import AppEchartDoughnut from '@core/components/charts/echart/AppEchartDoughnut.vue'
import Enums from '@/config/system.enums';

export default {
    components: {
        AppEchartDoughnut,
    },

    data(){
        return {
            
        }
    },

    computed: {
        tagsCount: function(){
            let all = this.$store.getters['dashboard/getSpecificMarkers']('tags');
            return Object.keys(all).length;
        },

        series: function(){
            let obj = {
                name: 'Toplanma Oranları',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                color: [
                    '#28c76f',
                    '#ea5455'
                ],

                label: {
                    show: false,
                },
                labelLine: {
                    show: true,
                },
                data: []
            }
            //let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'tag');
            let all = this.$store.getters['dashboard/getTagMarkers'];
            obj.data.push({value : Object.keys(all.collected).length, name: 'Toplandı'})
            obj.data.push({value : Object.keys(all.notCollected).length, name: 'Toplanmadı'})
            return [obj];
        }
    },

    methods: {
        hideSidebar(){
            this.$store.state.dashboard.sidebar.object.close()
        }
    }
}
</script>

<style lang="scss">
.card-body{
  position: relative;
  .pie-text{
    width: 105px;
    position:absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 50%;
    bottom: 0;
  }
  }
</style>