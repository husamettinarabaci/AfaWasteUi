<template>
    <div>
        <table>
            <tr>
                <td>Plastik Sayısı</td>
                <td>35</td>
            </tr>
            <tr>
                <td>Cam Sayısı</td>
                <td>12</td>
            </tr>
            <tr>
                <td>Metal Sayısı</td>
                <td>9</td>
            </tr>
            <tr>
                <td>Konum</td>
                <td>Detay Konum Cd.</td>
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