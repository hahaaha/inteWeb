<template>
  <div class="chartShow" style="display: flex">
    <div style="width: 500px;height:500px" ref="chart"></div>
    <div style="width: 500px;height:500px" ref="chart1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d: []
    };
  },
  methods: {
    initCharts() {
      let myChart = this.$echarts.init(this.$refs.chart);
      myChart.setOption({
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {},
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            data: this.d
          }
        ]
      });
    },
    initCharts1() {
      let data = [];
      for (var i = 0; i <= 360; i++) {
        var t = (i / 180) * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
      let myChart1 = this.$echarts.init(this.$refs.chart1);
      myChart1.setOption({
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      });
    }
  },
  mounted() {
    for (var i = 0; i <= 100; i++) {
      var theta = (i / 100) * 360;
      var r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
      this.d.push([r, theta]);
    }
    this.initCharts();
    this.initCharts1();
  }
};
</script>
<style>
.chartShow {
    background-color:#bdc3c7;
}
</style>