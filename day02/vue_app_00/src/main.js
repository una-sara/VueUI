import Vue from 'vue'
import App from './App.vue'
import router from './router'

//1.引入mint-ui组件库
import MintUI from "mint-ui"
//2.引入mint-ui样式
import "mint-ui/lib/style.css"
//3.注册
Vue.use(MintUI);

//引入字体图标样式
import "./font/iconfont.css"
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
