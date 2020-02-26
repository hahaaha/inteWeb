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
                <router-link v-for="(n,index) in nav" :key="index" :to="n.path" > <el-link> {{n.name}} </el-link> </router-link> 
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            nav:''
        }
    },
    created() {
        console.log(this.siteData)
        this.siteData.forEach(element => {
            if(element.name === "Home") {
                this.nav = element.child
            }
        });
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
.top > .nav .el-link{
    margin-right: 6px;
    font-size: 16px;
    line-height: normal;
}
</style>