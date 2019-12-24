import Vue from 'vue'
import App from './App.vue'
import router from './config/routers'
import siteData from './config/mixin'


Vue.config.productionTip = false
Vue.mixin(siteData)

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })