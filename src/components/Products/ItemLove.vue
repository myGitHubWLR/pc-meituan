<template>
<!-- 猜你喜欢的每个商家信息 -->
    <div class="recommend-box">
        <router-link :to="{name: 'productDeatil'}" class="recommend-card-box">
            <div>
                <img :src="recommend.imgUrl" alt="图片">
            </div>
            <div class="info-box">
                <p>
                    <span class="title">{{recommend.title}}</span>
                </p>
                <p>
                    <el-rate
                        v-model="recommend.score"
                        disabled
                        text-color="#ff9900"
                        >
                    </el-rate>
                    <span class="comment-number">{{recommend.commentNum}}个评价</span>
                </p>
                <p>
                    <span class="areaName">{{recommend.areaName}}</span>
                </p>
                <p class="price-color">
                    <span class="yuan">￥</span>
                    <span class="price-number">{{recommend.lowPrice}}</span>
                    <span class="price-desc">起</span>
                </p>
            </div>

        </router-link>
    </div>

</template>

<script>
export default {
    props:["recommend"]
}
</script>

<style scoped>

</style>