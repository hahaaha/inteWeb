const siteData = require('./siteData')
const createConfig = require('./createConfig')

module.exports = () => {
    let data  = siteData()
    data = `export default {data() {
        return {
            siteData: ${JSON.stringify(data)}
        }
    }}`
    createConfig(data,"mixin")
}
