<template>
   <div>
       <h1>第2个vue组件</h1>
       <button @click="handle1">提示框</button>
       <button @click="handle2">消息框</button>
       <button @click="handle3">确认消息框</button>
       <button @click="handle4">输入框</button>
   </div>
</template>
<script>
export default {
    methods:{
        handle4(){//输入框
            this.$messagebox.prompt("请输入年龄")
            .then(value=>{
                console.log(value);
            })
        },
        handle3(){//确认消息框
          console.log(1);
          this.$messagebox.confirm("是否删除?")
          .then(res=>{
              console.log(res);
              console.log("确认");
          }).catch(err=>{
              console.log(err);
              console.log("取消");
          })
          console.log(2);
          console.log(3);
        },
         handle2(){//消息框
        //this.$messagebox("消息框","已删除")
        this.$messagebox({
            title:"提示",
            message:"已删除",
            showConfirmButton:true,
            showCancelButton:true
          })
        },
        handle1(){
            this.$toast({
                message:"删除成功",
                position:"top",
                iconClass:"iconfont icon-chenggong"
            })
        }
    }
}
</script>
<style></style>
