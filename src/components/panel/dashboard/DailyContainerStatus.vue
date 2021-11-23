<template>
    <b-card title="Günlük Konteyner Durumu">
        <!-- chart -->
        <doughnut-chart
        :height="275"
        :data="chart.data"
        :options="chart.options"
        class="mb-3"
        />
        <!--/ chart -->

        <!-- stocks -->
        <div
        v-for="(status,id) in statusData"
        :key="id"
        :class="id < statusData.length-1 ? 'mb-1':''"
        class="d-flex justify-content-between"
        >
        <div class="d-flex align-items-center">
            <feather-icon
            icon="TruckIcon"
            size="16"
            :class="status.color"
            />
            <span class="font-weight-bold ml-75 mr-25 cursor-pointer" @click="$router.push({name: 'containers', params: {status: status.title}})">{{ status.title }}</span>
        </div>
        <div>
            <span>{{ status.percentage }}%</span>
        </div>
        </div>
        <!--/ stocks -->
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardText, BCardBody } from 'bootstrap-vue'
import DoughnutChart from '@/components/charts/Doughnut.vue';
import { $themeColors } from '@themeConfig'
import Enums from '@/config/system.enums';

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BCardBody,
        DoughnutChart
    },

    data(){
        const chartColors = {
            primaryColorShade: '#836AF9',
            yellowColor: '#ffe800',
            successColorShade: '#28dac6',
            warningColorShade: '#ffe802',
            warningLightColor: '#FDAC34',
            infoColorShade: '#299AFF',
            greyColor: '#4F5D70',
            blueColor: '#2c9aff',
            blueLightColor: '#84D0FF',
            greyLightColor: '#EDF1F4',
            tooltipShadow: 'rgba(0, 0, 0, 0.25)',
            lineChartPrimary: '#666ee8',
            lineChartDanger: '#ff4961',
            labelColor: '#6e6b7b',
            grid_line_color: 'rgba(200, 200, 200, 0.2)',
        }
        return {
            chart: {
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    responsiveAnimationDuration: 500,
                    cutoutPercentage: 60,
                    legend: { display: false },
                    tooltips: {
                        callbacks: {
                        label(tooltipItem, data) {
                            const dataset = data.datasets[0];
                            const label = dataset.labels[tooltipItem.index] || ''
                            const value = dataset.data[tooltipItem.index]
                            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            //get the current items value
                            var currentValue = dataset.data[tooltipItem.index];
                            //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            const output = ` ${label} : ${percentage} %`
                            return output
                        },
                        },
                        // Updated default tooltip UI
                        shadowOffsetX: 1,
                        shadowOffsetY: 1,
                        shadowBlur: 8,
                        shadowColor: chartColors.tooltipShadow,
                        backgroundColor: $themeColors.light,
                        titleFontColor: $themeColors.dark,
                        bodyFontColor: $themeColors.dark,
                    },
                },
                data: {
                    datasets: [
                        {
                        labels: [],
                        data: [],
                        backgroundColor: [$themeColors.success, $themeColors.danger],
                        borderWidth: 0,
                        pointStyle: 'rectRounded',
                        },
                    ],
                },
            },
            statusData: [
                {
                    title: 'Toplanan',
                    statu: 'collected',
                    color: chartColors.successColorShade,
                    percentage: 0,
                },
                {
                    title: 'Toplanmayan',
                    statu: 'notCollected',
                    color: chartColors.dangerColorShade,
                    percentage: 0,
                },
            ],
        }
    },

    created(){
        let tags = this.$store.getters['panel/getTags'];
        let collected = Object.values(tags).filter(tag => tag.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY).length
        let notCollected = Object.values(tags).filter(tag => tag.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_FULL).length
        this.chart.data.datasets[0].data = [collected, notCollected]
        this.chart.data.datasets[0].labels = ['Toplanan', 'Toplanmayan']
        this.statusData[0].percentage = this.calculatePercentage(collected, Object.values(tags).length)
        this.statusData[1].percentage = this.calculatePercentage(notCollected, Object.values(tags).length)
    },

    methods: {
        calculatePercentage(value, total){
            return Math.floor(((value/total) * 100)+0.5);
        },
    }

}
</script>

<style>

</style>