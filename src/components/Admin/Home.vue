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
			loading: true
		}
	},
	created() {
		this.getLastCommitTime()
		this.getCommitNum()
		this.getCommitData()
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
		loadingChart(data) {
			let commitChart = this.$echarts.init(this.$refs.commitChart)
			let options = {
				title: {
					text: "commit次数分布表"
				},
				color: ["#3398DB"],
				dataset: {
					source: data
				},
				tooltip: {
					trigger: "axis",
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: "3%",
					right: "4%",
					bottom: "3%",
					containLabel: true
				},
				xAxis: [
					{
						type: "category",
						axisTick: {
							alignWithLabel: true
						}
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
						type: "bar",
						barWidth: "60%"
					}
				]
			}

			commitChart.setOption(options)
			this.loading = false
		},
		async getCommitNum() {
			let n = 1
			let i = 1
			let end = 1
			while (end == 1) {
				await this.$axios
					.get("https://api.github.com/repos/hahaaha/inteWeb/commits?sha=dev&page=" + i)
					.then(data => {
						n = data.data.length
						if (n == 0) {
							end = 0
						}
					})
				this.commitNum = this.commitNum + n
				i++
			}
		},
		compareIsSeven(data) {
			let sevenDay = moment().subtract(7, 'days')
			let froentTime = data.data[data.data.length - 1].commit.author.date
			let isSeven = moment(froentTime).isBefore(sevenDay, "days")
			return isSeven
		},
		async getCommitData(i = 1, isSeven = false, commitData = []) {
			console.log(isSeven)
			if (isSeven) {
				console.log(commitData)
				let ddd = this.getChartData(commitData)
				this.loadingChart(ddd)
				return 
			}
			let data = await this.$axios
				.get("https://api.github.com/repos/hahaaha/inteWeb/commits?sha=dev&page=" + i)

			commitData = commitData.concat(data.data)

			isSeven = this.compareIsSeven(data)

			this.getCommitData(i + 1, isSeven, commitData)
		},
		// 将数据格式化为echarts可用的格式
		getChartData(source) {
			let data = []
			let nowDate = moment()
			for (let i = 0; i < 7; i++) {
				let arr = [nowDate.subtract(1, "days").format("YYYY-MM-DD"), 0]
				data.push(arr)
			}
			data.forEach((e, eIndex) => {
				source.forEach(ele => {
					let eleDate = ele.commit.committer.date
					if (moment(e[0]).isSame(moment(eleDate), "days")) {
						data[eIndex][1] = data[eIndex][1] + 1
					}
				})
			})

			return data
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