<template>
<!-- province中省份/城市的选择 组件 -->
  <div :class="['choose-wrap',disabled?'disabled':'']" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(itemList,index) in renderList" :key="index">
            <span :class="{'mt-item':true,'active':item.name == value}" v-for="(item,index) in itemList" :key="index" @click="change(item)">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list","title","value","showActive","disabled","className"],
  data(){
      return{
          
      }
  },
  computed:{
    renderList(){
      let col = Math.ceil(this.list.length / 12)
      let resultList = []
      for(let i = 0; i < col ; i ++){
        let data = this.list.slice(i*12,i*12 + 12)
        resultList.push(data)
      }
      return resultList
    }
  },
  methods:{
      showWrapper(e){
          e.stopPropagation()
          if(!this.disabled){
            this.$emit('change_active',true)
          }
          
      },
      documentClick(){
          this.$emit('change_active',false)
      },
      change(item){
        this.$emit('change',item)
        // this.$emit('change_active',false)
      }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>