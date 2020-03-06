<template>
	<el-row v-loading="loading">
		<div class="adminHome">
			<el-card>commitNum: {{ commitNum }}</el-card>
			<el-card>lastCommit: {{ lastCommit }}</el-card>
			<el-card>commitNum: {{ commitNum }}</el-card>
			<el-card class="commitChartShow">
				<div class="commitChart" ref="commitChart"></div>
			</el-card>
		</div>
	</el-row>
</template>
<script>
import moment from 'moment'
export default {
	data() {
		return {
			commitNum: 0,
			lastCommit: 0,
			chartData: [],
			xData: [],
			loading: true
		}
	},
	created() {
		this.getLastCommitTime()
		this.getCommitNum()
		this.getChartData()
	},
	methods: {
		getLastCommitTime() {
			this.$axios
				.get("https://api.github.com/repos/hahaaha/inteWeb/commits?sha=dev")
				.then(data => {
					this.chartData = data.data
					let d = new Date(data.data[0].commit.author.date);
					this.lastCommit = `${d.getFullYear()}年${d.getMonth() +
						1}月${d.getDate()}日`;
				})
		},
		loadingChart(data1,data2) {
			let commitChart = this.$echarts.init(this.$refs.commitChart)
			console.log(this.xData)
			let options = {
				title: {
					text: "commit次数分布表"
				},
				// color: ["#3398DB"],
				// tooltip: {
				// 	trigger: "axis",
				// 	axisPointer: {
				// 		// 坐标轴指示器，坐标轴触发有效
				// 		type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
				// 	}
				// },
				// grid: {
				// 	left: "3%",
				// 	right: "4%",
				// 	bottom: "3%",
				// 	containLabel: true
				// },
				xAxis: [
					{
						type: "category",
						data: data1
					}
				],
				yAxis: [
					{
						type: "value"
					}
				],
				series: [
					{
						name: "提交次数",
						type: "line",
						data: data2,
						smooth: true
					}
				]
			}

			commitChart.setOption(options)
			this.loading = false
		},
		getCommitNum() {
			this.$axios
				.get("https://api.github.com/repos/hahaaha/inteWeb/stats/contributors")
				.then(data => {
					this.commitNum = data.data[0].total
				})
		},
		// 将数据格式化为echarts可用的格式
		getChartData() {
			let datas = []
			let nowDate = moment()
			this.$axios
				.get("https://api.github.com/repos/hahaaha/inteWeb/stats/participation")
				.then(data => {
					let d = data.data.all
					for(let i = 0; i < 7 ; i++) {
						let w = data.data.all[data.data.all.length - i]
						datas.push(w)
						this.xData.push(i + "week before")
					}
					console.log(datas)
					this.loadingChart(this.xData,datas)
				})
		}
	}
};
</script>
<style>
.adminHome {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.adminHome > .el-card {
	width: 30%;
	height: 80px;
}
.adminHome > .commitChartShow {
	width: 96.5%;
	height: 600px;
	margin-top: 30px;
}
.adminHome > .commitChartShow .commitChart {
	width: 95%;
	height: 500px;
	margin: auto 0;
}
</style>