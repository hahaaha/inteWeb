import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './config/routers'
import siteData from './config/mixin'
import echarts from 'echarts'
import axios from 'axios'
import 'aos/dist/aos.css'
import Aos from 'aos/dist/aos.js'
import { Notification } from 'element-ui'
import { nav } from './config/theme'

Vue.config.productionTip = false
Vue.mixin(siteData)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.component("Nav",nav)
Aos.init()
// 路由守护
router.beforeEach((to, from, next) => {
	console.log(to)
	if (to.path === "/Admin/Alert") {
		Notification({
			title: "警告",
			message: "无权访问此目录",
			type: "warning",
			offset: 50
		})
		next(false)
	} else {
		next()
	}
})

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})