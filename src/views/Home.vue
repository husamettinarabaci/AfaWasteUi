<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="options"
      @ready="attachSidebar"
    >
      <l-tile-layer :url="url" />
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

export default {
  components: {
    LMap,
    LTileLayer
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
    attachSidebar(mapObject) {
      console.log(L.ExtraMarkers)
      var redMarker = L.ExtraMarkers.icon({
          icon: 'fa-dumpster',
          markerColor: 'green-dark',
          shape: 'circle',
          prefix: 'fa'
      });
      var marker = L.marker([47.331377157798244, -1.5765380859375002], {icon: redMarker}).addTo(mapObject);
      const sidebar = window.L.control.sidebar({
        autopan: false, // whether to maintain the centered map point when opening the sidebar
        closeButton: true, // whether t add a close button to the panes
        container: "#sidebar", // the DOM container or #ID of a predefined sidebar container that should be used
        position: "left" // left or right
      });

      sidebar.addTo(mapObject);

      /* add a button with click listener */
      sidebar.addPanel({
          id: 'click',
          tab: 'A',
          pane: 'içerik',
          title: 'profile'
      });

    }
  }
}
</script>

<style lang="scss">
.vue2leaflet-map{
  &.leaflet-container{
    height: 100vh;
    width: 100vw;
  }
}
</style>
