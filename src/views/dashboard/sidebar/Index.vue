<template>
    <div id="sidebar" class="leaflet-sidebar collapsed">
        <!-- nav tabs -->
        <div class="leaflet-sidebar-tabs">
            <!-- top aligned tabs -->
            <ul role="tablist">
                <li v-for="tab in tabs" :key="tab.id" :data-tab="tab.id" :ref="'tab-' + tab.id" @click="tabChanged(tab)">
                    <a :href="'#' + tab.id" role="tab">
                        <i :class="tab.icon"></i>
                    </a>
                </li>
            </ul>

            <!-- bottom aligned tabs -->
            <ul role="tablist">
                <!--
                <li @click="showInfo">
                    <a data-toggle="modal">
                        <i class="fa fa-info"></i>
                    </a>
                </li>
                -->
                <li>
                    <a>
                        <img class="customerLogo" src="https://seeklogo.com/images/B/bodrum-belediyesi-logo-82326D761F-seeklogo.com.png" alt="Bodrum Logo">
                    </a>
                </li>
            </ul>

            <b-modal
            id="infoModal"
            centered
            size="lg"
            title="Detay Bilgi"
            hide-footer
            >
                <p>Content goes here..</p>
            </b-modal>
        </div>

        <!-- panel content -->
        <div class="leaflet-sidebar-content">
            <div v-for="tab in tabs" :key="tab.id" class="leaflet-sidebar-pane" :id="tab.id">
                <h1 class="leaflet-sidebar-header">
                    {{ tab.title }}
                    <span class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></span>
                </h1>

                <div class="sidebar-content">
                    <component :is="tab.content"></component>
                </div>
            </div>
        </div>         
    </div>
</template>

<script>
import { BModal } from 'bootstrap-vue'

import Summary from './tabs/Summary';
import Search from './tabs/Search';
import Trucks from './tabs/Trucks';
import Dumpsters from './tabs/Dumpsters';
import Containers from './tabs/Containers';
import Recycles from './tabs/Recycles';


export default {
    components: {
        BModal,
        Summary,
        Search,
        Trucks,
        Dumpsters,
        Containers,
        Recycles
    },

    data(){
        return {
            sidebar: null,
            options: {
                autopan: false,       // whether to maintain the centered map point when opening the sidebar
                closeButton: true,    // whether t add a close button to the panes
                container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
                position: 'left',     // left or right
            },
            tabs: [
                {
                    id: 'summary',
                    icon: 'fa fa-bars',
                    content: 'Summary',
                    title: 'Özet'
                },
                {
                    id: 'search',
                    icon: 'fa fa-search',
                    content: 'Search',
                    title: 'Arama'
                },
                {
                    id: 'trucks',
                    icon: 'fa fa-truck',
                    content: 'Trucks',
                    title: 'Kamyonlar'
                },
                {
                    id: 'dumpsters',
                    icon: 'fa fa-dumpster',
                    content: 'Dumpsters',
                    title: 'RFID Takip Sistemi'
                },
                {
                    id: 'containers',
                    icon: 'fa fa-archive',
                    content: 'Containers',
                    title: 'Doluluk Sensörleri'
                },
                {
                    id: 'recycles',
                    icon: 'fa fa-recycle',
                    content: 'Recycles',
                    title: 'Geri Dönüşüm Cihazları'
                }
            ],
        }
    },

    watch: {
        '$store.state.dashboard.map': function(newVal, oldVal){
            this.sidebar = L.control.sidebar(this.options).addTo(newVal);
            this.$store.commit('dashboard/setSidebarObject', this.sidebar);
        }
    },

    methods: {
        tabChanged(tab){
            this.$bvModal.hide('infoModal');
            let active = this.$refs['tab-' + tab.id][0].classList.contains('active');
            this.$store.commit('dashboard/setCurrentTab', active ? tab.id : '');
            //let active = this.$refs['tab-' + tab.id][0].classList.contains('active');
            //this.$store.commit('dashboard/setSidebarStatus', active ? 'open' : 'close');
        },

        showInfo(){
            this.sidebar.close();
            this.$bvModal.show('infoModal')
        }
    }
}
</script>

<style lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css);

.customerLogo {
    width: 35px;
    height: 35px;
}
</style>
