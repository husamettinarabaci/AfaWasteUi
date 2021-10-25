<template>
  <div class="trucksContent">
    <b-row class="match-height">
        <b-col md="6" xl="6" class="cardCol">
            <b-card 
            :bg-variant="filteredType == 'truck' ? 'warning' : ''" 
            :text-variant="filteredType == 'truck' ? 'white' : ''" 
            @click="filteredType == 'truck' ? (filteredType = '') : (filteredType = 'truck')">
                <b-avatar class="mb-1" variant="light-warning" size="45">
                    <img :src="filteredType == 'truck' ? truckIcon.white : truckIcon.default" alt="">
                </b-avatar>
                <b-card-title :class="{'text-white': filteredType == 'truck'}">{{ getCount('truck') }}</b-card-title>
                <b-card-text>Kamyon</b-card-text>
            </b-card>
        </b-col>
        <b-col md="6" xl="6" class="cardCol">
            <b-card 
            :bg-variant="filteredType == 'winch' ? 'danger' : ''" 
            :text-variant="filteredType == 'winch' ? 'white' : ''" 
            @click="filteredType == 'winch' ? (filteredType = '') : (filteredType = 'winch')">
                <b-avatar class="mb-1" variant="light-primary" size="45">
                    <img :src="filteredType == 'winch' ? winchIcon.white : winchIcon.default" alt="">
                </b-avatar>
                <b-card-title :class="{'text-white': filteredType == 'winch'}">{{ getCount('winch') }}</b-card-title>
                <b-card-text>Vinç</b-card-text>
            </b-card>
        </b-col>
    </b-row>
    <b-row class="trucksList">
      <b-col md="12" xl="12" class="trucksCol">
        <b-list-group class="truckList">
            <div v-if="trucks.length">
                <transition-group name="fade" tag="div">
                    <b-list-group-item class="d-flex cursor-pointer" v-for="(truck, id) in trucks" :key="id" @click="getDetails(truck)">
                        <span class="mr-1">
                            <feather-icon
                            :icon="truck.icon"
                            size="16"
                            />
                        </span>
                        <span>{{ truck.data.plate_no }}</span>
                        <b-badge class="truckBadge" variant="light-info">
                            <feather-icon
                            icon="ArrowRightIcon"
                            size="16"
                            />
                        </b-badge>
                    </b-list-group-item>
                </transition-group>
            </div>
            <transition v-else name="fade">
                <b-list-group-item class="d-flex">
                    <span class="mr-1">
                        <feather-icon
                        icon="AlertOctagonIcon"
                        size="16"
                        />
                    </span>
                    <span>Sonuç bulunamadı!</span>
                </b-list-group-item>
            </transition>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BAvatar, BBadge, BCardText, BCardTitle, BListGroup, BListGroupItem } from 'bootstrap-vue'

// Icons
import TruckIcon from '../../../../assets/images/icon/afatek-icon-14.png';
import WinchIcon from '../../../../assets/images/icon/afatek-icon-13.png';
import TruckIconWhite from '../../../../assets/images/icon/afatek-icon-05.png';
import WinchIconWhite from '../../../../assets/images/icon/afatek-icon-04.png';

export default {
  components: {
      BRow,
      BCol,
      BCard,
      BAvatar,
      BBadge,
      BCardText,
      BCardTitle,
      BListGroup,
      BListGroupItem
  },

  data(){
    return {
      truckIcon: {
        default: TruckIcon,
        white: TruckIconWhite
      },
      winchIcon: {
        default: WinchIcon,
        white: WinchIconWhite
      },
      filteredType: '' // truck, winch
    }
  },

  computed: {
    trucks: function(){
      let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'truck');
        if (this.filteredType.length){
          return markers.filter(marker => marker.data.type == this.filteredType);
        }
        return markers;
    }
  },

  watch: {
    'filteredType': function(newVal, oldVal){
      let map = this.$store.state.dashboard.map;
      switch(newVal){
        case 'truck':
          map.addLayer(this.$store.state.dashboard.markerGroups.trucks.truck);
          map.removeLayer(this.$store.state.dashboard.markerGroups.trucks.winch);
          break;
        case 'winch':
          map.removeLayer(this.$store.state.dashboard.markerGroups.trucks.truck);
          map.addLayer(this.$store.state.dashboard.markerGroups.trucks.winch);
          break;
        default:
          if (this.$store.state.dashboard.sidebar.currentTab == 'trucks'){
            map.addLayer(this.$store.state.dashboard.markerGroups.trucks.truck);
            map.addLayer(this.$store.state.dashboard.markerGroups.trucks.winch);
          }
          break;
      }
    },

    '$store.state.dashboard.sidebar.currentTab': function(newVal, oldVal){
      this.filteredType = '';            
    }
  },

  methods: {
    getDetails(truck){
      truck.marker.fireEvent('click');
    },

    getCount(type){
        let markers = this.$store.state.dashboard.markers.filter(marker => marker.type == 'truck');
        if (type == 'truck'){
          return markers.filter(truck => truck.data.type == 'truck').length
        }
        else {
          return markers.filter(truck => truck.data.type == 'winch').length
        }
    }
  }
}
</script>

<style scoped>
.trucksContent {
    padding: 20px 0;
}
.cardCol, .trucksCol {
    padding: 0 5px;
}
.cardCol .card-body {
    text-align: center;
    cursor: pointer;
    padding: .5rem;
}
.cardCol .card-title {
    margin-bottom: .3rem;
}
.truckBadge {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
}
.bg-danger, .bg-success {
  transition: all ease .2s;
}
.b-avatar-custom img {
  width: 40px;
  height: 40px;
}
</style>