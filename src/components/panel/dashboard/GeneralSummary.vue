<template>
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
</template>

<script>
import {BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody} from 'bootstrap-vue';

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
    },

    data(){
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
        }
    }
}
</script>

<style>

</style>