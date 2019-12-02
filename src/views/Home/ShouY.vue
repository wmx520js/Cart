<template>
  <div class="shouy">
    <div class="header-box">
      <router-link to="/shouy/gunz">关注</router-link>
      <router-link to="/shouy/tuij">推荐</router-link>
      <router-link to="/shouy/reb">热榜</router-link>
    </div>
    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
.shouy {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header-box {
    width: 100%;
    height: 50px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
   display: flex;
    justify-content: space-around;
    line-height: 50px;
      a {
      display: inline-block;
      width: 150px;
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
        background: #ccc;
        
      }
    }
  }
  .main-box {
    flex: 1;
    overflow: auto;
  }
}
</style>