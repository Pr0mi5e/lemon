import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n'
import Vuex from 'vuex'
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  if (!response.data.success) {
    const lang = 'resp_code.'
    // occur a error, show notification
    ElementUI.Notification.error({
      title: i18n.t(lang + 'error').toString(),
      message: i18n.t(lang + response.data.code.split('_')[0] + '.' + response.data.code).toString()
    })
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.$store = store

// @ts-ignore
axios.defaults.baseURL = window.$HOST

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
