<template>
    <div class="product-app">
        <!-- 每一个商品 循环-->
        <div class="product-item" v-for="(item,index) of list" :key="index">
            <!-- 图片 -->
            <img :src="'http://127.0.0.1:8080/'+item.img_url" alt="">
            <!-- 文字 -->
            <h4>{{item.lname}}</h4>
            <!-- 价格 -->
            <div class="info">{{item.price}}</div>
            <!-- 加入购物车 -->
            <mt-button size="large">加入购物车</mt-button>
        </div>
        <!-- <mt-button @click="loadMore">下一页</mt-button> -->
        <mt-button @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{ list:[] ,pno:0 } //list保存返回来的数据
    },
    created() {
        this.loadMore(); //请求第1页数据
    },
    methods: {
        // 功能：请求第1页(下一页)数据
        loadMore(){
            var url="product";
            this.pno++;
            var obj={pno:this.pno}
            this.axios.get(url,{params:obj}).then(res=>{
                // console.log(res.data.data)
                this.list=this.list.concat(res.data.data);
            })
        }
    },
}
</script>

<style scoped>
.product-app{display:flex; padding:4px; justify-content: space-between;
 flex-wrap:wrap; /*指定子元素换行*/} 
.product-item{width:49%; border:1px solid #ccc; margin:2px 0; padding:2px; box-sizing: border-box; /*重新计算元素宽度*/ display: flex; flex-direction:column} 
.product-item img{width:100%;}
.product-item .info{color:red; font-size:20px}
.product-item h4{color:#333; font-weight:normal; padding: 0; margin: 0}
</style>
