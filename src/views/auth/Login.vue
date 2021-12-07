<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">
            Vuexy
          </h2>
        </b-link>

        <!-- form -->
        <validation-observer
          ref="loginForm"
          #default="{invalid}"
        >
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent
          >

            <!-- email -->
            <b-form-group
              label-for="email"
              label="Email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="userEmail"
                  name="login-email"
                  :state="errors.length > 0 ? false:null"
                  placeholder="john@example.com"
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Parola</label>
              </div>
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false:null"
                    name="login-password"
                    placeholder="Password"
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              type="submit"
              block
              :disabled="invalid"
              @click="login"
            >
              Giriş Yap
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>Platform'da yeni misiniz? </span>
          <b-link :to="{name:'auth-register'}">
            <span>Hesap oluştur</span>
          </b-link>
        </b-card-text>
      </b-card>
      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script>
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BButton, BForm, BFormInput, BFormGroup, BCard, BLink, BCardTitle, BCardText, BInputGroup, BInputGroupAppend, BFormCheckbox,
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import AuthApi from '@/services/authapi.service'
import Enums from '@/config/system.enums'

export default {
  components: {
    // BSV
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
    BCard,
    BCardTitle,
    BLink,
    VuexyLogo,
    BCardText,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      userEmail: '',
      password: '',
      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },

  mounted(){
    extend('required', {
      ...required,
      message: 'Bu alan boş bırakılamaz.',
    })

    extend('email', {
      ...email,
      message: 'Geçerli bir email adresi olmalıdır.',
    })
  },

  methods: {
    login(){
      let data = {
        Email: this.userEmail,
        Password: this.password,
      }
      AuthApi.login(data)
        .then(response => {
          /*
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Giriş başarılı!',
              icon: 'CheckCircleIcon',
              variant: 'success',
            },
          })
          */
          this.$router.push({ name: 'map' })
        })
        .catch(error => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Kullanıcı adı veya parola hatalı!',
              icon: 'AlertIcon',
              variant: 'danger',
            },
          })
        })
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
