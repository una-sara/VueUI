import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
// 1:引入自定义组件
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Exam04 from "./components/exam/Exam04.vue"
import Exam05 from "./components/exam/Exam05.vue"
import Exam06 from "./components/exam/Exam06.vue"
import Exam07 from "./components/exam/Exam07.vue"
import Fa08 from "./components/exam/Fa08.vue"
import Fa09 from "./components/exam/Fa09.vue"
import Home2 from "./components/message/Home2.vue"
import MessageList from "./components/message/common/MessageList.vue"
import Login from "./components/xz/Login.vue"

Vue.use(Router)
export default new Router({
  routes: [
    //2:为自定义组件指定路径  //3:浏览器：http://127.0.01:3001/#/Exam01
    {path:'/Login',component:Login},
    {path:'/MessageList',component:MessageList},
    {path:'/Home2',component:Home2}, //微信首页
    {path:'/Fa09',component:Fa09},
    {path:'/Fa08',component:Fa08},
    {path:'/Exam07',component:Exam07},
    {path:'/Exam06',component:Exam06},
    {path:'/Exam05',component:Exam05},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam01',component:Exam01},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
