<template>
    <div class="videoCard">
        <video class="tagVideo" controls autoplay>
            <source  src="https://media.giphy.com/media/LcGFscTzOn9xm/giphy.mp4" type="video/mp4" autoplay loop>
            secure connection could not be established
        </video>
        <div style="height:24px">
          <b-badge variant="light-primary">
            Primary
          </b-badge>
        </div>
        <strong>Son Okunma Tarihi</strong>
        <hr/>
        <div class="hour">${formattedDate.split(' ')[1]}</div>
        <div class="date">${formattedDate.split(' ')[0]}</div>
    </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'

export default {
    components: {
        BBadge,
    },
}
</script>
