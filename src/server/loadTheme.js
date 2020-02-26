const theme = require('../config.json').theme
const path = require("path")
const createConfig = require("./createConfig")
const { importCode, exportCode } = require("./util")

let getNavPath = (theme) => {
    let root = path.join(__dirname,"..","theme",theme)
    return path.join(root,"nav.vue")
}

let nav = importCode("nav",getNavPath(theme)) + exportCode("nav")


module.exports = () => {createConfig(nav,"theme")}