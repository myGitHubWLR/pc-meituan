<template>
<!-- 头部导航条 -->
    <el-row class="m-header-topbar m-header">
        <el-col :span="10">
            <geo-left />
        </el-col>
        <el-col :span="14">
            <nav-right />
        </el-col>
    </el-row>

</template>

<script>
// 导航条部分：左右两部分插件
import GeoLeft from '@/components/TopBar/Geo'
import NavRight from '@/components/TopBar/Nav'
export default {
    components:{
        GeoLeft,
        NavRight
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss';
</style>