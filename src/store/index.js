import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    CartList:[],//购物车数据
    num:0,
    nums:0,
  },
  mutations: {
    AddCart(state,item){
      state.CartList.push(item)
      console.log(state.CartList,'购物车数据');
    },
    //++
    AddItem(state,index){
       console.log(state.CartList[index]);  
       state.CartList[index].count++;
       state.num++ //总数量
       state.nums= state.num*state.CartList[index].mone;//总价格
    },
    //--
    remItem(state,index){
      if (state.CartList[index].count>0){
         state.CartList[index].count--
         state.num--//总数量
         state.nums= state.nums-state.CartList[index].mone;//总价格
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
