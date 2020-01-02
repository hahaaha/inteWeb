<template>
  <div class="adminHome">
    <el-card>commitNum: {{ commitNum }}</el-card>
    <el-card>lastCommit: {{ lastCommit }}</el-card>
    <el-card>commitNum: {{ commitNum }}</el-card>
    <el-card class="commitChartShow">
      <div class="commitChart" ref="commitChart"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commitNum: 0,
      lastCommit: 0
    };
  },
  created() {
    this.$axios
      .get("https://api.github.com/repos/hahaaha/inteWeb/commits?sha=dev")
      .then(data => {
        console.log(data.data);
        this.commitNum = data.data.length;
        let d = new Date(data.data[0].commit.author.date);
        this.lastCommit = `${d.getFullYear()}年${d.getMonth() +
          1}月${d.getDate()}日`;
      })
  },
  mounted() {
    let commitChart = this.$echarts.init(this.$refs.commitChart);
    commitChart.setOption({
      title: {
        text: "commit次数分布表"
      },
      color: ["#3398DB"],
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    })
  },
  methods: {
    getChartData(source) {
      let data = []
      source.forEach(element => {
        data.push(element.author.date)
      })
      // TODO: 考虑是否直接变成string类型进行比较
      // TODO: 需要编写一个格式化date的函数
      let temp = data
      data = []
      temp.forEach(element => {
        let num = 0
        if(data.length === 0) {
          data.push([])
        }
        data.forEach(e => {
          if(compareDate(e,element)) {

          }
        })
      }) 
    },
    /**
     * return boolean
     */
    compareDate(date1,date2) {
      if(date1.getFullYear() === date2.getFullYear()) {
        if(date1.getMonth() === date2.getMonth()) {
          if(date1.getDate() === date2.getDate()) {
            return true
          }
        }
      }
      return false
    }

  }
}
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