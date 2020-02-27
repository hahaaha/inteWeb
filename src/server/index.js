const createRouter = require('./createRouter')
const createMixin = require('./createMixin')
const watchComponents = require('./watchComponents')
const { loadTheme } = require('./loadTheme')

module.exports = function() {
    createRouter()
    createMixin()
    watchComponents()
    loadTheme()
}
