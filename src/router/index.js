import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Photo from '@/components/Photo'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(VueFullPage)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[{
        path: 'photo',
        component: Photo
      }]
    }
  ]
})
