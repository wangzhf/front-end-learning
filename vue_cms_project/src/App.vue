<template>
  <div>
    <mt-header title="Vue"></mt-header>
    <router-view></router-view>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home" class="icon iconfont icon-shouye">
        首页
      </mt-tab-item>
      <mt-tab-item id="order" class="icon iconfont icon-gouwuche-01">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search" class="icon iconfont icon-sousuo">
        发现
      </mt-tab-item>
      <mt-tab-item id="me" class="icon iconfont icon-huiyuan">
        会员
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home"
    };
  },
  watch: {
    selected() {
      switch (this.selected) {
        case "order":
          this.$router.push({ name: "order" });
          break;
        case "search":
          this.$router.push({ name: "search" });
          break;
        case "me":
          this.$router.push({ name: "me" });
          break;
        default:
          this.$router.push({ name: "home" });
          break;
      }
    }
  },
  created() {
    // this.$axios
    //   .get("http://localhost:3000/api/a", "", {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //       "Access-Control-Allow-Origin": "*"
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>

<style scoped>
a {
  color: black;
}
</style>
