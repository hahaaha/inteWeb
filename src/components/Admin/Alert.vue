<template>
    <div>
        <h1>基本用法</h1>
        <div class="show_frame">
            <el-alert title="成功提示的文案" type="success"></el-alert>
            <el-alert title="消息提示的文案" type="info"></el-alert>
            <el-alert title="警告提示的文案" type="warning"></el-alert>
            <el-alert title="错误提示的文案" type="error"></el-alert>
        </div>
    </div>
</template>
<style>
.show_frame {
    border: 1.5px solid silver;
    border-radius: 5px;
    padding: 25px 18px 20px;
}
.show_frame > .el-alert {
    margin-bottom: 10px;
}
</style>