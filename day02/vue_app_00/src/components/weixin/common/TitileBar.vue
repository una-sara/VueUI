<template>
  <div class="page-head">
    <span>{{leftTitle}}</span>
    <div class="right-head">
       <div class="searchdiv" @click="search">
        <img :src="rightFirstImg" style="width:25px;" />
       </div>
       <div class="searchdiv" style="margin-left:20px;" @click="add">
        <img :src="rightSecondImg" style="width:25px;margin-right:15px;"/>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"TitileBar",
  props:{
    //左侧标题文字
    leftTitle:{default:""},
    //右侧第一,二张图片
    rightFirstImg:{default:""},
    rightSecondImg:{default:""},
    //两个函数
    search:{type:Function},
    add:{type:Function}
  },
  data(){
    return {}
  }

}
</script>
<style scoped>
   /*最外层父元素*/
   .page-head{
     display: flex;
     position: fixed;
     z-index:999;
     width:100%;
     justify-content: space-between;
     align-items: center;
     background-color:#3E3A39;
     padding-left:7px;
     padding-right:7px;
     height:48px;
     color:#fff;
     font-size:18px;
   }
   .right-head{
     display: flex;
   }
   .searchdiv{
     display: flex;
     align-items: center;
     height:48px;
   }
</style>


