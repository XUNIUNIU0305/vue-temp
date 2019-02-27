'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 开发环境请求地址  
  // 示例 "/api/bigdata/streets/weifang/"  api为请求跨域代理的路径
  API_HOST: ''
})
