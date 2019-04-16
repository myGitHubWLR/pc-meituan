<template>
<!-- 页面头部 导航条加搜索 -->
  <div class="m-header">
    <el-row>
      <top-bar/>
    </el-row>
    <el-row>
      <search-bar/>
    </el-row>
  </div>
</template>

<script>
// header部分：index.vue为总，topBar和search作为组件引入,再将index.vue引入到default.vue中
import TopBar from "./TopBar.vue";
import SearchBar from "./SearchBar.vue";
export default {
  components: {
    TopBar,
    SearchBar
  }
};
</script>

<style lang="scss">
  @import '@/assets/css/public/header/index.scss';
</style>