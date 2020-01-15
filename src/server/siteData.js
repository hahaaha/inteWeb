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
    console.log(JSON.stringify(getFile(targetPath)))
    let files = fs.readdirSync(targetPath)
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

function getFile(target,root=path.sep) {
    let objs = []
    // let target = path.join(__dirname)
    let fileStat = fs.statSync(target)
    if(fileStat.isFile()) {
        return []
    }
    let files = fs.readdirSync(target)
    files.forEach((file) => {
        let obj = {}
        // root = path.join(root,file)
        obj.name = file
        let fileStat = fs.statSync(path.join(target,file))
        if(fileStat.isFile()) {
            let end = file.indexOf(".")
            let temp = file.slice(0,end)
            obj.path = path.join(root,temp)
        } else {
            root = path.join(root,file)
        }
        obj.child = getFile(path.join(target,file),root)
        objs.push(obj)
    })
    return objs
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
