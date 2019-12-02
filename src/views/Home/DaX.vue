<template>
  <div class="dax-box">
    <h1>购物车</h1>
    <div class="box-header">
       <ul v-for="(item,index) in getCartList" :key="index" class="Dax-ul">
        <li>
          <img :src="item.img" alt=""><br/>
          {{item.title}}<br/>
          {{item.conent}}<br/>
          <span @click="remcount(index)">-</span>
          <span>{{item.count}}</span>
          <span @click="addItem(index)">+</span>
        </li> 
      </ul>
      <p>总数量:{{getnum}}-----总价格：{{getnums}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    //获取购物车的数据
    getCartList(){
      console.log(this.$store.state.CartList,'//价格');
       return  this.$store.state.CartList
    },
    getnum(){
      return this.$store.state.num
    },
    getnums(){
      return this.$store.state.nums
    }
  },
  methods: {
     //--
    remcount(index){
        this.$store.commit('remItem',index);
    },
    //++
    addItem(index){
       this.$store.commit('AddItem',index)
    }
  },
}
</script>
<style lang="scss">
.box-header{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
  .Dax-ul{
    width: 48%;
    margin-left:5px;
    height: 210px;
    border: 1px solid #ccc;
    span{
      width: 20px;
      height: 20px;
      border: 1px solid #ccc;
      display: inline-block;
    }
  }
</style>