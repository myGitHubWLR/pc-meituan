<template>
  <!-- 轮播图 -->
  <div class="slide">
    <el-carousel >
      <el-carousel-item v-for="item in imageList" :key="item.img">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imageList:[
                {
                    url:'adff',
                    img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                },
                {
                    url:'sfslc',
                    img:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
                }
            ]
        }
    }
};
</script>

<style scoped>
</style>