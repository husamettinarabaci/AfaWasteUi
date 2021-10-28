<template>
    <div>
        <b-row>
            <b-col lg="12" cols="12">
                <b-card no-body class="card-statistics">
                    <b-card-header>
                    <b-card-title>Genel Bilgiler</b-card-title>
                    </b-card-header>
                    <b-card-body class="statistics-body">
                    <b-row>
                        <b-col
                        v-for="item in statisticsItems"
                        :key="item.icon"
                        md="3"
                        sm="6"
                        class="mb-2 mb-md-0"
                        :class="item.customClass"
                        >
                        <b-media no-body>
                            <b-media-aside

                            class="mr-2"
                            >
                            <b-avatar
                                size="48"
                                :variant="item.color"
                            >
                                <feather-icon
                                size="24"
                                :icon="item.icon"
                                />
                            </b-avatar>
                            </b-media-aside>
                            <b-media-body class="my-auto">
                            <h4 class="font-weight-bolder mb-0">
                                {{ item.title }}
                            </h4>
                            <b-card-text class="font-small-3 mb-0">
                                {{ item.subtitle }}
                            </b-card-text>
                            </b-media-body>
                        </b-media>
                        </b-col>
                    </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col lg="4">
                <b-card title="Günlük Konteyner Durumu">
                    <!-- chart -->
                    <doughnut
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
                        <span class="font-weight-bold ml-75 mr-25">{{ stock.device }}</span>
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
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody } from 'bootstrap-vue'
import Doughnut from '@/views/charts/Doughnut.vue';
import { $themeColors } from '@themeConfig'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    Doughnut
  },

  data() {
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
      statisticsItems: [
        {
          icon: 'TruckIcon',
          color: 'light-primary',
          title: '20',
          subtitle: 'Toplam Kamyon Sayısı',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'UserIcon',
          color: 'light-info',
          title: '167',
          subtitle: 'Toplam Konteyner Sayısı',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'BoxIcon',
          color: 'light-danger',
          title: '10',
          subtitle: 'Uygulanan Mahalle Sayısı',
          customClass: 'mb-2 mb-sm-0',
        },
        {
          icon: 'DollarSignIcon',
          color: 'light-success',
          title: '30',
          subtitle: '30 Günlük Toplama',
          customClass: '',
        },
      ],
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
          device: 'Toplanan', symbol: 'MonitorIcon', color: 'text-success', percentage: 80, upDown: 2,
        },
        {
          device: 'Toplanmayan', symbol: 'TabletIcon', color: 'text-danger', percentage: 10, upDown: 8,
        },
      ],
    }
  },
}
</script>

<style>

</style>