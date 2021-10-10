<template>
    <div>
        <vue-apex-charts
        type="donut"
        height="300"
        :options="chartOptions"
        :series="series"
        />
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        VueApexCharts,
    },

    data(){
        return {
            series: [85, 16],
            chartOptions: {
                chart: {
                    type: 'donut',
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    fontSize: '14px',
                    fontFamily: 'Montserrat',
                },
                colors: [
                    '#2BC971',
                    '#EA5455'
                ],
                dataLabels: {
                    enabled: true,
                    formatter(val) {
                        // eslint-disable-next-line radix
                        return `${parseInt(val)}%`
                    },
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                name: {
                                    fontSize: '2rem',
                                    fontFamily: 'Montserrat',
                                },
                                value: {
                                    fontSize: '1rem',
                                    fontFamily: 'Montserrat',
                                    formatter(val) {
                                        return `${parseInt(val)}`
                                    },
                                },
                                total: {
                                    show: true,
                                    fontSize: '1.5rem',
                                    label: 'Toplam',
                                    //formatter(value) {
                                    //    return value
                                    //},
                                },
                            },
                        },
                    },
                },
                labels: ['Toplanan', 'Toplanmayan'],
                responsive: [
                    {
                        breakpoint: 992,
                        options: {
                            chart: {
                                height: 380,
                            },
                            legend: {
                                position: 'bottom',
                            },
                        },
                    },
                    {
                        breakpoint: 576,
                        options: {
                            chart: {
                                height: 320,
                            },
                            plotOptions: {
                                pie: {
                                    donut: {
                                        labels: {
                                            show: true,
                                            name: {
                                            fontSize: '1.5rem',
                                            },
                                            value: {
                                            fontSize: '1rem',
                                            },
                                            total: {
                                            fontSize: '1.5rem',
                                            },
                                        },
                                    },
                                },
                            },
                            legend: {
                                show: true,
                            },
                        },
                    },
                ],
            },
        }
    }
}
</script>

<style>

</style>