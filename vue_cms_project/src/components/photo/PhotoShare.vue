<template>
  <div class="tmpl">
    <nav-bar title="图文分享"></nav-bar>
    <div class="photo-header">
      <ul>
        <li v-for="(cate, index) in imgcategorys" :key="index">
          <a href="javascript:;" @click="loadImg(cate.id)">{{ cate.title }}</a>
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for="(img, index) in imgs" :key="index">
          <a>
            <img :src="img.img_url">
            <p>
              <span v-text="img.title"></span>
              <span v-text="img.zhaiyao"></span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgcategorys: [],
      imgs: []
    }
  },
  created () {
    this.$axios.get('getimgcategory')
      .then(res => {
        this.imgcategorys = res.data.message;
        this.imgcategorys.unshift({
          id: 0, title: '全部'
        })
      }).catch(err => {

      });
    // 将0作为参数，获取全部数据
    this.loadImg(0);
  },
  methods: {
    loadImg (id) {
      console.log(id);
      this.$axios.get('getimages/' + 0)
      .then(res => {
        this.imgs = res.data.message;
      }).catch(err => {

      })
    }
  }
}
</script>

<style scoped>
.photo-header li {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
}
.photo-header ul {
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0px;
  margin: 5;
}
</style>
