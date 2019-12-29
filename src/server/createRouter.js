const fs = require('fs')
const path = require('path')
const { dealName } = require('../util')
const siteData = require('./siteData')
const createConfig = require('./createConfig')



module.exports = function createRouter() {
    let data = getContent()
    createConfig(data, "routers","index.js")
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
/**
 * 生成Route数组
 */
function generateRouter() {
    let target = path.join(__dirname,"..","components")
    let content = ""
    let route = ""
    let files = ""
    files = fs.readdirSync(target)
    files.forEach(function(file) {
        if(file === "Home") {
            let tFiles = fs.readdirSync(path.join(target,file)) 
            tFiles.forEach(function(tFile) {
                if(tFile !== "Index.vue") {
                route = route + `{
                    path: "${dealName(tFile)}",
                    component: ${ dealName(tFile)}
                },\n`
            }
            })
            content =  content + `{
                path: "/",
                component: ${file + "Index"},
                children: [${route}]
            },`
        } else {
            let tFiles = fs.readdirSync(path.join(target,file)) 
            tFiles.forEach(function(tFile) {
                if(tFile !== "Index.vue") {
                route = route + `{
                    path: "${dealName(tFile)}",
                    component: ${ dealName(tFile)}
                },\n`
            }
            })
            content = content + `{
                path: "/${file}",
                component: ${file + "Index"},
                children: [${route}]
            },`
        }
    })
    let nRouter = `export default new Router({
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
    let target = path.join(__dirname,"..","components")
    let content = ""
    files = fs.readdirSync(target)
    files.forEach(function(file) {
        root = path.join("@","components",file)
        let tFiles = fs.readdirSync(path.join(target,file))
        tFiles.forEach(function(tFile) {
            if(tFile === "Index.vue") {
                content = content + `import ${file + dealName(tFile)} from '${path.join(root,tFile)}'\n`
            } else if(tFile === "Home.vue") {
                content = content + `import ${file + dealName(tFile)} from '${path.join(root,tFile)}'\n`
            }else {
                content = content + `import ${dealName(tFile)} from '${path.join(root,tFile)}'\n`
            }
        })
    })
    return content
}

function VueUseSection() {
    return `Vue.use(Router)
    Vue.use(VueFullPage)
    Vue.use(ElementUI) \n`
}