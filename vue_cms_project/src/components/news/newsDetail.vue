<template>
  <div class="tmpl">
    <nav-bar title="新闻详情"></nav-bar>
    <div class="news-title">
      <p v-text="news.title"></p>
      <div>
        <span>{{ news.click }}次点击</span>
        <span>分类：民生经济</span>
        <span>添加时间：{{ news.add_time | convertDate }}</span>
      </div>
      <div class="news-content" v-html="news.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: {}
    }
  },
  created () {
    let id = this.$route.query.id;
    console.log('newsDetail id');
    console.log(id);
    this.$axios.get('getnews', {params: {id: id}})
      .then(res => {
        this.news = res.data.message[0];
      }).catch(err => {

      })
  }
}
</script>

<style scoped>
.news-title p {
  color: #0a87f8;
  font-size: 20px;
  font-weight: bold;
}
.news-title span {
  margin-right: 30px;
}
.news-title {
  margin-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2)
}
.news-content {
  padding: 10 5;
}
</style>
