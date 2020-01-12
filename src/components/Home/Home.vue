<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section section1">
            <div class="section_container">
                <h2 class="section1_h2_title" data-aos="slide-up" data-aos-offset="100" data-aos-duration="1000">本项目集成的主要框架</h2>
                <div>
                    <div class="section1_content" data-aos="slide-up" data-aos-offset="100" data-aos-duration="1000">
                        <h3>vue</h3>
                        <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架</p>
                    </div>
                </div>
                <div>
                    <div class="section1_content" data-aos="slide-up" data-aos-offset="100" data-aos-duration="1000">
                        <h3>webpack</h3>
                        <p>本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。</p>
                    </div>
                </div>
                <div>
                    <div class="section1_content" data-aos="slide-up" data-aos-offset="100" data-aos-duration="1000">
                        <h3>element</h3>
                        <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
                    </div>
                </div>
                <div>
                    <div class="section1_content" data-aos="slide-up" data-aos-offset="100" data-aos-duration="1000">
                        <h3>fullpage</h3>
                        <p>A simple and easy to use library that creates fullscreen scrolling websites</p>
                    </div>
                </div>
                <div>
                    <div class="section1_content" data-aos="slide-up" data-aos-offset="100" data-aos-duration="1000">
                        <h3>axios</h3>
                        <p>A simple and easy to use library that creates fullscreen scrolling websites</p>
                    </div>
                </div>
                <div>
                    <div class="section1_content" data-aos="slide-up" data-aos-offset="100" data-aos-duration="1000">
                        <h3>echarts</h3>
                        <p>A simple and easy to use library that creates fullscreen scrolling websites</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section2">
            <div class="section_container">
                <h2 class="section2_h2_title">自动生成路由</h2>
                <p>无需手动配置路由,根据目录结构自动生成路由</p>
            </div>
        </div>
        <div class="section section3">
            <div class="section_container">
                <h2>强大的后台系统</h2>
                <p>后台可以按需配置，同时还有很多强大的后台功能</p>
            </div>
        </div>
    </full-page>
</template>
<script>
export default {
    data() {
        return {
            options: {
                licenseKey: "",
                autoScrolling: true,
            },
            input: ""
        };
    }
};
</script>

<style>
.section {
    background-size: cover;
}
.section1 {
    background-color: #f4f4f4;
}
.section_container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    width: 1020px;
    margin: 0 auto;
    text-align: center;
}

.section_container p {
    width: 100%;
    text-align: center;
}

.section_container h2 {
    width: 100%;
    text-align: center;
    margin-top: -10%;
}
.section_container > div {
    width: 33.333%;
    text-align: center;
}
.section_container .section1_content {
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 0 5px;
    height: 150px;
}

.section2 {
    background-color: darkkhaki;
}
.section3 {
    background-color: rosybrown;
}
</style>