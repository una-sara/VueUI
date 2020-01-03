<template>
    <div>
        <h1>Exam03</h1>
        <!--表单输入框  用户名 密码 年龄-->
        <mt-field label="用户名" placehodler="请输入用户名" type="text" v-model="uname" :attr="{maxlength:15}"></mt-field>
        <mt-field label="密码" placehodler="请输入密码" type="password" v-model="upwd"></mt-field>
        <mt-field label="年龄" placehodler="请输入年龄" type="number" v-model="age"></mt-field>
        <mt-button @click="reg" size="large">注册</mt-button>
    </div>
</template>
<script>
export default {
    data(){
       return {uname:"",upwd:"",age:""}
    },
    methods:{
         reg(){
             console.log('注册成功');
         }
    }
}
</script>
<style></style>