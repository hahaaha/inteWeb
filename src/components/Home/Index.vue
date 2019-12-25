<template>
    <div>
        <div class="top">
            <div class="logo">logo</div>
            <div class="search">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <ul class="nav">
                <router-link class="navItem" v-for="(n,index) in siteData" :key="index" :to="n.path" > {{n.name}} </router-link> 
            </ul>
        </div>
        <router-view class="mainView"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                licenseKey: '',
                autoScrolling:true,
                loopTop: true,
                loopBottom: true,
                scrollBar: true,
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
            },
            input: ''
        }
    },
    computed: {
        currentComponent() {
            return "Photo"
        }
    }
}
</script>

<style>
.top {
    width: 100%;
    height: 50px;
    border-bottom: 2px brown solid;
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
.mainView{
    margin-top: 52px;
}
.top > .nav {
    margin-left: 30px;
}
.top > .nav > router-link {
    cursor: pointer;
}
.section{
    background-size: cover;
}
.section1 {
    background-color: rosybrown;
    background-image: url('../../img/one.jpeg');
}
.section2 {
    background-color: darkkhaki;
    background-image: url('../../img/two.jpg');
}
.section3 {
    background-color: rosybrown;
    background-image: url('../../img/three.jpg');
}
.section4 {
    background-color: darkkhaki;
    background-image: url('../../img/four.jpeg');
}
</style>