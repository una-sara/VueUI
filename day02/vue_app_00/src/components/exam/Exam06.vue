<template>
   <div>
       <h1>Exam06</h1>
       <!--父面板-->
       <mt-button @click="active='tab1'">美食</mt-button>
       <mt-button @click="active='tab2'">购物</mt-button>
       <mt-button @click="active='tab3'">休闲</mt-button>
    <mt-tab-container v-model="active">
         <mt-tab-container-item id="tab1">美食</mt-tab-container-item>
         <mt-tab-container-item id="tab2">购物</mt-tab-container-item>
         <mt-tab-container-item id="tab3">休闲</mt-tab-container-item>
    </mt-tab-container>
</div>

</template>
<script>
export default {
    data(){
        return {
            active:""
        }
    }

}
</script>
<style></style>