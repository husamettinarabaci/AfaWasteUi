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
      <l-control v-if="showInfo" position="topright">
        <info @showTrucks="showTrucks"/>
      </l-control>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControl } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-sidebar-v2"
import "leaflet-sidebar-v2/css/leaflet-sidebar.css"
import "leaflet-extra-markers"
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css"
import "leaflet.marker.highlight";
import "leaflet.marker.highlight/dist/leaflet.marker.highlight.css";
import "leaflet.markercluster"
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"


// Map Layers
import Sidebar from './map/sidebar/Index';
import Info from './map/info/Index';

// Get datas
import rfTagsData from '../data/rfTags.data';
import trucksData from '../data/trucks.data';
import ultData from '../data/ult.data';
import recycleData from '../data/recycle.data';

// Config
import Enums from '@/config/system.enums';
import { s3Url } from '@/config/app.config';

// Services
import WebApi from '@/services/webapi.service';

// Mixins
import socketMixin from '@/mixins/socket.mixin'

// Icons
import TruckIcon from '../assets/images/icon/afatek-icon-05.png';
import WinchIcon from '../assets/images/icon/afatek-icon-04.png';

import ContainerEmptyIcon from '../assets/images/icon/afatek-icon-06.png';
import ContainerLittleIcon from '../assets/images/icon/afatek-icon-07.png';
import ContainerMediumIcon from '../assets/images/icon/afatek-icon-08.png';
import ContainerFullIcon from '../assets/images/icon/afatek-icon-09.png';


export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
    Sidebar,
    Info
  },

  mixins: [socketMixin],

  data() {
    return {
      url: 'https://api.mapbox.com/styles/v1/devafatek/ckfc8pw7394sr19mwqsj0vcqr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2YWZhdGVrIiwiYSI6ImNrOHd5and3czAxZXczbXF6ODJuM3I2OTcifQ.mjAJVjob0WYyRMmoOESq2w',
      zoom: 11,
      center: [37.036604, 27.424406],
      options: {
        zoomControl: false,
        minZoom: 8,
        maxZoom: 18
      },
      rfTags: rfTagsData.tags,
      trucks: trucksData,
      ults: ultData,
      recycles: recycleData,
      markers: {
        trucks: {
          truck: [],
          winch: []
        },
        rfTags: {
          collected: [],
          notCollected: []
        },
        ults: {
          empty: [],
          little: [],
          medium: [],
          full: []
        },
        recycles: []
      },
      markerGroups: {
        trucks: {
          truck: null,
          winch: null
        },
        rfTags: {
          collected: null,
          notCollected: null
        },
        ults: {
          empty: null,
          little: null,
          medium: null,
          full: null
        },
        recycles: null
      }
    }
  },

  computed: {
    showInfo: function(){
      return this.$store.state.dashboard.info.current.length;
    },

    socket: function(){
      return this.$store.getters['socket/getSocket'];
    }
  },

  watch: {
    '$store.state.dashboard.sidebar.object': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let self = this;
      let markerGroups = this.$store.state.dashboard.markerGroups;
      newVal.on('opening', function(e){
        let activeTab = newVal._tabitems.find(item => item.classList.contains('active')).dataset.tab;
        self.$store.commit('dashboard/setCurrentTab', activeTab);
        switch(activeTab){
          case 'trucks':
            if (markerGroups.rfTags.collected) map.removeLayer(markerGroups.rfTags.collected);
            if (markerGroups.rfTags.notCollected) map.removeLayer(markerGroups.rfTags.notCollected);
            if (markerGroups.ults.empty) map.removeLayer(markerGroups.ults.empty);
            if (markerGroups.ults.little) map.removeLayer(markerGroups.ults.little);
            if (markerGroups.ults.medium) map.removeLayer(markerGroups.ults.medium);
            if (markerGroups.ults.full) map.removeLayer(markerGroups.ults.full);
            if (markerGroups.recycles) map.removeLayer(markerGroups.recycles);
            break;
          case 'dumpsters':
            if (markerGroups.trucks.truck) map.removeLayer(markerGroups.trucks.truck);
            if (markerGroups.trucks.winch) map.removeLayer(markerGroups.trucks.winch);
            if (markerGroups.ults.empty) map.removeLayer(markerGroups.ults.empty);
            if (markerGroups.ults.little) map.removeLayer(markerGroups.ults.little);
            if (markerGroups.ults.medium) map.removeLayer(markerGroups.ults.medium);
            if (markerGroups.ults.full) map.removeLayer(markerGroups.ults.full);
            if (markerGroups.recycles) map.removeLayer(markerGroups.recycles);
            break;
          case 'containers':
            if (markerGroups.trucks.truck) map.removeLayer(markerGroups.trucks.truck);
            if (markerGroups.trucks.winch) map.removeLayer(markerGroups.trucks.winch);
            if (markerGroups.rfTags.collected) map.removeLayer(markerGroups.rfTags.collected);
            if (markerGroups.rfTags.notCollected) map.removeLayer(markerGroups.rfTags.notCollected);
            if (markerGroups.recycles) map.removeLayer(markerGroups.recycles);
            break;
          case 'recycles':
            if (markerGroups.trucks.truck) map.removeLayer(markerGroups.trucks.truck);
            if (markerGroups.trucks.winch) map.removeLayer(markerGroups.trucks.winch);
            if (markerGroups.rfTags.collected) map.removeLayer(markerGroups.rfTags.collected);
            if (markerGroups.rfTags.notCollected) map.removeLayer(markerGroups.rfTags.notCollected);
            if (markerGroups.ults.empty) map.removeLayer(markerGroups.ults.empty);
            if (markerGroups.ults.little) map.removeLayer(markerGroups.ults.little);
            if (markerGroups.ults.medium) map.removeLayer(markerGroups.ults.medium);
            if (markerGroups.ults.full) map.removeLayer(markerGroups.ults.full);
            break;
        } 
      })
      newVal.on('closing', function(e){
        if (markerGroups.trucks.truck) map.addLayer(markerGroups.trucks.truck);
        if (markerGroups.trucks.winch) map.addLayer(markerGroups.trucks.winch);
        if (markerGroups.rfTags.collected) map.addLayer(markerGroups.rfTags.collected);
        if (markerGroups.rfTags.notCollected) map.addLayer(markerGroups.rfTags.notCollected);
        if (markerGroups.ults.empty) map.addLayer(markerGroups.ults.empty);
        if (markerGroups.ults.little) map.addLayer(markerGroups.ults.little);
        if (markerGroups.ults.medium) map.addLayer(markerGroups.ults.medium);
        if (markerGroups.ults.full) map.addLayer(markerGroups.ults.full);
        if (markerGroups.recycles) map.addLayer(markerGroups.recycles);
        self.$store.commit('dashboard/setCurrentTab', '');
      })
    },

    '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let markerGroups = this.$store.state.dashboard.markerGroups;
      switch(newVal){
        case 'trucks':
          this.$store.commit('dashboard/setInfoCurrent', '');
          if (markerGroups.trucks.truck) map.addLayer(markerGroups.trucks.truck);
          if (markerGroups.trucks.winch) map.addLayer(markerGroups.trucks.winch);
          if (markerGroups.rfTags.collected) map.removeLayer(markerGroups.rfTags.collected);
          if (markerGroups.rfTags.notCollected) map.removeLayer(markerGroups.rfTags.notCollected);
          if (markerGroups.ults.empty) map.removeLayer(markerGroups.ults.empty);
          if (markerGroups.ults.little) map.removeLayer(markerGroups.ults.little);
          if (markerGroups.ults.medium) map.removeLayer(markerGroups.ults.medium);
          if (markerGroups.ults.full) map.removeLayer(markerGroups.ults.full);
          if (markerGroups.recycles) map.removeLayer(markerGroups.recycles);
          break;
        case 'dumpsters':
          this.$store.commit('dashboard/setInfoCurrent', 'Dumpsters');
          if (markerGroups.trucks.truck) map.removeLayer(markerGroups.trucks.truck);
          if (markerGroups.trucks.winch) map.removeLayer(markerGroups.trucks.winch);
          if (markerGroups.rfTags.collected) map.addLayer(markerGroups.rfTags.collected);
          if (markerGroups.rfTags.notCollected) map.addLayer(markerGroups.rfTags.notCollected);
          if (markerGroups.ults.empty) map.removeLayer(markerGroups.ults.empty);
          if (markerGroups.ults.little) map.removeLayer(markerGroups.ults.little);
          if (markerGroups.ults.medium) map.removeLayer(markerGroups.ults.medium);
          if (markerGroups.ults.full) map.removeLayer(markerGroups.ults.full);
          if (markerGroups.recycles) map.removeLayer(markerGroups.recycles);
          break;
        case 'containers':
          this.$store.commit('dashboard/setInfoCurrent', 'Containers');
          if (markerGroups.trucks.truck) map.removeLayer(markerGroups.trucks.truck);
          if (markerGroups.trucks.winch) map.removeLayer(markerGroups.trucks.winch);
          if (markerGroups.rfTags.collected) map.removeLayer(markerGroups.rfTags.collected);
          if (markerGroups.rfTags.notCollected) map.removeLayer(markerGroups.rfTags.notCollected);
          if (markerGroups.ults.empty) map.addLayer(markerGroups.ults.empty);
          if (markerGroups.ults.little) map.addLayer(markerGroups.ults.little);
          if (markerGroups.ults.medium) map.addLayer(markerGroups.ults.medium);
          if (markerGroups.ults.full) map.addLayer(markerGroups.ults.full);
          if (markerGroups.recycles) map.removeLayer(markerGroups.recycles);
          break;
        case 'recycles':
          this.$store.commit('dashboard/setInfoCurrent', 'Recycles');
          if (markerGroups.trucks.truck) map.removeLayer(markerGroups.trucks.truck);
          if (markerGroups.trucks.winch) map.removeLayer(markerGroups.trucks.winch);
          if (markerGroups.rfTags.collected) map.removeLayer(markerGroups.rfTags.collected);
          if (markerGroups.rfTags.notCollected) map.removeLayer(markerGroups.rfTags.notCollected);
          if (markerGroups.ults.empty) map.removeLayer(markerGroups.ults.empty);
          if (markerGroups.ults.little) map.removeLayer(markerGroups.ults.little);
          if (markerGroups.ults.medium) map.removeLayer(markerGroups.ults.medium);
          if (markerGroups.ults.full) map.removeLayer(markerGroups.ults.full);
          if (markerGroups.recycles) map.addLayer(markerGroups.recycles);
          break;
        default:
          //this.$store.commit('dashboard/setInfoCurrent', '');
          if (markerGroups.trucks.truck) map.addLayer(markerGroups.trucks.truck);
          if (markerGroups.trucks.winch) map.addLayer(markerGroups.trucks.winch);
          if (markerGroups.rfTags.collected) map.addLayer(markerGroups.rfTags.collected);
          if (markerGroups.rfTags.notCollected) map.addLayer(markerGroups.rfTags.notCollected);
          if (markerGroups.ults.empty) map.addLayer(markerGroups.ults.empty);
          if (markerGroups.ults.little) map.addLayer(markerGroups.ults.little);
          if (markerGroups.ults.medium) map.addLayer(markerGroups.ults.medium);
          if (markerGroups.ults.full) map.addLayer(markerGroups.ults.full);
          if (markerGroups.recycles) map.addLayer(markerGroups.recycles);
          break;
      }
    },

    '$store.state.panel.tags': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let self = this;
      // Init trucks
      
      // Init rfTags - Dumpsters
      this.markerGroups.rfTags.collected = L.markerClusterGroup({
        iconCreateFunction: function(cluster) {
          return L.divIcon({
            html: '<div class="marker-cluster-dumpsters-collected"><span>' + cluster.getChildCount() + '</span></div>',
            className: 'marker-cluster marker-cluster-collected',
            iconSize: L.point(40, 40)
          });
        }
      });
      this.markerGroups.rfTags.notCollected = L.markerClusterGroup({
        iconCreateFunction: function(cluster) {
          return L.divIcon({
            html: '<div class="marker-cluster-dumpsters-notCollected"><span>' + cluster.getChildCount() + '</span></div>',
            className: 'marker-cluster marker-cluster-notCollected',
            iconSize: L.point(40, 40)
          });
        }
      });

      const idList = [
        1965,
        595,
        1142,
        2483,
        4601,
        496,
        486,
        90,
        511,
        1978,
        15,
        1510,
        500,
        517,
        330,
        498,
        593,
        489,
        521,
        149,
        507,
        4600,
        1,
        2,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        14,
        15,
        16,
        17,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        29,
        35,
        39,
        41,
        42,
        45,
        48
      ]


      newVal.filter(a => idList.includes(a.TagId)).forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup dumpsterPopup'
        };
        var markerIcon = L.ExtraMarkers.icon({
            icon: 'fa-dumpster',
            markerColor: data.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'green-dark' : 'red-dark',
            shape: 'circle',
            prefix: 'fa'
        });
        var marker = L.marker([data.Latitude, data.Longitude], {icon: markerIcon, data});
        var popupContent = `
        <div class="card videoCard">
            <video class="tagVideo" controls autoplay>
                <source src="${data.video_url}" type="video/mp4" autoplay loop>
                secure connection could not be established
            </video>
            <div class="card-body">
              <table>
                <tr>
                  <td class="text-bold">DURUM</td>
                  <td>
                    <span class="badge badge-light-${data.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'success' : 'danger'}" style="float:left">
                      ${data.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'Toplandı' : 'Toplanmadı'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="text-bold">SON TOPLANMA TARİHİ</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="text-bold">SON OKUNMA TARİHİ</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
        </div>
        `
        //this.$store.commit('dashboard/addMarker', {type: 'rfTag', icon: 'Trash2Icon', searchableFields: ['container_no', 'rftag_title'], data, marker});
        marker.bindPopup(popupContent, popupOptions)
        .on('click', function(e) {
          map.setView(e.target.getLatLng());
          WebApi.getTag(data).then(response => {
            console.log('response: ', response)
            self.$store.commit('dashboard/setInfoCurrent', 'DumpsterDetails');
            self.$store.commit('dashboard/setInfoData', response);
            const content = `
                <div class="card videoCard">
                  <video class="tagVideo" controls autoplay>
                      <source src="${s3Url}${response.TagReader.UID}.mp4" type="video/mp4" autoplay loop>
                      secure connection could not be established
                  </video>
                  <div class="card-body">
                    <table>
                      <tr>
                        <td class="text-bold">DURUM</td>
                        <td>
                          <span class="badge badge-light-${response.TagStatu.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'success' : 'danger'}" style="float:left">
                            ${response.TagStatu.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'Toplandı' : 'Toplanmadı'}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-bold">TAG ID</td>
                        <td>${response.TagId}</td>
                      </tr>
                      <tr>
                        <td class="text-bold">SON TOPLANMA TARİHİ</td>
                        <td title="${response.TagReader.ReadTime}">${self.$moment(response.TagReader.ReadTime).format('DD.MM.YYYY HH:mm:ss')}</td>
                      </tr>
                      <tr>
                        <td class="text-bold">SON OKUNMA TARİHİ</td>
                        <td title="${response.TagReader.ReadTime}">${self.$moment(response.TagReader.ReadTime).format('DD.MM.YYYY HH:mm:ss')}</td>
                      </tr>
                    </table>
                  </div>
              </div>
            `
            marker.setPopupContent(content)
          })
        })
        .on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'dumpsters'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        });
        if (data.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY){
          this.markerGroups.rfTags.collected.addLayer(marker);
        }
        else {
          this.markerGroups.rfTags.notCollected.addLayer(marker);
        }
        this.markers.rfTags[data.ContainerStatu == Enums.CONTAINER_FULLNESS_STATU_EMPTY ? 'collected' : 'notCollected'].push(marker);
        this.$store.commit('dashboard/addMarker', {type: 'tag', icon: 'Trash2Icon', data, marker});
      });
      
      map.addLayer(this.markerGroups.rfTags.collected);
      map.addLayer(this.markerGroups.rfTags.notCollected);
      //this.markerGroups.rfTags.collected = L.layerGroup(this.markers.rfTags.collected).addTo(map);
      //this.markerGroups.rfTags.notCollected = L.layerGroup(this.markers.rfTags.notCollected).addTo(map);
      
      this.$store.commit('dashboard/addMarkerGroup', {type: 'rfTags', markerGroup: this.markerGroups.rfTags});
    },

    '$store.state.panel.devices.rfid': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let self = this;

      /*
      this.markerGroups.trucks.truck = L.markerClusterGroup({
        iconCreateFunction: function(cluster) {
          return L.divIcon({
            html: '<div class="marker-cluster-trucks-truck"><span>' + cluster.getChildCount() + '</span></div>',
            className: 'marker-cluster marker-cluster-truck',
            iconSize: L.point(40, 40)
          });
        }
      });
      */

      // Init trucks
      newVal.forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup truckPopup'
        };
        var markerIcon = L.ExtraMarkers.icon({
            //icon: 'fa-truck',
            //innerHTML: `<img src="${data.type == 'truck' ? TruckIcon : WinchIcon}"/>`,
            innerHTML: `<img src="${TruckIcon}"/>`,
            markerColor: data.type == 'truck' ? 'orange' : 'blue',
            shape: 'square',
            prefix: 'fa'
        });
        var marker = L.marker([data.DeviceGps.Latitude, data.DeviceGps.Longitude], {icon: markerIcon, data});
        var popupContent = `
        <div class="card">
          <div class="card-body">
            <table>
              <tr>
                <td class="text-bold">TİP</td>
                <td>Kamyon</td>
              </tr>
              <tr>
                <td class="text-bold">PLAKA NO</td>
                <td>${data.DeviceDetail.PlateNo}</td>
              </tr>
              <tr>
                <td class="text-bold">ŞOFÖR</td>
                <td>${data.DeviceDetail.DriverName}</td>
              </tr>
            </table>
          </div>
        </div>
        `
        marker.bindPopup(popupContent, popupOptions)
        .on('click', function(e) {
          map.setView(e.target.getLatLng());
          //self.$store.commit('dashboard/setInfoCurrent', 'TruckDetails');
          //self.$store.commit('dashboard/setInfoData', data);
        })
        .on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'trucks'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        })
        
        //this.markerGroups.trucks.truck.addLayer(marker);

        this.$store.commit('dashboard/addMarker', {type: 'truck', icon: 'TruckIcon', data, marker});
        //this.$store.commit('dashboard/addMarker', {type: 'truck', icon: 'TruckIcon', searchableFields: ['plate_no'], data, marker});
        this.markers.trucks.truck.push(marker);
        //this.trucksMarkers.push(marker);
      })

      //map.addLayer(this.markerGroups.trucks.truck);
      this.markerGroups.trucks.truck = L.layerGroup(this.markers.trucks.truck).addTo(map);
      this.markerGroups.trucks.winch = L.layerGroup(this.markers.trucks.winch).addTo(map);

      this.$store.commit('dashboard/addMarkerGroup', {type: 'trucks', markerGroup: this.markerGroups.trucks});
    },

    '$store.state.panel.devices.ult': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let self = this;

      let vals = newVal.slice(0,5)
      vals[0].DeviceGps.Latitude = 37.04819002372351;
      vals[0].DeviceGps.Longitude = 27.34308242797852;
      vals[1].DeviceGps.Latitude = 37.05531410185666;
      vals[1].DeviceGps.Longitude = 27.357501983642578;
      vals[2].DeviceGps.Latitude = 37.05325914794976;
      vals[2].DeviceGps.Longitude = 27.37895965576172;
      vals[3].DeviceGps.Latitude = 37.05599907412595;
      vals[3].DeviceGps.Longitude = 27.458438873291016;
      vals[4].DeviceGps.Latitude = 37.02489510178452;
      vals[4].DeviceGps.Longitude = 27.442817687988285;

      return;

      // Init ults - Containers
      vals.forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup containerPopup'
        };
        var markerColor, markerHTML;
        if (data.filled_rate < 25){
          markerColor = 'green-light';
          markerIcon = ContainerEmptyIcon;
        }
        else if ((data.filled_rate >= 25) && (data.filled_rate < 50)){
          markerColor = 'green-dark';
          markerIcon = ContainerLittleIcon;
        }
        else if ((data.filled_rate >= 50) && (data.filled_rate < 75)){
          markerColor = 'yellow';
          markerIcon = ContainerMediumIcon;
        }
        else if ((data.filled_rate >= 75) && (data.filled_rate <= 100)){
          markerColor = 'red';
          markerIcon = ContainerFullIcon;
        }
        var markerIcon = L.ExtraMarkers.icon({
            //icon: 'fa-archive',
            innerHTML: `<img src="${markerIcon}"/>`,
            markerColor,
            shape: 'star',
            prefix: 'fa'
        });
        var marker = L.marker([data.DeviceGps.Latitude, data.DeviceGps.Longitude], {icon: markerIcon, data});
        var popupContent = `
        <div class="card">
          <div class="card-body">
            <table>
              <tr>
                <td class="text-bold">Konteyner ID</td>
                <td>${data.ult_title}</td>
              </tr>
              <tr>
                <td class="text-bold">Doluluk Oranı</td>
                <td>
                  <span class="badge badge-light-${this.computeVariant(data.filled_rate)}">${data.filled_rate}%</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        `
        marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
          map.setView(e.target.getLatLng());
          self.$store.commit('dashboard/setInfoCurrent', 'ContainerDetails');
          self.$store.commit('dashboard/setInfoData', data);
        }).on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'containers'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        });
        this.$store.commit('dashboard/addMarker', {type: 'ult', icon: 'ArchiveIcon', searchableFields: ['ult_title'], data, marker});
        if (data.filled_rate < 25){
          this.markers.ults.empty.push(marker);
        }
        else if ((data.filled_rate >= 25) && (data.filled_rate < 50)){
          this.markers.ults.little.push(marker);
        }
        else if ((data.filled_rate >= 50) && (data.filled_rate < 75)){
          this.markers.ults.medium.push(marker);
        }
        else if ((data.filled_rate >= 75) && (data.filled_rate <= 100)){
          this.markers.ults.full.push(marker);
        }
      })
      

      this.markerGroups.ults.empty = L.layerGroup(this.markers.ults.empty).addTo(map);
      this.markerGroups.ults.little = L.layerGroup(this.markers.ults.little).addTo(map);
      this.markerGroups.ults.medium = L.layerGroup(this.markers.ults.medium).addTo(map);
      this.markerGroups.ults.full = L.layerGroup(this.markers.ults.full).addTo(map);
    },

    '$store.state.panel.devices.recy': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      let self = this;

      // Init recycles
      newVal.slice(0,5).forEach(data => {
        const popupOptions = {
            'maxWidth': '500',
            'width' : '250',
            'height' : '300',
            'className': 'mapPopup recyclePopup'
        };
        var markerIcon = L.ExtraMarkers.icon({
            icon: 'fa-recycle',
            markerColor: 'cyan',
            shape: 'penta',
            prefix: 'fa'
        });
        var marker = L.marker([data.latitude, data.longitude], {icon: markerIcon});
        var popupContent = `
        <div class="card">
          <div class="card-body">
            <table>
              <tr>
                <td class="text-bold">Konteyner ID</td>
                <td>${data.recycle_title}</td>
              </tr>
            </table>
          </div>
        </div>
        `
        marker.bindPopup(popupContent, popupOptions).on('click', function(e) {
          map.setView(e.target.getLatLng());
          self.$store.commit('dashboard/setInfoCurrent', 'RecycleDetails');
          self.$store.commit('dashboard/setInfoData', data);
        }).on('popupclose', function(e){
          if (self.$store.state.dashboard.sidebar.object.getContainer().classList.contains('collapsed')){
            self.$store.commit('dashboard/setInfoCurrent', '');
          }
          else {
            if (self.$store.state.dashboard.sidebar.currentTab == 'recycles'){
              self.$store.commit('dashboard/setInfoCurrent', '');
            }
          }
        });
        this.$store.commit('dashboard/addMarker', {type: 'recycle', icon: 'RefreshCwIcon', searchableFields: ['recycle_id'], data, marker});
        this.markers.recycles.push(marker);
      })
      
      this.markerGroups.recycles = L.layerGroup(this.markers.recycles).addTo(map);
    }
  },

  created(){
    let self = this;
    this.socket.onmessage = function(event) {
      let data = JSON.parse(event.data);
      //console.log('socket data: ', data);
      //console.log('devicetypesqwe: ', self.deviceTypes)
      if (Object.keys(self.deviceTypes).includes(data.Result)){
        let value = JSON.parse(data.Retval);
        self.changeDeviceData(data.Result, value);
      }
      else if (Object.keys(self.deviceTypesGps).includes(data.Result)){
        let value = JSON.parse(data.Retval);
        self.changeDeviceData(data.Result, value);
        self.changeDeviceLocation(data.Result, value);
      }
      else if (Object.keys(self.tagTypes).includes(data.Result)){
        let value = JSON.parse(data.Retval);
        self.changeTagData(data.Result, value);
      }
      else if (Object.keys(self.tagTypesStatuGps).includes(data.Result)){
        let value = JSON.parse(data.Retval);
        self.changeTagData(data.Result, value);
        if (data.Result == Enums.DATATYPE_TAG_GPS){
          self.changeTagLocation(value);
        }
        else if (data.Result == Enums.DATATYPE_TAG_STATU){
          self.changeTagStatus(value);
        }
      }
      else {
        console.log('hepsinin dışında bir veri geldi: ', data.Result);
      }
      /*
      else if (data.Result === Enums.DATATYPE_RFID_GPS_DEVICE){
        let device = JSON.parse(data.Retval);
        let filteredDeviceMarker = self.markers.trucks.truck.filter(marker => marker.options.data.DeviceId == device.DeviceId);
        if (filteredDeviceMarker.length){
          var newLatLng = new L.LatLng(device.Latitude, device.Longitude);
          filteredDeviceMarker[0].setLatLng(newLatLng);
        }
      }*/

      //console.log('data: ', data)
    }
  },

  destroyed(){
    this.socket.onmessage = null;
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
      let self = this;

      //this.markerGroups.trucks.truck = L.layerGroup(this.markers.trucks.truck).addTo(map);
      //this.markerGroups.trucks.winch = L.layerGroup(this.markers.trucks.winch).addTo(map);

      //this.markerGroups.rfTags.collected = L.layerGroup(this.markers.rfTags.collected).addTo(map);
      //this.markerGroups.rfTags.notCollected = L.layerGroup(this.markers.rfTags.notCollected).addTo(map);

      //this.markerGroups.ults.empty = L.layerGroup(this.markers.ults.empty).addTo(map);
      //this.markerGroups.ults.little = L.layerGroup(this.markers.ults.little).addTo(map);
      //this.markerGroups.ults.medium = L.layerGroup(this.markers.ults.medium).addTo(map);
      //this.markerGroups.ults.full = L.layerGroup(this.markers.ults.full).addTo(map);

      //this.markerGroups.recycles = L.layerGroup(this.markers.recycles).addTo(map);


      //this.$store.commit('dashboard/setMarkerGroups', this.markerGroups);
      
    },

    computeVariant(percent){
        if (percent < 25) return 'success';
        else if ((percent >= 25) && (percent < 50)) return 'info';
        else if ((percent >= 50) && (percent < 75)) return 'warning';
        else if ((percent >= 75) && (percent <= 100)) return 'danger';
    },

    showTrucks(){
      //this.$store.commit('dashboard/setCurrentTab', 'trucks');
      //this.$store.state.dashboard.sidebar.object._tabitems[2].click();
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

.mapPopup {
  min-width: 250px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.mapPopup .card {
  margin-bottom: 0;
}
.mapPopup .card table {
  width: 100%;
}
.mapPopup .text-bold {
  font-weight: bold;
}

.dumpsterPopup .leaflet-popup-content-wrapper {
  width: 350px;
  padding: 0;
}

.mapPopup .leaflet-popup-content {
  margin: 0;
}

.mapPopup video.tagVideo {
    width: 100%;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5px;
}

.mapPopup .videoCard strong {
    font-size: .9rem;
}

.mapPopup .videoCard hr{
    width: 25%;
    height: 3px;
    margin: 0 auto;
}

.mapPopup .videoCard .hour {
    font-size: 2rem;
    font-weight: bold;
}
.leaflet-marker-icon img {
  width: 30px;
  height: 30px;
  margin-left: 3px;
  margin-top: 2px;
}

.marker-cluster.marker-cluster-collected {
  background: #00640070;
}
.marker-cluster-dumpsters-collected {
  background: #006400;
  color: #fff;
}
.marker-cluster.marker-cluster-notCollected {
  background: #8b000070;
}
.marker-cluster-dumpsters-notCollected {
  background: #8B0000;
  color: #fff;
}
.marker-cluster.marker-cluster-truck {
  background: #0000FF70;
}
.marker-cluster-trucks-truck {
  background: #0000FF;
  color: #fff;
}
</style>
