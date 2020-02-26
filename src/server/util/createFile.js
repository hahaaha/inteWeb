const path = require("path")
const fs = require('fs')

module.exports = (filePath,data) => {
    let dirname = path.dirname(filePath)
    if(!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname,{recursive: true})
    }
    fs.writeFileSync(filePath,data)
}