const fs = require('fs')
const path = require('path')
const { dealName } = require('../util')

/**
 * @param targetPath 目标路径
 * 生成网站元数据
 */
module.exports = (targetPath = path.join(__dirname,"..","components")) => {
    let files = fs.readdirSync(targetPath)
    let siteData = []

    files.forEach((value) => {
        value = dealName(value)
        siteData.push({
            name: value,
            path: path.join("/",value),
            component: value
        })
    })

    return siteData
}