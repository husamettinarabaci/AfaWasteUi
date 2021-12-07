<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />
          <h2 class="brand-text text-primary ml-1">
            Vuexy
          </h2>
        </b-link>

        <!-- form -->
        <validation-observer 
        ref="registerForm"
        #default="{invalid}"
        >
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent
          >
            <!-- firstName -->
            <b-form-group
              label="İsim"
              label-for="firstName"
            >
              <validation-provider
                #default="{ errors }"
                name="İsim"
                rules="required"
              >
                <b-form-input
                  id="firstName"
                  v-model="firstName"
                  :state="errors.length > 0 ? false:null"
                  name="register-firstName"
                  placeholder="John"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- lastName -->
            <b-form-group
              label="Soyisim"
              label-for="lastName"
            >
              <validation-provider
                #default="{ errors }"
                name="Soyisim"
                rules="required"
              >
                <b-form-input
                  id="lastName"
                  v-model="lastName"
                  :state="errors.length > 0 ? false:null"
                  name="register-lastName"
                  placeholder="Doe"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- email -->
            <b-form-group
              label="Email"
              label-for="email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="email"
                  :state="errors.length > 0 ? false:null"
                  name="register-email"
                  placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group
              label="Parola"
              label-for="password"
            >
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
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="register-password"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIcon"
                      class="cursor-pointer"
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
              @click="register"
            >
              Kayıt Ol
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>Zaten bir hesabınız var mı? </span>
          <b-link :to="{name:'auth-login'}">
            <span>Giriş Yapın</span>
          </b-link>
        </b-card-text>
      </b-card>
    <!-- /Register v1 -->
    </div>
  </div>

</template>

<script>
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BCard, BLink, BCardTitle, BCardText, BForm,
  BButton, BFormInput, BFormGroup, BInputGroup, BInputGroupAppend, BFormCheckbox,
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import AuthApi from '@/services/authapi.service';

export default {
  components: {
    VuexyLogo,
    // BSV
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
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
    register(){
      let data = {
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.email,
        Password: this.password,
      }
      AuthApi.register(data).then(response => {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Kayıt Başarılı!',
            icon: 'EditIcon',
            variant: 'success',
          },
        })
      }).catch(error => {
        console.log('error: ', error)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Bir hata ile karşılaşıldı',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
