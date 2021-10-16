<template>
    <div>
        <table>
            <tr>
                <td>Durum</td>
                <td>Aktif / Park Halinde</td>
            </tr>
            <tr>
                <td>Günlük Mesafe</td>
                <td>38 KM</td>
            </tr>
            <tr>
                <td>Günlük Toplanılan Konteyner Sayısı</td>
                <td>284</td>
            </tr>
            <tr>
                <td>Verimlilik Oranı</td>
                <td>{{ details.plate_no }}</td>
            </tr>
            <tr>
                <td>Mesai Kalan Süresi</td>
                <td>7 saat</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },

    computed: {
        details: function(){
            return this.$store.state.dashboard.info.data;
        }
    }
}
</script>

<style>

</style>