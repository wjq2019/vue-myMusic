/*
 * @Author: your name
 * @Date: 2020-04-08 10:51:04
 * @LastEditTime: 2020-04-13 11:23:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\main.js
 */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'
Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
