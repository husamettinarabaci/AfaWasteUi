<template>
    <b-card no-body>
        <b-card-header>
            <b-card-title>
                Son Toplanma Videosu
            </b-card-title>
        </b-card-header>
        <b-card-body>
            <video controls autoplay>
                <source :src="container.video_url" type="video/mp4" autoplay loop>
                secure connection could not be established
            </video>
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardBody } from 'bootstrap-vue';

export default {
    props: ['container'],
    
    components: {
        BCard,
        BCardHeader, 
        BCardTitle, 
        BCardBody
    }
}
</script>

<style>
video {
    width: 100%;
    height: 100%;
}
</style>