<template>
    <b-card no-body>
        <b-card-header>
            <b-card-title>Konteyner Haritası</b-card-title>
        </b-card-header>
        <b-card-body class="mapBody">
            <l-map
            :zoom="zoom"
            :center="center"
            :options="options"
            @ready="mapReady"
            >
                <l-tile-layer :url="url" />
            </l-map>
        </b-card-body>
    </b-card>
</template>

<script>
import {BCard, BCardHeader, BCardTitle, BCardBody} from 'bootstrap-vue';
import { LMap, LTileLayer, LControl } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-extra-markers"
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css"

export default {
    props: ['devices'],

    components: {
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody,
        LMap,
        LTileLayer,
        LControl,
    },

    data(){
        return {
            map: null,
            markers: [],
            markersLayer: null,
            url: 'https://api.mapbox.com/styles/v1/devafatek/ckfc8pw7394sr19mwqsj0vcqr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2YWZhdGVrIiwiYSI6ImNrOHd5and3czAxZXczbXF6ODJuM3I2OTcifQ.mjAJVjob0WYyRMmoOESq2w',
            zoom: 13,
            center: [37.036604, 27.424406],
            options: {
                zoomControl: false,
                minZoom: 13,
                maxZoom: 18
            },
        }
    },

    watch: {
        'devices': function(newVal, oldVal){
            this.markers = [];
            this.markersLayer.clearLayers();
            this.attachMarkers(this.map)
        }
    },

    methods: {
        mapReady(map){
            this.map = map;
            this.attachMarkers(map);
        },

        attachMarkers(map){
            this.devices.forEach(device => {
                const popupOptions = {
                    'maxWidth': '500',
                    'width' : '250',
                    'height' : '300',
                    'className': `mapPopup ${device.status == 'collected' ? 'successPopup' : 'dangerPopup'}`
                };
                var markerIcon = L.ExtraMarkers.icon({
                    icon: 'fa-dumpster',
                    markerColor: device.status == 'collected' ? 'green-dark' : 'red-dark',
                    shape: 'circle',
                    prefix: 'fa'
                });
                var marker = L.marker([device.latitude, device.longitude], {icon: markerIcon});
                var popupContent = `
                <div class="details">
                    <div class="row" style="text-align:center">
                        <div class="col-md-12">${device.container_no}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">Durumu</div>
                        <div class="col-md-8">${device.status == 'collected' ? 'Toplandı' : 'Toplanmadı'}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">Son Toplama</div>
                        <div class="col-md-8" title="${device.last_event}">${this.$moment(device.last_event).format('HH:mm DD/MM/YYYY')}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">Adres</div>
                        <div class="col-md-8">${device.location}</div>
                    </div>
                </div>
                `
                marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
                    map.setView(e.target.getLatLng(),5);
                });
                this.markers.push(marker);
            })
            this.markersLayer = L.layerGroup(this.markers).addTo(map);
        }
    }
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css);
.mapBody {
    height: 500px;
}
.mapPopup .leaflet-popup-content {
    width: 300px;
}
.mapPopup {
    border-radius: 10px;
}
.mapPopup, .mapPopup .leaflet-popup-tip {
    background: #F8F8F8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.mapPopup.successPopup, .mapPopup.successPopup .leaflet-popup-tip {
    border: 2px solid #28C76F;
}
.mapPopup.dangerPopup, .mapPopup.dangerPopup .leaflet-popup-tip {
    border: 2px solid red;
}
</style>