const chokidar = require('chokidar')
const path = require('path')
const createRouter = require('./createRouter')
const createMixin = require('./createMixin')

module.exports = () => {
    chokidar.watch(path.join(__dirname,"..","components")).on('all', path => {
        createRouter()
        createMixin()
    })
}
