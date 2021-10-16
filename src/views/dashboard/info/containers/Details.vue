<template>
    <div>
        <table>
            <tr>
                <td>Isı oranı</td>
                <td>35%</td>
            </tr>
            <tr>
                <td>Konteyner Tipi</td>
                <td>Yer üstü / 3750</td>
            </tr>
            <tr>
                <td>Dolma Hızı Puanı</td>
                <td>6</td>
            </tr>
            <tr>
                <td>Konum</td>
                <td>Detay Konum Cd.</td>
            </tr>
            <tr>
                <td>Geçmiş Doluluk Oranları</td>
                <td>Chart goes here...</td>
            </tr>
        </table>
        <b-modal
        id="containersInfoModal"
        centered
        size="lg"
        title="Detay Bilgi"
        hide-footer
        >
            <p>Content goes here..</p>
        </b-modal>
    </div>
</template>

<script>
import { BModal } from 'bootstrap-vue'

export default {
    components: {
        BModal
    },

    data(){
        return {

        }
    },

    computed: {
        details: function(){
            return this.$store.state.dashboard.info.data;
        }
    },

    mounted(){
        this.$bvModal.show('containersInfoModal')
    }
}
</script>

<style>

</style>