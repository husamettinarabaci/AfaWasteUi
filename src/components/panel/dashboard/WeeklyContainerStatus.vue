<template>
    <b-card no-body>
        <b-card-header>
            <div>
                <b-card-title class="mb-1">
                Statistics
                </b-card-title>
            </div>
        </b-card-header>

        <!-- chart -->
        <b-card-body>
            <line-chart
                :height="400"
                :data="chart.data"
                :options="chart.options"
                :plugins="plugins"
            />
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardText, BCardBody } from 'bootstrap-vue'
import LineChart from '@/components/charts/Line.vue';
import { $themeColors } from '@themeConfig'

export default {
    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BCardBody,
        LineChart
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
                    backgroundColor: false,
                    hover: {
                        mode: 'label',
                    },
                    tooltips: {
                        // Updated default tooltip UI
                        shadowOffsetX: 1,
                        shadowOffsetY: 1,
                        shadowBlur: 8,
                        shadowColor: chartColors.tooltipShadow,
                        backgroundColor: $themeColors.white,
                        titleFontColor: $themeColors.black,
                        bodyFontColor: $themeColors.black,
                    },
                    layout: {
                        padding: {
                        top: -15,
                        bottom: -25,
                        left: -15,
                        },
                    },
                    scales: {
                        xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                            display: true,
                            },
                            gridLines: {
                            display: true,
                            color: chartColors.grid_line_color,
                            zeroLineColor: chartColors.grid_line_color,
                            },
                            ticks: {
                            fontColor: chartColors.labelColor,
                            },
                        },
                        ],
                        yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                            display: true,
                            },
                            ticks: {
                            stepSize: 100,
                            min: 0,
                            max: 400,
                            fontColor: chartColors.labelColor,
                            },
                            gridLines: {
                            display: true,
                            color: chartColors.grid_line_color,
                            zeroLineColor: chartColors.grid_line_color,
                            },
                        },
                        ],
                    },
                    legend: {
                        position: 'top',
                        align: 'start',
                        labels: {
                        usePointStyle: true,
                        padding: 25,
                        boxWidth: 9,
                        },
                    },
                },
                data: {
                    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
                    datasets: [
                        {
                        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
                        label: 'Europe',
                        borderColor: chartColors.lineChartDanger,
                        lineTension: 0.5,
                        pointStyle: 'circle',
                        backgroundColor: chartColors.lineChartDanger,
                        fill: false,
                        pointRadius: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 5,
                        pointBorderColor: 'transparent',
                        pointHoverBorderColor: $themeColors.white,
                        pointHoverBackgroundColor: chartColors.lineChartDanger,
                        pointShadowOffsetX: 1,
                        pointShadowOffsetY: 1,
                        pointShadowBlur: 5,
                        pointShadowColor: chartColors.tooltipShadow,
                        },
                        {
                        data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
                        label: 'Asia',
                        borderColor: chartColors.lineChartPrimary,
                        lineTension: 0.5,
                        pointStyle: 'circle',
                        backgroundColor: chartColors.lineChartPrimary,
                        fill: false,
                        pointRadius: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 5,
                        pointBorderColor: 'transparent',
                        pointHoverBorderColor: $themeColors.white,
                        pointHoverBackgroundColor: chartColors.lineChartPrimary,
                        pointShadowOffsetX: 1,
                        pointShadowOffsetY: 1,
                        pointShadowBlur: 5,
                        pointShadowColor: chartColors.tooltipShadow,
                        },
                        {
                        data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
                        label: 'Africa',
                        borderColor: chartColors.warningColorShade,
                        lineTension: 0.5,
                        pointStyle: 'circle',
                        backgroundColor: chartColors.warningColorShade,
                        fill: false,
                        pointRadius: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 5,
                        pointBorderColor: 'transparent',
                        pointHoverBorderColor: $themeColors.white,
                        pointHoverBackgroundColor: chartColors.warningColorShade,
                        pointShadowOffsetX: 1,
                        pointShadowOffsetY: 1,
                        pointShadowBlur: 5,
                        pointShadowColor: chartColors.tooltipShadow,
                        },
                    ],
                },
            },

            plugins: [
                // to add spacing between legends and chart
                {
                beforeInit(chart) {
                    /* eslint-disable func-names, no-param-reassign */
                    chart.legend.afterFit = function () {
                    this.height += 20
                    }
                    /* eslint-enable */
                },
                },
            ],
        }
    }

}
</script>

<style>

</style>