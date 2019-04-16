<template>
<!--有格调/猜你喜欢 信息列表 -->
  <div class="m-istyle">
    <dl @mouseover="over" :class="navList.class">
      <dt>{{navList.title}}</dt>
      <dd
        v-for="(item,index) in navList.List"
        :key="index"
        :class="{active :kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in list[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="nover">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <!-- 价格：门市价/人均价/抢光了 -->
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>

            
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  props: ["navList"],
  data() {
    return {
      kind: "all",
      list: {}
    };
  },
  created() {
    api.getByKeywords().then((res) => {
      this.list = res.data.data;
    })
  },
  methods: {
    over(e) {
      //找到事件源对象dd，动态的改变class
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      } else {
        this.kind = dom.getAttribute("data-type");

        //ajax获取数据
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>