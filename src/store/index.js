import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

import dashboard from './dashboard'
import panel from './panel'
import socket from './socket'
import afatek from './afatek'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    dashboard,
    panel,
    socket,
    afatek
  },
  strict: process.env.DEV,
})
