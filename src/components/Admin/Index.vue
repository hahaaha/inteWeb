<template>
    <el-container>
        <el-aside width="200px" style="background-color:#8854d0">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                        :default-active="defaultActive"
                        class="el-menu-vertical-demo"
                        :router="isRouter"
                        background-color="#8854d0"
                    >
                        <el-menu-item :index="n" v-for="(n,index) in siteData.Admin" :key="index">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{ index }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container style="margin-left: 200px">
            <el-header class="adminHeader">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar :src="circleUrl"></el-avatar>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        };
    },
    computed: {
        defaultActive() {
            return Object.values(this.siteData.Admin)[0];
        },
        isRouter() {
            return true;
        }
    }
};
</script>

<style>
#admin {
    width: 1100px;
    margin: 0 auto;
}
#admin > .nav {
    width: 150px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: auto;
}
#admin > .nav > ul {
    padding-bottom: 50px;
}
#admin > .nav > ul > .navItem {
    list-style: none;
    padding: 2px 0;
}
#admin > .nav > ul > .navItem > a {
    color: #444;
}
#admin > .nav .navItem:hover > a {
    color: aqua;
}
#admin > .pageContent {
    margin-left: 160px;
}

.adminHeader {
    box-shadow: 1px 1px 5px 1px #444;
    line-height: 60px;
    display: flex;
    justify-content: flex-end;
    border-radius: 1px;
}
.adminHeader .el-avatar {
    margin-top: 10px;
}
.el-aside {
    overflow: auto;
    height: 100%;
    position: fixed;
    top: 0;
}
</style>