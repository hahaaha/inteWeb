<template>
    <div>
        <el-carousel height="500px">
            <el-carousel-item v-for="(item,index) in items" :key="index">
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
        <el-image class="showImg" :fit="fit" v-for="(item,index) in items" :key="index" :src="item"></el-image>
    </div>
</template>

<script>
import one from "../img/one.jpeg"
import two from "../img/two.jpg"
import three from "../img/three.jpg"
export default {
    data() {
        return {
            items: [one,two,three],
            fit: "fill"
        }
    }
}
</script>
<style>
.showImg {
    width: 33.33333%;
    height: 420px;
}
.el-carousel__item img {
    width: 100%;
    height: auto;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>