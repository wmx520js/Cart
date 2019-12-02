<template>
  <div class="about">
    <h1>详情页</h1>
    <button @click="btn">返回</button>
   <ul v-for="(item,index) in list" :key="index" class="about-ul">
  <li>
    <img :src="item.img" alt=""><br/>
    {{item.title}}<br/>
    {{item.conent}}<br/>
    <button @click="addCart(item)">加入购物车</button>
  </li>
   </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
     list:[]
    };
  },
  created() {
  this.list.push(this.$route.query.item);
  },
  methods: {
    //返回上一页
    btn(){
       this.$router.go(-1)
    },
    //加入购物车
    addCart(item){
      this.$store.commit('AddCart',item)
      // alert('成功加入购入车')
    }
  },
};
</script>
<style lang="scss">
   .about-ul{
     width: 100%;
    border:1px solid #ccc;
    height: 200px;
   }
</style>
