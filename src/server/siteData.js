const fs = require('fs')
const path = require('path')
const { dealName } = require('../util')
const { dealSuffix } = require('../util')
const config = require("../config.json")

/**
 * @param targetPath 目标路径
 * 生成网站元数据
 * 返回的数据结构
 * [{name:"",path:"",child:[]}]
 */
module.exports = (targetPath = {}) => {
    targetPath = path.join(__dirname, "..", "components")
    let siteData = getFile(targetPath)

    return siteData
}

function getFile(target,root=path.sep) {
    let objs = []

    let fileStat = fs.statSync(target)
    if(fileStat.isFile()) {
        return []
    }
    let files = fs.readdirSync(target)
    files.forEach((file) => {
        let obj = {}

        // 去除Index.vue这个情况
        if(file === "Index.vue") {
            return 
        }

        obj.name = file
        // 设置权重用来控制排序
        obj.weight = 0
        let userWeight = config.admin.weight
        let userWeightkeys = Object.keys(userWeight)
        userWeightkeys.forEach((k) => {
            if(path.join(path.sep,"Admin",k) === path.join(root,dealSuffix(file))) {
                obj.weight = userWeight[k]
            }
        })

        let fileStat = fs.statSync(path.join(target,file))
        let temp = ""
        if(fileStat.isFile()) {
            let end = file.indexOf(".")
            let temp = file.slice(0,end)
            obj.name = temp
            temp = temp === "Home" ? "" : temp
            obj.path = path.join(root,temp)
        } else {
            // Home目录下的文件直接使用/作为路由
            if(file === "Home") {
                temp = root
            } else {
                temp = path.join(root,file)
            }
        }
        obj.child = getFile(path.join(target,file),temp)
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
