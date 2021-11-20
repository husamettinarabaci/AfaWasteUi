<template>
    <div @click="hideSidebar">
        <h4 class="card-title">Günlük Doluluk Oranı</h4>
        <div class="pie-text text-center">
            <h2 class="font-weight-bolder">
                {{ ultsCount }}
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
        ultsCount: function(){
            let all = this.$store.getters['dashboard/getSpecificMarkers']('ult');
            return Object.keys(all).length;
        },

        series: function(){
            let obj = {
                name: 'Doluluk Oranları',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                color: [
                    '#28c76f',
                    '#00cfe8',
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
            let ults = this.$store.getters['dashboard/getSpecificMarkers']('ult');
            obj.data.push({value: Object.keys(ults.empty).length, name: 'Boş'})
            obj.data.push({value: Object.keys(ults.little).length, name: 'Az Dolu'})
            obj.data.push({value: Object.keys(ults.medium).length, name: 'Orta Dolu'})
            obj.data.push({value: Object.keys(ults.full).length, name: 'Dolu'})
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