<template>
    <b-card no-body>
        <b-card-body>
            <b-form @submit.prevent>
                <b-row>

                <!-- customer name -->
                <b-col cols="12">
                    <b-form-group
                    label="Customer Name"
                    label-for="vi-customer-name"
                    >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                        <feather-icon icon="UserIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                        id="vi-customer-name"
                        placeholder="Bodrum Bld."
                        v-model="customer.CustomerName"
                        />
                    </b-input-group>
                    </b-form-group>
                </b-col>

                <!-- link -->
                <b-col cols="12">
                    <b-form-group
                    label="Customer link"
                    label-for="vi-link"
                    >
                    <b-input-group class="input-group-merge">
                        <b-input-group-prepend is-text>
                        <feather-icon icon="MailIcon" />
                        </b-input-group-prepend>
                        <b-form-input
                        id="vi-link"
                        placeholder="bodrum.aws.afatek.com.tr"
                        v-model="customer.CustomerLink"
                        />
                    </b-input-group>
                    </b-form-group>
                </b-col>

                <!-- rfid app -->
                <b-col cols="12">
                    <b-form-group>
                    <b-form-checkbox
                        id="rfidApp"
                        name="rfidApp"
                        v-model="apps[Enums.WEB_APP_TYPE_RFID]"
                    >
                        RFID APP
                    </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <!-- ult app -->
                <b-col cols="12">
                    <b-form-group>
                    <b-form-checkbox
                        id="ultApp"
                        name="ultApp"
                        v-model="apps[Enums.WEB_APP_TYPE_ULT]"
                    >
                        ULT APP
                    </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <!-- recy app -->
                <b-col cols="12">
                    <b-form-group>
                    <b-form-checkbox
                        id="recyApp"
                        name="recyApp"
                        v-model="apps[Enums.WEB_APP_TYPE_RECY]"
                    >
                        RFID APP
                    </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <!-- reset and submit -->
                <b-col cols="12">
                    <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mr-1"
                    @click="submit"
                    >
                    Submit
                    </b-button>
                    <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    type="reset"
                    variant="outline-secondary"
                    >
                    Reset
                    </b-button>
                </b-col>
                </b-row>
            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>
import Enums from '@/config/system.enums'
import {
  BRow, BCol, BCard, BCardBody, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import AfatekApi from '@/services/afatekapi.service'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BInputGroup,
    BInputGroupPrepend,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },

  data(){
      let apps = {}
      apps[Enums.WEB_APP_TYPE_RFID] = false
      apps[Enums.WEB_APP_TYPE_ULT] = false
      apps[Enums.WEB_APP_TYPE_RECY] = false
      return {
          Enums,
          customer: {
              CustomerId: 0,
              CustomerName: '',
              CustomerLink: ''
          },
          apps
      }
  },

  methods: {
      submit(){
          let obj = {
              ...this.customer
          }
          Object.keys(this.apps).forEach(app => {
              obj[app] = this.apps[app] ? Enums.STATU_ACTIVE : Enums.STATU_PASSIVE
          })
          AfatekApi.setCustomer(obj).then(response => {
              console.log('res: ', response)
          })
      }
  }
}
</script>
