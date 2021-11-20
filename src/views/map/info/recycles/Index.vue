<template>
    <div @click="hideSidebar">
        <h4 class="card-title">Günlük Geri Dönüşüm Oranı</h4>
        <div class="pie-text text-center">
            <h2 class="font-weight-bolder">
                {{ getTotalCount() }}
            </h2>
            <span class="font-weight-bold">Toplam</span>
        </div>
        <app-echart-doughnut :series="series" />
    </div>
</template>

<script>
import AppEchartDoughnut from '@core/components/charts/echart/AppEchartDoughnut.vue'

export default {
    components: {
        AppEchartDoughnut,
    },

    data(){
        return {
            
        }
    },

    computed: {
        series: function(){
            let obj = {
                name: 'Toplam Geri Dönüşüm Sayısı',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                color: [
                    '#28c76f',
                    '#ff9f43',
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
            //let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'recycle');
            let all = this.$store.getters['dashboard/getSpecificMarkers']('recy');
            var plasticCount = 0, glassCount = 0, metalCount = 0; 
            Object.keys(all).forEach(id => {
                let recycle = all[id];
                plasticCount += parseInt(recycle.data.plastic_count);
                glassCount += parseInt(recycle.data.glass_count);
                metalCount += parseInt(recycle.data.metal_count);
            })
            obj.data.push({value: plasticCount, name: 'Plastik'})
            obj.data.push({value: glassCount, name: 'Cam'})
            obj.data.push({value: metalCount, name: 'Metal'})
            return [obj];
        }
    },

    methods: {
        hideSidebar(){
            this.$store.state.dashboard.sidebar.object.close()
        },

        getTotalCount(){
            //let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'recycle');
            let all = this.$store.getters['dashboard/getSpecificMarkers']('recy');
            var count = 0;
            Object.keys(all).forEach(id => {
                let recycle = all[id];
                count += 
                parseInt(recycle.data.plastic_count) 
                + parseInt(recycle.data.glass_count) 
                + parseInt(recycle.data.metal_count);
            })
            return count;
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