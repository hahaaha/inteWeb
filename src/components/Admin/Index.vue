<template>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
          <div>
              test
          </div>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <!-- <div id="admin">
        <div class="nav">
            <ul>
                <li class="navItem" v-for="(n,index) in nav" :key="index"><router-link to="/Home">{{ n }}</router-link></li>
            </ul>
        </div>
        <div class="pageContent">
            <h1>测试</h1>
            <el-collapse>
  <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
        </div>
  </div>-->
</template>
<script>
import one from "../../img/one.jpeg"
export default {
  data() {
    return {
      nav: [
        "布局1",
        "色彩",
        "字体",
        "边框",
        "图标",
        "布局",
        "色彩",
        "字体",
        "边框",
        "图标",
        "布局",
        "色彩",
        "字体",
        "边框",
        "图标",
        "布局",
        "色彩",
        "字体",
        "边框",
        "图标",
        "布局",
        "色彩",
        "字体",
        "边框",
        "图标",
        "布局",
        "色彩",
        "字体",
        "边框",
        "图标",
        "布局",
        "色彩",
        "字体",
        "边框",
        "图标",
        "布局",
        "色彩",
        "字体",
        "边框",
        "图标"
      ]
    };
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
</style>