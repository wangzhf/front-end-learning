import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Waimai from '@/components/waimai'
import Order from '@/components/order'
import Search from '@/components/search'
import Me from '@/components/me'
import NewsList from '@/components/news/newsList.vue'
import NewsDetail from '@/components/news/newsDetail.vue'
import PhotoShare from '@/components/photo/PhotoShare.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    }, {
      name: 'home',
      path: '/home',
      component: Home
    }, {
      name: 'waimai',
      path: '/waimai',
      component: Waimai
    }, {
      name: 'order',
      path: '/order',
      component: Order
    }, {
      name: 'search',
      path: '/search',
      component: Search
    }, {
      name: 'me',
      path: '/me',
      component: Me
    }, {
      name: 'news.list',
      path: '/news/list',
      component: NewsList
    }, {
      name: 'news.detail',
      path: '/news/detail',
      component: NewsDetail
    }, {
      name: 'photo.share',
      path: '/photo/share',
      component: PhotoShare
    }
  ]
})
