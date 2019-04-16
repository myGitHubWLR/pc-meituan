<template>
<!-- 热门城市/最近访问 -->
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item,index) in list" :key="index">{{item}}</dd>
        </dl>
    </div>

</template>

<script>
export default {
    props:[
        "title",
        "list"
    ]
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/hot.scss"
</style>