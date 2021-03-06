const path = require('path')
/**
 * 将组件名转化为指定形式
 * 1. 首字母需要大写
 * 2. 如果组件名中有“-”，需要把“—”之后的字母大写
 * @param {string} name 
 */
exports.dealName = function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1,name.length-4)
}

exports.dealSuffix = function(file) {
    let end = file.indexOf(".")
    let temp = file.slice(0,end)
    return temp
}

exports.components = path.join(__dirname,"..","components")