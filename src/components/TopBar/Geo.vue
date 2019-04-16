<template>
<!-- 导航条左侧 -->
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name:'changecity'}">
                切换城市
            </router-link>
            [<a href="#" v-for="(item,index) in nearCity" :key="index"> {{item.name}} </a>]
            
        </div>
        <div class="m-user" v-if="!storeUserName">
            <router-link class="login" :to="{name:'login'}">
                立即登录
            </router-link>
            <router-link class="register" :to="{name:'register'}">
                注册
            </router-link>
        </div>
        <div class="m-user" v-if="storeUserName">   
            <router-link class="login" :to="{name:'login'}">
                {{storeUserName}}
            </router-link>
            <router-link class="register" :to="{name:'index'}">
                退出
            </router-link>
        </div>
    </div>

</template>

<script>
import api from "@/api/api.js"
export default {
    data(){
        return{
            nearCity:[],
            storeUserName:this.$store.state.userName
        }
    },
    created(){
        api.getCurPosition().then(res => {
            this.$store.dispatch('setAsynPosition',res.data.data)
            this.nearCity = res.data.data.nearCity
        })
    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>