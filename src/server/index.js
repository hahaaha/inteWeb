const createRouter = require('./createRouter')
const createMixin = require('./createMixin')
const watchComponents = require('./watchComponents')

module.exports = function() {
    createRouter()
    createMixin()
    watchComponents()
}
