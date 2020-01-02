<template>
    <div class="adminHome">
        <el-card>
            commitNum: {{ commitNum }}
        </el-card>
        <el-card>
            lastCommit: {{ lastCommit }}
        </el-card>
        <el-card>
            commitNum: {{ commitNum }}
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            commitNum: 0,
            lastCommit: 0
        }
    },
    created() {
        this.$axios
            .get('https://api.github.com/repos/hahaaha/inteWeb/commits?sha=dev')
            .then((data) => {
                console.log(data.data)
                this.commitNum = data.data.length
                let d = new Date(data.data[0].commit.author.date)
                this.lastCommit = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`
            })
    }
}
</script>
<style>
.adminHome {
    display: flex;
    justify-content: space-around;
}
.adminHome > .el-card {
    width: 30%;
    height: 80px;
}
</style>