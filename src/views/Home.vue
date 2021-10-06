<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="options"
      @ready="mapReady"
    >
      <l-tile-layer :url="url" />
      <sidebar/>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-sidebar-v2"
import "leaflet-sidebar-v2/css/leaflet-sidebar.css"
import "leaflet-extra-markers"
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css"

import Sidebar from './dashboard/sidebar/Index';

export default {
  components: {
    LMap,
    LTileLayer,
    Sidebar
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      options: {
        zoomControl: false
      }
    }
  },

  methods: {
    mapReady(map){
      // Add sidebar to vuex state
      this.$store.commit('dashboard/setMap', map)

      // Add markers to map
      this.attachMarkers(map);

    },

    attachMarkers(map){
      var redMarker = L.ExtraMarkers.icon({
          icon: 'fa-dumpster',
          markerColor: 'green-dark',
          shape: 'circle',
          prefix: 'fa'
      });
      var marker = L.marker([47.331377157798244, -1.5765380859375002], {icon: redMarker}).addTo(map);
    }
  }
}
</script>

<style lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css);
.vue2leaflet-map{
  &.leaflet-container{
    height: 100vh;
    width: 100vw;
  }
}
</style>
