<template>
    <b-card no-body>
        <b-card-body>
            <b-form @submit.prevent>
                <b-row>
                <b-col cols="12">
                    <b-form-group
                    label="Center Latitude"
                    label-for="h-center-latitude"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-center-latitude"
                        placeholder="Center Latitude"
                        v-model="config.CenterLatitude"
                    />
                    </b-form-group>
                </b-col>
                
                <b-col cols="12">
                    <b-form-group
                    label="Center Longitude"
                    label-for="h-center-longitude"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-center-longitude"
                        placeholder="Center Longitude"
                        v-model="config.CenterLongitude"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Default Zoom"
                    label-for="h-default-zoom"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-default-zoom"
                        placeholder="Default Zoom"
                        v-model="config.DefaultZoom"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Device Base Work"
                    label-for="h-device-base-work"
                    label-cols-md="4"
                    >
                    <b-form-checkbox
                        id="h-device-base-work"
                        :checked="config.DeviceBaseWork == Enums.STATU_ACTIVE"
                        class="custom-control-primary"
                        name="check-button"
                        v-model="config.DeviceBaseWork"
                        switch
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Max Zoom"
                    label-for="h-max-zoom"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-max-zoom"
                        placeholder="Max Zoom"
                        v-model="config.MaxZoom"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Min Zoom"
                    label-for="h-min-zoom"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-min-zoom"
                        placeholder="Min Zoom"
                        v-model="config.MinZoom"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="NE Latitude"
                    label-for="h-ne-latitude"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-ne-latitude"
                        placeholder="NE Latitude"
                        v-model="config.NELatitude"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="NE Longitude"
                    label-for="h-ne-longitude"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-ne-longitude"
                        placeholder="NE Longitude"
                        v-model="config.NELongitude"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Park Locations"
                    label-for="h-park-locations"
                    label-cols-md="4"
                    >
                    <b-button
                    variant="gradient-primary"
                    class="btn-icon rounded-circle"
                    @click="addParkLocation"
                    >
                        <feather-icon icon="PlusIcon" />
                    </b-button>
                    <b-row class="park-locations" v-for="park in parkLocations">
                        <b-col lg="3">
                            <b-form-input
                                placeholder="Location Name"
                                v-model="park.LocationName"
                            />
                        </b-col>
                        <b-col lg="3">
                            <b-form-input
                                placeholder="Latitude"
                                v-model="park.Latitude"
                            />
                        </b-col>
                        <b-col lg="3">
                            <b-form-input
                                placeholder="Longitude"
                                v-model="park.Longitude"
                            />
                        </b-col>
                        <b-col lg="3">
                            <b-form-input
                                placeholder="Zone Radius"
                                v-model="park.ZoneRadius"
                            />
                        </b-col>
                    </b-row>
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="SW Latitude"
                    label-for="h-sw-latitude"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-sw-latitude"
                        placeholder="SW Latitude"
                        v-model="config.SWLatitude"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="SW Longitude"
                    label-for="h-sw-longitude"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-sw-longitude"
                        placeholder="SW Longitude"
                        v-model="config.SWLongitude"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="WebUI Private"
                    label-for="h-webui-private"
                    label-cols-md="4"
                    >
                    <b-form-checkbox
                        id="h-webui-private"
                        :checked="config.WebUIPrivate == Enums.STATU_ACTIVE"
                        class="custom-control-primary"
                        name="check-button"
                        v-model="config.WebUIPrivate"
                        switch
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Work Add Minute"
                    label-for="h-work-add-minute"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-work-add-minute"
                        placeholder="Work Add Minute"
                        v-model="config.WorkAddMinute"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Work Start Hour"
                    label-for="h-work-start-hour"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-work-start-hour"
                        placeholder="Work Start Hour"
                        v-model="config.WorkStartHour"
                    />
                    </b-form-group>
                </b-col>

                <b-col cols="12">
                    <b-form-group
                    label="Work Start Minute"
                    label-for="h-work-start-minute"
                    label-cols-md="4"
                    >
                    <b-form-input
                        id="h-work-start-minute"
                        placeholder="Work Start Minute"
                        v-model="config.WorkStartMinute"
                    />
                    </b-form-group>
                </b-col>

                

                <!-- submit and reset -->
                <b-col offset-md="4">
                    <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mr-1"
                    @click="saveConfig"
                    >
                    Submit
                    </b-button>
                </b-col>
                </b-row>
            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>
import { BCard, BCardBody, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton } from 'bootstrap-vue';
import Ripple from 'vue-ripple-directive';
import AdminApi from '@/services/adminapi.service';
import Enums from '@/config/system.enums';

export default {
    components: {
        BCard,
        BCardBody,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
    },

    directives: {
        Ripple,
    },

    data(){
        return {
            Enums,
            config: {},
            parkLocations: []
        }
    },

    mounted(){
        this.getLocalConfig()
    },

    methods: {
        getLocalConfig(){
            AdminApi.getConfig(Enums.DATATYPE_ADMINCONFIG).then(response => {
                console.log('response: ', response)
                this.config = {
                    ...response,
                    DeviceBaseWork: response.DeviceBaseWork == Enums.STATU_ACTIVE ? true : false,
                    WebUIPrivate: response.WebUIPrivate == Enums.STATU_ACTIVE ? true : false
                };
                if (!response.ParkLocations.length){
                    this.parkLocations.push({
                        LocationName: '',
                        Latitude: '',
                        Longitude: '',
                        ZoneRadius: ''
                    })
                }
            }).catch(e => {
                console.log('error: ', e)
            })
        },

        addParkLocation(){
            if (this.parkLocations[this.parkLocations.length - 1].LocationName){
                this.parkLocations.push({
                    LocationName: '',
                    Latitude: '',
                    Longitude: '',
                    ZoneRadius: ''
                })
            }
            else {
                console.log('son veri doldurulmalıdır')
            }
        },

        saveConfig(){
            let config = {
                ...this.config
            }
            config.DeviceBaseWork = config.DeviceBaseWork ? Enums.STATU_ACTIVE : Enums.STATU_PASSIVE;
            config.WebUIPrivate = config.WebUIPrivate ? Enums.STATU_ACTIVE : Enums.STATU_PASSIVE;
            this.parkLocations.forEach(park => {
                if (park.LocationName){
                    config.ParkLocations.push(park)
                }
            })

            return;

            AdminApi.setConfig(Enums.DATATYPE_ADMINCONFIG, config).then(response => {
                console.log('response: ', response)
            }).catch(e => {
                console.log('error: ', e)
            })
        },
    }
}
</script>

<style scoped>
.park-locations {
    margin-bottom: 5px;
}
.btn-icon.rounded-circle {
    position: absolute;
    left: -50px;
}
</style>