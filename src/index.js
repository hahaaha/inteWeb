import Vue from 'vue'
import App from './App.vue'
import router from './config/routers'
import siteData from './config/mixin'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.mixin(siteData)
Vue.prototype.$echarts = echarts

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })