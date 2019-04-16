<template>
<!-- 按省份选择 -->
  <div>
    <span class="name">按省份选择：</span>
    <my-select
      :list="provinceList"
      :value="province"
      title="省份"
      :showActive="provinceActive"
      @change_active="changeProv"
      @change="changeProvName"
      className="prov"
    />
    <my-select
      :list="cityList"
      :value="city"
      title="城市"
      :showActive="cityActive"
      @change_active="changeCity"
      @change="changeCityName"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import api from '@/api/api.js'
// 省份/城市选择 组件
import MySelect from "./Select.vue"
export default {
  components: {
    MySelect
  },
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      searchList:["北京", "上海", "石家庄", "哈尔滨", "天津"],
      searchWord:"",
      loading:false,
      provinceActive: false,
      cityActive: false,
      cityDisabled:true
    };
  },
  created(){
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      })
    })
  },
  methods: {
    // 判断是否显示各个省份/城市的内容框
    changeProv(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCity(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    // 点击省份/城市 动态改变select内的名字
    changeProvName(item){
      this.province = item.name;
        this.cityDisabled = false;
        this.cityList = item.cityInfoList;
    },
    changeCityName(item){
      this.city = item.name
      this.$store.dispatch('setAsynPosition',item)
      //跳转到首页
      this.$router.push({name:'index'})
    },
    // 远程搜索
    remoteMethod(){
      //ajax请求后端接口
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>