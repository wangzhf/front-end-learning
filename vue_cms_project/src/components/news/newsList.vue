<template>
  <div class="tmpl">
    <nav-bar title="新闻列表"></nav-bar>
    <ul class="mui-table-view">
      <li v-for="(news, index) in newsList" :key="index" class="mui-table-view-cell mui-media">
        <router-link :to="{name: 'news.detail', query: {id: news.id}}">
          <img class="mui-media-object mui-pull-left" :src="news.img_url" alt="">
          <div class="mui-media-body">
            <span>{{ news.title }}</span>
            <div class="news-desc">
              <p>点击数： {{news.click}}</p>
              <p>发表时间：{{ news.add_time | convertDate }}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.$axios.get('getnewslist')
      .then(res => {
        console.log(res);
        this.newsList = res.data.message;
      }).catch(err => {
        console.error(err);
      })
  }
}
</script>

<style scoped>
.mui-bar.mui-bar-nav{
  position: relative;
}

</style>
