<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="total"></el-pagination>
    </div>
</template>
<script>
import tableData from '@/data/tables.json'
export default {
    data() {
        return tableData
    },
    computed: {
        total() {
            return this.tableData.length
        }
    }
};
</script>