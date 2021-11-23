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

import Enums from '@/config/system.enums';

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
            items: [],
            markers: [],
            markerGroups: {
                collected: null,
                notCollected: null
            },
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
            this.items = newVal;
            this.markers = [];
            if (this.markerGroup){
                this.markerGroup.clearLayers();
            }
            //this.attachMarkers(this.map)
        }
    },

    created(){
        this.items = this.devices;
    },

    methods: {
        mapReady(map){
            this.map = map;
            //this.attachMarkers(map);
        },

        attachMarkers(map){
            return;
            this.markerGroup = L.markerClusterGroup({
                iconCreateFunction: function(cluster) {
                return L.divIcon({
                    html: '<div class="marker-cluster-dumpsters-collected"><span>' + cluster.getChildCount() + '</span></div>',
                    className: 'marker-cluster marker-cluster-collected',
                    iconSize: L.point(40, 40)
                });
                }
            });
            this.markerGroups.notCollected = L.markerClusterGroup({
                iconCreateFunction: function(cluster) {
                return L.divIcon({
                    html: '<div class="marker-cluster-dumpsters-notCollected"><span>' + cluster.getChildCount() + '</span></div>',
                    className: 'marker-cluster marker-cluster-notCollected',
                    iconSize: L.point(40, 40)
                });
                }
            });

            this.items.slice(0, 50).forEach(device => {
                const popupOptions = {
                    'maxWidth': '500',
                    'width' : '250',
                    'height' : '300',
                    'className': `mapPopup ${device.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'successPopup' : 'dangerPopup'}`
                };
                var markerIcon = L.ExtraMarkers.icon({
                    icon: 'fa-dumpster',
                    markerColor: device.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'green-dark' : 'red-dark',
                    shape: 'circle',
                    prefix: 'fa'
                });
                var marker = L.marker([device.Latitude, device.Longitude], {icon: markerIcon});
                var popupContent = `
                <div class="details">
                    <div class="row" style="text-align:center">
                        <div class="col-md-12">${device.TagId}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">Durumu</div>
                        <div class="col-md-8">${device.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'Toplandı' : 'Toplanmadı'}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">Son Toplama</div>
                        <div class="col-md-8" title="${device.ReadTime}">${this.$moment(device.ReadTime).format('HH:mm DD/MM/YYYY')}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">Adres</div>
                        <div class="col-md-8">${device.Latitude,device.Longitude}</div>
                    </div>
                </div>
                `
                marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
                    map.setView(e.target.getLatLng(),5);
                });
                this.markerGroups.collected.addLayer(marker);
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
    z-index: 1;
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