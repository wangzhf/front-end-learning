<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav" @click="goBack"></a>
      <h1 class="mui-title">{{ title }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['title'],
  methods : {
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.mui-bar{
  position: relative;
}
</style>
