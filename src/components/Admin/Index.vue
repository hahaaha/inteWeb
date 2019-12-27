<template>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            :router="isRouter"
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
            <div>头像</div>
        </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  computed: {
      defaultActive() {
          return Object.values(this.siteData.Admin)[0]
      },
      isRouter() {
          return true
      }
  }
}
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
.el-aside {
  overflow: auto;
  height: 100%;
  position: fixed;
  top: 0;
}
</style>