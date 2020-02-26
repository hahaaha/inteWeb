const theme = require('../config.json').theme
const path = require("path")
const createConfig = require("./createConfig")

let getNavPath = (theme) => {
    let root = path.join(__dirname,"..","theme",theme)
    return path.join(root,"nav.vue")
}

let importCode = (name,filePath) => {
    return `import ${name} from '${filePath}'\n`
}

let exportCode = (value) => {
    return `export { ${value} } \n`
}

let nav = importCode("nav",getNavPath(theme)) + exportCode("nav")


module.exports = () => {createConfig(nav,"theme")}