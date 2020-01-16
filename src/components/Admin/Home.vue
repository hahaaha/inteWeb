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
		this.$axios
			.get("https://api.github.com/repos/hahaaha/inteWeb/commits?sha=dev")
			.then(data => {
				this.commitNum = data.data.length;
				this.chartData = data.data;
				let d = new Date(data.data[0].commit.author.date);
				this.lastCommit = `${d.getFullYear()}年${d.getMonth() +
					1}月${d.getDate()}日`;
			})
	},
	mounted() {
		let commitChart = this.$echarts.init(this.$refs.commitChart)
		this.$axios
			.get("https://api.github.com/repos/hahaaha/inteWeb/commits?sha=dev")
			.then(data => {
				let options = {
					title: {
						text: "commit次数分布表"
					},
					color: ["#3398DB"],
					dataset: {
						source: this.getChartData(data.data)
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
			});
	},
	methods: {
		getChartData(source) {
			let data = [];
			source.forEach(element => {
				data.push(element.commit.author.date);
			})
			let temp = data;
			data = [];
			temp.forEach(element => {
				let num = 0;
				let tag = true;
				if (data.length === 0) {
					data.push([this.formateDate(element), 1]);
				} else {
					data.some(e => {
						if (this.compareDate(e[0], this.formateDate(element))) {
							e[1] = e[1] + 1;
							tag = false;
							return true;
						}
					});
					if (tag) {
						data.push([this.formateDate(element), 1])
					}
				}
			});
			return data;
		},
		/**
		 * 比较两个日期是否相同
		 * return boolean
		 */
		compareDate(date1, date2) {
			if (date1 === date2) return true;
			else return false;
		},
		/**
		 * 格式化Date
		 */
		formateDate(date) {
			let d = new Date(date);
			let year = d.getFullYear();
			let month = d.getMonth() + 1;
			let day = d.getDate();
			let time = `${year}年${month}月${day}日`;
			return time;
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