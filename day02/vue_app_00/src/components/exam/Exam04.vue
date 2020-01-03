<template>
    <div>
       <h1>Exam04</h1>
       <mt-switch v-model="val1" @change="change">开关</mt-switch>
       <mt-radio title="性别" :options="['男','女','未知']" v-model="val2"></mt-radio>
       <mt-button @click="getSex">获取性别</mt-button>
       <mt-radio title="年龄" :options="options" v-model="val3"></mt-radio>
       <mt-button @click="getSex2">获取年龄</mt-button>
       <!--复选框-->
       <mt-checklist title="喜欢的水果：" :options="['芒果','苹果','柚子']" v-model="val4"></mt-checklist>
       <mt-button @click="getFriut">获取水果</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
           val1:"",
           val2:"",
           val3:"",
           val4:[],
           options:[
               {label:"2019",value:18},
               {label:"2020",value:19},
               {label:"2021",value:20}
           ]
        }
    },
   methods:{
       change(){
           console.log(this.val1);
       },
       getSex(){
           console.log(this.val2);
       },
       getSex2(){
           console.log(this.val3);
       },
       getFriut(){
        console.log(this.val4);
       }
   }
}
</script>
<style></style>