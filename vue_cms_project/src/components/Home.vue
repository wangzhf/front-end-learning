<template>
  <div class="container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img, index) in imgs" :key="index">
        <a :href="img.url"><img :src="img.img" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 9宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{'name': 'news.list'}">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{'name': 'photo.share'}">
            <span class="mui-icon mui-icon-email">
              <!-- <span class="mui-badge">5</span> -->
            </span>
            <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{'name': ''}">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品展示</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{'name': ''}">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{'name': ''}">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">搜索资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{'name': ''}">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">练习我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: []
    };
  },
  created() {
    //
    this.$axios.get("getlunbo").then(res => {
      console.log(res);
      this.imgs = res.data.message;
    });
  }
};
</script>

<style scoped>
.container {
  height: 187px;
  width: 100%;
}
.mint-swipe {
  max-height: 187px;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}

.mui-table-view.mui-grid-view.mui-grid-9{
  background-color: white;
}
.mui-grid-view.mui-grid-9{
  border: 0;
}
.mui-table-view.mui-grid-view.mui-grid-9 li{
  border: 0;
}
.mui-content>.mui-table-view:first-child{
  margin-top: 0px;
}

/** 清除mui默认字体图标*/
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
  content: '';
}

/** 九宫格背景图片 */
.mui-icon-home{
  background-image: url('../assets/news.png');
  background-repeat: round;
}
.mui-icon-email{
  background-image: url('../assets/picShare.png');
  background-repeat: round;
}
.mui-icon-chatbubble{
  background-image: url('../assets/goodShow.png');
  background-repeat: round;
}
.mui-icon-location{
  background-image: url('../assets/feedback.png');
  background-repeat: round;
}
.mui-icon-search{
  background-image: url('../assets/search.png');
  background-repeat: round;
}
.mui-icon-phone{
  background-image: url('../assets/callme.png');
  background-repeat: round;
}
.mui-icon{
  width: 50px;
  height: 50px;
}
</style>
