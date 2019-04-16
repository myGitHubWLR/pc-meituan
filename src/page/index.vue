<template>
  <!-- 默认首页中间部分 -->
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu/>
      </el-col>
      <el-col :span="19">
        <my-lift/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <!-- 导航部分由父组件动态传入子组件 -->
        <my-container :navList="iStyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-container :navList="recomment"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 左侧列表
import MyMenu from "@/components/Index/Menu";

// 右侧图片与登录/注册部分
import MyLift from "@/components/Index/Lift";

//吃喝玩乐的商家列表
import MyContainer from "@/components/Index/Container";

export default {
  components: {
    MyMenu,
    MyLift,
    MyContainer
  },
  data() {
    return {
      iStyle: {
        class:'istyle',
        title: "有格调",
        List: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      recomment: {
        class:"youhui",
        title: "猜你喜欢",
        List: [
          {
            text: "为你甄选最适合的",
            tab: "all"
          },
          // {
          //   text: "即将上映",
          //   tab: "soonShow"
          // },
          
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>