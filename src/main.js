// 入口代码
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import './assets/styles/normalize.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
// 解决移动端按钮点击事件300毫秒的延迟
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的不同,返回不同的内容给用户
