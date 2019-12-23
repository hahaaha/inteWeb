const fs = require('fs')
const path = require('path')

let targetPath = path.join(__dirname,"..","components")
let files

module.exports = function createRouter() {
    let data = getContent()
    let targetPath = path.join(__dirname,"..","routers")
    console.log(targetPath)
    if(!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath,{recursive: true})
    }
    fs.writeFileSync(targetPath + "/index.js",data)
}

function getContent() {
    files = fs.readdirSync(targetPath)
    // 默认import的内容
    let data = `import Vue from 'vue'
import Router from 'vue-router'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' \n`
    let routes = []

    files.forEach(function(value) {
        data = data + generateImoportSection(value)
        routes.push({
            path: path.join("/",dealName(value)),
            component: dealName(value)
        })
    })
    
    data = data + VueUseSection()

    let nRouter = `export default new Router({
        routes: [${routes.map(value => {return fromatRoute(value)})}]
      })`
    data = data + nRouter
    return data
}

function fromatRoute(route) {
    return `{
        path:"${route.path}",
        component: ${route.component}
    }`
}

function generateImoportSection(name) {
    return `import ${dealName(name)} from '@/components/${name}'\n`
}

function VueUseSection() {
    return `Vue.use(Router)
    Vue.use(VueFullPage)
    Vue.use(ElementUI) \n`
}

/**
 * 将组件名转化为指定形式
 * 1. 首字母需要大写
 * 2. 如果组件名中有“-”，需要把“—”之后的字母大写
 * @param {string} name 
 */
export function dealName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1,name.length-4)
}