<template>
    <div>
        <div class="top">
            <div class="logo">
                <img src="static/logo.png" alt="">
            </div>
            <div class="search">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <ul class="nav">
                <router-link class="navItem" v-for="(n,index) in siteData.Home" :key="index" :to="n" > {{index}} </router-link> 
            </ul>
        </div>
        <router-view class="mainView"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style>
.top {
    width: 100%;
    height: 50px;
    box-shadow: 0 0 9px 0 rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 100;
    display: flex;
    justify-content: center;
    line-height: 50px;
}
.top > .logo {
    margin-right: 800px;
}
.top > .logo > img {
    height: 50px;
}
.mainView{
    margin-top: 52px;
}
.top > .nav {
    margin-left: 30px;
}

.top > .nav > .navItem {
    display: inline-block;
    padding: 0 5px;
}
.top > .nav > .navItem:hover {
    background-color: royalblue;
    color: #fff;
}
</style>