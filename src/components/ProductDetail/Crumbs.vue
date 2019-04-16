<template>
<!-- 产品列表页的第一行 -->
  <div class="m-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>{{cityPosition}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{cityPosition}}美食</el-breadcrumb-item>
      <el-breadcrumb-item>{{cityPosition}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed: {
        cityPosition(){
            return this.$store.state.position.name
        },
        
    },
    // created(){
    //   console.log(this.$route)
    // }
};
</script>

<style scoped>
</style>
