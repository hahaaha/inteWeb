const path = require('path')
const fs = require("fs")
const createFile = require("./util/createFile")

module.exports = (data,targetPath,file = "index.js") => {
    targetPath = path.join(__dirname,"..","config",targetPath,file)
    createFile(targetPath,data)
}