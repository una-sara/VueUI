<template>
   <div>
       <h1>Exam07</h1>
       <!--面板-->
       <mt-tab-container v-model="active">
           <mt-tab-container-item id="tab1">首页</mt-tab-container-item>
           <mt-tab-container-item id="tab2">购物车</mt-tab-container-item>
       </mt-tab-container>
       <!--底部导航-->
       <mt-tabbar v-model="active">
           <mt-tab-item id="tab1"><img src="../../assets/01.png" slot="icon">首页</mt-tab-item>
           <mt-tab-item id="tab2"><img src="../../assets/02.png" slot="icon">购物车</mt-tab-item>
       </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {active:"tab1"}
    }
}
</script>
<style></style>