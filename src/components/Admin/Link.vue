<template>
    <div>
        <h2>基础用法</h2>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
        <el-divider></el-divider>

        <h2>下划线</h2>
        <el-link :underline="false">无下划线</el-link>
        <el-link>有下划线</el-link>
    </div>
</template>