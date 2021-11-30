<template>
    <transition name="fade">
        <div id="loading-bg">
        <div class="loading-logo">
            <img :src="logo" alt="Logo" />
        </div>
        <div class="loading-progress">
            <b-progress
                key="info"
                animated
                :value="calculatePercent"
                variant="info"
                height="5px"
                class="progress-bar-info"
            />
        </div>
        </div>
    </transition>
</template>

<script>
import Enums from '@/config/system.enums';
import WebApi from '@/services/webapi.service';
import {BProgress} from 'bootstrap-vue'

import Logo from '/public/assets/logo.png';

export default {
    components: {
        BProgress
    },

    data(){
        return {
            logo: Logo,
            steps: [
                {
                    id: 1,
                    name: 'getCustomer',
                    message: 'Getting customer details!',
                    commit: 'panel/setCustomer',
                    completed: false
                },
                {
                    id: 2,
                    name: 'getDevices',
                    parameter: Enums.DEVICETYPE_RFID,
                    message: 'Getting trucks!',
                    commit: 'panel/setRfidDevices',
                    completed: false
                },
                {
                    id: 3,
                    name: 'getDevices',
                    parameter: Enums.DEVICETYPE_ULT,
                    message: 'Getting ultrasonic details!',
                    commit: 'panel/setUltDevices',
                    completed: false
                },
                {
                    id: 4,
                    name: 'getDevices',
                    parameter: Enums.DEVICETYPE_RECY,
                    message: 'Getting recycles details!',
                    commit: 'panel/setRecyDevices',
                    completed: false
                },
                {
                    id: 5,
                    name: 'getTags',
                    message: 'Getting dumpsters!',
                    commit: 'panel/setTags',
                    completed: false
                },

            ]
        }
    },

    computed: {
        calculatePercent(){
            let length = this.steps.length;
            let completed = this.steps.filter(step => step.completed).length;
            return (completed / length) * 100;
        }
    },

    watch: {
        'calculatePercent': function(newValue, oldValue) {
            if (newValue >= 100) {
                this.$store.commit('app/SET_LOADING', false);
            }
        }
    },

    created(){
        this.run();
    },

    methods: {
        run(){
            this.steps.forEach(step => {
                this.runStep(step);
            });
        },

        runStep(step){
            return WebApi[step.name](step.parameter ? step.parameter : undefined).then(response => {
                this.$store.commit(step.commit, Object.freeze(response));
                let filtered = this.steps.filter(s => s.id === step.id);
                filtered[0].completed = true;
            })
        }
    }
}
</script>

<style>
.loading-progress {
    position: absolute;
    margin-top: 35px;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, 50%);
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>