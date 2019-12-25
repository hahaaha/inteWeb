const fs = require('fs')
const path = require('path')
const { dealName } = require('../util')

/**
 * @param targetPath 目标路径
 * 生成网站元数据
 */
module.exports = (targetPath = "") => {
    let fatherPath  = targetPath
    fatherPath = fatherPath === "Home"?"" : fatherPath
    targetPath = path.join(__dirname,"..","components",targetPath)
    let files = fs.readdirSync(targetPath)
    let siteData = []

    files.forEach((value) => {
        value = dealName(value)
        if(value !== "Index") {
            siteData.push({
                name: value,
                path: path.join("/",fatherPath,value),
            })
        }
    })

    return siteData
}