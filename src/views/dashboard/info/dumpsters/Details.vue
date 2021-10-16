<template>
    <div>
        <table>
            <tr>
                <td>Konum</td>
                <td>Detay Konum</td>
            </tr>
            <tr>
                <td>Toplanma Sıklığı</td>
                <td>38 KM</td>
            </tr>
            <tr>
                <td>Uyarı</td>
                <td>2 Gündür toplanmıyor / Yok</td>
            </tr>
            <tr>
                <td>Kamyon</td>
                <td @click="showTruck">07 asd 123</td>
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
    },

    methods: {
        showTruck(){
            console.log('going to truck')
        }
    }
}
</script>

<style>

</style>