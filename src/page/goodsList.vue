<template>
<!-- 点击搜索框 进入的产品列表页 -->
    <div class="page-product">
        <el-row >
            <my-crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <my-category />
                </el-row>
                <el-row>
                    <my-list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <my-love />
            </el-col>
        </el-row>
    </div>

</template>

<script>
// 第一行定位标题
import MyCrumbs from '@/components/Products/Crumbs.vue'
// 分类 和区域
import MyCategory from '@/components/Products/Category.vue'
// 商品信息列表
import MyList from '@/components/Products/List.vue'
// 猜你喜欢 推荐
import MyLove from '@/components/Products/Love.vue'
export default {
    components:{
        MyCrumbs,
        MyCategory,
        MyList,
        MyLove
    }
}
</script>

<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>