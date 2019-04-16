
<template>
<!-- 页面共用部分 header main footer -->
  <div class="layout-default">
    <el-container>
      <el-header height="">
          <my-header />
      </el-header>
      <el-main >
        <router-view></router-view>
      </el-main>
      <el-footer height="">
         <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/index.vue'
import MyFooter from '@/components/Footer/Footer.vue'
export default {
    components:{
        MyHeader,
        MyFooter
    }
};
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>