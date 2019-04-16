<template>
  <!-- 产品列表页：分类/区域 -->
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in classList" :key="index">
          <my-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in areaList" :key="index">
          <my-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/api.js"
import MySelect from "@/components/Products/Select.vue"
export default {
    components:{
        MySelect
    },
    data(){
        return{
            classList:[],
            areaList:[
                {
                    "title": "推荐商圈",
                    "subList": [{
                        "name": "望京",
                        "id": 120000
                    }, {
                        "name": "昌平",
                        "id": 12222
                    }] 
                },
                {
                    "title": "南岗区",
                    "subList": [{
                        "name": "中央大街",
                        "id":123
                    }, {
                        "name" : "西客站",
                        "id": 11
                    }, {
                        "name": "花园街",
                        "id":222
                    }, {
                        "name": "通乡街/果园街",
                        "id": 21
                    }, {
                        "name": "爱建社区",
                        "id": 1
                    }, {
                        "name": "学府路",
                        "id":34
                    }]
                } 
            ]
        }
    },
    created(){
        api.getClassify().then(res => {
            this.classList = res.data.data
        })
        //数据格式有问题
        // api.getArealist().then(res => {
        //     console.log(typeof res.data)
        //     console.log(res.data)
        //     let resStr = res.data
        //     let obj = JSON.parse(resStr)
        // })
    }
}
</script>

<style scoped>
</style>