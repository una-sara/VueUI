<template>
   <div>
    <h1>我的第一个Exam01组件</h1>  
     <h2>welcome</h2>  
   </div> 
</template>
<script>
export default{
    created(){
        //this 指当前组件对象
        this.$toast({message:"提交成功",position:"middle"})
    }

}
</script>
<style></style>