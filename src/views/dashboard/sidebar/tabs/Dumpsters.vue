<template>
    <div>
        <vue-apex-charts
        type="donut"
        height="300"
        :options="chartOptions"
        :series="series"
        />
        <b-list-group class="dumpstersList">
            <div v-if="dumpsters.length">
                <transition-group name="fade" tag="div">
                    <b-list-group-item class="d-flex cursor-pointer" v-for="(dumpster, id) in dumpsters" :key="id" @click="getDetails(dumpster)">
                        <span class="mr-1">
                            <feather-icon
                            :icon="dumpster.icon"
                            size="16"
                            />
                        </span>
                        <span>{{ dumpster.data.container_no }}</span>
                    </b-list-group-item>
                </transition-group>
            </div>
            <transition v-else name="fade">
                <b-list-group-item class="d-flex">
                    <span class="mr-1">
                        <feather-icon
                        icon="AlertOctagonIcon"
                        size="16"
                        />
                    </span>
                    <span>Sonuç bulunamadı!</span>
                </b-list-group-item>
            </transition>
        </b-list-group>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import {BListGroup, BListGroupItem} from 'bootstrap-vue'

export default {
    components: {
        VueApexCharts,
        BListGroup,
        BListGroupItem
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
    },

    computed: {
        dumpsters: function(){
            return this.$store.state.dashboard.markers.filter(marker => marker.type == 'rfTag')
        }
    },

    methods: {
        getDetails(dumpster){
            dumpster.marker.fireEvent('click');
        }
    }
}
</script>

<style scoped>
    .dumpstersList {
        padding: 20px 0;
    }
</style>