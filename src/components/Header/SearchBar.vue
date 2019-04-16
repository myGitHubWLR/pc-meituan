<template>
<!-- input 热门搜索部分 -->
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <div class="hotWord">
              <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goodsList', params:{name:item}}" >{{item}}</router-link>
              </dd>
            </div>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goodsList', params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/api.js"
export default {
  created(){
    api.searchHotWords().then(res => {
      this.hotPlaceList = res.data.data
      this.suggestList = res.data.data
    })
  },
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList:[],
      searchList:[],
      suggestList:[]
    };
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      // let self = this
      setTimeout(() => {
        this.isFocus = false;
      }, 500);
    },
    input(){
      let val = this.searchWord
      // 进行过滤
      api.searchList().then(res => {
        this.searchList = res.data.data.list.filter((item,index) =>{
          return item.indexOf(val) > -1
        })
      })
    }
  }
};
</script>

<style >
</style>