const fs = require('fs')
const path = require('path')
let targetPath = path.join(__dirname,"..","components")

module.exports = function() {
    let files = fs.readdirSync(targetPath)
    let data = ""
    let routes = []

    files.forEach(function(value) {
        data = data + generateImoportSection(value)
        routes.push({
            path: path.join("/",delName(name)),
            compenent: delName(name)
        })
    })
    let nRouter = `export default new Router({
        routes: ${routes}
      })`
    
}

function generateImoportSection(name) {
    return `import ${delName(name)} from '${name}'\n`

}

/**
 * 将组件名转化为指定形式
 * 1. 首字母需要大写
 * 2. 如果组件名中有“-”，需要把“—”之后的字母大写
 * @param {string} name 
 */
function dealName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}