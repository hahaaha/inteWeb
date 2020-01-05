<template>
    <div>
        <h2>进度条</h2>
        <el-divider></el-divider>
        <div class="progress_show _show">
            <div>
                <h1>线形进度条</h1>
                <el-progress :percentage="50"></el-progress>
                <el-progress :percentage="100" :format="format"></el-progress>
                <el-progress :percentage="100" status="success"></el-progress>
                <el-progress :percentage="100" status="warning"></el-progress>
                <el-progress :percentage="50" status="exception"></el-progress>
            </div>

            <div class="circle">
                <h1>环形进度条</h1>
                <el-progress type="circle" :percentage="0"></el-progress>
                <el-progress type="circle" :percentage="25"></el-progress>
                <el-progress type="circle" :percentage="100" status="success"></el-progress>
                <el-progress type="circle" :percentage="70" status="warning"></el-progress>
                <el-progress type="circle" :percentage="50" status="exception"></el-progress>
            </div>

            <div>
                <h1>仪表盘进度条</h1>
                <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
                <div>
                    <el-button-group>
                        <el-button icon="el-icon-minus" @click="decrease"></el-button>
                        <el-button icon="el-icon-plus" @click="increase"></el-button>
                    </el-button-group>
                </div>
            </div>
        </div>

        <h2>Tag 标签</h2>
        <el-divider></el-divider>
        <div class="show_Tag _show">
            <div>
                <h1>基础用法</h1>
                <el-tag>标签一</el-tag>
                <el-tag type="success">标签二</el-tag>
                <el-tag type="info">标签三</el-tag>
                <el-tag type="warning">标签四</el-tag>
                <el-tag type="danger">标签五{{ one.test }}</el-tag>
                
            </div>
        </div>
    </div>
</template>
<script>
const tt = require("../../data/index.json")
export default {
    data() {
        return {
            one: tt,
            percentage: 10,
            colors: [
                { color: "#f56c6c", percentage: 20 },
                { color: "#e6a23c", percentage: 40 },
                { color: "#5cb87a", percentage: 60 },
                { color: "#1989fa", percentage: 80 },
                { color: "#6f7ad3", percentage: 100 }
            ]
        };
    },
    methods: {
        format(percentage) {
            return percentage === 100 ? "满" : `${percentage}%`;
        },
        increase() {
            this.percentage += 10;
            if (this.percentage > 100) {
                this.percentage = 100;
            }
        },
        decrease() {
            this.percentage -= 10;
            if (this.percentage < 0) {
                this.percentage = 0;
            }
        }
    }
};
</script>
<style>
._show {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.progress_show {
    
}
.progress_show > div {
    width: 400px;
}
.progress_show > .circle {
    width: 800px;
}
</style>