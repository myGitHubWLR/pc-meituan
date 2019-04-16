<template>
<!-- 猜你喜欢 -->
    <div class="m-products-love">
        <el-row>
            <img src="https://ss1.baidu.com/5aR1cTe9KgQFm2e88IuM_a/it?qt=spg&c=131&coord=L|12952718.06,4851117.26;12939963.71,4870946.20;12950981.35,4850609.15;12943363.78,4862881.41;12942218.62,4860206.62;" alt="">
        </el-row>
        <el-row>
            <div class="top-nav-box">猜你喜欢</div>
            <item-love :recommend="item" v-for="item in loveList" :key="item.itemId"/>
        </el-row>
    </div>
</template>

<script>
import api from "@/api/api.js"
import ItemLove from './ItemLove.vue'
export default {
    components:{
        ItemLove
    },
    data(){
        return{
            loveList:[
                {
                "itemId": "2412338",
                "title": "金真子纸上烤肉（双桥店）",
                "imgUrl": "https://p0.meituan.net/msmerchant/feb8b4ba26208b539ac56d9995bf63a595556.jpg@190w_106h_1e_1c",
                "score": 4.5,
                "consumeNum": null,
                "areaName": "双桥",
                "lowPrice": "58.0",
                "saleNum": null,
                "commentNum": 16449,
                "detailUrl": "",
                "firstCate": [
                    1,
                    20632,
                    20426,
                    20557
                ],
                "avgPrice": 59
                },
                {
                    
                "areaName": "回龙观",
                "avgPrice": 25,
                "commentNum": 308,
                "consumeNum": null,
                "detailUrl": "",
                "firstCate":[1, 20426, 20557],
                "imgUrl": "https://p0.meituan.net/msmerchant/3e524667fa9dd782177526361a74232163537.jpg@190w_106h_1e_1c",
                "itemId": "163407528",
                "lowPrice": "21.0",
                "saleNum": null,
                "score": 4.0,
                "title": "犟骨头排骨饭（回龙观龙禧店）",
                }
            ]
        }
    },
    //数据格式有问题
    // created(){
    //     api.getRecomment().then(res => {
    //         console.log(res.data.data)
    //         // this.loveList = res.data.data
    //     })
    // }
}
</script>

<style lang="scss">
@import "@/assets/css/products/love.scss";
</style>