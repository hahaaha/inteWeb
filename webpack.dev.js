const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const portfinder = require('portfinder')
const server = require('./src/server/index')


let devServerConfig = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port: 8803,
        before() {
            server()
        }
    }
})

// 导出一个promise，用来异步加载prot
module.exports = new Promise((resolve,reject) => {
    portfinder.getPort(function(err,port) {
        if(err) {
            reject(err)
        } else {
        devServerConfig.devServer.port = port
        resolve(devServerConfig)
        }
    })
})