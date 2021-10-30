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
        v-for="(stock,index) in stockData"
        :key="stock.device"
        :class="index < stockData.length-1 ? 'mb-1':''"
        class="d-flex justify-content-between"
        >
        <div class="d-flex align-items-center">
            <feather-icon
            :icon="stock.symbol"
            size="16"
            :class="stock.color"
            />
            <span class="font-weight-bold ml-75 mr-25 cursor-pointer" @click="$router.push({name: 'containers', params: {status: stock.status}})">{{ stock.device }}</span>
            <span>- {{ stock.percentage }}%</span>
        </div>
        <div>
            <span>{{ stock.upDown }}%</span>
            <feather-icon
            :icon="stock.upDown > 0 ? 'ArrowUpIcon':'ArrowDownIcon'"
            :class="stock.upDown > 0 ? 'text-success':'text-danger'"
            />
        </div>
        </div>
        <!--/ stocks -->
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardText, BCardBody } from 'bootstrap-vue'
import DoughnutChart from '@/components/charts/Doughnut.vue';
import { $themeColors } from '@themeConfig'

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
                            const label = data.datasets[0].labels[tooltipItem.index] || ''
                            const value = data.datasets[0].data[tooltipItem.index]
                            const output = ` ${label} : ${value} %`
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
                        labels: ['Toplanan', 'Toplanmayan'],
                        data: [10, 80],
                        backgroundColor: [$themeColors.success, $themeColors.danger],
                        borderWidth: 0,
                        pointStyle: 'rectRounded',
                        },
                    ],
                },
            },
            stockData: [
                {
                    device: 'Toplanan', 
                    symbol: 'MonitorIcon', 
                    color: 'text-success', 
                    percentage: 80, 
                    upDown: 2,
                    status: 'collected',
                },
                {
                    device: 'Toplanmayan', 
                    symbol: 'TabletIcon', 
                    color: 'text-danger', 
                    percentage: 10, 
                    upDown: 8,
                    status: 'notCollected',
                },
            ],
        }
    }

}
</script>

<style>

</style>