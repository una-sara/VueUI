<template>
    <div>
        <h1>父组件</h1>
        <sub08></sub08>
    </div>
</template>
<script>
  //1.引入子组件
  import Sub08 from './Sub08.vue'
  export default {
      data(){
          return {
         
          }
      },
      //2.注册组件
      components:{
          "sub08":Sub08
      }
  }
</script>
<style></style>