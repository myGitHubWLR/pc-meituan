<template>
  <!-- 产品列表页：商家信息列表 -->
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active':item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <my-item v-for="(item,index) in productsList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import MyItem from "./Item.vue"
import api from '@/api/api.js'
export default {
    components:{
        MyItem
    },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "价格最高",
          active: false
        }
      ],
      productsList: []
    };
  },
  created(){
    api.getProductsList().then(res => {
      this.productsList = res.data.data
    })
  }
};
</script>

<style scoped>
</style>