const fs = require('fs')
const path = require('path')
const { dealName } = require('../util')

/**
 * @param targetPath 目标路径
 * 生成网站元数据
 */
module.exports = (targetPath = {}) => {
    targetPath = path.join(__dirname, "..", "components")
    let files = fs.readdirSync(targetPath)
    let siteData = {}

    files.forEach((value) => {
        let fatherPath = value
        siteData[value] = []
        let tFiles = fs.readdirSync(path.join(targetPath, value))
        fatherPath = fatherPath === "Home" ? "" : fatherPath
        tFiles.forEach((tFile) => {
            if (tFile !== "Index.vue") {
                let routerLink = path.join(path.sep, fatherPath, dealName(tFile))
                let temp = {}
                tFile = dealName(tFile)
                temp[tFile] = routerLink
                siteData[value].push(temp)
            }
        })
        // if(value !== "Index") {
        //     siteData.push({
        //         name: value,
        //         path: path.join("/",fatherPath,value),
        //     })
        // }
    })

    return siteData
}