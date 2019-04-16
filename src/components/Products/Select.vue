<template>
<!-- 产品列表页：分类/区域组件 -->
<div class="m-product-select">
    <dl class="tab">
        <dt>{{name}}
            <i class="el-icon-caret-bottom"></i>
        </dt>
        <dd>
            <p class="select-title">
                {{name}}
            </p>
            <span v-for="(item,index) in list" :key="index">{{item.name}}</span>
        </dd>
    </dl>
</div>

</template>

<script>
export default {
    props:["name","list"]
}
</script>

<style scoped>

</style>