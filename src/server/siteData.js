const fs = require('fs')
const path = require('path')
const { dealName } = require('../util')

/**
 * @param targetPath 目标路径
 * 生成网站元数据
 * 返回的数据结构
 * [{name:"",path:"",child:[]}]
 */
module.exports = (targetPath = {}) => {
    targetPath = path.join(__dirname, "..", "components")
    let files = fs.readdirSync(targetPath)
    console.log(files)
    let siteData = {}

    files.forEach((value) => {
        let fatherPath = value
        siteData[value] = {}
        let tFilesPath = path.join(targetPath, value)
        let tFiles = fs.readdirSync(tFilesPath)
        fatherPath = fatherPath === "Home" ? "" : fatherPath
        tFiles.forEach((tFile) => {
            if (tFile !== "Index.vue") {
                let dtFile = dealName(tFile)
                let routerLink = path.join(path.sep, fatherPath, dtFile)
                let temp = {}
                temp[dtFile] = routerLink
                if(getName(path.join(tFilesPath,tFile))) {
                    dtFile = getName(path.join(tFilesPath,tFile))
                }
                siteData[value][dtFile] = routerLink
                
                // siteData[value]["name"] = getName(path.join(tFilesPath,tFile))
            }
        })
    })

    return siteData
}

function mixin(targetPath = {}) {
    let end = false
    targetPath = path.join(__dirname, "..", "components")
    let files = fs.readFileSync(targetPath)
    // files.forEach(file) {
    //     console.log("")
    //     // if() {

    //     // }
    // }
}

function getName(target) {
    let data = fs.readFileSync(target,"utf8")
    return matchName(data)
}

function matchName(data) {
    let reg = /export default {\s*name:\s*"[\w|\u4e00-\u9fa5]*",/
    let res = data.match(reg)
    if(res) {
        res = res[0].match(/"[\w|\u4e00-\u9fa5]*"/)
        res = res[0]
        return res.slice(1,res.length-1)
    }
}
