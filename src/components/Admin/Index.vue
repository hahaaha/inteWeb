<template>
    <el-container>
        <el-aside width="200px">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                        :default-active="defaultActive"
                        class="el-menu-vertical-demo"
                        :router="isRouter"
                        background-color="#52616b"
                        active-text-color="#c9d6df"
                    >
                        <el-menu-item :index="n" v-for="(n,index) in siteData.Admin" :key="index">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{ index }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container class="admin_mainContent">
            <el-header class="adminHeader">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar src="static/head.png"></el-avatar>
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
.el-container {
    background-color: #f0f5f9;
}
/* .admin_mainContent {
    position: fixed;
    z-index: -1;
    height: 100%;
} */
.el-menu {
    border: hidden;
}
.el-aside {
    overflow: auto;
    background-color: #52616b;
    height: 100vh;
    border-right: solid 1px #e6e6e6;
}
</style>