import Vue from 'vue'
import App from './App.vue'
import router from './config/routers'
import siteData from './config/mixin'
import echarts from 'echarts'
import axios from 'axios'
import 'aos/dist/aos.css'
import Aos from 'aos/dist/aos.js'

Vue.config.productionTip = false
Vue.mixin(siteData)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Aos.init()

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })