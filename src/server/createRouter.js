const fs = require('fs')
const path = require('path')
const { dealName } = require('../util')
const siteData = require('./siteData')
const createConfig = require('./createConfig')
const { notFound } = require('./loadTheme')
const { importCode } = require('./util')



module.exports = function createRouter() {
    let data = getContent()
    createConfig(data, "routers", "index.js")
}

function getContent() {
    let routes = {}
    // 默认import的内容
    let data = `import Vue from 'vue'
import Router from 'vue-router'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' \n`

    data = data + generateImoportSection()
    data = data + VueUseSection()
    data = data + generateRouter()
    return data
}

function fromatRoute(route) {
    return `{
        path:"${route.path}",
        component: ${route.component}
    }`
}
function getRoute(name, component, Child, route = {}) {
        return `{
    path: "${name ==="Home"?"/":name}",
    component: ${component},
    ${Child?`children: [${route}]`:""}
}, \n`

}

/**
 * 生成Route数组
 */
function generateRouter() {
    let target = path.join(__dirname, "..", "components")
    let content = ""
    let route = ""
    let files = ""
    files = fs.readdirSync(target)
    files.forEach(function (file) {
        // 修复bug，清空上一个的route的内容
        route = ""
        let tFiles = fs.readdirSync(path.join(target, file))
        tFiles.forEach(function (tFile) {
            let component = tFile === "Home.vue" ? file + dealName(tFile) : dealName(tFile)
            if (tFile !== "Index.vue") {
                route = route + getRoute(dealName(tFile), component, false)
            }
        })
        content = content + getRoute(file === "Home" ? "/" : "/" + file, file + "Index", true, route)
    })
    content = content + `{
        path: "*",
        component: notFound
    }`
    let nRouter = `
export default new Router({
    routes: [${content}]
})`
    return nRouter
}

/**
 * 自动生成import内容
 */
function generateImoportSection() {
    let root = ""
    let files = []
    let target = path.join(__dirname, "..", "components")
    let content = ""
    files = fs.readdirSync(target)
    files.forEach(function (file) {
        root = path.join("@", "components", file)
        let tFiles = fs.readdirSync(path.join(target, file))
        tFiles.forEach(function (tFile) {
            if (tFile === "Index.vue") {
                content = content + importCode(file + dealName(tFile), path.join(root, tFile))
            } else if (tFile === "Home.vue") {
                content = content + importCode(file + dealName(tFile), path.join(root, tFile))
            } else {
                content = content + importCode(dealName(tFile), path.join(root, tFile))
            }
        })
    })
    content = content + importCode("notFound", notFound)
    return content
}

function VueUseSection() {
    return `
Vue.use(Router)
Vue.use(VueFullPage)
Vue.use(ElementUI) \n`
}