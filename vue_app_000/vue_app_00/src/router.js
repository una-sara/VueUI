import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//1:引入自定义组件
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from "./components/exam/Exam02.vue"

Vue.use(Router)
export default new Router({
  routes: [
    //2:为自定义组件指定路径  //3.浏览器http://127.0.0.1:3001/#/Exam01
    {path:'/Home',component:Home},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/',component:HelloContainer},
  ]
})
