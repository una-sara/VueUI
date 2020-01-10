<template>
    <div>
        <h1>登录页面</h1>
        <!-- 用户名的输入框 -->
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
        <!-- 密码的输入框 -->
        <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
        <!-- 登录按钮 单击事件 -->
        <mt-button size="large" @click="login">登 录</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            uname:"",//用户名
            upwd:""//密码
        }
    },
    methods: {
        login(){
            // 1.获取用户名和密码
            // 2.格式：创建正则表达式 3-12位数 字母数字
            // 3.判断用户名 用户名提示 toast
            // 4.判断用户名 密码提示
            // 5.发送请求 axios
            // 6.响应数据(接收后台返回来的数据)
            // 7.失败 提示
            // 8.成功 跳转
        }
    },
}
</script>