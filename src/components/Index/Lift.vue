<template>
<!-- 首页中间图片与登录/注册部分 -->
    <div class="m-life">   
        <el-row>
            <ul class="nav">
                <li>
                    <router-link to="/" class="takeout">美团外卖</router-link>
                </li>
                <li>
                    <router-link to="/" class="">猫眼电影</router-link>
                </li>
                <li>
                    <router-link to="/" class="">美团酒店</router-link>
                </li>
                <li>
                    <router-link to="/" class="apartmen">民宿/公寓</router-link>
                </li>
                <li>
                    <router-link to="/" class="business">商家入驻</router-link>
                </li>
                <li>
                    <router-link to="/" class="">美团公益</router-link>
                </li>
            </ul>
        </el-row>
        <el-row>
            <el-col :span="14">
                <my-slide />
            </el-col>
            <el-col :span="4">
                <div class="m-life-pic">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="m-life-login">
                    <h4>
                        <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg">
                    </h4>
                    <p class="m-life-login-name">Hi! {{storeUserName? storeUserName : '你好'}}</p>
                    <p v-if="!storeUserName">
                        <router-link :to="{name:'register'}">
                            <el-button round>注册</el-button>
                        </router-link>
                    </p>
                    <p v-if="!storeUserName">
                        <router-link :to="{name:'login'}">
                            <el-button round>立即登录</el-button>
                        </router-link>
                    </p>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <div class="m-life-hotel"></div>
            </el-col>
            <el-col :span="7">
                <div class="m-life-music"></div>
            </el-col>
            <el-col :span="4">
                <div class="m-life-coop"></div>
            </el-col>
            <el-col :span="6">
                <div class="m-life-downapp">
                    <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                    <p>美团APP手机版</p>
                    <p>
                        <span class="red">一元起</span>
                        <span>吃喝玩乐</span>
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
// 轮播图组件
import MySlide from './Slide.vue'
export default {
    components:{
        MySlide
    },
    data(){
        return{
            storeUserName:this.$store.state.userName
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/life.scss';
</style>