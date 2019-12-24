const siteData = require('./siteData')
const createConfig = require('./createConfig')

module.exports = () => {
    let data  = siteData()
    data = `export default {data() {
        return {
            siteData: ${JSON.stringify(data)}
        }
    }}`
    console.log(data)
    // let content = `{
    //     ${data.map(value => {
    //         return fromatRoute(value)
    //     })}
    //   }`
    // // data() {
    //     // return {

    //     }
    // }
    createConfig(data,"mixin")
}

function fromatRoute(route) {
    return `{
        path:"${route.path}",
        component: ${route.component}
    }`
}