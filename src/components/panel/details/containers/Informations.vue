<template>
    <div>
        <b-row>
            <b-col lg="4">
                <!--
                <b-card class="text-center">
                    <b-avatar
                    class="mb-1"
                    variant="light-success"
                    size="45"
                    >
                        <feather-icon
                            size="21"
                            icon="EyeIcon"
                        />
                    </b-avatar>
                    <div class="truncate">
                        <h2 class="mb-25 font-weight-bolder">
                            Konteyner No
                        </h2>
                        <span>{{ container.container_no }}</span>
                    </div>
                </b-card>
                -->
                <b-card no-body>
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col lg="12">
                                <b-media no-body>
                                    <b-media-body class="my-auto">
                                        <h6 class="font-weight-bolder mb-0">
                                            Konteyner No
                                        </h6>
                                        <b-card-text class="font-small-3 mb-0">
                                            {{ container.container_no }}
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="4">
                <b-card no-body>
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col lg="12">
                                <b-media no-body>
                                    <b-media-body class="my-auto">
                                        <h6 class="font-weight-bolder mb-0">
                                            Toplama Sıklığı
                                        </h6>
                                        <b-card-text class="font-small-3 mb-0">
                                            {{ container.collection_frequency }}
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="4">
                <b-card no-body>
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col lg="12">
                                <b-media no-body>
                                    <b-media-body class="my-auto">
                                        <h6 class="font-weight-bolder mb-0">
                                            Son Toplandığı Gün
                                        </h6>
                                        <b-card-text class="font-small-3 mb-0">
                                            {{ $moment(sortedHistory[0].collected_at).fromNow() }} ( {{ $moment(sortedHistory[0].collected_at).format('Do MMMM - HH:mm') }} )
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="4">
                <b-card no-body>
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col lg="12">
                                <b-media no-body>
                                    <b-media-body class="my-auto">
                                        <h6 class="font-weight-bolder mb-0">
                                            En Uzun Toplanmadığı Süre
                                        </h6>
                                        <b-card-text class="font-small-3 mb-0">
                                            qdqwqw
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="4">
                <b-card no-body>
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col lg="12">
                                <b-media no-body>
                                    <b-media-body class="my-auto">
                                        <h6 class="font-weight-bolder mb-0">
                                            En Son Toplandığı Adres
                                        </h6>
                                        <b-card-text class="font-small-3 mb-0">
                                            {{ sortedHistory[0].location }}
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="4">
                <b-card no-body>
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col lg="12">
                                <b-media no-body>
                                    <b-media-body class="my-auto">
                                        <h6 class="font-weight-bolder mb-0">
                                            En Uzun Toplanmadığı Süre
                                        </h6>
                                        <b-card-text class="font-small-3 mb-0">
                                            qdwqdwqwd
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BRow, BCol, BCard, BCardBody, BMedia, BMediaBody, BAvatar, BCardText } from 'bootstrap-vue';

export default {
    props: ['container'],

    components: {
        BRow,
        BCol,
        BCard,
        BCardBody, 
        BMedia, 
        BMediaBody, 
        BAvatar,
        BCardText
    },

    data(){
        return {
        }
    },

    computed: {
        sortedHistory: function(){
            return this.container.history.sort((a,b) => {
                return new Date(b.collected_at) - new Date(a.collected_at);
            })
        }
    }
}
</script>

<style>

</style>