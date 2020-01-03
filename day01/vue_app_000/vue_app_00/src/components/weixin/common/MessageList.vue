<!--MessageList.vue-->
<template>
  <div>
     <message
      class="itemstyle"
      v-for="(item,index) in datas.data"
      :key="index"
      :id="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :imgurl="require('../../../assets/a_7.png')"
      :itemClick="clickitem"
     ></message>
     
  </div>
</template>
<script>
//负责引入Message子组件
import  Message from "./Message"
//负责引入json文件
import messagejson from "../json/messagelist.json"
export default {
  data(){
    return {
      datas:messagejson
    }
  },
  created(){
    console.log(123);
    //for(var item of this.datas){
    //   item.cb  = reqiure(item.img);
   //    console.log(cb);
   //    console.log(item.img);
   // }
  },
  methods: {
    clickitem(id){
      console.log(id);
    }
  },
  components:{
    "message":Message
  }
}
</script>
<style scoped>
  .itemstyle{
    padding-left:5px;
    padding-right:5px;
    padding-top:5px;
    padding-bottom:5px;
    border-bottom:1px solid #d9d9d9;
  }
</style>
