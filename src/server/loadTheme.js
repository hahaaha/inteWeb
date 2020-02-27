const theme = require('../config.json').theme
const path = require("path")
const createConfig = require("./createConfig")
const { importCode, exportCode } = require("./util")

const root = path.join(__dirname,"..","theme",theme)

let getNavPath = () => {
    return path.join(root,"nav.vue")
}

let getNotFound = () => {
    return path.join(root,"404.vue")
}

let nav = importCode("nav",getNavPath(theme)) + importCode("notFound",getNotFound ()) + exportCode("nav","notFound")
exports.notFound = getNotFound()
exports.loadTheme = () => {createConfig(nav,"theme")}
