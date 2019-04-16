<template>
<!-- 点击切换城市 进入的页面-->
  <div class="page-changeCity">
    <el-row>
      <my-province/>
    </el-row>
    <el-row>
      <my-hot-city title="热门城市：" :list="hotList"/>
    </el-row>
    <el-row>
      <my-hot-city title="最近访问：" :list="lastList"/>
    </el-row>
    <el-row>
      <my-category />
    </el-row>
  </div>
</template>

<script>
import api from '@/api/api.js'
// 按省份选择
import MyProvince from "@/components/ChangeCity/Province"
// 热门城市 、最近访问
import MyHotCity from "@/components/ChangeCity/HotCity"
// 按字母分类城市列表
import MyCategory from "@/components/ChangeCity/Category"
export default {
  components: {
    MyProvince,
    MyHotCity,
    MyCategory
  },
  data(){
    return{
      hotList:[],
      lastList:[]
    }
  },
  created(){
    api.getHotCity().then(res => {
      this.hotList = res.data.data.map(item => {
        return item.name
      })
    })
    api.getRecentCity().then(res => {
      this.lastList = res.data.data.map(item => {
        return item.name
      })
    })
  }
};
</script>
