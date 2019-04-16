<template>
    <div class="page-detail">
        <el-row>
            <my-crumbs />
        </el-row>
        <el-row></el-row>
        <el-row></el-row>
    </div>

</template>

<script>
import MyCrumbs from "@/components/ProductDetail/Crumbs.vue"
export default {
    components:{
        MyCrumbs
    }
}
</script>

<style lang="scss">
@import "@/assets/css/detail/index.scss";
</style>    