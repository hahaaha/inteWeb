const path = require('path')
const fs = require("fs")

module.exports = (data,targetPath,file = "index.js") => {
    targetPath = path.join(__dirname,"..","config",targetPath)
    if(!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath,{recursive: true})
    }
    targetPath = path.join(targetPath,file)
    fs.writeFileSync(targetPath,data)
}