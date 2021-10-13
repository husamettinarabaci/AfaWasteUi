<template>
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
                  <span>{{ truck.type }}</span>
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
</template>

<script>
import {BListGroup, BListGroupItem} from 'bootstrap-vue'

export default {
  components: {
      BListGroup,
      BListGroupItem
  },

  data(){
    return {

    }
  },

  computed: {
    trucks: function(){
      return this.$store.state.dashboard.markers.filter(marker => marker.type == 'truck')
    }
  },

  methods: {
    getDetails(truck){
      truck.marker.fireEvent('click');
    }
  }
}
</script>

<style scoped>
  .truckList {
    padding: 20px 0;
  }
</style>