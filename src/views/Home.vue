<template>
  <div class="home">
    <div class="header">
      <input type="text" placeholder="高考志愿报考" />
      <button>提问</button>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link to="/shouy">首页</router-link>
      <router-link to="/xiangf">想法</router-link>
      <router-link to="/dax">购物车</router-link>
      <router-link to="/xiaox">消息</router-link>
      <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 50px;
    background: #eee;
  }
  .main {
    flex: 1;
    overflow: auto;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    height: 50px;
    background: #eee;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
