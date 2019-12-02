<template>
  <div>
      <ul v-for="(item,index) in list" :key='index' @click="btnItem(item)">
        <li>
          <img :src="item.img" alt="">
          {{item.title}}
          {{item.conent}}
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getlist()
  },
  methods: {
    //数据
    getlist() {
      this.$axios.get('/data').then(res => {
        this.list = res.data.Data;
        console.log(this.list);
      });
    },
    //跳详情
    btnItem(item){
     this.$router.push({
       path:'/about',
       query:{item:item}
     })
    },
  }
};
</script>