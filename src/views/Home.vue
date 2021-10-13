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

// Get datas
import rfTagsData from '../data/rfTags.data';
import trucksData from '../data/trucks.data';
import ultData from '../data/ult.data';
import recycleData from '../data/recycle.data';

import Sidebar from './dashboard/sidebar/Index';

export default {
  components: {
    LMap,
    LTileLayer,
    Sidebar
  },
  data() {
    return {
      url: 'https://api.mapbox.com/styles/v1/devafatek/ckfc8t2yz958m19qnhaa8gi1l/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2YWZhdGVrIiwiYSI6ImNrOHd5and3czAxZXczbXF6ODJuM3I2OTcifQ.mjAJVjob0WYyRMmoOESq2w',
      zoom: 13,
      center: [37.036604, 27.424406],
      options: {
        zoomControl: false,
        minZoom: 13,
        maxZoom: 18
      },
      rfTags: rfTagsData.tags,
      trucks: trucksData,
      ults: ultData,
      recycles: recycleData,
      rfTagsMarkers: [],
      trucksMarkers: [],
      ultsMarkers: [],
      recyclesMarkers: [],
      groupRfTagMarkers: [],
      groupTruckMarkers: [],
      groupUltMarkers: [],
      groupRecycleMarkers: []
    }
  },

  watch: {
    '$store.state.dashboard.sidebar.object': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let self = this;
      newVal.on('opening', function(e){
        let activeTab = newVal._tabitems.find(item => item.classList.contains('active')).dataset.tab;
        self.$store.commit('dashboard/setCurrentTab', activeTab);
        switch(activeTab){
          case 'trucks':
            map.removeLayer(self.groupRfTagMarkers);
            map.removeLayer(self.groupUltMarkers);
            map.removeLayer(self.groupRecycleMarkers);
            break;
          case 'dumpsters':
            map.removeLayer(self.groupTruckMarkers);
            map.removeLayer(self.groupUltMarkers);
            map.removeLayer(self.groupRecycleMarkers);
            break;
          case 'containers':
            map.removeLayer(self.groupTruckMarkers);
            map.removeLayer(self.groupRfTagMarkers);
            map.removeLayer(self.groupRecycleMarkers);
            break;
          case 'recycles':
            map.removeLayer(self.groupTruckMarkers);
            map.removeLayer(self.groupRfTagMarkers);
            map.removeLayer(self.groupUltMarkers);
            break;
        } 
      })
      newVal.on('closing', function(e){
        map.addLayer(self.groupTruckMarkers);
        map.addLayer(self.groupRfTagMarkers);
        map.addLayer(self.groupUltMarkers);
        map.addLayer(self.groupRecycleMarkers);
        self.$store.commit('dashboard/setCurrentTab', '');
      })
    },

    '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      switch(newVal){
        case 'trucks':
          map.addLayer(this.groupTruckMarkers);
          map.removeLayer(this.groupRfTagMarkers);
          map.removeLayer(this.groupUltMarkers);
          map.removeLayer(this.groupRecycleMarkers);
          break;
        case 'dumpsters':
          map.removeLayer(this.groupTruckMarkers);
          map.addLayer(this.groupRfTagMarkers);
          map.removeLayer(this.groupUltMarkers);
          map.removeLayer(this.groupRecycleMarkers);
          break;
        case 'containers':
          map.removeLayer(this.groupTruckMarkers);
          map.removeLayer(this.groupRfTagMarkers);
          map.addLayer(this.groupUltMarkers);
          map.removeLayer(this.groupRecycleMarkers);
          break;
        case 'recycles':
          map.removeLayer(this.groupTruckMarkers);
          map.removeLayer(this.groupRfTagMarkers);
          map.removeLayer(this.groupUltMarkers);
          map.addLayer(this.groupRecycleMarkers);
          break;
        default:
          map.addLayer(this.groupTruckMarkers);
          map.addLayer(this.groupRfTagMarkers);
          map.addLayer(this.groupUltMarkers);
          map.addLayer(this.groupRecycleMarkers);
          break;
      }
    },

  },

  mounted(){
    console.log('mounted')
  },

  methods: {
    mapReady(map){
      // Add sidebar to vuex state
      this.$store.commit('dashboard/setMap', map)

      //map.on('click', function(e){
      //  console.log('latitude: ', e.latlng.lat)
      //  console.log('longitude: ', e.latlng.lng)
      //})

      // Add markers to map
      this.attachMarkers(map);

    },

    attachMarkers(map){
      this.rfTags.forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'tagPopup'
        };
        var redMarker = L.ExtraMarkers.icon({
            icon: 'fa-dumpster',
            markerColor: 'green-dark',
            //markerColor: data.last_statu == 'R' ? 'red' : (data.last_statu == 'G' ? 'green' : 'orange'),
            shape: 'circle',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: redMarker})//.addTo(map);
        this.$store.commit('dashboard/addMarker', {type: 'rfTag', icon: 'Trash2Icon', searchableFields: ['container_no'], data, marker});
        //var formattedDate = utilsHelper.dateFormat(data.last_event);
        var formattedDate = this.$moment(data.last_event).format('DD.MM.YYYY hh:mm:ss');
        var popupContent = `
        <div class="videoCard">
            <video class="tagVideo" controls autoplay>
                <source  src="https://media.giphy.com/media/LcGFscTzOn9xm/giphy.mp4" type="video/mp4" autoplay loop>
                secure connection could not be established
            </video>
            <div style="height:24px">
              <span class="badge badge-light-success" style="float:left">
                Toplandı
              </span>
              <span class="badge badge-light-danger" style="float:right">
                Toplanmadı
              </span>
            </div>
            <strong>Son Okunma Tarihi</strong>
            <hr/>
            <div class="hour">${formattedDate.split(' ')[1]}</div>
            <div class="date">${formattedDate.split(' ')[0]}</div>
            </div>
        </div>
        `
        marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
          map.setView(e.target.getLatLng(),5);
        });
        this.rfTagsMarkers.push(marker);
      });
      this.trucks.forEach(data => {
        var redMarker = L.ExtraMarkers.icon({
            icon: 'fa-truck',
            markerColor: 'orange',
            shape: 'square',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: redMarker})//.addTo(map);
        marker.on('click', function(e) {
          map.setView(e.target.getLatLng(),5);
        });
        this.$store.commit('dashboard/addMarker', {type: 'truck', icon: 'TruckIcon', searchableFields: ['truck_name'], data, marker});
        this.trucksMarkers.push(marker);
      })
      this.ults.forEach(data => {
        var redMarker = L.ExtraMarkers.icon({
            icon: 'fa-archive',
            markerColor: 'violet',
            shape: 'star',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: redMarker})//.addTo(map);
        marker.on('click', function(e) {
          map.setView(e.target.getLatLng(),5);
        });
        this.$store.commit('dashboard/addMarker', {type: 'ult', icon: 'ArchiveIcon', searchableFields: ['ult_id'], data, marker});
        this.ultsMarkers.push(marker);
      })
      this.recycles.forEach(data => {
        var redMarker = L.ExtraMarkers.icon({
            icon: 'fa-recycle',
            markerColor: 'cyan',
            shape: 'penta',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: redMarker})//.addTo(map);
        this.$store.commit('dashboard/addMarker', {type: 'recycle', icon: 'RefreshCwIcon', searchableFields: ['recycle_id'], data, marker});
        this.recyclesMarkers.push(marker);
      })
      this.groupRfTagMarkers = L.layerGroup(this.rfTagsMarkers).addTo(map);
      this.groupTruckMarkers = L.layerGroup(this.trucksMarkers).addTo(map);
      this.groupUltMarkers = L.layerGroup(this.ultsMarkers).addTo(map);
      this.groupRecycleMarkers = L.layerGroup(this.recyclesMarkers).addTo(map);
    }
  }
}
</script>

<style lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css);
.vue2leaflet-map{
  &.leaflet-container{
    font-family: inherit;
    height: 100vh;
    width: 100vw;
  }
}

.tagPopup {
    /*
    width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px;*/
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.tagPopup .leaflet-popup-content-wrapper {
    width: 250px;
    height: 250px;
    padding: 0;
}

.tagPopup .leaflet-popup-content {
    margin: 0;
}

.tagPopup video.tagVideo {
    width: 100%;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5px;
}

.tagPopup .videoCard {
    text-align: center;
}

.tagPopup .videoCard strong {
    font-size: .9rem;
}

.tagPopup .videoCard hr{
    width: 25%;
    height: 3px;
    margin: 0 auto;
}

.tagPopup .videoCard .hour {
    font-size: 2rem;
    font-weight: bold;
}
</style>
