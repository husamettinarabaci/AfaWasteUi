<template>
    <div @click="hideSidebar">
        <div class="pie-text text-center">
      <h2 class="font-weight-bolder">
        {{ $store.state.dashboard.markers.filter(marker => marker.type == 'ult').length }}
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
            let all = this.$store.state.dashboard.markers.filter(marker => marker.type == 'ult');
            obj.data.push({value: all.filter(ult => (ult.data.filled_rate < 25)).length, name: 'Boş'})
            obj.data.push({value: all.filter(ult => ((ult.data.filled_rate >= 25) && (ult.data.filled_rate < 50))).length, name: 'Az Dolu'})
            obj.data.push({value: all.filter(ult => ((ult.data.filled_rate >= 50) && (ult.data.filled_rate < 75))).length, name: 'Orta Dolu'})
            obj.data.push({value: all.filter(ult => ((ult.data.filled_rate >= 75) && (ult.data.filled_rate <= 100))).length, name: 'Dolu'})
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
    top: 44%;
    bottom: 0;
  }
  }
</style>