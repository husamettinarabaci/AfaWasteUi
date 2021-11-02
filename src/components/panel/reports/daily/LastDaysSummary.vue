<template>
    <b-card no-body>
        <b-card-header>
            <b-card-title>Son 7 Günlük Özet</b-card-title>
        </b-card-header>
        <b-card-body>
            <bar-chart
            :height="275"
            :data="chart.data"
            :options="chart.options"
            class="mb-3"/>
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardBody } from 'bootstrap-vue';
import BarChart from '@/components/charts/Bar';
import { $themeColors } from '@themeConfig'

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody,
        BarChart
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
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Chart.js Bar Chart'
                        }
                    }
                },
                data: {
                    labels: ["1", "2", "3", "4", "5", "6", "7"],
                    datasets: [
                        {
                            label: 'Toplanan',
                            data: [10, 17, 23, 12, 9, 5, 11],
                            borderColor: $themeColors.success,
                            backgroundColor: $themeColors.success
                        },
                        {
                            label: 'Toplanmayan',
                            data: [10, 17, 23, 12, 9, 13, 9],
                            borderColor: $themeColors.danger,
                            backgroundColor: $themeColors.danger
                        }
                    ],
                },
            },
        }
    }
}
</script>

<style>

</style>